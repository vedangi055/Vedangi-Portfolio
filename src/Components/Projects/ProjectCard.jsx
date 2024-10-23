import React from "react";

const ProjectCard = ({ title, main, imgSrc, publicationLink, sourceCode }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-sky-800 shadow-xl shadow-slate-900 rounded-2xl justify-center transition duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:bg-sky-900">
      <img className="p-4" src={imgSrc} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2">
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-1 px-2 text-sm md:text-md hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </a>
        )}
        {publicationLink && (
          <a
            href={publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-1 px-2 text-sm md:text-md hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Publication
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
