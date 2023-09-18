import styled from "styled-components";
const InputLabel = styled.label`
  font-size: 18px;
  line-height: 35px;
`;
const SignUpInput = styled.input`
  padding-block: 0px;
  padding-inline: 0px;
  border: 1px solid #d5d6d8;
  background-color: #fff;
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: black;
  ::placeholder {
    color: var(--text-gray);
  }
`;

export { SignUpInput, InputLabel };
