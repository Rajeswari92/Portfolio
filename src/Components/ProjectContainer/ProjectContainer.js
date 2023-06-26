import React from "react";
import "./ProjectContainer.css";
import Project from "../Project/Project";
import { Element } from "react-scroll";
const ProjectContainer = () => {
  const projects = [
    {
      title: "Flipkart-Clone",
      desc: "A Flipkart clone website  allowing users to browse and interact with different products and add or remove items from their cart",
      link: "https://flipkart-clone-nu.vercel.app/",
      tech: "HTML, CSS, Javascript, React js, Redux",
      img: "https://cdn-www.bluestacks.com/bs-images/bg-banner42.jpg",
    },
    {
      title: "Movie and TV Series",
      desc: "Movies and TV Series App in React JS and Material UI with full responsive functionality. Using MovieDB API for backend.",
      link: "https://movie-and-tv-series-famz.vercel.app/movies",
      tech: "HTML, CSS, Javascript, React js, Material UI",
      img: "https://wallpapercave.com/wp/wp10615910.jpg",
    },
  ];
  return (
    <Element class="projectContainer" id="projects">
      <h1 className="protitle">Projects</h1>
      <div className="projectContainer_projects">
        {projects.map((project, index) => {
          return (
            <Project
              className="pro"
              key={index}
              title={project.title}
              desc={project.desc}
              link={project.link}
              img={project.img}
              tech={project.tech}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
