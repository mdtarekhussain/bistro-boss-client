import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaHome,
  FaLock,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaBook,
} from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { RiPaypalFill } from "react-icons/ri";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-amber-600 ">
        <ul className="menu  p-4 flex flex-col gap-4 text-[18px] font-semibold">
          {isAdmin ? (
            <>
              {" "}
              <li className="bg-blue-400 rounded-lg uppercase">
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg uppercase">
                <NavLink to={"/dashboard/addItem"}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg uppercase">
                <NavLink to={"/dashboard/manageItem"}>
                  <FaList />
                  Manage Item
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg uppercase">
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook />
                  Manage Booking
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg uppercase">
                <NavLink to={"/dashboard/AllUser"}>
                  <FaUsers />
                  All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="bg-blue-400 rounded-lg">
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg">
                <NavLink to={"/dashboard/reservation"}>
                  <FaCableCar /> Reservation
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg">
                <NavLink to={"/dashboard/reservation"}>
                  <RiPaypalFill /> PayMent History
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg">
                <NavLink to={"/dashboard/myCart"}>
                  <FaShoppingCart /> MY Cart
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg">
                <NavLink to={"/dashboard/review"}>
                  <FaAd />
                  Add Review
                </NavLink>
              </li>
              <li className="bg-blue-400 rounded-lg">
                <NavLink to={"/dashboard/booking"}>
                  <FaList />
                  Add Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="bg-blue-400 rounded-lg">
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="bg-blue-400 rounded-lg">
            <NavLink to={"/outMenu"}>
              <GiHamburgerMenu /> Menu
            </NavLink>
          </li>
          <li className="bg-blue-400 rounded-lg">
            <NavLink to={"/outShop/salad"}>
              <FaLock /> Shop
            </NavLink>
          </li>
          <li className="bg-blue-400 rounded-lg">
            <NavLink to={"/order/salad"}>
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
