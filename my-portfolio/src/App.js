// Examples
// https://www.benrogers.dev/#projects
// https://availchet.github.io/contact
// https://github.com/HackathonHackers/personal-sites

import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Loader from "./components/loader";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import ParticleBackground from "./components/particles";
function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#FFFAFA",
      }}
    >
      {showLoader ? (
        <Loader />
      ) : (
        <>
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
          <ParticleBackground />
        </>
      )}
    </div>
  );
}

export default App;
