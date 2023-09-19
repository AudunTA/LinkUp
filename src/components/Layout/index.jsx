import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../LeftBar";
import RightBar from "../RightBar";
import Feed from "../../pages/Feed";
import { useSelector } from "react-redux";
import "./layout.css";
function Layout() {
  const state = useSelector((state) => state.feed.posts);

  const logPosts = () => {
    console.log(state);
  };
  return (
    <>
      {" "}
      <button onClick={logPosts}> log store</button>
      <div className="layout">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
export default Layout;
