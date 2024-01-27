import React from "react";
import "./home.css";
import myimage from "./ymt.jpg";
import SocialIcons from "./SocialIcons";

const Home = () => {
  const text = "Full-stack developer.";
  const aboutMe = [
    "I create top-quality websites",
    "using Ruby on Rails and React.",
    "If you require assistance with your website development,",
    "I am at your service.",
  ];

  return (
    <div className="home">
      <header>
        <img src={myimage} alt="MyImage" className="header-image" />
        <h2>Hello, I am Ye Min Thu.</h2>
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
      </header>
      <section>
        <h3 className="bounce-animation">Connect with me</h3>
        <SocialIcons />
      </section>
    </div>
  );
};

export default Home;
