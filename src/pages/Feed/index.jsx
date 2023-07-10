import React from "react";
import { ContentContainer, MarginContainer } from "../../styles/layout.styled";
import { BoldText } from "../../styles/text.styled";
import { IoIosOptions } from "react-icons/io";
import { FlexContainer } from "./Feed.styled";
import FeedCreatePost from "../../components/FeedCreatePost";

function Feed() {
  return (
    <ContentContainer>
      <MarginContainer>
        <FlexContainer>
          <BoldText>Feed</BoldText>
          <IoIosOptions className="sort-icon" />
        </FlexContainer>
      </MarginContainer>
      <FeedCreatePost />
    </ContentContainer>
  );
}

export default Feed;
