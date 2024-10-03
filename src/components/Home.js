import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ background: 'linear-gradient(to bottom, #001F3F, #003F5C)' }}>
      {/* Design Boxes with Centered Content */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between space-y-6 md:space-y-0 md:space-x-6">

        {/* Left Box: Contact Info */}
        <div className="flex justify-center items-center h-screen ">
          <div className="p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-tl-[70px] rounded-br-[70px] h-[350px] w-[300px] border-4 border-teal-500 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Info</h2>
            <div className="space-y-5 text-center">
              <div className="flex items-center justify-center text-white">
                <FaEnvelope className="mr-2" />
                <a href="mailto:muhammadismail4746@gmail.com" className="hover:underline">
                  muhammadismail4746@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center text-white">
                <FaPhone className="mr-2" />
                <span>+92 300 464 7160</span>
              </div>
              <div className="flex items-center justify-center text-white">
                <FaMapMarkerAlt className="mr-1 -mt-7" />
                <span>Nawab Town, Raiwind Road, Lahore, Pakistan</span>
              </div>
            </div>

            {/* Button to Review CV */}
            <a 
              href="/MyResume.pdf" // Path to your CV
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Review My CV
            </a>
          </div>
        </div>

        {/* Centered Content */}
        <div className="flex-1 text-center mx-4 mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-500">Hello!</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I'm <span className='text-teal-500'>Ismail,</span> Full Stack Developer
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            "I am a MERN Stack Developer with a passion for crafting dynamic web applications that deliver exceptional user experiences."
          </p>
          <a href="mailto:muhammadismail4746@gmail.com" className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300">
            Let's Talk
          </a>
        </div>

        {/* Right Box: Career Highlights and Technical Skills */}
        <div className="flex flex-col items-center mb-10 md:mb-0 mt-10 md:mt-20">
          {/* Certifications Box */}
          <div className="mt-6 p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-tr-[70px] rounded-bl-[70px] h-auto w-[300px] border-4 border-teal-500 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Certifications</h2>
            <p className="text-white text-sm text-center mb-4">Here are some of the certifications I've earned to enhance my skills in full-stack development:</p>
            <div className="flex flex-col space-y-2">
              {[
                { name: "WordPress Development", link: "https://lms.digiskills.pk/MyResults/MyResults.aspx" },
                { name: "Graphic Design", link: "https://lms.digiskills.pk/MyResults/MyResults.aspx" },
                { name: "Data Analytics & Business Intelligence", link: "https://lms.digiskills.pk/MyResults/MyResults.aspx" }
              ].map((cert, index) => (
                <div key={index} className="p-2 bg-teal-600 rounded-lg w-full">
                  <a href={cert.link} className="text-white hover:underline text-center block">{cert.name}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Box */}
          <div className="mt-6 p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-tl-[70px] rounded-br-[70px] h-auto w-[300px] border-4 border-teal-500 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white mb-6">Professional Development</h2>
            <p className="text-white text-sm text-center mb-4">I am currently enhancing my skills through:</p>
            <div className="flex flex-col space-y-2">
              {[
                "Courses in advanced JavaScript",
                "DevOps & Cloud Computing",
                "Learning Machine Learning"
              ].map((item, index) => (
                <div key={index} className="p-2 bg-teal-600 rounded-lg w-[250px]">
                  <span className="text-white text-sm text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Box for Social Media Links */}
    {/* Horizontal Box for Social Media Links */}
<div className="absolute top-20 left-8 p-4 bg-teal-500 flex items-center justify-between rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-auto h-10">
  <div className="flex space-x-4">
    <a href="https://github.com/ismail4746" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-white hover:text-teal-200 transition duration-300" size={30} />
    </a>
    <a href="https://www.linkedin.com/in/muhammad-ismail-343363282" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-white hover:text-teal-200 transition duration-300" size={30} />
    </a>
    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-white hover:text-teal-200 transition duration-300" size={30} />
    </a>
  </div>
</div>

    </div>
  );
};

export default Home;
