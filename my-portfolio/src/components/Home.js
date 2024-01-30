import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import "./Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        backgroundColor: "#C4DFDF",
      }}
    >
      <div
        style={{
          width: "50%",
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
            marginTop: "5rem",
          }}
        >
          <h1 style={{ color: "white", fontSize: "2rem" }}>
            Welcome to my portfolio, my name is Leonardo Cobaleda!
          </h1>
          <p style={{ color: "white" }}>
            I am a Computer Science major at the University of Florida also
            minoring in Entrepreneurship. I aspire to become a full stack
            developer with integrations of Artificial Intelligence.
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

const buttonStyle = {
  borderRadius: "50%",
  minWidth: "120px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "grey",
  border: "none",
  cursor: "pointer",
  padding: "0 10px",
  color: "white",
};

export default Home;
