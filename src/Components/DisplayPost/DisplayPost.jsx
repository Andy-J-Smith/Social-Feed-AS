import React from "react";
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
              <LikeButton/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPost;
