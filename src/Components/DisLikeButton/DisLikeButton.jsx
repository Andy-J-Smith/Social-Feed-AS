import React, { useState } from "react";
import "./DisLikeButton.css";

const DisLikeButton = (props) => {
  const [DisLikes, setButtonClassDisLike] = useState("inactive");

  function handleClick() {
    if (DisLikes === "inactive") {
      setButtonClassDisLike("active-dislike");
    } else {
      setButtonClassDisLike("inactive");
    }
  }
  return (
    <div>
      <img
        src="../thumbs-down-regular.svg"
        className={DisLikes}
        onClick={handleClick}
      />
    </div>
  );
};

export default DisLikeButton;
