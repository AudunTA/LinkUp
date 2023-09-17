import React from "react";
import FeedColumn from "../../components/FeedColumn";
import { BoldText } from "../../styles/text.styled";
import { useEffect, useState } from "react";
import { getFeed } from "../../components/API/feed";
import { useDispatch, useSelector } from "react-redux";
function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("test");
    getFeed(dispatch);
  }, []);
  return <FeedColumn />;
}

export default Feed;
