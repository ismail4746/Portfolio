import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional e-commerce (Perfumes) website with the name of Aroma Aura Fragrances built in MERN Stack.",
    image: project1,
    link: "https://github.com/ismail4746/aromaAura.git",
    liveLink: "https://aroma-aura.vercel.app/", // Add the live project link here
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills. This built on React.js with full functionalities.",
    image: project2,
    link: "https://github.com/ismail4746/react-portfolio.git",
    liveLink: "https://ismail-portfolio-three.vercel.app/#", // Add the live project link here
    techStack: ['React', 'CSS', 'JavaScript'],
  },
];

const Project = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #001F3F, #003F5C)' }} className="min-h-screen py-12 px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">My Professional Projects</h2>
      <div className="max-w-6xl mx-auto">
        {/* Overview Card */}
        <div className="border-2 border-teal-500 mt-16 rounded-lg shadow-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 flex flex-col mb-8">
          <h3 className="text-2xl font-semibold text-teal-200 mb-8">Projects Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-teal-600 rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 flex flex-col"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 md:h-60 object-cover rounded-lg mb-6" 
                />
                <h4 className="text-xl font-extrabold text-gray-200 mb-4">{project.title}</h4>
                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex space-x-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub and Live Project Links */}
                <div className="flex justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-teal-600 transition"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-teal-600 transition"
                  >
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
