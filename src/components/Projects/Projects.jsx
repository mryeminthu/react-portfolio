import React from "react";
import { motion } from "framer-motion";
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
      <motion.h2
        initial={{ opacity: 0, y: 800 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="section-title"
      >
        {titleWords.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </motion.h2>
      <hr className="section-line" />
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          >
            <h3>
              {project.title.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="word">
                  <motion.span
                    initial={{ opacity: 0, x: 800 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.2 + wordIndex * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h3>
            <motion.img
              initial={{ opacity: 0, y: -800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              src={project.imageUrl}
              alt={project.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
