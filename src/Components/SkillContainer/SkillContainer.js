import React from "react";
import "./SkillContainer.css";
import { Element } from "react-scroll";
const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <h1 className="education">Education</h1>
      <div className="box">
        <div className="degree">
          <h3 className="head">
            Sri Vijay Vidyalaya College of Arts and Science, Dharmapuri
          </h3>
          <h4>B.Sc Computer Science</h4>
          <p>CGPA: 8.937</p>
          <span>2019-2022</span>
        </div>
        <div className="degree">
          <h3 className="head">Variyar Higher Secondary School, Dharmapuri</h3>
          <h4>HSC, Maths-Biology</h4>
          <p>Percentage: 69%</p>
          <span>2018-2019</span>
        </div>
        <div className="degree">
          <h3 className="head">Variyar Higher Secondary School, Dharmapuri</h3>
          <h4>SSLC</h4>
          <p>Percentage: 92% </p>
          <span>2016-2017</span>
        </div>
      </div>
      <h1 className="skills">Skills</h1>
      <span className="skill">HTML</span>
      <span className="skill">CSS</span>
      <span className="skill">Javascript</span>
      <span className="skill">React js</span>
      <span className="skill">Node js</span>
      <span className="skill">Express js</span>
      <span className="skill">MongoDB</span>
      <span className="skill">DSA</span>
      <span className="skill">Java</span>
    </Element>
  );
};

export default SkillContainer;
