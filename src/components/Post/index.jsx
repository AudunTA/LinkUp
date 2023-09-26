import React from "react";
import "./post.css";
import defaultAvatar from "../../assets/img/defaultAvatar.jpg";
import { TextTag, TextMedium } from "../../styles/text.styled";
function Post({ post }) {
  console.log(post.author.avatar);
  return (
    <div className="post-container">
      <div className="margin-wrapper">
        <div className="post-top-section">
          <div className="post-author">
            <img
              src={post.author.avatar || defaultAvatar}
              className="author-avatar"
            />
            <div className="author-info">
              <TextMedium>{post.author.name}</TextMedium>
              <TextTag>Student</TextTag>
            </div>
          </div>
          <div className="timeStamp">
            <TextTag>{post.created.slice(0, 10)}</TextTag>
          </div>
        </div>
        <div className="post-body-section">
          <TextMedium>{post.body}</TextMedium>
          {post.media ? <img className="post-media" src={post.media} /> : "no"}
        </div>
      </div>
    </div>
  );
}

export default Post;
