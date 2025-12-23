import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="white">Sasindu</span>
          <span className="pink"> Yomal</span>
        </div>

        {/* Nav Links */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <button href="#contact" className="hire-btn">HIRE ME</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
