import React, { Fragment } from "react";
import "../style/Style.css";
const Card_3 = ({ title, description, image }) => {
  return (
    <Fragment>
      <div className="card_solution">
        <div className="card_icon">
          <img src={image} className="producticon" />
        </div>
        <h5 className="card_2_heading">{title}</h5>
        <p className="card_2_description">{description}</p>
      </div>
    </Fragment>
  );
};
export default Card_3;
