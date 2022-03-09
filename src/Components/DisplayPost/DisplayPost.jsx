import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./DisplayPost.css";

const DisplayPost = (props) => {
  return (
    <div className="container">
      <div>
        {props.parentPosts.map((post, index) => {
          return (
            <div key={index}>
              <div className="name">{post.name}</div>
              <div className="post">{post.post}</div>
              <LikeButton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPost;
