import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "15vh" }}>My Projects</h1>
      <div className="projects-container">
        <div className="project"></div>
        <div className="project-text-box"></div>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/Trendlens.png`}
          alt="Project"
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
}

export default Projects;
