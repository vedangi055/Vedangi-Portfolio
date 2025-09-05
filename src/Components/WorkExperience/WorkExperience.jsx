import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import cert1 from "../../assets/Coditas.pdf";
import cert2 from "../../assets/GEL.pdf";

const WorkExperience = () => {
  return (
    <div
      id="WorkExperience"
      className="p-10 md:p-20 bg-blue-400 shadow-xl mx-0 md:mx-20 bg-opacity-50 rounded-lg p-12 mt-10"
    >
      <h1 className="text-2xl md:text-4xl text-green-200 font-bold font-mono mb-6 hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
        WORK EXPERIENCE
      </h1>
      <div className="flex flex-col md:flex-row justify-left gap-8">
        <WorkExperienceCard
          iconColor="#FFFACD"
          jobTitle="Trainee Software Engineer"
          company="Goa Electronics Ltd."
          date="Jun 2023 - Present"
          responsibilities={[
            "Designed and deployed full-stack software solutions.",
            "Built Call Center Management (React.js) for calls, customer support, and workflows.",
            "Developed GelJira for ticketing, task management, leave requests, and attendance tracking.",
            "Created Bhumija (React.js) for ore management and tripsheet automation.",
            "Designed CM Dashboard in Power BI with advanced DAX and database integration for scheme monitoring.",
          ]}
        />
        <WorkExperienceCard
          iconColor="#FFD700"
          jobTitle="Associate Software Engineer"
          company="Coditas Solutions LLP, Pune"
          date="Sept 2022 - Dec 2022"
          responsibilities={[
            "Learned Node.js and JavaScript through self-study and practical projects.",
            "Designed Task Management System enabling task tracking through CRUD APIs with backend data management.",
            "Built dynamic REST APIs using Node.js and Express.js.",
            "Tested and validated APIs using Postman.",
          ]}          
          certificateLink={cert1}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
