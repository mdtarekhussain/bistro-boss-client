import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Home/Home";
import Footer from "../../Pages/Shared/Footer/Footer";
import Naver from "../../Pages/Shared/Naver/Naver";

const Main = () => {
  const location = useLocation();
  const loginPage = location.pathname.includes("login");
  const sing = location.pathname.includes("singUp");
  const path = loginPage || sing;

  return (
    <div>
      {path || <Naver></Naver>}
      <Outlet></Outlet>
      {path || <Footer></Footer>}
    </div>
  );
};

export default Main;
