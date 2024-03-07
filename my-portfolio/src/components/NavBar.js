import React, { useState, useRef, useEffect } from "react";

function Navbar({ sectionRefs, isNightMode }) {
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
  const [navStyle, setNavStyle] = useState({ fontSize: "1rem" }); // State for dynamic style

  useEffect(() => {
    if (activeNav && navRefs[activeNav].current) {
      const { offsetLeft, clientWidth } = navRefs[activeNav].current;
      sliderRef.current.style.width = `${clientWidth}px`;
      sliderRef.current.style.left = `${offsetLeft}px`;
      // Optionally adjust the slider's height to match the text size
    }
  }, [activeNav, navStyle]); // Include navStyle in the dependency array to update slider when text size changes

  useEffect(() => {
    const handleResize = () => {
      // Set default size for larger screens
      let newSize = "1em";

      // Adjust text size based on viewport width
      if (window.innerWidth < 400) {
        newSize = "0.4rem";
      } else if (window.innerWidth < 500) {
        newSize = "0.6rem";
      } else if (window.innerWidth < 750) {
        newSize = "0.8rem";
      }

      // Update the navStyle state to apply the new size
      setNavStyle({ fontSize: newSize });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (section) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY + window.innerHeight / 2;

      Object.keys(sectionRefs).forEach((key) => {
        const ref = sectionRefs[key].current;
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetHeight = ref.offsetHeight;

          if (
            currentScrollPosition >= offsetTop &&
            currentScrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <div
      className={`navbar ${isNightMode ? "navbar-dark" : "navbar-light"}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "4em",
        backgroundColor: isNightMode ? "#0a192f" : "#F8F6F4",
        borderRadius: "1rem",
        position: "fixed",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: "0.8",
        zIndex: "2",
        ...navStyle, // Apply dynamic style here
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          ...navStyle, // Apply dynamic style to text as well
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
            style={{
              textDecoration: "none",
              color: isNightMode ? "white" : "black",
              ...navStyle, // Ensure text size changes are applied
            }}
            onClick={(e) => {
              e.preventDefault();
              setActiveNav(item);
              scrollToSection(item);
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
          backgroundColor: isNightMode ? "white" : "black",
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
