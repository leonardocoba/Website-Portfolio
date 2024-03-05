import React from "react";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Projects.css";

function Project({ project }) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Triggers when 50% of the project is visible
  });

  return (
    <div ref={ref} className={`project ${inView ? "is-inView" : ""}`}>
      <div className="project-text-box">
        <h2 className="project-title">{project.title}</h2>
        <div className="tech-stack">
          <h3>Made With:</h3>
          <div className="icons-container">
            {project.madeWithIcons.map((icon, index) => (
              <img
                key={index}
                src={`${
                  process.env.PUBLIC_URL
                }/logos/${icon.toLowerCase()}.png`}
                className="madeWithIcons"
                alt={icon}
              />
            ))}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/imgs/${project.projectImage}`}
        alt={project.altText}
        className="project-image"
      />
      <div className="buttons-container">
        <a href={project.githubLink} className="button github-button">
          <GitHubIcon className="buttonIcon" /> GitHub
        </a>
        {project.demoLink && (
          <a href={project.demoLink} className="button demo-button">
            <YouTubeIcon className="buttonIcon" /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
