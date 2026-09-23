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
import AdminRoutes from "./AdminRoutes";
import AddItemsDashCard from "../Pages/Dashborads/DashCard/AddItemsDashCard/AddItemsDashCard";
import ManageItem from "../Pages/Dashborads/ManageItem/ManageItem";
import UpdateData from "../Pages/Dashborads/UpdateData/UpdateData";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Dashborads/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashborads/UserHome/UserHome";
import AdminHome from "../Pages/Dashborads/AdminHome/AdminHome";
import CartPage from "../Pages/card/CartPage";


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
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "/cart", // ✅ কার্ট রাউট
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
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
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin Route
      {
        path: "adminHome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoutes>
            <AddItemsDashCard></AddItemsDashCard>
          </AdminRoutes>
        ),
      },
      {
        path: "AllUser",
        element: (
          <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoutes>
            <ManageItem></ManageItem>
          </AdminRoutes>
        ),
      },
      {
        path: "update/:id",
        element: (
          <AdminRoutes>
            <UpdateData></UpdateData>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-server-k4uu.vercel.app//menu/${params.id}`
          ),
      },
    ],
  },
]);

export default router;