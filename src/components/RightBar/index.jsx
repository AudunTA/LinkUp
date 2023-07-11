import React from "react";
import { TrendsContainer, RightBarContainer } from "./RigthBar.styled";
import { BoldText } from "../../styles/text.styled";
function RightBar() {
  return (
    <RightBarContainer>
      <TrendsContainer>
        <BoldText>Trends for you</BoldText>
      </TrendsContainer>
    </RightBarContainer>
  );
}

export default RightBar;
