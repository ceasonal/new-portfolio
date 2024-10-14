import React from "react";
import hero3 from "../images/hero3.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-container cyber-razor-top cyber-razor-bottom bg-white">
      <div
        className="cyber-tile-big cyber-glitch-1"
        style={{ backgroundColor: "#42B7AE" }}
      >
        <h1 className="cyber-h">About Me</h1>
        <p>
          Hello! I go by the name Ceasonal, a passionate technology enthusiast
          with a Bachelor of Computer Applications (BCA) and a strong focus on
          cybersecurity. I have a keen interest in protecting digital assets and
          ensuring the integrity and confidentiality of information. <br />
          <br />
          Throughout my studies, I have gained a solid foundation in
          programming, networking, and security protocols. I enjoy tackling
          challenges and finding innovative solutions to complex security
          issues. My goal is to contribute to the cybersecurity field by
          securing systems and helping organizations safeguard their data
          against threats.
        </p>
      </div>
      <div
        className="cyber-tile-big cyber-glitch-1"
        style={{ backgroundColor: "#42B7AE" }}
      >
        <img src={hero3} alt="About" />
      </div>
    </div>
  );
};

export default About;
