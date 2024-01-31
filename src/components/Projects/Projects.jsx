import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import leaderImage from "./images/leader.png";
import logoImage from "./images/logo.svg";
import Popup from "./Popup";

const projectsData = [
  {
    title: "Project 1",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: leaderImage,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Project 2",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Project 3",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Project 4",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description: "Description for Project 4",
  },
  {
    title: "Project 5",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description: "Description for Project 5",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

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
            onClick={() => openPopup(project)}
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

      {selectedProject && (
        <Popup
          title={selectedProject.title}
          imageUrl={selectedProject.imageUrl}
          description={selectedProject.description}
          technologies={selectedProject.technologies}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Projects;
