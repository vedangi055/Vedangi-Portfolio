import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      {/* <img src="src/assets/logo.png" className="w-16 h-12" alt="VEDANGI" /> */}
      <FiLoader className="w-8 h-8 text-white" />

      {/* Hamburger Icon for small screens */}
      <button
        className="md:hidden text-white z-20"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {/* Conditional rendering of Hamburger or Cross icon */}
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menu items for smaller screens */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-wrap gap-6 md:space-y-0 space-y-5 md:static md:mx-0 md:px-0 transition-all duration-300 ease-in-out absolute top-20 right-5 bg-gray-800 md:bg-transparent bg-opacity-50 md:bg-opacity-0 rounded-md shadow-lg z-10 py-3 px-2`}
      >
        <li>
          <a
            href="#About"
            className="bg-gray-800 bg-opacity-30 p-2 rounded-md transition duration-100 ease-in-out hover:shadow-lg hover:shadow-orange-100"
          >
            About
          </a>
        </li>

        <li
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a className="bg-gray-800 bg-opacity-20 p-2 rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-100">
            Experience
          </a>
          {isHovered && (
            <ul className="absolute left-0 mt-2 bg-gray-800 bg-opacity-50 rounded-md shadow-lg z-10">
              <li className="p-2 hover:bg-gray-700 transition duration-200">
                <a href="#WorkExperience" className="text-white">
                  Work Experience
                </a>
              </li>
              <li className="p-2 hover:bg-gray-700 transition duration-200">
                <a href="#Internships" className="text-white">
                  Internships
                </a>
              </li>
              <li className="p-2 hover:bg-gray-700 transition duration-200">
                <a href="#Certifications" className="text-white">
                  Certifications
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="#Projects"
            className="bg-gray-800 bg-opacity-20 p-2 rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-100"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#Footer"
            className="bg-gray-800 bg-opacity-20 p-2 rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-100"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
