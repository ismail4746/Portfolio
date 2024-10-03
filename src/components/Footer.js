import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-4xl font-bold tracking-wide" style={{ fontFamily: 'Amsterdam Three, sans-serif' }}>Muhammad Ismail</h3>
            <p className="text-teal-500 text-lg italic">Innovating at the Intersection of Technology and Design</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/ismail4746"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300 text-lg font-medium"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/muhammad-ismail-343363282"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300 text-lg font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@muhammadismail4746"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300 text-lg font-medium"
            >
              Medium
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Muhammad Ismail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
