import React from "react";
import "./TopContainer.css";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
const TopContainer = () => {
  return (
    <Element name="aboutme" className="topcontainer">
      <TopContent />
    </Element>
  );
};

export default TopContainer;
