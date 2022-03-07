import React, { useState } from "react";

const AddPost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handlePost(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post,
    };
    console.log(newPost);
    props.addNewPost(newPost);
  }

  return (
    <form onSubmit={handlePost} className="form-grid">
      <div className="post-group">
        <label>Name</label>
        <input
          type="text"
          className="post-group"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="post-group">
        <label>Post</label>
        <input
          type="text"
          className="post-control"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ "margin-top": "1em" }}
      >
        Post
      </button>
    </form>
  );
};

export default AddPost;
