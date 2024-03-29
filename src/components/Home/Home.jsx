import React from "react";
import SnowfallComponent from "../Snowfall";
import { motion } from "framer-motion";
import "./Home.css";
import homeImage from "./home.gif";
import resumePDF from "./resume.pdf";

const Home = () => {
  const text = "Full-stack developer.";

  const resumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-component">
      <section>
        <img src={homeImage} alt="HomeImage" className="home-image" />
        <motion.h2
          initial={{ opacity: 0, x: -900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello, I am Ye Min Thu.
        </motion.h2>
        <motion.p
          className="appear-animation"
          initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {text.split(" ").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  style={{ animationDelay: `${charIndex * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
              {wordIndex < text.split(" ").length - 1 && "\u00A0"}{" "}
            </React.Fragment>
          ))}
        </motion.p>
        <br />
        <motion.button
          initial={{ opacity: 0, y: 900 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="resume-button"
          onClick={resumeDownload}
        >
          Resume
          <i className="fas fa-download"></i>
        </motion.button>
      </section>
      <SnowfallComponent />
    </div>
  );
};

export default Home;
