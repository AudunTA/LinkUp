import React from "react";
import FeedColumn from "../../components/FeedColumn";
import { BoldText } from "../../styles/text.styled";
import { useEffect, useState } from "react";
import { getFeed } from "../../components/API/feed";
import { useDispatch, useSelector } from "react-redux";
import { userStatus } from "../../components/API/userstatus";
import { useNavigate } from "react-router-dom";
function Feed() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = userStatus();
    if (token === null) {
      navigate("/");
    } else {
      getFeed(dispatch, token);
    }
  }, []);
  return <FeedColumn />;
}

export default Feed;
