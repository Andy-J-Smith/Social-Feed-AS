import React, {useState} from "react";
import { ReactComponent as Like  } from "./thumbs-up-regular.svg";

const LikeButton = (props) => {
  return (
    <div className="like-btn">
      <Like/>
    </div>
    
  );
};

export default LikeButton;
