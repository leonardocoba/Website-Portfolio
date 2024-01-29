import React from "react"; // Ensure React is imported if using JSX
import "./contact.css";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Contact Me</h1>
      <p>
        You can contact me at leonardocobaleda@ulf.edu or fill out the form
        below.
      </p>
      <div className="card" style={{ maxWidth: "500px", width: "140%" }}>
        <span className="title">Leave a Comment</span>
        <form className="form">
          <div className="group">
            <input type="text" id="name" name="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <textarea id="comment" name="comment" rows="5" required></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
