import React from "react";
import { ArrowRight } from "@mui/icons-material";

const BasicCards = (props) => {
  return (
    <div className="basic-card-outer">
      <div className="basic-card-heading">
        <h1 className="basic-card-heading-h1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
          cum. Nihil sapiente expedita, tenetur illum accusantium nobis.
          Voluptas fuga magni voluptatibus reprehenderit?
        </h1>
      </div>

      <div className="basic-card-details">
        <div className="basic-card-details-desc">
          <p className="basic-card-details-desc-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            beatae non explicabo nisi corporis aperiam, incidunt sunt, enim sit
            porro quae saepe iste fugit, ullam voluptatum. Reiciendis commodi
            accusamus beatae! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt, earum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Consequatur, animi Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Corporis, explicabo!
          </p>
        </div>
        <div data-aos="zoom-in" className="basic-card-details-img">
          <img src={props.image} alt="" loading="lazy" />
        </div>
      </div>
      <div className="card-link">
        <a href="/">
          More about us <ArrowRight />{" "}
        </a>
      </div>
    </div>
  );
};

export default BasicCards;
