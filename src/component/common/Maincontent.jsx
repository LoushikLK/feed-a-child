import React from "react";
import { Button } from "@mui/material";

const Maincontent = (props) => {
  return (
    <div className="main-heading">
      <h1 className="main-heading-h1">{props.heading}</h1>
      <p className="main-heading-p">{props.slogan}</p>
      <Button className="main-container-btn"> DONATE NOW </Button>
    </div>
  );
};

export default Maincontent;
