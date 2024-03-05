import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
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
    { name: "Chakra UI", logo: "ChakraUI.png" },
    { name: "Microsoft Office", logo: "MicrosoftOffice.png" },
  ];

  const chunkSkills = (skills, chunkSize) =>
    Array.from({ length: Math.ceil(skills.length / chunkSize) }, (_, i) =>
      skills.slice(i * chunkSize, i * chunkSize + chunkSize)
    );

  const skillRows = chunkSkills(skills, 5);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "15vh",
        minHeight: "50vh",
      }}
    >
      <h1 style={{ paddingBottom: "5vh" }}>My Skills</h1>
      {skillRows.map((row, rowIndex) => (
        <SkillRow key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </div>
  );
}

function SkillRow({ row, rowIndex }) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="skills-row">
      {row.map((skill, skillIndex) => (
        <div
          key={skill.name}
          className={`skill-item ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: `${skillIndex * 0.1}s` }}
        >
          <div className="skill-content">
            <img
              src={`/logos/${skill.logo}`}
              alt={`${skill.name} logo`}
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
  );
}

export default Skills;
