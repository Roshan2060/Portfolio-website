import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const sections = ["home", "about", "skills", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          // Adjust offset (100) depending on navbar height or preference
          if (top <= 100) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount in case page loaded scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer font-medium hover:text-blue-600 ${
      activeSection === section ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
    }`;

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <HashLink smooth to="#home" className="text-2xl font-bold text-blue-600">
              Roshan Bhatt
            </HashLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <HashLink key={section} smooth to={`#${section}`} className={linkClass(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </HashLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-1 px-4 py-3">
            {sections.map((section) => (
              <HashLink
                key={section}
                smooth
                to={`#${section}`}
                onClick={() => setIsOpen(false)}
                className={linkClass(section) + " block py-2"}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </HashLink>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
