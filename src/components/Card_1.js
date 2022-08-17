import React, { Fragment } from "react";
import "../style/Style.css";
const Card_1 = ({ title, heading, description, link, image }) => {
  return (
    <Fragment>
      <div className="card_1">
        <div className="card_text">
          <div className="card_1_title">{title}</div>
          <h4 className="card_1_heading">{heading}</h4>
          <div className="card_1_description">{description}</div>
          <div className="card_1_link">{link}</div>
        </div>
        <div className="imagecard">
          <div className="pic">
            <img src={image} className="image" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Card_1;
