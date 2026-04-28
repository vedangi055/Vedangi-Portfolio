import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import cert1 from "../../assets/Coditas.pdf";
import cert2 from "../../assets/GEL.pdf";

const WorkExperience = () => {
  const experiences = [
    {
      iconColor: "#FFFACD",
      jobTitle: "Trainee Software Engineer",
      company: "Goa Electronics Ltd., Goa",
      date: "Jun 2023 - Present",
      responsibilities: [
        "Coordinated with cross-functional teams to gather and refine requirements.",
        "Led and developed a Call Center Management system using React.js, improving agent workflow efficiency by ~30%.",
        "Developed GelJira for ticketing, task management, leave requests, and attendance tracking.",
        "Developed Bhumija (React.js) for ore management and tripsheet automation.",
        "Designed CM Dashboard in Power BI with advanced DAX and database integration for scheme monitoring.",
      ],
      // certificateLink: cert2,
    },
    {
      iconColor: "#FFD700",
      jobTitle: "Associate Software Engineer",
      company: "Coditas Solutions LLP, Pune",
      date: "Sept 2022 - Dec 2022",
      responsibilities: [
        "Learned Node.js and JavaScript through self-study and practical projects.",
        "Designed Task Management System enabling task tracking through CRUD APIs with backend data management.",
        "Built dynamic REST APIs using Node.js and Express.js.",
        "Validated and debugged REST APIs using Postman, reducing integration issues during development.",
      ],
      // certificateLink: cert1,
    },
  ];
  return (
    <section
      id="WorkExperience"
      className="relative py-16 px-6 md:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black"
    >
      {/* Section Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-wide">
        Work Experience
      </h1>

      {/* Timeline Line */}
      <div className="relative border-l border-slate-700 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <WorkExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
