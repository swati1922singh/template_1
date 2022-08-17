import React, { Fragment } from "react";
import "../style/Style.css";

const Left_text = ({ title, heading, description, image1 }) => {
  return (
    <Fragment>
      <div className="service-section">
        <div className="text-section1">
          <div className="title2">{title}</div>
          <h1 className="heading_2">{heading}</h1>
          <p className="description2">{description}</p>
        </div>
        <div className="image-section">
          <img src={image1} className="image"></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Left_text;
