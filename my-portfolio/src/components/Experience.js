import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    title: "Carrebra Software Developer Intern",
    date: "September 2023 - December 2023",
    description:
      "I worked as a Software Developer Intern with a startup company called Carrebra Inc. The company focused on generative Artificial Intelligence and applying those images on different products. I worked on the FERN stack development implementing OpenAI APIs, fixed UX/UI features, and the user authentication for signing in, signing out, and changing emails through Firebase.",
    logo: "/imgs/carrebra.svg",
    position: "left",
  },
  {
    id: 2,
    title: "SHPE Autonomous Vehicle Team Member (Programmer)",
    date: "September 2023 - Present",
    description: "Participated in the SHPE Autonomous Vehicle program...",
    logo: "/imgs/shpe.png",
    position: "right",
  },
  {
    id: 3,
    title:
      "Undergraduate Research Assistant for the Machine Learning Laboratory",
    date: "November 2023 - December 2023",
    description:
      "I worked as a Software Developer Intern with a startup company called Carrebra Inc. The company focused on generative Artificial Intelligence and applying those images on different products. I worked on the FERN stack development implementing OpenAI APIs, fixed UX/UI features, and the user authentication for signing in, signing out, and changing emails through Firebase.",
    logo: "/imgs/research.png",
    position: "left",
  },
  {
    id: 4,
    title: "Incoming Microsoft SWE Intern",
    date: "May 2024 - July 2024",
    description:
      "I will be working as a SWE Intern at Microsoft in Atlanta, Georgia, where I will improve my skills and join the Azure Cloud Computing Team.",
    logo: "/imgs/microsoft.png",
    position: "right",
  },
];
function Experience({ isNightMode }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimations(true); // Start timeline animation when the first container is in view
    }
  }, [inView]);

  useEffect(() => {
    if (isNightMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isNightMode]);

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "12vh" }}>My Experience</h1>
      <div className={`timeline ${startAnimations ? "animate-timeline" : ""}`}>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            ref={index === 0 ? ref : null} // Only apply the ref to the first container
            className={`container ${experience.position}-container ${
              startAnimations ? "animate" : ""
            }`}
          >
            <img
              src={`${process.env.PUBLIC_URL}${experience.logo}`}
              alt={`${experience.title} Logo`}
              style={{ backgroundColor: "white" }}
            />
            <div className="text-box">
              <h2>{experience.title}</h2>
              <small>{experience.date}</small>
              <p>{experience.description}</p>
              <span className={`${experience.position}-container-arrow`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
