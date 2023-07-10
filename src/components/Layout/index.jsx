import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import RightBar from "../RightBar";
import "./layout.css";
function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <RightBar />
    </div>
  );
}
export default Layout;
