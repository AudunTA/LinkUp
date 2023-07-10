import { styled } from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  .active {
    font-family: SegoeBold;
  }
  .nav-icon {
    color: var(--solid-black);
    font-size: 25px;
    margin-right: 10px;
    ::after {
      font-weight: 900;
    }
  }
`;

const NavText = styled.div`
  color: var(--solid-black);

  font-size: 18px;
`;

const ButtonCreate = styled.button`
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: white;
  font-family: SegoeBold;
  font-size: 18px;
  padding: 10px;
  border-radius: 26px;
  margin-top: 15px;
  background-color: var(--primary);
`;

export { NavContainer, NavText, ButtonCreate };
