import React from "react";
import "./home.css";
import myimage from "./ymt.jpg";
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
        <img src={myimage} alt="MyImage" className="home-image" />
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
        <br />
        <button className="resume-button" onClick={resumeDownload}>
          Resume
        </button>
      </section>
    </div>
  );
};

export default Home;
