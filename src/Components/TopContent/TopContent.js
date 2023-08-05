import React from "react";
import "./TopContent.css";
import { Link } from "react-scroll";

const TopContent = () => {
  return (
    <div className="topcontent">
      <div className="topcontent_container">
        <h1>Ms.Rajeswari Narayanan</h1>
        <p>
          Creative and Detail-oriented Full Stack Developer | Fresh Graduate
        </p>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topcontent_work">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
