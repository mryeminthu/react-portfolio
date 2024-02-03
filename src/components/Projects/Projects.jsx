import React, { useState } from "react";
import SnowfallComponent from "../Snowfall";
import { motion } from "framer-motion";
import "./Projects.css";
import portfolio from "./images/portfolio.png";
import mft from "./images/mft.png";
import da from "./images/da.png";
import moviem from "./images/moviem.png";
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
    title: "Dhamma Archive",
    technologies: ["WordPress"],
    imageUrl: da,
    description:
      "I build websites with WordPress, Ruby on Rails, and React. Whether you like the ease of WordPress or the strength of Ruby on Rails and React, I can make a website for you.",
    liveURL: "https://www.dhammaarchive.com",
  },
  {
    title: "YMT's MovieMingle",
    technologies: ["HTML", "CSS", "React"],
    imageUrl: moviem,
    description:
      "YMT's MovieMingle is a user-friendly app that provides a wide range of shows from different movie genres. It sources these shows from a dedicated API, ensuring a diverse collection for users.",
    liveURL: "https://cozy-kitsune-0c212e.netlify.app",
    githubURL: "https://github.com/mryeminthu/react-project",
  },
  {
    title: "To-Do-list",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: logoImage,
    description:
      "The Todo List Website is an online platform created to assist users in efficiently handling their tasks and to-do lists.",
    liveURL: "https://mryeminthu.github.io/To-Do-list/dist/",
    githubURL: "https://github.com/mryeminthu/To-Do-list",
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
      <SnowfallComponent />
    </div>
  );
};

export default Projects;
