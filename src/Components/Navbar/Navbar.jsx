import React, { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <img src="src/assets/logo.png" className="w-16 h-12" alt="VEDANGI" />

      <ul className="mx-4 mt-10 py-2 font-semibold md:mt-5 px-2 rounded-xl md:border-none md:bg-transparent bg-sky-200 bg-opacity-40 text-center md:static md:mx-0 md:flex gap-6 md:space-y-0 space-y-5 transition-all duration-300 ease-in-out">
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
                <a href="#WorkExperience" className="text-white">Work Experience</a>
              </li>
              <li className="p-2 hover:bg-gray-700 transition duration-200">
                <a href="#Internships" className="text-white">Internships</a>
              </li>
              <li className="p-2 hover:bg-gray-700 transition duration-200">
                <a href="#Certifications" className="text-white">Certifications</a>
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
