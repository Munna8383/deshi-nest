import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LandingPage from "../Pages/LandingPage/LandingPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/landingPage",
      element:<PrivateRoute><LandingPage></LandingPage></PrivateRoute>
    }
  ]);