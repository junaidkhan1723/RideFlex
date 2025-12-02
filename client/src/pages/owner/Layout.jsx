import React from "react";
import NavbarOwer from "../../components/owner/NavbarOwer";
import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col ">
      <NavbarOwer />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
