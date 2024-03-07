import React, { useEffect, useState, useRef } from "react";
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
  const [appWidth, setAppWidth] = useState("100%"); // State to control the app's width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 300) {
        setAppWidth("105%"); // Increase width to 105% if width < 300px
      } else if (window.innerWidth < 350) {
        setAppWidth("104%"); // Increase width to 104% if width < 350px
      } else if (window.innerWidth < 400) {
        setAppWidth("103%"); // Increase width to 103% if width < 400px
      } else if (window.innerWidth < 500) {
        setAppWidth("102%"); // Increase width to 102% if width < 500px
      } else {
        setAppWidth("100%"); // Default width for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize width based on current viewport width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isNightMode, setIsNightMode] = useState(() => {
    const savedMode = localStorage.getItem("isNightMode");
    return savedMode === "true" ? true : false;
  });
  useEffect(() => {
    // Save the dark mode state to localStorage whenever it changes
    localStorage.setItem("isNightMode", isNightMode);
  }, [isNightMode]);

  const toggleMode = () => {
    setIsNightMode(!isNightMode); // Toggle the state
  };

  const modeClass = isNightMode ? "night-mode" : "day-mode";
  const textColorClass = isNightMode ? "dark-mode-text" : "light-mode-text";

  return (
    <div className={`App`} style={{ width: appWidth }}>
      <Navbar
        isNightMode={isNightMode}
        toggleMode={toggleMode}
        sectionRefs={{
          home: homeRef,
          skills: skillsRef,
          experience: experienceRef,
          projects: projectsRef,
          education: educationRef,
          contact: contactRef,
        }}
      />

      <Home className="home" />

      <div
        className={`Components ${modeClass} ${textColorClass}`}
        style={{
          backgroundColor: isNightMode ? "#1A202C" : "#FFFFFF",
        }}
      >
        <div className="skills" ref={skillsRef}>
          <Skills isNightMode={isNightMode} />
        </div>
        <div className="experience" ref={experienceRef}>
          <Experience isNightMode={isNightMode} />
        </div>
        <div className="projects" ref={projectsRef}>
          <Projects isNightMode={isNightMode} />
        </div>
        <div className="education" ref={educationRef} style={{ zIndex: "10" }}>
          <Education isNightMode={isNightMode} />
        </div>
        <div className="contact" ref={contactRef}>
          <Contact isNightMode={isNightMode} />
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
