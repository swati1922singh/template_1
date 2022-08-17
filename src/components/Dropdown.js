import React, { Fragment } from "react";
const Dropdown = ({
  nav_heading_1,
  nav_heading_2,
  nav_description_1,
  nav_description_2,
  nav_link_1,
  nav_link_2,
  l_heading_1,
  l_heading_2,
  l_1,
  l_2,
  l_3,
  l_4,
  l_5,
  l_6,
  l_7,
  l_8,
  nav_image,
}) => {
  return (
    <Fragment>
      <div className="dropdown">
        <div className="itm1">
          <h3 className="d_head">{nav_heading_1}</h3>
          <p className="d_para">{nav_description_1}</p>
          <a className="d_link">{nav_link_1}</a>
        </div>
        <div className="itm2">
          <ul>
            <li>
              <h3 className="l_head">{l_heading_1}</h3>
            </li>
            <li>{l_1}</li>
            <li>{l_2}</li>
            <li>{l_3}</li>
            <li>{l_4}</li>
          </ul>
          <ul>
            <li>
              <h3 className="l_head">{l_heading_2}</h3>
            </li>
            <li>{l_5}</li>
            <li>{l_6}</li>
            <li>{l_7}</li>
            <li>{l_8}</li>
          </ul>
        </div>
        <div className="itm4">
          <div className="d_image">
            <img src={nav_image} />
          </div>
          <h3 className="d_head">{nav_heading_2}</h3>
          <p className="d_para">{nav_description_2}</p>
          <a className="d_link">{nav_link_2}</a>
        </div>
      </div>
    </Fragment>
  );
};
export default Dropdown;
