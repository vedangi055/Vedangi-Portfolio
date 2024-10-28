import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  const toggleMenu = () => {
    openMenu((prev) => !prev);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <img src="src/assets/logo.png" className="w-50 h-12" alt="VEDANGI" />

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-30 mt-10 p-y2 font-semibold md:mt-5 px-2 rounded-xl md:border-none md:bg-transparent bg-sky-200 bg-opacity-40 text-center md:static md:mx-0 md:flex gap-6 md:space-y-0 space-y-5 transition-all duration-300 ease-in-out`}
      >
        <li>
          <a
            href="#About"
            className="bg-gray-800 bg-opacity-30 p-2 rounded-md transition duration-100 ease-in-out hover:shadow-lg hover:shadow-orange-100"
          >
            About
          </a>
        </li>

        <li className="relative group">
          <a
            className="bg-gray-800 bg-opacity-20 p-2 rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-100"
          >
            Experience
          </a>
          {/* Submenu */}
          <ul className="absolute left-0 mt-2 bg-gray-800 bg-opacity-50 rounded-md shadow-lg z-10 hidden group-hover:block">
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

      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={toggleMenu}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
