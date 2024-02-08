import React, { useEffect, useState } from "react";
import SkillsPopup from "./SkillsPopup";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./About.css";
import SocialIcons from "../SocialIcons";

const About = () => {
  const [confetti, setConfetti] = useState(false);
  const [showSkillsPopup, setShowSkillsPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setConfetti(true);
    }, 1500);
  }, []);

  const aboutMe = [
    "I hold a computer science degree",
    "and have completed a remote web development program from Microverse,",
    "as well as other reputable web platforms like Coursera and LinkedIn.",
    "I create top-quality websites",
    "using Ruby on Rails and React.",
    "If you require assistance with your website development,",
    "I am at your service.",
  ];

  return (
    <section className="about-me-section">
      {showSkillsPopup && <div className="overlay"></div>}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={50}
        recycle={true}
        run={confetti}
      />
      <motion.h2
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="about-me-title"
      >
        About me
      </motion.h2>
      <div className="about-me-and-icons">
        {aboutMe.map((line, index) => (
          <motion.p
            className="about-me-paragraph"
            key={index}
            style={{
              animation: `colorChange 10s infinite alternate ${index * 2}s`,
            }}
            initial={{ opacity: 0, x: 800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            {line}
          </motion.p>
        ))}
        <motion.div
          className="icons-div"
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="bounce-animation">Connect with me</h3>
          <SocialIcons />
        </motion.div>
        <motion.button
          className="skills-button"
          onClick={() => setShowSkillsPopup(true)}
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          My Skills
        </motion.button>
      </div>
      {showSkillsPopup && (
        <SkillsPopup onClose={() => setShowSkillsPopup(false)} />
      )}
    </section>
  );
};

export default About;
