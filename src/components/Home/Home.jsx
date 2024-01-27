import React from "react";
import "./home.css";
import myimage from "./ymt.jpg";
const Home = () => {
  const text = "I am a Full-stack developer from Myanmar";
  const additionalLines = [
    "Line 1 of additional text.",
    "Line 2 of additional text.",
    "Line 3 of additional text.",
    "Line 4 of additional text.",
  ];

  return (
    <div className="home">
      <header>
        <img src={myimage} alt="MyImage" className="header-image" />
        <h1>Hello, I am Ye Min Thu</h1>
        <p className="appear-animation">
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
        </p>
        {additionalLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </header>
      <section className="bounce-animation">
        <h2>Connect with me</h2>
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
