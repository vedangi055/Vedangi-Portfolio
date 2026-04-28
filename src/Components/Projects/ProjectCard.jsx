import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  github,
  liveLink,
}) => {
  return (
    <div
      className="group rounded-xl overflow-hidden 
      bg-white/5 backdrop-blur-lg border border-white/10 
      hover:bg-white/10 hover:border-sky-400/40 
      transition-all duration-300 
      hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover 
          group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-300">{description}</p>

        {/* Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-md 
                bg-slate-800 border border-slate-700 
                text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white 
              hover:text-sky-400 transition duration-300"
            >
              <FaGithub /> Code
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white 
              hover:text-sky-400 transition duration-300"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
