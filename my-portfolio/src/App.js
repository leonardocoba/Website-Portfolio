import React, { useState, useRef } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import "./global.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode(!isNightMode); // Toggle the state
  };

  const modeClass = isNightMode ? "night-mode" : "day-mode";
  const textColorClass = isNightMode ? "dark-mode-text" : "light-mode-text";

  return (
    <div className={`App ${modeClass}`}>
      <Navbar
        sectionRefs={{
          home: homeRef,
          skills: skillsRef,
          experience: experienceRef,
          projects: projectsRef,
          education: educationRef,
          contact: contactRef,
        }}
      />

      <div className="home" ref={homeRef}>
        <Home />
      </div>
      <div
        className={`Components ${modeClass} ${textColorClass}`}
        style={{
          backgroundColor: isNightMode ? "#1A202C" : "#FFFFFF",
        }}
      >
        <div className="skills" ref={skillsRef}>
          <Skills />
        </div>
        <div className="experience" ref={experienceRef}>
          <Experience />
        </div>
        <div className="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div className="education" ref={educationRef}>
          <Education />
        </div>
        <div className="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
      <button
        className={`mode_button ${isNightMode ? "night-button" : ""}`}
        onClick={() => setIsNightMode(!isNightMode)}
      >
        {isNightMode ? (
          <NightsStayIcon className="night-icon" />
        ) : (
          <LightModeIcon className="day-icon" />
        )}
      </button>
    </div>
  );
}

export default App;
