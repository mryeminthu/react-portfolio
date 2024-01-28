import React from "react";
import "./about.css";
import SocialIcons from "./SocialIcons";

const About = () => {
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
      <h2 className="about-me-title">About me</h2>
      <div className="about-me-and-icons">
        {aboutMe.map((line, index) => (
          <p
            className="about-me-paragraph"
            key={index}
            style={{
              animation: `colorChange 10s infinite alternate ${index * 2}s`,
            }}
          >
            {line}
          </p>
        ))}
        <div className="icons-div">
          <h3 className="bounce-animation">Connect with me</h3>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default About;
