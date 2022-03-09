import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

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
    <form onSubmit={handlePost} className="container-fluid">
      <label>Name</label>
      <input
        type="text"
        className="post-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div></div>
      <label>Post</label>
      <input
        type="text"
        className="post-post"
        value={post}
        onChange={(event) => setPost(event.target.value)}
      />
      <div></div>
      <PrimaryButton
        backgroundColor={"darkblue"}
        buttonText={"POST"}
        color={"white"}
        borderRadius={'1em'}
        position={'relative'}
        padding={'10px'}
      />
    </form>
  );
};

export default AddPost;
