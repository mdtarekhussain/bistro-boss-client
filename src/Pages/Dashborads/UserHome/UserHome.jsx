import React from "react";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl text-[#151515] font-semibold ">
        Hi, Welcome{" "}
        <span>{user?.displayName ? user?.displayName : "BAck"}</span>
      </h1>
    </div>
  );
};

export default UserHome;
