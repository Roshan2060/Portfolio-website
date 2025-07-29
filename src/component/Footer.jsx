import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Left side - Name/Logo */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">Roshan Bhatt</h1>
          <p className="text-sm text-gray-400 mt-1">Full Stack Developer</p>
        </div>

        {/* Quick Links */}
        <nav className="mb-6 md:mb-0 text-center md:text-left">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 hover:text-white">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500 transition-colors duration-200">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl">
          <a
            href="https://github.com/Roshan2060"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/roshan-bhatt-92543b261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/roshan.bhatta.35728"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-[#0F63D1] transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/roshan.bhatta12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roshan Bhatt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
