import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "ASP.NET"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Postman", "Power BI"],
    },
  ];

  return (
    <section
      id="TechStack"
      className="py-16 px-6 md:px-20 bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12">Tech Stack</h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 
            rounded-xl p-6 hover:bg-white/10 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-sky-400">
              {category.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-md 
                  bg-slate-800/80 border border-slate-700 
                  text-gray-300 hover:text-white hover:border-sky-400 
                  transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
