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
    <div className="flex gap-6 bg-slate-950 bg-opacity-50 mt-4 rounded-lg p-4 items-start w-full">
      {/* Icon wrapper */}
      <div className="flex-shrink-0">
        <FaLaptop color={iconColor} size={50} />
      </div>

      {/* Text content */}
      <div className="text-white">
        <h1 className="leading-tight text-bold text-xl">{internshipTitle}</h1>
        <h3 className="leading-tight font-thin mb-2">{company}</h3>
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
      </div>
    </div>
  );
};

export default InternshipsCard;
