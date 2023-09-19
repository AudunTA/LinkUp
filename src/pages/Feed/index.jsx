import React from "react";
import { BoldText } from "../../styles/text.styled";
import { useEffect, useState } from "react";
import { getFeed } from "../../components/API/feed";
import { useDispatch, useSelector } from "react-redux";
import { userStatus } from "../../components/API/userstatus";
import { useNavigate } from "react-router-dom";
import Post from "../../components/Post";
import "./feed.css";
function Feed() {
  const state = useSelector((state) => state.feed.posts);
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

  return (
    <div className="feed-column">
      {state.map((ele) => {
        return <Post key={ele.created} post={ele} />;
      })}
    </div>
  );
}

export default Feed;
