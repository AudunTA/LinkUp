import React from "react";
import "./leftbar.css";
import SearchBar from "../SearchBar";
import { MarginContainer } from "../../styles/layout.styled";
import Logo from "../Logo";
function LeftBar() {
  return (
    <div className="leftbar">
      <MarginContainer>
        <Logo />
        <SearchBar />
      </MarginContainer>
    </div>
  );
}

export default LeftBar;
