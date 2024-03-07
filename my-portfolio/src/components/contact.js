import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact({ isNightMode }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation check for missing fields
    const name = e.target.user_name.value.trim();
    const email = e.target.user_email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_k80firp",
        "template_cfz30pj",
        form.current,
        "6cA4MQwtSfUBfK0ZP"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div
      className={isNightMode ? "dark-mode" : ""}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        paddingTop: "12vh",
        paddingBottom: " 12vh",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Contact Me</h1>
      <p style={{ marginBottom: "10px" }}>
        You can contact me at leonardocobaleda@ulf.edu or fill out the form
        below.
      </p>
      <div className={`card ${isNightMode ? "dark" : ""}`}>
        <span className="title">Leave a Comment</span>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="group">
            <input type="text" id="name" name="user_name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input type="email" id="email" name="user_email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <textarea id="comment" name="message" rows="5" required></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
