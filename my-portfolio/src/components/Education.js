import React, { useState, useEffect } from "react";

function Education({ isNightMode }) {
  const darkModeBackgroundColor = "rgb(38, 44, 58)";
  const lightModeBackgroundColor = "lightgrey";
  const [responsiveStyle, setResponsiveStyle] = useState({});
  const [titleStyle, setTitleStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
      const width = window.innerWidth;
      let newStyle = {};
      let newTitleStyle = {};

      if (width <= 750) {
        newStyle = { ...newStyle, maxWidth: "90%" };
      }
      if (width <= 500) {
        newStyle = { ...newStyle, flexDirection: "column", padding: "15px" };
      }
      if (width <= 400) {
        newStyle = { ...newStyle, fontSize: "smaller" };
      }
      if (width <= 300) {
        newStyle = { ...newStyle, padding: "10px" };
      }
      if (width <= 474) {
        newTitleStyle = { ...newTitleStyle, textAlign: "center" }; // Center the title when width is under 474px
      }

      setResponsiveStyle(newStyle);
      setTitleStyle(newTitleStyle);
    };

    window.addEventListener("resize", updateStyle);
    updateStyle(); // Initialize style on component mount

    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "12vh",
        paddingBottom: "5vh",
      }}
    >
      <h1 style={{ marginBottom: "2vh" }}>My Education</h1>
      <div
        style={{
          display: "flex",
          backgroundColor: isNightMode
            ? darkModeBackgroundColor
            : lightModeBackgroundColor,
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          width: "100%",
          maxWidth: "750px",
          margin: "0 auto",
          ...responsiveStyle, // Apply dynamic styles based on viewport width
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/imgs/uf.png`}
            alt="University Logo"
            style={{ maxHeight: "100%", maxWidth: "250px" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            padding: "20px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: "0", lineHeight: "1.5", ...titleStyle }}>
            {" "}
            {/* Apply dynamic styles to title */}
            University of Florida
          </h3>
          <p style={{ lineHeight: "1.5" }}>
            Bachelor of Science in Computer Science
          </p>
          <p style={{ lineHeight: "1.5" }}>GPA: 3.4</p>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.5" }}>
            <li>Minor in Entrepreneurship</li>
            <li>
              Major Coursework: Data Structures and Algorithms, Information and
              Databases, Data Science for ECE, Intro to SWE
            </li>
            <li>
              Artificial Intelligence Fundamentals and Applications
              Certification (IP)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
