import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../Context/UserContext";

function FeedbackForm() {
    const { currentuser, setCurrentuser } = useUser();

  const navigate=useNavigate();
  useEffect(()=>{
    if(!currentuser){
      navigate("/login")
    }

  },[navigate,currentuser])
  const [formdata, setFormdata] = useState({
    Studentname: "",
    Course: "",
    Instructor: "",
    Rating: "",
    Comment: "",
  });

  const handleonchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://unit1backend.onrender.com/unit1/api/v1/AddFeedback",
        {
          withCredntials: true,
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success(
          `Student ${data.Feedback.Studentname}'s form submited successfully`
        );
        setFormdata({
          Studentname: "",
          Course: "",
          Instructor: "",
          Rating: "",
          Comment: "",
        });
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="pt-28 pb-10 px-4 min-h-screen bg-blue-50 flex justify-center items-start">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Submit Your Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Name */}
          <div>
            <label htmlFor="Studentname" className="block font-semibold mb-1">
              Student Name
            </label>
            <input
              type="text"
              name="Studentname"
              placeholder="Enter your name"
              onChange={handleonchange}
              value={formdata.Studentname}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Course */}
          <div>
            <label htmlFor="Course" className="block font-semibold mb-1">
              Course
            </label>
            <input
              type="text"
              name="Course"
              placeholder="e.g. React + Node.js"
              onChange={handleonchange}
              value={formdata.Course}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Instructor */}
          <div>
            <label htmlFor="Instructor" className="block font-semibold mb-1">
              Instructor
            </label>
            <input
              type="text"
              name="Instructor"
              onChange={handleonchange}
              value={formdata.Instructor}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="Rating" className="block font-semibold mb-1">
              Rating (1 to 5)
            </label>
            <input
              type="number"
              name="Rating"
              min="1"
              max="5"
              placeholder="Rate the course"
              onChange={handleonchange}
              value={formdata.Rating}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Comment */}
          <div>
            <label htmlFor="Comment" className="block font-semibold mb-1">
              Comments
            </label>
            <textarea
              name="Comment"
              placeholder="Write your feedback here..."
              onChange={handleonchange}
              value={formdata.Comment}
              rows="4"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
