import { styled } from "styled-components";

const TopSectionFeed = styled.div`
  display: flex;
  border-top: 1px solid var(--border-color);
`;
const FlexFeedSection = styled.div`
  display: flex;
  .icons-create-post {
    margin-top: 25px;
  }
  .icon-create {
    font-size: 24px;
    margin-right: 5px;
  }
`;

export { TopSectionFeed, FlexFeedSection };
