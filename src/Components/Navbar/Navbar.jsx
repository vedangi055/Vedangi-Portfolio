import React, { useState } from "react";
import { FaSnowflake } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 px-6 md:px-20 py-4 
    bg-white/5 backdrop-blur-lg border-b border-white/10 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-semibold text-lg tracking-wide">
        <FaSnowflake className="text-sky-400" />
        {/* Vedangi */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <li>
          <a href="#About" className="hover:text-white transition duration-300">
            About
          </a>
        </li>

        {/* Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="cursor-pointer hover:text-white transition duration-300">
            Experience
          </span>

          <div
            className={`absolute top-6 left-0 w-48 rounded-lg 
    bg-white/5 backdrop-blur-lg border border-white/10 
    shadow-lg p-2 space-y-1 transition-all duration-200
    ${isHovered ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <a
              href="#WorkExperience"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Work Experience
            </a>
            <a
              href="#Internships"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Internships
            </a>
            <a
              href="#Certifications"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Certifications
            </a>
          </div>
        </li>

        <li>
          <a
            href="#Projects"
            className="hover:text-white transition duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#Footer"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white z-50"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-xl">☰</span>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-lg 
        border-l border-white/10 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden p-6`}
      >
        <ul className="flex flex-col gap-6 text-gray-300 mt-10">
          <a href="#About" onClick={() => setIsMenuOpen(false)}>
            About
          </a>

          <a href="#WorkExperience" onClick={() => setIsMenuOpen(false)}>
            Work Experience
          </a>

          <a href="#Internships" onClick={() => setIsMenuOpen(false)}>
            Internships
          </a>

          <a href="#Certifications" onClick={() => setIsMenuOpen(false)}>
            Certifications
          </a>

          <a href="#Projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>

          <a href="#Footer" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
