import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com"; // ✅ ADD

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bbi07zu",
        "template_ffbtw5l",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "0uobOfkfRb3atfBg2"
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        I'm always open to discussing new opportunities and interesting projects.
        Let’s create something amazing together!
      </p>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your message here..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I typically respond within 24 hours.</p>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>Email: sasinduyomal2002@gmail.com</span>
          </div>
          <div className="info-item">
            <FaGithub className="icon" />
            <span>GitHub: github.com/SasinduYomal</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="icon" />
            <span>LinkedIn: linkedin.com/in/sasindu-yomal-a42a3a36b</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
