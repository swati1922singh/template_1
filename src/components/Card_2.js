import React from "react";
import "../style/Style.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const Card_2 = ({ head, heading, buttonname, button2 }) => {
  return (
    <div className="footer_card">
      <div className="textcard">
        <div className="headcard">{head}</div>
        <div className="headingcard">{heading}</div>
      </div>
      <div className="button_part">
        <div className="button_s">
          <Button variant="contained" size="large">
            {buttonname}
          </Button>
          <button size="large" className="btn">
            {button2}
          </button>
        </div>

        <div className="links">
          <h4>AI-powered tech</h4>
          <h4>Hours of time saved</h4>
        </div>
      </div>
    </div>
  );
};
export default Card_2;
