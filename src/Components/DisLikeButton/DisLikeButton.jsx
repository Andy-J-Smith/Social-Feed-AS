import React, { useState } from "react";
import "./DisLikeButton.css";
import DisLikeBtnImg from "../../images/thumbs-down-regular.svg";

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
        src={DisLikeBtnImg}
        className={DisLikes}
        onClick={handleClick}
      />
    </div>
  );
};

export default DisLikeButton;
