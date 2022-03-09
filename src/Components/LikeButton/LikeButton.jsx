import React, { useState } from "react";
import "./LikeButton.css";
import LikeBtn from "../../images/thumbs-up-regular.svg";
import DisLikeBtnImg from "../../images/thumbs-down-regular.svg";

const LikeButton = (props) => {
  const [Likes, setButtonClassLike] = useState("inactive");
  const [dislike, setButtonClassDislike] = useState("inactive");

  function handleClickLike(event) {
    event.preventDefault();
    if (Likes === "inactive") {
      setButtonClassLike("active-like");
      setButtonClassDislike("inactive");
    } else {
      setButtonClassLike("inactive");
    }
  }
  function handleClickDislike(event) {
    event.preventDefault();
    if (dislike === "inactive") {
      setButtonClassDislike("active-dislike");
      setButtonClassLike("inactive");
    } else setButtonClassDislike("inactive");
  }

  return (
    <div>
      <img src={LikeBtn} alt="" className={Likes} onClick={handleClickLike} />
      <img
        src={DisLikeBtnImg}
        alt=""
        className={dislike}
        onClick={handleClickDislike}
      />
    </div>
  );
};

export default LikeButton;
