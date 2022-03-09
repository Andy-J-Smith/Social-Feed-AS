import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const AddPost = (props) => {
  const [name, setName] = useState("");      //^Hooks//
  const [post, setPost] = useState("");     //These catch data set up by onChange logic//
  const [date, setDate] = useState("");

  function handlePost(event) {      //local function//
    event.preventDefault();       //^Prevents page from refreshing//
    let newPost = {               //data staged before function calls//
      name: name,
      post: post,
      date: date,
    };
    console.log(newPost);
    props.addNewPost(newPost);   //function call of props passes newPost 
  }

  return (
    <form onSubmit={handlePost} className="container-fluid">  //? Takes the input data from the form and passes it up to the 
      <label>Name</label>                                     //? handlePost function//
      <input
        type="text"
        className="post-name"
        value={name}        // must use same property that matches the hook//
        onChange={(event) => setName(event.target.value)}   //setName is arrow function that passes user input to hooks executed by onChange call//
      />                                                    
      <div></div>
      <label>Post</label>
      <input
        type="text"
        className="post-post"
        value={post}
        onChange={(event) => setPost(event.target.value)}
      />
      <label>Date</label>
      <input
        type="date"
        className="post-date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <div></div>
      <PrimaryButton
        backgroundColor={"darkblue"}
        buttonText={"POST"}
        color={"white"}
        borderRadius={"1em"}
        position={"relative"}
        padding={"10px"}
      />
    </form>
  );
};

export default AddPost;
