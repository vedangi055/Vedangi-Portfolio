import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const WorkExperienceCard = ({
  iconColor,
  jobTitle,
  company,
  date,
  responsibilities,
  certificateLink
}) => {
  return (
    <div className="flex gap-10 bg-slate-950 bg-opacity-50 mt-4 rounded-lg p-4 items-center w-full">
      <div className="flex-shrink-0">
        <FaLaptopCode color={iconColor || "#4285F4"} size={50} />
      </div>
      <span className="text-white">
        <h1 className="leading-tight text-bold text-xl">{jobTitle}</h1>
        <h3 className="leading-tight font-thin text-bold mb-2">{company}</h3>
        <p className="text-sm leading-tight font-thin">{date}</p>
        <ul className="text-sm p-2">
          {responsibilities.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          Certificate
        </a>
      </span>
    </div>
  );
};

export default WorkExperienceCard;
