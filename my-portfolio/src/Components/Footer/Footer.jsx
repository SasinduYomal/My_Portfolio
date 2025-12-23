import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Sasindu Yomal</h2>
        <p className="footer-tagline">Frontend Developer | React & UI Lover</p>

        <div className="footer-socials">
          <a href="mailto:sasinduyomal2002@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/SasinduYomal" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sasindu-yomal-a42a3a36b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Sasindu Yomal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
