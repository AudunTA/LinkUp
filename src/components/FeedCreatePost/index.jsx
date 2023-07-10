import React from "react";
import { TopSectionFeed, FlexFeedSection } from "./FeedCreatePost.styled";
import { MarginContainer } from "../../styles/layout.styled";
import { TextCreatePost } from "../../styles/text.styled";
import { FcAddImage, FcBarChart, FcOvertime } from "react-icons/fc";

function FeedCreatePost() {
  return (
    <TopSectionFeed>
      <MarginContainer>
        <FlexFeedSection>
          <p>Avatar</p>
          <div className="group">
            <TextCreatePost>What's happening!?</TextCreatePost>
            <div className="icons-create-post">
              <FcAddImage className="icon-create" />
              <FcBarChart className="icon-create" />
              <FcOvertime className="icon-create" />
            </div>
          </div>
        </FlexFeedSection>
      </MarginContainer>
    </TopSectionFeed>
  );
}

export default FeedCreatePost;
