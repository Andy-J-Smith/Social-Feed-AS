import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./DisplayPost.css";
import DateTime from "../DateTime/DateTime";

const DisplayPost = (props) => {
  return (
    <div className="container">
      <div>
        {props.parentPosts.map((post, index) => {     //^calls and renders date passed in from addPost component//
          return (
            <div key={index}>
              <div className="name">{post.name}</div>
              <div className="post">{post.post}</div>            
              <div className="date">{post.date}</div>       
              <LikeButton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPost;
