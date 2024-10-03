import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ backgroundColor: '#001F3F' }} className="text-white p-4 border-b-2 border-teal-500">
      <div className="flex justify-between items-center">
        {/* Name/Logo on the left */}
        <div className="text-3xl font-serif font-bold" style={{ fontFamily: 'Amsterdam Three, sans-serif' }}>
          Muhammad Ismail
        </div>

        {/* Centered navigation items on the same line */}
        <div className={`hidden md:flex flex-1 justify-center space-x-10`}>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/experience" className="hover:underline">Experience</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Social Media Links on the right side */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <a href="https://github.com/ismail4746" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-teal-200 transition duration-300" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ismail-343363282" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-teal-200 transition duration-300" size={30} />
          </a>
          <a href="https://instagram.com/m_ismail004" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-teal-200 transition duration-300" size={30} />
          </a>
        </div>
      </div>

      {/* Mobile menu items */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
        <div className="flex flex-col items-center space-y-2">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/experience" className="hover:underline">Experience</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
