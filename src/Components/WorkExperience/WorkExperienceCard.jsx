import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const WorkExperienceCard = ({
  iconColor,
  jobTitle,
  company,
  date,
  responsibilities,
  certificateLink,
  techStack,
}) => {
  return (
    <div className="relative group">
      {/* Timeline Dot */}
      <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-sky-500 shadow-[0_0_10px_#38bdf8]"></div>

      <div
        className="backdrop-blur-lg bg-white/5 border border-white/10 
        rounded-xl p-6 transition-all duration-300 
        hover:bg-white/10 hover:border-sky-400/40 
        hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]"
      >
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 shadow-md group-hover:rotate-6 transition">
            <FaLaptopCode color={iconColor || "#38bdf8"} size={26} />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white">
              {jobTitle}
            </h2>
            <p className="text-sky-400 text-sm">{company}</p>
            <p className="text-gray-500 text-xs italic">{date}</p>
          </div>
        </div>

        {/* Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-slate-800/80 px-2 py-1 rounded-md text-sky-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Responsibilities */}
        <ul className="text-sm text-gray-300 space-y-2 mb-4">
          {responsibilities?.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-sky-400">▹</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Certificate */}
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-4 py-1.5 rounded-md 
            bg-gradient-to-r from-sky-500 to-blue-600 text-white 
            hover:opacity-90 transition-all duration-300 shadow-md"
          >
            View Certificate →
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
