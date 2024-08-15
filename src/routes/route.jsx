import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LandingPage from "../Pages/LandingPage/LandingPage";

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
      element:<LandingPage></LandingPage>
    }
  ]);