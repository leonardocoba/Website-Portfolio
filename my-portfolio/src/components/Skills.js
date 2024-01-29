import React from "react";

function Skills() {
  const skills = [
    { name: "Python", logo: "Python.png" },
    { name: "C++", logo: "C++.png" },
    { name: "JavaScript", logo: "JavaScript.webp" },
    { name: "HTML", logo: "HTML.png" },
    { name: "CSS", logo: "CSS.png" },
    { name: "Git", logo: "Git.png" },
    { name: "Firebase", logo: "Firebase.png" },
    { name: "MongoDB", logo: "MongoDB.png" },
    { name: "MySQL", logo: "MySQL.png" },
    { name: "NodeJS", logo: "NodeJS.png" },
    { name: "React / Native", logo: "React.png" },
    { name: "Material UI", logo: "MaterialUI.png" },
    { name: "Charka UI", logo: "CharkaUI.png" },
    { name: "Microsoft Office", logo: "Microsoft Office.png" },
  ];
  const skillItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease", // Smooth transition for scaling
    cursor: "pointer", // Changes the cursor to indicate the item is interactive
  };

  const onHoverStyle = {
    transform: "scale(1.1)", // Scales up the item by 10%
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "15vh" }}>
      <h1>My Skills</h1>
      <div
        className="skills-container"
        s
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // Set to 5 columns
          justifyContent: "center",
          justifyItems: "center", // Centers items within their grid area
          gap: "20px",
          padding: "0 20px", // Add some padding if needed
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={skillItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={`/logos/${skill.logo}`}
              alt={skill.name}
              style={{ width: "90px", height: "90px", marginBottom: "10px" }} // Added marginBottom for spacing between logo and text
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
