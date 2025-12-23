// Portfolio.jsx
import React from 'react';
import './Portfolio.css';
import Salon from '../../assets/Salon.png' // Adjust path as needed
import Food_Ordering from '../../assets/Food_Ordering.png'; // Adjust path as needed
import Home_Repair from '../../assets/Home_Repair.png'; // Adjust path as needed

const projects = [
 {
    title: 'Home Repair & Technician Booking Website',
    image: Home_Repair,
    description: 'A Home Repair & Technician Booking Website built with React.js, Node.js, Express.js, MongoDB, CSS.',
    code: 'https://github.com/SasinduYomal/Home-Repair-Website',
  },
  {
    title: 'Food Ordering Website',
    image: Food_Ordering,
    description: 'I Build a Food Ordering Frontend web site Using React JS.',
    code: 'https://github.com/SasinduYomal/Food-Ordering-Website',
  },
  {
    title: 'Salon Website ',
    image: Salon,
    description: 'My Salon Website built using HTML And CSS, showcasing my work and skills.',
    code: 'https://github.com/SasinduYomal/My_Salon',
  },
 
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">My Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-buttons">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
                
              </div>
               
            </div>
            
          ))}
          
        </div>
        <div className="portfolio-button">
                  <a
                    href="https://github.com/SasinduYomal?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Projects
                  </a>
                </div>
      </div>
    </section>
  );
};

export default Portfolio;
