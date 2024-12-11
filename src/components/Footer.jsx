import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Title */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © 2024 FoodieHub, All Rights Reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <a href="#about" className="hover:text-gray-400 transition duration-300">
            About Us
          </a>
          <a href="#services" className="hover:text-gray-400 transition duration-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400 transition duration-300">
            Contact
          </a>
          <a href="#privacy" className="hover:text-gray-400 transition duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
