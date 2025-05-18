import { Link, useLocation } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const { currentuser,setCurrentuser } = useUser();
  const location = useLocation();
  // console.log(student,admin)

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-500";

  const handlelogout = async () => {
    try {
      const res = await fetch("https://unit1backend.onrender.com/unit1/api/v1/student/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json();
      if (data.success) {
        setCurrentuser("")
        toast.success(data.message)
      }

    }
    catch (err) {
      console.log(err.message)
      toast.error(err.message)
    }

  }

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full">
      <h1 className="text-xl font-bold text-blue-700">
        Student Feedback System
      </h1>
      <nav className="text-xl flex flex-row gap-8">
        {(currentuser?.Role == "Admin" || currentuser?.Role == "Student") && (
          <div className="flex flex-row gap-10">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/FeedbackForm" className={linkClass("/FeedbackForm")}>
              Submit Feedback
            </Link>
          </div>
        )}

        {currentuser?.Role == "Admin" && (
          <Link to="/AllFeedbacks" className={linkClass("/AllFeedbacks")}>
            View Feedbacks
          </Link>
        )}
        {
          currentuser ? <button onClick={handlelogout}>Logout</button> :
            <Link to="/Login" className={linkClass("/Login")}>Login</Link>
        }

      </nav>
    </header>
  );
};

export default Header;
