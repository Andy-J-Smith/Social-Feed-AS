import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import "./DisplayPost.css";

const DisplayPost = (props) => {
  return (
    <table className="container-fluid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody className="container-fluid">
        {props.parentPosts.map((post, index) => {
          return (
            <tr key={index}>
              <td>{post.name}</td>
              <td>{post.post}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPost;
