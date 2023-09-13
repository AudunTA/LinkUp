import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../LeftBar";
import RightBar from "../RightBar";
import "./layout.css";
function Layout() {
  return (
    <div className="layout">
      <LeftBar />
      <Outlet />
      <RightBar />
    </div>
  );
}
export default Layout;
