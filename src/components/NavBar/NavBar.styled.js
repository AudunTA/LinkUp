import { styled } from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  .active {
    font-family: SegoeBold;
  }
`;

const NavText = styled.div`
  color: var(--solid-black);

  font-size: 18px;
`;
export { NavContainer, NavText };
