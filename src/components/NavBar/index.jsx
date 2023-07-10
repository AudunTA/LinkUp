import React from "react";
import { Link } from "react-router-dom";
import { ButtonCreate, NavContainer, NavText } from "./NavBar.styled";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { GoHome, GoPerson, GoBell, GoBookmark, GoPencil } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 15px;
`;
function NavBar() {
  return (
    <NavContainer>
      <p>LinkUp</p>
      <StyledNavLink to="/" activeclassname="active" className="navGroup">
        <GoHome className="nav-icon" />
        <NavText>Home</NavText>
      </StyledNavLink>
      <StyledNavLink
        to="/Explore"
        activeclassname="active"
        className="navGroup"
      >
        <MdOutlineExplore className="nav-icon" />
        <NavText>Explore</NavText>
      </StyledNavLink>
      <StyledNavLink
        to="/Bookmark"
        activeclassname="active"
        className="navGroup"
      >
        <GoPencil className="nav-icon" />
        <NavText>Messages</NavText>
      </StyledNavLink>
      <StyledNavLink
        to="/Bookmark"
        activeclassname="active"
        className="navGroup"
      >
        <GoBookmark className="nav-icon" />
        <NavText>Bookmarks</NavText>
      </StyledNavLink>
      <StyledNavLink
        to="/Notification"
        activeclassname="active"
        className="navGroup"
      >
        <GoBell className="nav-icon" />
        <NavText>Notification</NavText>
      </StyledNavLink>
      <StyledNavLink
        to="/Profile"
        activeclassname="active"
        className="navGroup"
      >
        <GoPerson className="nav-icon" />
        <NavText>Profile</NavText>
      </StyledNavLink>
      <ButtonCreate>Create Post</ButtonCreate>
    </NavContainer>
  );
}

export default NavBar;
