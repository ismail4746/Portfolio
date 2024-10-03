import React from 'react';
import Image from '../assets/ismail1.png'; // Replace with your actual image path

const About = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #001F3F, #003F5C)' }} className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl border-2 border-teal-500">
        
        {/* Left Side - Profile Image in a Card */}
        <div className="relative w-full md:w-[300px] h-[400px] overflow-hidden rounded-6xl shadow-lg mt-10 md:mt-56 md:ml-6">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-teal-400 transform -skew-y-6 z-0"></div>    
          {/* Image Section */}
          <div className="absolute top-0 left-0 right-0 h-full">
            <img
              src={Image} // Your image
              alt="Stylish Profile"
              className="object-cover h-full w-full rounded-t-3xl z-10" // Updated classes
            />
          </div>
        </div>
        
        {/* Right Side - Introduction */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#001F3F] to-[#003F5C] p-6">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            
            {/* Profile Card */}
            <div className="p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 h-auto w-full md:w-[270px] ml-0 md:ml-20 border-2 border-teal-500">
              <h3 className="text-2xl font-semibold text-white mb-4">Who Am I?</h3>
              <p className="text-white">
                I'm a passionate front-end developer with a focus on creating interactive and user-friendly web applications. With experience in HTML, CSS, and JavaScript, I enjoy turning complex problems into simple and beautiful solutions.
              </p>
            </div>

            {/* Skills Card */}
            <div className="mt-6 p-6 -ml-12 bg-teal-400 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-tr-[70px] rounded-bl-[70px] h-auto w-full md:w-[300px] border-4 border-teal-500 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold text-white mb-4">My Skills</h2>
              <ul className="flex flex-wrap justify-center space-x-2 space-y-2">
                {["React", "Tailwind CSS", "Node.js", "JavaScript", "Git & GitHub"].map(skill => (
                  <li key={skill} className="p-2 bg-teal-900 rounded-lg flex items-center justify-center w-auto h-auto px-4">
                    <span className="text-white text-center">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

          {/* Interests Card */}
<div className="mt-0 p-6 bg-teal-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-tr-[70px] rounded-bl-[70px] h-auto w-full md:w-[350px] ml-0 md:ml-20 border-4 border-teal-600 flex flex-col justify-center">
  <h3 className="text-2xl font-semibold text-white mb-4">Interests</h3>
  <p className="text-white">
    I love exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development. In my free time, I enjoy reading and photography.
  </p>
</div>

{/* Contact Info Card */}
<div className="p-6 border-2 border-teal-400 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 h-auto w-full md:w-[210px] -mt-0 ml-0 md:ml-10 flex flex-col">
  <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
  <p className="text-white mb-4">
    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
  </p>
  <div className="flex flex-col space-y-2">
    <a
      href="mailto:your-email@example.com" // Replace with your email
      className="bg-teal-500 text-white px-2 py-2 rounded-lg text-center hover:bg-teal-700 transition"
    >
      Email Me
    </a>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
