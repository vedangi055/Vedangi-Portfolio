import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export const CertificationsCard = ({
  title,
  source,
  certificateLink,
  iconColor,
}) => {
  return (
    <div className="flex gap-4 bg-sky-900 mt-4 rounded-lg p-4 items-center w-full">
      {/* Icon with fixed size */}
      <div className="flex-shrink-0">
        <FaLaptopCode color={iconColor || "#4285F4"} size={50} />
      </div>
      
      {/* Text content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-white text-lg font-bold font-mono break-words">
          {title}
        </h3>
        <h6 className="text-white font-thin">Source: {source}</h6>
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificationsCard;
