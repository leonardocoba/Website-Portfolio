// Examples
// https://www.benrogers.dev/#projects
// https://availchet.github.io/contact
// https://github.com/HackathonHackers/personal-sites

import React, { useRef } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
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
        minHeight: "300vh", // Ensure the app container takes at least the full viewport height
        position: "relative", // Needed for correct positioning
      }}
    >
      <Navbar
        sectionRefs={{
          home: homeRef,
          skills: skillsRef,
          experience: experienceRef,
          projects: projectsRef,
          education: educationRef,
          contact: contactRef /*, other refs */,
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
        <Experience />
      </div>
      <div className="education" ref={educationRef}>
        <Education />
      </div>
      <div className="contact" ref={contactRef}>
        <Experience />
      </div>
    </div>
  );
}

export default App;
