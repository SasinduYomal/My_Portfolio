// AboutMe.jsx
import React from 'react';
import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNode />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <FaFigma />, name: 'Figma' },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title typewriter">Who I Am</h2>

        <p className="about-subtitle">
          I’m a curious Full-Stack Developer with 3+ years of experience building scalable, user-first applications.
          Passionate about UI/UX, accessibility, and clean code. Always learning. Always building.
        </p>

        <div className="about-content">
          <div className="journey">
            <h3>My Journey 🚀</h3>
            <p>
              I started as a digital designer fascinated by the web. Over time, my obsession shifted to turning beautiful
              designs into functional, fast, and accessible code.
              <br /><br />
              Now I specialize in frontend development but love diving into backend challenges too. I’m driven by a desire to create elegant and efficient user experiences.
              <br /><br />
              Beyond the screen, I contribute to open source, mentor juniors, and sip coffee while exploring tech trends.
            </p>
          </div>

          <div className="skills">
            <h3>Tech Toolbox 🧰</h3>
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
