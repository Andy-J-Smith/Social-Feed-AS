import React, { useState } from "react";
import DisLikeButton from "../DisLikeButton/DisLikeButton";
import LikeButton from "../LikeButton/LikeButton";
import "./DisplayPost.css";

const DisplayPost = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentPosts.map((post, index) => {
          return (
            <div key={index}>
              <div>{post.name}</div>
              <div>{post.post}</div>
              <LikeButton className="like" />
              <DisLikeButton message="DisLike" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPost;
