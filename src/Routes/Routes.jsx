import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import Menu from "../Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashborad";
import DashCard from "../Pages/Dashborads/DashCard/DashCard";
import AllUser from "../Pages/Dashborads/AllUser/AllUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/outMenu",
        element: <Menu></Menu>,
      },
      {
        path: "/outShop/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashCard",
        element: <DashCard></DashCard>,
      },
      // admin Route
      {
        path: "AllUser",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
export default router;
