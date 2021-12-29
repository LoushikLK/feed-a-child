import React from "react";

import { ArrowRight } from "@mui/icons-material";

const ReadMoreCard = (props) => {
  return (
    <div>
      <div className="read-more-img">
        <div className="read-more-stat">
          <p>20000000 meal donated</p>
        </div>
        <img src={props.image} alt="" />
      </div>
      <div className="read-more-title">
        <h2>India needs oxygens</h2>
      </div>

      <div className="read-more-link">
        <a href="">
          Read more <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default ReadMoreCard;
