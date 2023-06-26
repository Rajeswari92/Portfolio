import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import TopContainer from "../../Components/TopContainer/TopContainer";
import SkillContainer from "../../Components/SkillContainer/SkillContainer";
import ProjectContainer from "../../Components/ProjectContainer/ProjectContainer";
import Contact from "../../Components/Contact/Contact";

const About = () => {
  return (
    <div>
      <Navbar />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
};

export default About;
