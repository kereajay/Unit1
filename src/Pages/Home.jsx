import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { useEffect } from "react";

const Home = () => {
  const { currentuser, setCurrentuser } = useUser();
  const navigate=useNavigate();
  useEffect(()=>{
    if(!currentuser){
      navigate("/login")
    }

  },[navigate,currentuser])

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center px-4 py-10">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/576/707/original/group-of-children-sitting-at-desk-in-school-library-and-studying-together-or-shelves-on-the-background-student-study-group-cartoon-illustration-vector.jpg"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full p-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            Welcome to the Student Feedback System
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Share your learning experience, rate the course, and help us improve
            future sessions. Your voice matters!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {currentuser?.Role == "Student" && (
              <Link
                to="/FeedbackForm"
                className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition"
              >
                Submit Feedback
              </Link>
            )}
            {currentuser?.Role == "Admin" && (
              <Link
                to="/AllFeedbacks"
                className="bg-gray-200 text-gray-800 py-2 px-5 rounded-md hover:bg-gray-300 transition"
              >
                View Feedback
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
