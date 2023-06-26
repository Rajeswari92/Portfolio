import React from "react";
import "./SkillContainer.css";
import { Element } from "react-scroll";
import programming from "../../assets/programming-skills.png";
import { LinearProgress } from "@mui/material";
const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="img_container">
        <img src={programming} alt="skill image" />
      </div>
      <div className="skillContainer_text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer_skillset">
          <h5>HTML</h5>
          <div className="skillcontainer_slider skillcontainer_color1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>CSS</h5>
          <div className="skillcontainer_slider skillcontainer_color2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>Javascript</h5>
          <div className="skillcontainer_slider skillcontainer_color3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>React</h5>
          <div className="skillcontainer_slider skillcontainer_color4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>Java</h5>
          <div className="skillcontainer_slider skillcontainer_color5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>DSA</h5>
          <div className="skillcontainer_slider skillcontainer_color6">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
