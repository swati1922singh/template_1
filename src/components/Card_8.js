import React from "react";
import "../style/Style.css";

const Card_8 = ({ card_image, card_title, card_description }) => {
  return (
    <div className="card">
      {card_image}
      <h5 className="card_heading">{card_title}</h5>
      <p className="card_description">{card_description}</p>
    </div>
  );
};
export default Card_8;
