import React from 'react';

const services = [
  {
    id: 1,
    title: "Front-End Development",
    description: "Expert in crafting responsive and user-friendly interfaces using React.js, ensuring optimal performance across all devices.",
  },
  {
    id: 2,
    title: "Back-End Development",
    description: "Proficient in building scalable server-side applications using Node.js and Express.js, focusing on security and efficiency.",
  },
  {
    id: 3,
    title: "Full-Stack Development (MERN Stack)",
    description: "Developing complete web applications with seamless integration of MongoDB, Express.js, React.js, and Node.js for a cohesive user experience.",
  },
  {
    id: 4,
    title: "Web Design",
    description: "Creating visually compelling designs that enhance user engagement and effectively communicate brand identity.",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    description: "Ensuring optimal user experiences through responsive design techniques, making websites accessible on all devices.",
  },
];

const Services = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #001F3F, #003F5C)' }} className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-wide uppercase">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 rounded-tr-[70px] rounded-bl-[70px]"
            >
              <h3 className="text-3xl font-semibold text-teal-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <a
                href="/projects" // Change to "/projects" if linking to another page
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-teal-600"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
