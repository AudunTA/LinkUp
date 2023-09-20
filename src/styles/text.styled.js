import { styled } from "styled-components";

const BoldText = styled.h2`
  font-family: SegoeBold;
  font-size: 18px;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
const TextCreatePost = styled.h3`
  color: var(--text-gray);
  font-family: SegoeBoldItalic;
  font-size: 18px;
  font-weight: 100;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const TextTag = styled.p`
  font-family: NL;
  font-size: 13px;
  line-height: 13px;
  margin-block-end: 0em;
  margin-block-start: 0.3em;
  color: var(--secondary-text);
`;

const TextMedium = styled.p`
  font-family: NR;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-block-start: 0.3em;
  margin-block-end: 0em;
`;
export { BoldText, TextCreatePost, TextMedium, TextTag };
