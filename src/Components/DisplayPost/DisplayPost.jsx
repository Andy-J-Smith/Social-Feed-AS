import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";

const DisplayPost = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
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
