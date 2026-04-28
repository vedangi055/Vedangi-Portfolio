import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="relative py-16 px-6 md:px-20 
      bg-gradient-to-b from-slate-950 via-slate-900 to-black 
      text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-sky-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Let’s Connect</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="mailto:vedangibarve27@gmail.com"
            className="group w-12 h-12 flex items-center justify-center 
            rounded-full bg-white/5 border border-white/10 
            hover:bg-white/10 hover:border-sky-400/40 
            transition-all duration-300"
          >
            <MdOutlineEmail size={22} className="group-hover:text-sky-400" />
          </a>

          <a
            href="https://linkedin.com/in/vedangi-barve"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center 
            rounded-full bg-white/5 border border-white/10 
            hover:bg-white/10 hover:border-sky-400/40 
            transition-all duration-300"
          >
            <CiLinkedin size={22} className="group-hover:text-sky-400" />
          </a>

          <a
            href="https://github.com/vedangi055"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center 
            rounded-full bg-white/5 border border-white/10 
            hover:bg-white/10 hover:border-sky-400/40 
            transition-all duration-300"
          >
            <FaGithub size={20} className="group-hover:text-sky-400" />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            ↑ Back to Top
          </button>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Vedangi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
