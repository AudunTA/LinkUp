import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./searchbar.css";
function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-input">
        <HiOutlineSearch className="search-icon" />
        <input className="search-field" placeholder="search-field"></input>
      </div>
    </div>
  );
}

export default SearchBar;
