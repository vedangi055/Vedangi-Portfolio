import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <div
      id="WorkExperience"
      className="p-10 md:p-20 bg-blue-400 shadow-xl mx-0 md:mx-20 bg-opacity-50 rounded-lg p-12 mt-10"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold font-mono mb-6 hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
        WORK EXPERIENCE
      </h1>
      <div className="flex flex-wrap justify-left gap-8">
        <WorkExperienceCard
          iconColor="#4285F4"
          jobTitle="Trainee Software Engineer"
          company="Goa Electronics Ltd."
          date="Jun 2023 - Present"
          responsibilities={["Tech Stack: React.js, JavaScript, HTML, CSS"]}
        />
        <WorkExperienceCard
          iconColor="#4285F4"
          jobTitle="Associate Software Engineer"
          company="Coditas Solutions LLP, Pune"
          date="Sept 2022 - Dec 2022"
          responsibilities={["Tech Stack: Node.js, JavaScript"]}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
