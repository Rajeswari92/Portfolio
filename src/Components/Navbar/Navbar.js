import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Developer</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="aboutme" className="nav-about">
          <li>About Me</li>
        </Link>
        <Link to="skills" className="nav-skill">
          <li>Education & Skills</li>
        </Link>
        <Link to="projects" className="nav-project">
          <li>Projects</li>
        </Link>
        <Link to="contact" className="nav-contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <IoClose /> : <BiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
