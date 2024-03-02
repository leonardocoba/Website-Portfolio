function Education({ isNightMode }) {
  // Define the background color for dark mode
  const darkModeBackgroundColor = "rgb(38, 44, 58)"; // This is the same blue-grey color used before
  const lightModeBackgroundColor = "lightgrey"; // Define the color for light mode

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "15vh",
      }}
    >
      <h1>My Education</h1>
      <div
        style={{
          height: "300px",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          backgroundColor: isNightMode
            ? darkModeBackgroundColor
            : lightModeBackgroundColor,
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/imgs/uf.png`}
            alt="University Logo"
            style={{ maxWidth: "100%", maxHeight: "200%" }}
          />
        </div>

        {/* Content container */}
        <div style={{ width: "70%", padding: "20px", textAlign: "left" }}>
          <h3 style={{ margin: 0 }}>University of Florida</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>GPA: 3.4</p>
          <p>• Minor in Entrepreneurship</p>
          <p>
            • Major Course work: Data Structures and Algorithms, Information and
            Databases, Data Science for ECE, Intro to SWE, Artificial
            Intelligence Fundamentals
          </p>
          <p>
            • Artifical Intelligence fundamentals and Applications Certification
            (IP){" "}
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default Education;
