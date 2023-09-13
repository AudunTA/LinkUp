import React from "react";
import "./leftbar.css";
import SearchBar from "../SearchBar";
import { MarginContainer } from "../../styles/layout.styled";
function LeftBar() {
  return (
    <div className="leftbar">
      <MarginContainer>
        <SearchBar />
      </MarginContainer>
    </div>
  );
}

export default LeftBar;
