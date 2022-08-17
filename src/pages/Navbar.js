import React, { useState } from "react";
import Company from "../components/Company";
import Product from "../components/Product";
import Resources from "../components/Resources";
import "../style/Navbar.css";
const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const handleToggleNavbar = () => {
    setshowNav(!showNav);
  };
  return (
    <>
      <nav className="navbar">
        <div className="mod">
          <h3 className="logo">Vulk</h3>
          <a className="desktop_home">Vulk</a>
          <ul className={`desktopView`}>
            <div className="start_part">
              <li className="homeHover">
                <a href="#">Products</a>
              </li>
              <div className="hover_content">
                <Product />
              </div>

              <li>
                <a href="#">Pricing</a>
              </li>

              <li className="homeHover">
                <a href="#">Company</a>
              </li>
              <div className="hover_content">
                <Company />
              </div>

              <li className="homeHover">
                <a href="#">Resources</a>
              </li>
              <div className="hover_content">
                <Resources />
              </div>
            </div>
          </ul>
          <div className="end_part">
            <button className="nav_btn">Buy Vulk</button>
          </div>
        </div>
        <div className="toggleBtn" onClick={() => handleToggleNavbar()}>
          <button className="btn">E</button>
        </div>
      </nav>
      <div className={`togglerContent ${showNav ? "" : "d-none"}`}>
        <div className="part_1">
          <li className="homeHover">
            <a href="#">Products</a>
          </li>
          <div className="hover_content">
            <Product />
          </div>

          <li>
            <a href="#">Pricing</a>
          </li>

          <li className="homeHover">
            <a href="#">Company</a>
          </li>
          <div className="hover_content">
            <Company />
          </div>

          <li className="homeHover">
            <a href="#">Resources</a>
          </li>
          <div className="hover_content">
            <Resources />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
