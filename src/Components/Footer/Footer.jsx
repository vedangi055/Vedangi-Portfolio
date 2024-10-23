import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-sky-900 text-white p-10 md:p-12 items-center justify-center"
    >
      <div>
        <h1 className="text-base md:text-3xl font-bold mb-2 text-left mr-20 hover:text-sky-200">
          Contact Me!
        </h1>
      </div>

      <ul className="text-sm md:text-xl flex gap-10">
        <li className="flex items-center">
          <a
            href="mailto:vedangibarve27@gmail.com"
            className="flex items-center gap-1 hover:underline"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-white border-2 border-white hover:text-orange-500">
              <MdOutlineEmail size={30} />
            </div>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://linkedin.com/in/vedangi-barve"
            className="flex items-center gap-1 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-white border-2 border-white hover:text-sky-600">
            <CiLinkedin size={30} />
            </div>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://github.com/vedangi055"
            className="flex items-center gap-1 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-white border-2 border-white hover:text-gray-500">
            <FaGithub size={30} />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
