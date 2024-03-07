import React, { useState, useEffect, useRef } from "react";
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
    { name: "Swift UI", logo: "SwiftUI.png" },
  ];

  const chunkSkills = (skills, chunkSize) =>
    Array.from({ length: Math.ceil(skills.length / chunkSize) }, (_, i) =>
      skills.slice(i * chunkSize, i * chunkSize + chunkSize)
    );

  const skillRows = chunkSkills(skills, 5);
  const [animatedRows, setAnimatedRows] = useState([]);

  const handleAnimationEnd = (rowIndex) => {
    setAnimatedRows((prev) => [...prev, rowIndex]);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "15vh", minHeight: "50vh" }}>
      <h1 style={{ paddingBottom: "5vh" }}>My Skills</h1>
      {skillRows.map((row, rowIndex) => (
        <SkillRow
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          onEnd={() => handleAnimationEnd(rowIndex)}
          previousRowAnimated={
            animatedRows.includes(rowIndex - 1) || rowIndex === 0
          }
        />
      ))}
    </div>
  );
}

function SkillRow({ row, rowIndex, onEnd, previousRowAnimated }) {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView && previousRowAnimated) {
      setStartAnimation(true);
    }
  }, [inView, previousRowAnimated]);

  return (
    <div ref={ref} className="skills-row">
      {row.map((skill, skillIndex) => (
        <SkillItem
          key={skill.name}
          skill={skill}
          index={skillIndex}
          startAnimation={startAnimation}
          onEnd={skillIndex === row.length - 1 ? onEnd : undefined}
        />
      ))}
    </div>
  );
}

function SkillItem({ skill, index, startAnimation, onEnd }) {
  const itemRef = useRef();

  useEffect(() => {
    if (startAnimation && onEnd) {
      const handleAnimationEnd = () => {
        onEnd();
        itemRef.current.removeEventListener("animationend", handleAnimationEnd);
      };
      itemRef.current.addEventListener("animationend", handleAnimationEnd);
    }
  }, [startAnimation, onEnd]);

  return (
    <div
      ref={itemRef}
      className={`skill-item ${startAnimation ? "in-view" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-content">
        <img
          src={`${process.env.PUBLIC_URL}/logos/${skill.logo}`}
          alt={`${skill.name} logo`}
          style={{ width: "85px", height: "85px", marginBottom: "10px" }}
        />
        <span>{skill.name}</span>
      </div>
    </div>
  );
}

export default Skills;
