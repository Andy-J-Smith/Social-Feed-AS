import React, { useState } from "react";
import "./LikeButton.css";

const LikeButton = (props) => {
  const [Likes, setButtonClassLike] = useState("inactive");

  function handleClick() {
    if (Likes === "inactive") {
      setButtonClassLike("active-like");
    } else {
      setButtonClassLike("inactive");
    }
  }

  return (
    <div>
      <img
        src="../thumbs-up-regular.svg"
        className={Likes}
        onClick={handleClick}
      />
    </div>
  );
};

export default LikeButton;
