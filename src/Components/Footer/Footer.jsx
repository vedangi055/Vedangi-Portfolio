import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-sky-900 via-sky-700 to-indigo-900 text-white p-10 md:p-12"
    >
      {/* Contact Me heading */}
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 hover:text-sky-200 transition-colors duration-300">
          Contact Me!
        </h1>
        <p className="text-sm md:text-base text-sky-200">
          Let's connect and build something amazing!
        </p>
      </div>

      {/* Social Media Icons */}
      <ul className="flex gap-6 md:gap-10 mt-4 md:mt-0 justify-center flex-wrap">
        <li>
          <a
            href="mailto:vedangibarve27@gmail.com"
            className="flex items-center justify-center"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white
                            hover:text-orange-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50
                            transition-all duration-300"
            >
              <MdOutlineEmail size={30} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/vedangi-barve"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white
                            hover:text-sky-400 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50
                            transition-all duration-300"
            >
              <CiLinkedin size={30} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vedangi055"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white
                            hover:text-gray-400 hover:scale-110 hover:shadow-lg hover:shadow-gray-400/50
                            transition-all duration-300"
            >
              <FaGithub size={30} />
            </div>
          </a>
        </li>
      </ul>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-4 md:mt-0 text-sm text-sky-200 hover:text-white underline transition-colors duration-300"
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
