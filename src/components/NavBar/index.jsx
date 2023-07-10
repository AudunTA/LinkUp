import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, NavText } from "./NavBar.styled";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
function NavBar() {
  return (
    <NavContainer>
      <StyledNavLink to="/" activeclassname="active" className="navGroup">
        <NavText>Home</NavText>
      </StyledNavLink>
      <StyledNavLink
        to="/Profile"
        activeclassname="active"
        className="navGroup"
      >
        <NavText>Profile</NavText>
      </StyledNavLink>
    </NavContainer>
  );
}

export default NavBar;
