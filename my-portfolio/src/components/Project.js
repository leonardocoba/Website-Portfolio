import React from "react";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Projects.css";

function Project({ project }) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Triggers when 10% of the project is visible
  });

  return (
    <div ref={ref} className={`project ${inView ? "is-inView" : ""}`}>
      <h2 className="project-title">{project.title}</h2>
      <div className="project-details">
        <div className="tech-stack">
          <h3>Made With:</h3>
          {project.madeWithIcons.map((icon, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/logos/${icon.toLowerCase()}.png`}
              className="madeWithIcons"
              alt={icon}
            />
          ))}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-footer">
          <a href={project.githubLink} className="github-button">
            <GitHubIcon /> GitHub
          </a>
          <a href={project.demoLink} className="demo-button">
            <YouTubeIcon /> Demo
          </a>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/imgs/${project.projectImage}`}
        alt={project.altText}
        className="project-image"
      />
    </div>
  );
}

export default Project;
