import styled from "styled-components";

const SignUpInput = styled.input`
  border: 1px solid #333333;
  background-color: #292929;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  ::placeholder {
    color: var(--text-gray);
  }
`;

export { SignUpInput };
