import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../Context/UserContext";

function Login() {
    const {currentuser,setCurrentuser}=useUser();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    Email: "",
    Password: "",
    Confirmpassword: "",
  });

  const handleonchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { Email, Password, Confirmpassword } = formdata;

    if (Password !== Confirmpassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await fetch("http://localhost:4500/unit1/api/v1/student/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      setCurrentuser(data.user)
      console.log(data);

      if (data.success) {
        toast.success(`${data?.user.Role}Login successful!`);
        navigate("/Home"); 
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 pt-20">
      <form
        onSubmit={handlesubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Login
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="Email"
            value={formdata.Email}
            onChange={handleonchange}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="Password"
            value={formdata.Password}
            onChange={handleonchange}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            minLength={6}
            maxLength={15}
            autoComplete="new-password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="Confirmpassword"
            value={formdata.Confirmpassword}
            onChange={handleonchange}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            minLength={6}
            maxLength={15}
            autoComplete="new-password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl mt-4 hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
        <small className="flex justify-center">Not have an account  <span className="text-blue-400 text-sm ml-1"><Link to="/signup"> Signup</Link></span></small>
      </form>
      
    </div>
  );
}

export default Login;
