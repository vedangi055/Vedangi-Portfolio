import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export const CertificationsCard = ({
  title,
  source,
  certificateLink,
  iconColor,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 bg-slate-950 bg-opacity-60 mt-4 rounded-xl p-6 
                 items-start w-full md:w-4/5 lg:w-3/4 mx-auto
                 hover:bg-slate-900 hover:bg-opacity-80 hover:scale-105 
                 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {/* Icon Section */}
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 shadow-md">
        <FaLaptopCode color={iconColor || "#4285F4"} size={30} />
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-grow text-white">
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <p className="text-sky-300 font-medium mb-2">Source: {source}</p>

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

export default CertificationsCard;
