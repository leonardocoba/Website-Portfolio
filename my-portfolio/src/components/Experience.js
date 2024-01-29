import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "15rem" }}>
        My Experience
      </h1>
      <div className="timeline">
        <div className="container left-container">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/carrebra.svg`}
            alt="Carrebra Logo" // Added alt attribute for accessibility
          />
          <div className="text-box">
            <h2>Carrebra Software Developer Intern</h2>
            <small>September 2023 - December 2023</small>
            <p>
              I worked as a Software Developer Intern with a startup company
              called Carrebra Inc. The company focused on generative Artificial
              Intelligence and applying those images on different products. I
              worked on the FERN stack development implementing OpenAI APIs,
              fixed UX/UI features, and the user authentication for signing in,
              signing out, and changing emails through Firebase.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/shpe.png`}
            alt="SHPE Logo" // Added alt attribute for accessibility
          />
          <div className="text-box">
            <h2>SHPE Autonomous Vehicle Team Member (Programmer)</h2>
            <small>September 2023 - Present</small>
            <p>
              I worked as a Software Developer Intern with a startup company
              called Carrebra Inc. The company focused on generative Artificial
              Intelligence and applying those images on different products. I
              worked on the FERN stack development implementing OpenAI APIs,
              fixed UX/UI features, and the user authentication for signing in,
              signing out, and changing emails through Firebase.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/research.png`}
            alt="Research Logo" // Added alt attribute for accessibility
          />
          <div className="text-box">
            <h2>
              Undergraduate Research Assistant for the Machine Learning
              Laboratory
            </h2>
            <small>November 2023 - December 2023</small>
            <p>
              I worked as a Software Developer Intern with a startup company
              called Carrebra Inc. The company focused on generative Artificial
              Intelligence and applying those images on different products. I
              worked on the FERN stack development implementing OpenAI APIs,
              fixed UX/UI features, and the user authentication for signing in,
              signing out, and changing emails through Firebase.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/microsoft.png`}
            alt="Microsoft Logo" // Added alt attribute for accessibility
          />
          <div className="text-box">
            <h2>Incoming Microsoft SWE Intern</h2>
            <small>May 2024 - July 2024</small>
            <p>
              I will be working as a SWE Intern at Microsoft in Atlanta,
              Georgia, where I will improve my skills and join the Azure Cloud
              Computing Team.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
