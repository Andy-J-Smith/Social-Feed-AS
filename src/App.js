import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
// import AddPost from "./Components/AddPost/AddPost";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [posts, setPosts] = useState([
    { user: "Joe Dirt", post: "Life'/s a garden. Dig it!" },
    { user: "Doc Holiday", post: "Say When!" },
  ]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
      </div>
      <div className="col-md-12">
        <div className="border-box">
          <addNewPost addNewPost={addNewPost} />
        </div>
        <div className="border-box">
          <DisplayPost parentPosts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
