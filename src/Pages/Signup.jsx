import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Gender: "",
    Role: "",
  });

  const handleonchnage = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (formdata.Password.length < 6 || formdata.Password.length > 15) {
      return toast.error("Password must be between 6 and 15 characters.");
    }
    try {
      const res = await fetch(
        "http://localhost:4500/unit1/api/v1/student/signup",
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
        navigate("/Login");
        toast.success(
          `signup successfully`
        );
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 pt-20">
      <form
        onSubmit={handlesubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Sign Up
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="FirstName"
            value={formdata.FirstName}
            onChange={handleonchnage}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="LastName"
            value={formdata.LastName}
            onChange={handleonchnage}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="Email"
            value={formdata.Email}
            onChange={handleonchnage}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="Password"
            minLength={6}
            maxLength={15}
            value={formdata.Password}
            onChange={handleonchnage}
            className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            name="Gender"
            value={formdata.Gender}
            onChange={handleonchnage}
            className="mt-1 block w-full px-4 py-2 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            name="Role"
            value={formdata.Role}
            onChange={handleonchnage}
            className="mt-1 block w-full px-4 py-2 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl mt-4 hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
        <small className="flex justify-center">Not have an account  <span className="text-blue-400 text-sm ml-1"><Link to="/login"> Login</Link></span></small>
      </form>
      
    </div>
  );
}

export default Signup;
