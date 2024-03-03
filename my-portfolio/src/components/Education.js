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
        paddingTop: "5vh", // Space above the title
        paddingBottom: "5vh", // Space below the content
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
          margin: "0 auto", // Centers the card in the container
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
            style={{ maxHeight: "100%", maxWidth: "250px" }} // Adjusted image size
          />
        </div>
        <div
          style={{
            width: "70%",
            padding: "20px", // Uniform padding for top and bottom
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // This centers the content vertically
          }}
        >
          <h3 style={{ margin: "0", lineHeight: "1.5" }}>
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
