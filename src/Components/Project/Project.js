import React, { useState } from "react";
import "./Project.css";
const Project = ({ title, desc, link, img, tech }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {!show ? (
          <img src={img} alt="" />
        ) : (
          <div className="project_content">
            <h4>{title}</h4>
            <p>
              <b>Description :</b> {desc}
            </p>
            <p>
              <b>Tech Stack Used :</b> {tech}
            </p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Project;
