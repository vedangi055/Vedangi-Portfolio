import React from "react";
import ProjectCard from "./ProjectCard";
import covidImg from "../../assets/blockchain.jpeg";
import taskImg from "../../assets/task-management-system.jpeg";
import portfolioImg from "../../assets/portfolio.jpeg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-10 md:p-20 text-white bg-blue-400 shadow-xl mx-0 md:mx-20 bg-opacity-50 rounded-lg mt-10 mb-20"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold font-mono hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
        PROJECTS
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-between">
        <div className="flex-1 min-w-[250px] flex">
          <ProjectCard
            title="Covid Health Passport Using Blockchain"
            main="The project aims to create a digital health passport using Hyperledger Fabric blockchain to securely store verifiable data. It focuses on preserving privacy and data sovereignty while ensuring transparency and traceability."
            imgSrc={covidImg}
            publicationLink="https://www.ijraset.com/best-journal/digital-health-passport-using-blockchain"
          />
        </div>
        <div className="flex-1 min-w-[250px] flex">
          <ProjectCard
            title="Task Management System"
            main="Developed a REST API in MERN Stack for task management, featuring endpoints for creating, retrieving, updating, and deleting tasks. Built with Node.js and Express.js, it uses MongoDB for data storage and MongoDB Compass for management, providing a full-stack solution."
            imgSrc={taskImg}
            sourceCode="https://github.com/vedangi055/Task-Management-API"
          />
        </div>
        <div className="flex-1 min-w-[250px] flex">
          <ProjectCard
            title="Portfolio"
            main="The project which you are viewing right now😊!"
            imgSrc={portfolioImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
