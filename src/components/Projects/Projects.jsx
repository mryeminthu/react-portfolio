import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import portfolio from "./images/portfolio.png";
import mft from "./images/mft.png";
import logoImage from "./images/logo.svg";
import Popup from "./Popup";

const projectsData = [
  {
    title: "Portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolio,
    description:
      "This is my first simple portfolio website created in Microverse Module 1. Please explore my portfolio to see how I create cool websites using HTML, CSS, and JavaScript. I turn tricky ideas into simple and awesome designs.",
    liveURL: "https://mryeminthu.github.io/Portfolio",
    githubURL: "https://github.com/mryeminthu/Portfolio",
  },
  {
    title: "Myanmar Fight Team",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: mft,
    description:
      "This website is for people who love martial arts. Whether you're a beginner or an experienced fighter, we have programs for everyone. Take a look around and see what we offer.",
    liveURL: "https://mryeminthu.github.io/Capstone-Project",
    githubURL: "https://github.com/mryeminthu/Capstone-Project",
  },
  {
    title: "Project 3",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    liveURL: "URL_FOR_LIVE_PROJECT_3",
    githubURL: "URL_FOR_GITHUB_PROJECT_3",
  },
  {
    title: "Project 4",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description: "Description for Project 4",
    liveURL: "URL_FOR_LIVE_PROJECT_4",
    githubURL: "URL_FOR_GITHUB_PROJECT_4",
  },
  {
    title: "Project 5",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: logoImage,
    description: "Description for Project 5",
    liveURL: "URL_FOR_LIVE_PROJECT_5",
    githubURL: "URL_FOR_GITHUB_PROJECT_5",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    document.body.classList.add("popup-open");
  };

  const closePopup = () => {
    setSelectedProject(null);
    setIsPopupOpen(false);
    document.body.classList.remove("popup-open");
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

      {isPopupOpen && <div className="overlay" onClick={closePopup}></div>}

      {selectedProject && (
        <Popup
          title={selectedProject.title}
          imageUrl={selectedProject.imageUrl}
          description={selectedProject.description}
          technologies={selectedProject.technologies}
          liveURL={selectedProject.liveURL}
          githubURL={selectedProject.githubURL}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Projects;
