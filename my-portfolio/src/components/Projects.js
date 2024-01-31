import React from "react";
import "./Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "15vh" }}>My Projects</h1>
      <div className="projects-container">
        {"               Trend Lens                 "}
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
              <a
                href="https://github.com/shane-downs/TrendLens"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Github <GitHubIcon className="buttonIcon" />
                </button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=E4zfqU2GZuA"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Demo <YouTubeIcon className="buttonIcon" />
                </button>
              </a>
            </div>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/imgs/Trendlens.png`}
            alt="Project"
            className="project-image"
          />
        </div>

        <div className="project">
          <div className="project-text-box">
            <h1> AVL Trees </h1>
            <div className="icons-container">
              <h3> Made With:</h3>
              <img
                src={`${process.env.PUBLIC_URL}/logos/C++.png`}
                className="madeWithIcons"
                alt="C++"
              />
            </div>
            <p>
              AVL Trees is the creation of an AVL tree from scratch. This
              includes the deletion, insertion, and balacing of a AVL Tree. The
              functionality of the tree automatically balances the nodes ater
              insertion or deletion. The purpose of this project is to get
              familiar with data structures, specifically Trees.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/leonardocoba/AVLTrees"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Github <GitHubIcon className="buttonIcon" />
                </button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=E4zfqU2GZuA"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Demo <YouTubeIcon className="buttonIcon" />
                </button>
              </a>
            </div>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/imgs/AVL.png`}
            alt="Project"
            className="project-image"
          />
        </div>

        <div className="project">
          <div className="project-text-box">
            <h1> Minesweeper </h1>
            <div className="icons-container">
              <h3> Made With:</h3>
              <img
                src={`${process.env.PUBLIC_URL}/logos/C++.png`}
                className="madeWithIcons"
                alt="C++"
              />
              <img
                src={`${process.env.PUBLIC_URL}/logos/sfml.png`}
                className="madeWithIcons"
                alt="sfml"
              />
            </div>
            <p>
              Minesweeper is a replicate of minesweeper tha game that came out
              in 1990. The project takes track of times to complete the game.
              There are ways to change the setting for amount of bombs and the
              board dynamically updates. Recursion is used for displaying empty
              squares if needed.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/leonardocoba/minesweeper"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Github <GitHubIcon className="buttonIcon" />
                </button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=E4zfqU2GZuA"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Demo <YouTubeIcon className="buttonIcon" />
                </button>
              </a>
            </div>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/imgs/minesweeper.png`}
            alt="Project"
            className="project-image"
          />
        </div>

        <div className="project">
          <div className="project-text-box">
            <h1> Sudoku </h1>
            <div className="icons-container">
              <h3> Made With:</h3>
              <img
                src={`${process.env.PUBLIC_URL}/logos/python.png`}
                className="madeWithIcons"
                alt="C++"
              />
              <img
                src={`${process.env.PUBLIC_URL}/logos/pygame.png`}
                className="madeWithIcons"
                alt="sfml"
              />
            </div>
            <p>
              Sudoku is a replicate game of the handwritten version of sudoku.
              The game can be configured in 3 different difficulties: Hard,
              Medium, and Easy. The librry pygame is used to have a visual
              representation of the game.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/leonardocoba/Sudoku-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Github <GitHubIcon className="buttonIcon" />
                </button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=fOJ9nQgIhS4"
                target="_blank"
                rel="noopener noreferrer"
                className="BtnLink"
              >
                <button className="Btn">
                  Demo <YouTubeIcon className="buttonIcon" />
                </button>
              </a>
            </div>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/imgs/sodoku.png`}
            alt="Project"
            className="project-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
