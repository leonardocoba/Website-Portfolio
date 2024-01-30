import React from "react";
import "./Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "15vh" }}>My Projects</h1>
      <div className="projects-container">
        <div className="project">
          <div className="project-text-box">
            <h1> TrendLens </h1>
            <div className="icons-container">
              <h3> Made With:</h3>
              <img
                src={`${process.env.PUBLIC_URL}/logos/Python.png`}
                className="madeWithIcons"
                alt="Python"
              />
              <img
                src={`${process.env.PUBLIC_URL}/logos/flask.png`}
                className="madeWithIcons"
                alt="Flask"
              />
              <img
                src={`${process.env.PUBLIC_URL}/logos/plotly.png`}
                className="madeWithIcons"
                alt="Plotly"
              />
            </div>
            <p>
              TrendLens is a web application that visualizes the frequency of
              keywords in New York Times articles over selected years, providing
              a graphical analysis of news trends and public opinion. Users can
              search for specific keywords within a year range to generate a
              line graph displaying the number of times those keywords appeared
              in articles, with additional features such as randomly generating
              a graph, zoom, and lasso-select for an interactive experience. The
              app was developed using the dash framework, plotly, and the New
              York Times Developer API, with a dataset spanning from 1853 to
              2023 and containing over 900,000 articles.
            </p>
            <div className="buttons-container">
              <button className="Btn">
                Github <GitHubIcon className="buttonIcon" />
              </button>
              <button className="Btn">
                Demo <YouTubeIcon className="buttonIcon" />
              </button>
            </div>
          </div>

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
