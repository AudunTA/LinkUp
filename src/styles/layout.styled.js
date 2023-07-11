import { styled } from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  margin-left: 25px;
  margin-right: 25px;
`;

const MarginContainer = styled.div`
  margin: 15px;
`;
export { ContentContainer, MarginContainer };
