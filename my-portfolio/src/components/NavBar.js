import React, { useState, useRef, useEffect } from "react";

function Navbar({ sectionRefs }) {
  const [activeNav, setActiveNav] = useState("home");
  const navRefs = {
    home: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };
  const sliderRef = useRef(null);

  useEffect(() => {
    if (activeNav && navRefs[activeNav].current) {
      const { offsetLeft, clientWidth } = navRefs[activeNav].current;
      sliderRef.current.style.width = `${clientWidth}px`;
      sliderRef.current.style.left = `${offsetLeft}px`;
    }
  }, [activeNav]);

  const scrollToSection = (section) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90vw",
        height: "4em",
        backgroundColor: "#F8F6F4",
        borderRadius: "1rem",
        position: "fixed",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: "0.8",
        zIndex: "2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {[
          "home",
          "skills",
          "experience",
          "projects",
          "education",
          "contact",
        ].map((item) => (
          <a
            key={item}
            ref={navRefs[item]}
            href={`#${item}`}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={(e) => {
              e.preventDefault(); // Prevents the default anchor link behavior
              setActiveNav(item); // Sets the active nav state
              scrollToSection(item); // Calls the function to scroll to the section
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      <div
        ref={sliderRef}
        className="slider-indicator"
        style={{
          height: "5px",
          backgroundColor: "black",
          position: "absolute",
          bottom: "0",
          transition: "left 0.3s ease, width 0.3s ease",
          opacity: "0.8",
        }}
      ></div>
    </div>
  );
}

export default Navbar;
