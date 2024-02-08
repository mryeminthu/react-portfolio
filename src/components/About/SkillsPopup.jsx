import React from "react";
import { motion } from "framer-motion";
import "./SkillsPopup.css";

const SkillsPopup = ({ onClose }) => {
  return (
    <div className="skills-popup-container">
      <div className="skills-popup">
        <h3>My Skills</h3>
        <div className="skills-content">
          <div className="category">
            <h3>Frontend</h3>
            <ul>
              <motion.li
                initial={{ opacity: 0, y: -800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-html5"></i> HTML
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-css3"></i> CSS
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-js"></i> JavaScript
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-react"></i> React
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fas fa-code"></i> Redux
              </motion.li>
            </ul>
          </div>
          <div className="category">
            <h3>Backend</h3>
            <ul>
              <motion.li
                initial={{ opacity: 0, y: -800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fas fa-gem"></i> Ruby
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fas fa-gem"></i> Ruby on Rails
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fas fa-database"></i> Postgresql
              </motion.li>
            </ul>
          </div>
          <div className="category">
            <h3>Frameworks/CMS/Tools</h3>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-git-alt"></i> Git
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-github"></i> GitHub
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-bootstrap"></i> Bootstrap
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-wordpress"></i> WordPress
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <i className="fab fa-css3"></i> TailwindCSS
              </motion.li>
            </ul>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SkillsPopup;
