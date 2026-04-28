import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/7358653-removebg-preview.png";

const About = () => {
  return (
    <section
      id="About"
      className="relative py-16 px-6 md:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="md:w-1/3 w-full flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={AboutImg}
            alt="Vedangi - Frontend Developer & Aspiring Project Manager"
            className="w-[280px] md:w-[350px] 
            drop-shadow-[0_0_25px_rgba(139,92,246,0.4)] 
            hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-2/3 text-gray-300 text-base md:text-lg leading-relaxed space-y-4"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Hi, I’m <span className="text-white font-semibold">Vedangi</span>, a{" "}
            <span className="text-sky-400 font-medium">
              Frontend Developer transitioning into Project Management
            </span>{" "}
            with 2+ years of experience building and delivering web
            applications.
          </p>

          <p>
            I specialize in <span className="text-white">React.js</span>,{" "}
            <span className="text-white">JavaScript</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>, creating
            responsive and user-focused interfaces with clean architecture and
            smooth user experience.
          </p>

          <p>
            Beyond development, I actively contribute to{" "}
            <span className="text-purple-300">
              planning, coordination, and workflow improvement
            </span>
            — collaborating with teams, structuring tasks, and ensuring
            efficient delivery of features.
          </p>

          <p>
            I enjoy bridging the gap between{" "}
            <span className="text-sky-300">technical execution</span> and{" "}
            <span className="text-sky-300">business goals</span>, focusing on
            building impactful products while improving team efficiency and
            communication.
          </p>

          <p>
            I also work with <span className="text-yellow-300">Power BI</span>{" "}
            to create dashboards that transform data into meaningful insights
            for better decision-making.
          </p>

          {/* Growth Statement */}
          <p className="text-sm text-gray-400">
            Currently expanding my skills in Agile methodologies, stakeholder
            communication, and project lifecycle management.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="#Footer"
              className="
    relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full
    bg-white/10 dark:bg-white/5 backdrop-blur-lg
    border border-gray-300 dark:border-white/10
    text-gray-900 dark:text-white font-medium
    overflow-hidden
    transition-all duration-300
    hover:scale-105 hover:border-sky-400/40
    hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
    "
            >
              <span className="relative z-10">Let’s Connect</span>

              {/* Subtle glow layer */}
              <span
                className="
      absolute inset-0 opacity-0 
      bg-gradient-to-r from-purple-500/20 to-sky-500/20
      transition-opacity duration-300
      hover:opacity-100
      "
              ></span>

              <span className="relative z-10">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
