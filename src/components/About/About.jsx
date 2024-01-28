import React from "react";
import "./about.css";
import SocialIcons from "./SocialIcons";

const About = () => {
  const aboutMe = [
    "I hold a computer science degree and proudly identify as a Micronaut.",
    "I create top-quality websites",
    "using Ruby on Rails and React.",
    "If you require assistance with your website development,",
    "I am at your service.",
  ];
  return (
    <div>
      <h2>About me</h2>
      <div>
        {aboutMe.map((line, index) => (
          <p
            className="about-me"
            key={index}
            style={{
              animation: `colorChange 10s infinite alternate ${index * 2}s`,
            }}
          >
            {line}
          </p>
        ))}
        <section>
          <h3 className="bounce-animation">Connect with me</h3>
          <SocialIcons />
        </section>
      </div>
    </div>
  );
};

export default About;
