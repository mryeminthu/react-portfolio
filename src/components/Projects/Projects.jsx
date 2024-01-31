import React from "react";
import "./Projects.css";
import leaderImage from "./images/leader.png";
import logoImage from "./images/logo.svg";

const projectsData = [
  { title: "Project 1", imageUrl: leaderImage },
  { title: "Project 2", imageUrl: logoImage },
  { title: "Project 3", imageUrl: logoImage },
  { title: "Project 4", imageUrl: logoImage },
  { title: "Project 5", imageUrl: logoImage },
];

const Projects = () => {
  const titleWords = "My Recent Works".split(" ");

  return (
    <div>
      <h2 className="section-title">
        {titleWords.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </h2>
      <hr className="section-line" />
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
