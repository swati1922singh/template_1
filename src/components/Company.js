import React, { Fragment } from "react";
import Dropdown from "./Dropdown";
const Company = () => {
  return (
    <Fragment>
      <div>
        <Dropdown
          nav_heading_1="Awesome features"
          nav_description_1="Vulk is a Vue 3 UI lit that makes is easy to build gorgwous interface"
          nav_link_1="Theme colors overview"
          l_heading_1="DEMOS"
          l_1="Landing pages"
          l_2="About pages"
          l_3="Pricing pages"
          l_4="Subpages"
          l_heading_2="...."
          l_5="Blog pages"
          l_6="Auth pages"
          l_7="Layouts"
          l_8="Components"
          nav_image={
            "https://vulk.cssninja.io/assets/demo/img/tiles/nav-tile.jpeg"
          }
          nav_heading_2="Vulk documentation"
          nav_description_2="Learn more about how to get the most from the Vulk component library"
          nav_link_3="Read Documnetation"
        />
      </div>
    </Fragment>
  );
};
export default Company;
