import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import "./Home.css";

import ParticleBackground from "./particles";

function Home() {
  return (
    <div
      className="home"
      style={{
        height: "75vh",
        width: "100%",
        position: "relative",
        display: "flex",
        backgroundColor: "#1A202C",
        border: "1px solid #000",
      }}
    >
      {/* <ParticleBackground /> */}

      <div
        style={{
          width: "25%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/imgs/PFP.png`}
          alt="Profile"
          style={{
            height: "100%",
            width: "auto",
            position: "absolute",
            bottom: "0",
            left: "-70px",
          }}
        />
      </div>

      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            boxSizing: "border-box",
            display: "flex", // Use flexbox to center content
            flexDirection: "column", // Stack children vertically
            justifyContent: "center", // Center vertically in the container
            alignItems: "center", // Center horizontally in the container
            height: "100%", // Ensure the div takes full height of the parent
            textAlign: "center", // Center text alignment
            marginTop: "10rem",
          }}
        >
          <h1 className="welcome"> Welcome to my Website!</h1>
          <p className="intro">
            I'm Leonardo, but you can call me Leo. I'm an aspiring software
            engineer studying at the University of Florida. This summer I'm
            excited to enhance my skills through an internship at Microsoft in
            Atlanta. I invite you to explore my website and get a full picture
            of my professional and academic journey!
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="https://github.com/leonardocoba"
            style={{ textDecoration: "none" }}
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
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Btn">
              LinkedIn
              <LinkedInIcon className="buttonIcon" />
            </button>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/extras/Leonardo%20Cobaleda%20Resume.pdf`} // Encoded URL for your PDF
            download="Leonardo_Cobaleda_Resume.pdf" // Suggested filename for download
            style={{ textDecoration: "none" }}
            target="_blank" // Optional: Opens the PDF in a new tab
            rel="noopener noreferrer" // Security measure for target='_blank'
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
