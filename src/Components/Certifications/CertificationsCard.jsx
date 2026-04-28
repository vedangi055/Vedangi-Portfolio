import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificationsCard = ({ title, source, link }) => {
  return (
    <div
      className="min-w-[260px] max-w-[280px] p-5 rounded-xl 
      bg-white/5 backdrop-blur-lg border border-white/10 
      hover:bg-white/10 hover:border-sky-400/40 
      transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
    >
      {/* Title */}
      <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">
        {title}
      </h3>

      {/* Source */}
      <p className="text-xs text-sky-400 mb-4">{source}</p>

      {/* CTA */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs text-white 
        hover:text-sky-400 transition duration-300"
      >
        View Certificate <FaExternalLinkAlt size={10} />
      </a>
    </div>
  );
};

export default CertificationsCard;