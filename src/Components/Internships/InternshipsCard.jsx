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
      className="flex flex-col md:flex-row gap-6 bg-slate-950 bg-opacity-60 mt-4 rounded-xl p-6 
                 items-start w-full hover:bg-slate-900 hover:bg-opacity-80 hover:scale-105 
                 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {/* Icon Section */}
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 shadow-md">
        <FaLaptop color={iconColor || "#34d399"} size={30} />
      </div>

      {/* Content Section */}
      <div className="text-white w-full">
        <h1 className="font-bold text-lg md:text-xl">{internshipTitle}</h1>
        <h4 className="text-sky-300 font-medium mb-1">{company}</h4>
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

export default InternshipsCard;
