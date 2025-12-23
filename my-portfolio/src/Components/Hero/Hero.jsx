import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile_img.jpg"; // Adjust path as needed
import { FaArrowRight, FaCommentDots } from "react-icons/fa";
import TextType from "../TextType/TextType";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Section */}
        <div className="hero-text">
          <p className="welcome-text">HELLO THERE, WELCOME TO MY SITE</p>
          <h1 className="main-title">
            I’m <span className="highlight">Sasindu Yomal</span> 👋
          </h1>
          <h2 className="typing-alternative">
            <TextType
              text={[
                "Frontend Developer 💻",
                "React Enthusiast ⚛️",
                "UI/UX Designer 🎨",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <p className="description">
            I build beautiful, responsive websites with smooth user experiences.
            Passionate about clean code, creative interfaces, and interactive
            web design.
          </p>
          <div className="hero-buttons">
            <a href="/Sasindu_Yomal_CV.pdf" download className="btn primary">
              Download CV <FaArrowRight className="icon" />
            </a>

            <a href="#contact" className="btn secondary">
              CONTACT ME <FaCommentDots className="icon" />
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/SasinduYomal"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sasindu-yomal-a42a3a36b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:sasinduyomal2002@gmail.com">Email</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-image">
          <div className="image-box">
            <img src={profileImg} alt="Sasindu Yomal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
