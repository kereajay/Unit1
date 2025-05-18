import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DetailedFeedback() {
    const { currentuser, setCurrentuser } = useUser();

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    if(!currentuser){
      navigate("/login")
    }

  },[navigate,currentuser])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          `https://unit1backend.onrender.com/unit1/api/v1/GetAFeedback/${id}`,
          {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) console.log("Failed to fetch feedback");
        const result = await res.json();
        setData(result.Feedback);
      } catch (err) {
        console.log(err.message);
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [id]);

//   if (loading) {
//     return <div className="pt-28 text-center text-lg font-semibold">Loading...</div>;
//   }

//   if (error) {
//     return <div className="pt-28 text-center text-red-600 font-semibold">{error}</div>;
//   }

  if (!data) {
    return <div className="pt-28 text-center">No feedback found.</div>;
  }

  return (
    <div className="pt-28 px-4 max-w-2xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Feedback Details</h2>
        <p><span className="font-semibold">Student Name:</span> {data.Studentname}</p>
        <p><span className="font-semibold">Course:</span> {data.Course}</p>
        <p><span className="font-semibold">Instructor:</span> {data.Instructor}</p>
        <p><span className="font-semibold">Rating:</span> {data.Rating}</p>
        <p><span className="font-semibold">Comment:</span> {data.Comment}</p>
      </div>
    </div>
  );
}

export default DetailedFeedback;
