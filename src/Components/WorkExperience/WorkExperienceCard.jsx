import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const WorkExperienceCard = ({
  iconColor,
  jobTitle,
  company,
  date,
  responsibilities,
  certificateLink,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 md:gap-10 h-auto bg-slate-950 bg-opacity-60 mt-4 
                 rounded-xl p-6 items-start w-full 
                 hover:bg-slate-900 hover:bg-opacity-80 hover:scale-105 
                 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {/* Icon Section */}
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 shadow-md">
        <FaLaptopCode color={iconColor || "#4285F4"} size={30} />
      </div>

      {/* Content Section */}
      <div className="text-white w-full">
        <h1 className="font-bold text-lg md:text-xl">{jobTitle}</h1>
        <h3 className="text-sky-300 font-medium mb-1">{company}</h3>
        <p className="text-gray-400 text-sm mb-3">{date}</p>

        <ul className="text-sm list-disc list-inside space-y-1 text-gray-200 mb-3">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded-md 
                       hover:bg-blue-500 transition-colors duration-300 shadow-sm"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
