import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import AddPost from "./Components/AddPost/AddPost";


function App() {
  const [posts, setPosts] = useState([
    { name: "Joe Dirt", post: "Life'/s a garden. Dig it!" },
    { name: "Doc Holiday", post: "Say When!" },
  ]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <h1 style={{ margin: "1em" }}>
        Social <small className="text-muted">Feed</small>
      </h1>
      <div className="row">
        <AddPost addNewPost={addNewPost} />
      </div>
      <div>
        <DisplayPost parentPosts={posts} />
      </div>
    </div>
  );
}

export default App;
