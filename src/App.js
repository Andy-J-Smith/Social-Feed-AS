import React, { useState } from "react";
import "./App.css";

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
    <div className='container-fluid'>
      <div className="row">
        </div>
    </div>
  );
}

export default App;
