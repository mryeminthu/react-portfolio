import React from "react";
import { motion } from "framer-motion";
import "./Popup.css";

const Popup = ({ title, imageUrl, description, technologies, onClose }) => {
  return (
    <div className="popup-container" onClick={onClose}>
      <motion.div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -800 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
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
              <li className="popup-btn">See Live</li>
              <li className="popup-btn">See Source</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
