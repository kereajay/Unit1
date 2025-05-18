import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import FeedbackForm from "./Pages/FeedbackForm";
import AllFeedbacks from "./Pages/AllFeedbacks";
import Detailedfeedback from "./Pages/Detailedfeedback";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/UserContext";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
const Routera = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/feedbackForm",
        element: <FeedbackForm />,
      },
      {
        path: "/allFeedbacks",
        element: <AllFeedbacks />,
      },
      {
        path: "/Detailedfeedback/:id",
        element: <Detailedfeedback />,
      },
      {
        path:"/Signup",
        element:<Signup/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
    ],
  },
]);

function App() {
  useEffect(()=>{

  },[])
  return (
    <>
      <RouterProvider router={Routera} />
      <ToastContainer
      autoClose={1500}
      />
    </>
  );
}

export default App;
