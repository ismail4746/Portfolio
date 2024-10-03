import React from 'react';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa'; // Importing icons

const experiences = [
  {
    id: 1,
    company: "Qwerty Experts",
    role: "Full Stack Developer",
    duration: "June 2024 - August 2024",
    responsibilities: [
      "Developed and maintained a fully functional e-commerce platform using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Led the front-end development of the Aroma Aura Fragrances project, implementing responsive design and improving website performance by 30%.",
      "Collaborated with cross-functional teams to design and implement new features, including product recommendations, user authentication, and payment gateways.",
    ],
    achievements: [
      "Successfully optimized the performance of the e-commerce site, reducing page load time by 20%.",
      "Implemented a user-friendly admin panel for managing product listings, orders, and customer data.",
    ],
  },
];

const Experience = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #001F3F, #003F5C)' }} className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16 tracking-wide uppercase">
          Professional Experience
        </h2>
        <div className="flex justify-center">
          <div 
            className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl w-full md:w-3/4 lg:w-1/2" // Responsive width
            style={{ height: 'auto', minHeight: '300px' }} // Set a min-height if needed
          >
            {/* Role and Company */}
            <div className="border-b border-teal-500 pb-2 mb-4"> {/* Reduced margin */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-teal-400">{experiences[0].role}</h3>
              <p className="text-base md:text-lg text-white italic">{experiences[0].company} | {experiences[0].duration}</p>
            </div>

            {/* Responsibilities */}
            <h4 className="text-xl md:text-2xl font-semibold text-teal-500 mb-4 border-b-2 border-teal-400 pb-2">
              Key Responsibilities
            </h4>
            <ul className="space-y-2"> {/* Reduced space between items */}
              {experiences[0].responsibilities.map((task, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <FaCheckCircle className="text-teal-400 w-5 h-5 mt-1" /> {/* Adjusted icon size */}

                  {/* Task Description */}
                  <span className="text-gray-200 text-sm md:text-lg leading-relaxed">
                    {task}
                  </span>
                </li>
              ))}
            </ul>

            {/* Achievements */}
            <h4 className="text-xl md:text-2xl font-semibold text-teal-500 mt-4 mb-4 border-b-2 border-teal-400 pb-2">
              Achievements
            </h4>
            <ul className="space-y-2"> {/* Reduced space between items */}
              {experiences[0].achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <FaTrophy className="text-yellow-400 w-5 h-5 mt-1" /> {/* Adjusted icon size */}

                  {/* Achievement Description */}
                  <span className="text-gray-200 text-sm md:text-lg leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
