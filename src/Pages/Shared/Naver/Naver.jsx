import { Link, NavLink } from "react-router-dom";

import img2 from "../../../assets/others/profile.png";
import { useContext } from "react";
import AuthContext from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import PrivateRoute from "../../../Routes/PrivateRoute";
import useAdmin from "../../../Hooks/useAdmin";

const Naver = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  const navbar = (
    <>
      <li className="text-[20px]  font-[600]">
        <NavLink to="/"> HOME</NavLink>
      </li>
      <li className="text-[20px] font-[600]">
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      {user && isAdmin && (
        <li className="text-[20px] font-[600]">
          <NavLink to="/dashboard/adminHome"> DASHBOARD</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li className="text-[20px] font-[600]">
          <NavLink to="/dashboard/userHome"> DASHBOARD</NavLink>
        </li>
      )}
      <li className="text-[20px] font-[600]">
        <NavLink to="/outMenu"> OUR MENU</NavLink>
      </li>
      <li className="text-[20px] font-[600]">
        <NavLink to="/outShop/salad"> OUR SHOP</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-[#00000030] text-white  fixed z-10 bg-opacity-30 shadow-sm lg:px-6 lg:px-r-2">
        {/* className="navbar bg-[#00000014]   fixed z-10 bg-opacity-30 shadow-sm lg:px-6 lg:px-r-2" */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-[32px]  text-[#A56ABD] lg:font-[600]">
            BISTRO BOSS
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end flex justify-center items-center">
          <div>
            {" "}
            <Link to="/dashboard">
              <button className="btn flex mr-2">
                <FaShoppingCart />
                <div className="badge badge-sm badge-secondary">
                  +{cart.length}
                </div>
              </button>
            </Link>
          </div>
          <div>
            {" "}
            {user ? (
              <button
                onClick={handleLogOut}
                className=" mr-3 lg:text-[20px] btn font-[600]"
              >
                Sing Out
              </button>
            ) : (
              <Link to="/login">
                {" "}
                <button className="text-black btn mr-3 lg:text-[20px]  font-[600]">
                  Login
                </button>{" "}
              </Link>
            )}
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-12 rounded-full">
              {user ? (
                <img alt="" src={user?.photoURL} />
              ) : (
                <img alt="" src={img2} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Naver;
