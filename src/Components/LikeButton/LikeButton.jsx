import React, { useState } from "react";
import "./LikeButton.css";
import LikeBtn from "../../images/thumbs-up-regular.svg";

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
        src={LikeBtn} alt=""
        className={Likes}
        onClick={handleClick}
      />
    </div>
  );
};

export default LikeButton;
