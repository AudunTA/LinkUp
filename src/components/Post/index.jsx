import React from "react";
import "./post.css";
function Post({ post }) {
  return <div className="post-container">{post.title}</div>;
}

export default Post;
