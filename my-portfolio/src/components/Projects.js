import { React, useEffect } from "react";
import "./Projects.css";

import Project from "./Project";

const projectsData = [
  {
    title: "GaytorPal",
    description:
      "Gaytor Pal is an organizational app for University of Florida students, streamlining academic and extracurricular schedules on iOS and Android. It offers task prioritization for assignments and exams, alongside a unique club management feature for integrating club events into personal calendars. Distinguishing itself from typical task managers, Gaytor Pal enhances student organization and engagement by providing a centralized platform for managing commitments and exploring campus activities efficiently.",
    madeWithIcons: ["Python.png", "Flask.png", "SwiftUI.png"],
    githubLink: "https://github.com/GaytorPal",
    demoLink:
      "https://www.https://www.youtube.com/watch?v=lO60GMhMRks&t=526s.com/watch?v=E4zfqU2GZuA",
    projectImage: "GaytorPal.png",
    altText: "GaytorPal Project",
  },
  {
    title: "TrendLens",
    description:
      "TrendLens is a web application that visualizes the frequency of keywords in New York Times articles over selected years, providing a graphical analysis of news trends and public opinion. Users can search for specific keywords within a year range to generate a line graph displaying the number of times those keywords appeared in articles, with additional features such as randomly generating a graph, zoom, and lasso-select for an interactive experience. The app was developed using the dash framework, plotly, and the New York Times Developer API, with a dataset spanning from 1853 to 2023 and containing over 900,000 articles.",
    madeWithIcons: ["Python.png", "Flask.png", "Plotly.png"],
    githubLink: "https://github.com/shane-downs/TrendLens",
    demoLink: "https://www.youtube.com/watch?v=E4zfqU2GZuA",
    projectImage: "Trendlens.png",
    altText: "TrendLens Project",
  },
  {
    title: "Banter Mail",
    description:
      "Banter Mail is the next generation of banking apps that tracks your transactions, recommends credit cards based on your spending, and finds the closest, most profitable cash back stores near you. The app uses the integration of Apple Maps API to find the GeoLocation of the user for the best cash back opportunities.",
    madeWithIcons: ["JavaScript.webp", "React.png", "expo.png"],
    githubLink: "https://github.com/leonardocoba/Bandit-Banking",
    demoLink: "https://www.youtube.com/shorts/J85uNz3IoV0",
    projectImage: "bantermail.png",
    altText: "Banter Mail Project",
  },
  {
    title: "AVL Trees",
    description:
      "AVL Trees is the creation of an AVL tree from scratch. This includes the deletion, insertion, and balancing of an AVL Tree. The functionality of the tree automatically balances the nodes after insertion or deletion. The purpose of this project is to get familiar with data structures, specifically Trees.",
    madeWithIcons: ["C++.png"],
    githubLink: "https://github.com/leonardocoba/AVLTrees",
    projectImage: "AVL.png",
    altText: "AVL Trees Project",
  },
  {
    title: "Minesweeper",
    description:
      "Minesweeper is a replicate of the classic game that came out in 1990. The project tracks times to complete the game, allows changing the settings for the number of bombs, and the board dynamically updates. Recursion is used for displaying empty squares if needed.",
    madeWithIcons: ["C++.png", "sfml.png"],
    githubLink: "https://github.com/leonardocoba/minesweeper",
    projectImage: "minesweeper.png",
    altText: "Minesweeper Project",
  },
  {
    title: "Sudoku",
    description:
      "Sudoku is a digital version of the classic puzzle game, offering three levels of difficulty: Hard, Medium, and Easy. The project uses the Pygame library to provide a visual representation of the game, enhancing the user experience.",
    madeWithIcons: ["Python.png", "pygame.png"],
    githubLink: "https://github.com/leonardocoba/Sudoku-Project",
    demoLink: "https://www.youtube.com/watch?v=fOJ9nQgIhS4&t=131s",
    projectImage: "sudoku.png",
    altText: "Sudoku Project",
  },
];

function Projects({ isNightMode }) {
  useEffect(() => {
    if (isNightMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isNightMode]);
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "5vh" }}>My Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
