import React from "react";
import "./SkillsPopup.css";

const SkillsPopup = ({ onClose }) => {
  return (
    <div className="skills-popup-container">
      <div className="skills-popup">
        <h3>My Skills</h3>
        <div className="skills-content">
          <div className="category">
            <h4>Frontend</h4>
            <ul>
              <li>
                <i className="fab fa-html5"></i> HTML
              </li>
              <li>
                <i className="fab fa-css3"></i> CSS
              </li>
              <li>
                <i className="fab fa-js"></i> JavaScript
              </li>
              <li>
                <i className="fab fa-react"></i> React
              </li>
              <li>
                <i className="fab fa-wordpress"></i> WordPress
              </li>
              <li>
                <i className="fab fa-css3"></i> TailwindCSS
              </li>
            </ul>
          </div>
          <div className="category">
            <h4>Backend</h4>
            <ul>
              <li>
                <i className="fas fa-gem"></i> Ruby
              </li>
              <li>
                <i className="fas fa-gem"></i> RoR
              </li>
              <li>
                <i className="fas fa-database"></i> Postgresql
              </li>
            </ul>
          </div>
          <div className="category">
            <h4>Tools</h4>
            <ul>
              <li>
                <i className="fab fa-git-alt"></i> Git
              </li>
              <li>
                <i className="fab fa-github"></i> GitHub
              </li>
              <li>
                <i className="fab fa-bootstrap"></i> Bootstrap
              </li>
            </ul>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SkillsPopup;
