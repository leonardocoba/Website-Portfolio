import React, { useRef } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import "./global.css";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#FFFAFA",
      }}
    >
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
  );
}

export default App;
