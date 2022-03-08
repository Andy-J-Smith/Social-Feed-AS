import React, { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./DisplayPost.css";

const DisplayPost = (props) => {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        {props.parentPosts.map((post, index) => {
          return (
            <tr key={index}>
              <td>{post.name}</td>
              <div></div>
              <td>{post.post}</td>
              <LikeButton/>
            </tr>
          
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPost;
