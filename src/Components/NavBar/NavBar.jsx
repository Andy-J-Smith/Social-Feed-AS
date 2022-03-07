import React, { useState } from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div>
        <h1 style={{margin: "1em"}}>
          Social <small className="text-muted">Feed</small>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
