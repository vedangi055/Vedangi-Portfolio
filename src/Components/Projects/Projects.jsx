import React from "react";
import ProjectCard from "./ProjectCard";
import covidImg from "../../assets/blockchain.jpeg";
import taskImg from "../../assets/task-management-system.jpeg";
import portfolioImg from "../../assets/portfolio.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Digital Health Passport (Blockchain)",
      description:
        "Built a secure health passport using Hyperledger Fabric to store verifiable medical data with privacy and traceability.",
      image: covidImg,
      techStack: ["Blockchain", "Hyperledger", "Security"],
      liveLink:
        "https://www.ijraset.com/best-journal/digital-health-passport-using-blockchain",
    },
    {
      title: "Task Management System",
      description:
        "Developed a full-stack REST API with CRUD operations using Node.js, Express, and MongoDB for efficient task tracking.",
      image: taskImg,
      techStack: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/vedangi055/Task-Management-API",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a modern, responsive portfolio using React.js with smooth UI and optimized performance.",
      image: portfolioImg,
      techStack: ["React.js", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="Projects"
      className="py-16 px-6 md:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Projects
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;