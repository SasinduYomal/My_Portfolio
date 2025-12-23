// Services.jsx
import React from 'react';
import './Services.css';
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaLaptopCode,
  FaBug,
} from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building high-performance, scalable websites using modern technologies like React, Node.js, and MongoDB.',
    icon: <FaCode />,
    color: '#60a5fa',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating clean and intuitive interfaces with a focus on user experience and accessibility.',
    icon: <FaPalette />,
    color: '#f472b6',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring every product looks great and functions smoothly across all screen sizes and devices.',
    icon: <FaMobileAlt />,
    color: '#34d399',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed matters. I analyze and optimize apps for fast load times and smooth interaction.',
    icon: <FaRocket />,
    color: '#facc15',
  },
  {
    title: 'Frontend Engineering',
    description: 'Modular, maintainable code architecture using React, Tailwind, Sass, and modern JavaScript.',
    icon: <FaLaptopCode />,
    color: '#a78bfa',
  },
  {
    title: 'Debugging & Testing',
    description: 'Delivering stable apps through unit tests, debugging tools, and quality assurance workflows.',
    icon: <FaBug />,
    color: '#f87171',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">What I Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-icon"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
