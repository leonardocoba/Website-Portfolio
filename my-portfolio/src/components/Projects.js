import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "15vh" }}>My Projects</h1>
      <div className="projects-container">
        <div className="project">
          <div className="project-text-box"></div>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/Trendlens.png`}
            alt="Project"
            className="project-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
