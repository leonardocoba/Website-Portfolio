import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import "./Home.css"; // Make sure the CSS file is correctly imported

// Import the ParticleBackground component if used
import ParticleBackground from "./particles";

function Home() {
  return (
    <div className="home">
      <ParticleBackground />

      <div className="profile-image-container">
        <img src={`${process.env.PUBLIC_URL}/imgs/PFP.png`} alt="Profile" />
      </div>

      <div className="main-content">
        <h1 className="welcome">Welcome to my Website!</h1>
        <p className="intro">
          I'm Leonardo, but you can call me Leo. I'm an aspiring software
          engineer studying at the University of Florida. This summer I'm
          excited to enhance my skills through an internship at Microsoft in
          Atlanta. I invite you to explore my website and get a full picture of
          my professional and academic journey!
        </p>

        <div className="buttons-section">
          <a
            href="https://github.com/leonardocoba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Btn">
              GitHub
              <GitHubIcon className="buttonIcon" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-cobaleda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Btn">
              LinkedIn
              <LinkedInIcon className="buttonIcon" />
            </button>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/extras/Leonardo%20Cobaleda%20Resume.pdf`}
            download="Leonardo_Cobaleda_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Btn">
              Download Resume
              <DownloadIcon className="buttonIcon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
