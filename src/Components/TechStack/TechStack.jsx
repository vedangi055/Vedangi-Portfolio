import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiPowerbi,
  SiDotnet,
} from "react-icons/si";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      skills: [
        <FaReact />,
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <SiTailwindcss />,
      ],
    },

    {
      title: "Backend",
      skills: [<FaNodeJs />, <SiExpress />, <SiDotnet />],
    },

    {
      title: "Tools & Platforms",
      skills: [<FaGitAlt />, <SiPostman />, <SiPowerbi />],
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
            className="
              bg-white/5 backdrop-blur-lg
              border border-white/10
              rounded-2xl p-6
              hover:bg-white/10
              hover:border-sky-400/30
              transition-all duration-300
            "
          >
            {/* Category Title */}
            <h2 className="text-2xl font-semibold mb-6 text-sky-400">
              {category.title}
            </h2>

            {/* Icons */}
            <div className="flex flex-wrap gap-5">
              {category.skills.map((icon, i) => (
                <div
                  key={i}
                  className="
                    w-16 h-16
                    flex items-center justify-center
                    rounded-2xl
                    bg-slate-800/70
                    border border-slate-700
                    text-3xl text-sky-400
                    hover:scale-110
                    hover:border-sky-400
                    hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]
                    transition-all duration-300
                  "
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
