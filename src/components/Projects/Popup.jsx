import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "./Popup.css";

const Popup = ({
  title,
  imageUrl,
  description,
  technologies,
  liveURL,
  githubURL,
  onClose,
}) => {
  useEffect(() => {
    document.body.classList.add("popup-open");
    return () => {
      document.body.classList.remove("popup-open");
    };
  }, []);

  return (
    <div className="popup-container">
      <motion.div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -800 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </div>
        <div className="popup-content-left">
          <h2>{title}</h2>
          {Array.isArray(technologies) && technologies.length > 0 && (
            <div>
              <ul className="technology-stack">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          <img src={imageUrl} alt={title} />
        </div>
        <div className="popup-content-right">
          <p>{description}</p>
          <div className="popup-btns">
            <ul>
              <li className="popup-btn" onClick={() => window.open(liveURL)}>
                <i className="fas fa-external-link-alt"></i> See Live
              </li>
              <li className="popup-btn" onClick={() => window.open(githubURL)}>
                <i className="fab fa-github"></i> See Source
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
