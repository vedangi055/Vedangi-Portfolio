import React from "react";
import TextChange from "../TextChange";
import image from "../../assets/girl-coding.png";
import resume from "../../assets/Resume.pdf";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Glow Background Effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Left Content */}
      <div className="z-10 md:w-1/2 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
          <TextChange />
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-gray-300 max-w-xl leading-relaxed">
          Thanks for stopping by! This portfolio showcases my work, skills, and
          interests. I’m always open to collaborating, learning, and building
          impactful solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#Footer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 
            text-white font-medium shadow-md hover:scale-105 hover:shadow-sky-500/30 
            transition-all duration-300"
          >
            Contact Me
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 
            backdrop-blur-md bg-white/5 text-white font-medium 
            hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex justify-center items-center w-1/2 relative">
        <div className="absolute w-80 h-80 bg-sky-500/10 blur-3xl rounded-full"></div>

        <img
          src={image}
          alt="coding illustration"
          className="relative w-[350px] md:w-[450px] drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"
        />
      </div>
    </section>
  );
};

export default Home;
