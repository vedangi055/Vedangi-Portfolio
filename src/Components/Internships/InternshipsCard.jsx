import React from "react";
import { FaLaptop } from "react-icons/fa";

const InternshipsCard = ({
  iconColor,
  internshipTitle,
  company,
  date,
  certificateLink,
  responsibilities,
}) => {
  return (
    <div
      className="group relative p-6 rounded-xl 
      bg-white/5 backdrop-blur-lg border border-white/10 
      hover:bg-white/10 hover:border-purple-400/40 
      transition-all duration-300 
      hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg 
      bg-slate-800 mb-4 group-hover:rotate-6 transition"
      >
        <FaLaptop color={iconColor || "#a855f7"} size={22} />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-white mb-1">
        {internshipTitle}
      </h2>

      {/* Company */}
      <p className="text-purple-300 text-sm mb-1">{company}</p>

      {/* Date */}
      <p className="text-gray-500 text-xs italic mb-3">{date}</p>

      {/* Responsibilities */}
      <ul className="text-sm text-gray-300 space-y-2 mb-4">
        {responsibilities?.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-purple-400">▹</span>
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
          className="
  relative inline-flex items-center gap-1 text-sm px-4 py-1.5 rounded-md
  bg-white/10 dark:bg-white/5 backdrop-blur-lg
  border border-gray-300 dark:border-white/10
  text-gray-800 dark:text-white
  overflow-hidden
  transition-all duration-300
  hover:scale-105 hover:border-purple-400/40
  hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]
  "
        >
          <span className="relative z-10">View Certificate</span>

          {/* subtle glow */}
          <span
            className="
    absolute inset-0 opacity-0
    bg-gradient-to-r from-purple-500/20 to-indigo-500/20
    transition-opacity duration-300
    hover:opacity-100
    "
          ></span>

          <span className="relative z-10">→</span>
        </a>
      )}
    </div>
  );
};

export default InternshipsCard;
