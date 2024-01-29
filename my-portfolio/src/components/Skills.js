import React from "react";
import "./Skills.css";

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

  return (
    <div
      style={{ textAlign: "center", paddingTop: "15vh", minHeight: "100vh" }}
    >
      <h1 style={{ paddingBottom: "5vh" }}>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-content">
              <img
                src={`/logos/${skill.logo}`}
                alt={skill.name}
                style={{
                  width: "85px",
                  height: "85px",
                  marginBottom: "10px",
                }}
              />
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
