// src/context/UserContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState();
  // const [student, setStudent] = useState(null);
  // const [admin, setAdmin] = useState(null)
  useEffect(() => {
    const fetchcurrentuser = async () => {
      try {
        const res = await fetch(
          "https://unit1backend.onrender.com/unit1/api/v1/student/Userdetails",
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        // if(data?.user.Role=="Student"){
        //     setStudent(data.user)
        // }
        // else if(data?.user.Role=="Admin"){
        //     setAdmin(data.user)
        // }
        console.log(data.user.Role);
        setCurrentuser(data.user);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchcurrentuser();
  }, []);

  return (
    <UserContext.Provider value={{ currentuser, setCurrentuser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy usage
export const useUser = () => useContext(UserContext);
