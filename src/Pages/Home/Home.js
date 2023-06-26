import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const moveAbout = (click) => {};
  return (
    <div className="home">
      <header>
        <h1 className="heading">WELCOME TO MY PORTFOLIO PAGE</h1>
      </header>
      <button className="btn" onClick={moveAbout}>
        <Link to={"/about"}>Click Here</Link>
      </button>
    </div>
  );
};

export default Home;
