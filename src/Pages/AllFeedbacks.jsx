import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          "http://localhost:4500/unit1/api/v1/GetAllFeedback",
          {
            credentials: "include",  
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setFeedbacks(data.Feedbacks || []); 
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="pt-28 px-4 min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        All Feedbacks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto" >
        {feedbacks.length > 0 ? (
          feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-blue-100"
              onClick={()=>navigate(`/Detailedfeedback/${item._id}`)}
            >
              <h2 className="text-xl font-semibold text-blue-800">
                {item.Studentname}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Course: <span className="font-medium">{item.Course}</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Instructor:{" "}
                <span className="font-medium">{item.Instructor}</span>
              </p>
              <p className="text-yellow-500 font-semibold mb-2">
                ⭐ Rating: {item.Rating}/5
              </p>
              <p className="text-gray-700 italic">"{item.Comment}"</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No feedbacks available.</p>
        )}
      </div>
    </div>
  );
}

export default AllFeedbacks;
