import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      test
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
