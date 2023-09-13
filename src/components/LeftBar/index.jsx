import React from "react";
import "./leftbar.css";
import * as logo from "../../assets/img/logo.svg";
function LeftBar() {
  return (
    <div className="leftbar">
      <img src={logo} />
    </div>
  );
}

export default LeftBar;
