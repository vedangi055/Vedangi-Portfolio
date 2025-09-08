import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/7358653-removebg-preview.png";

const About = () => {
  return (
    <div
      id="About"
      className="relative text-white flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md shadow-lg mx-0 md:mx-10 rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden"
    >
      {/* Gradient Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 [mask-image:linear-gradient(white,transparent,white)]"></div>

      {/* Heading */}
      <motion.h2
        className="absolute top-6 left-6 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600
 font-sans"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        ABOUT
      </motion.h2>

      {/* Image */}
      <motion.img
        className="h-64 md:h-80 md:w-1/3 w-full object-cover rounded-lg 
             shadow-[0_0_15px_rgba(56,189,248,0.4)] 
             hover:scale-105 transition-transform duration-300"
        src={AboutImg}
        alt="Vedangi - Frontend Developer from Goa"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        loading="lazy"
      />

      {/* Text Content */}
      <motion.div
        className="md:w-2/3 w-full md:pl-10 mt-6 md:mt-0 relative z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{ fontStyle: "oblique" }}
        >
          Hi, I'm <span className="font-semibold text-purple-200">Vedangi</span>
          , a{" "}
          <span className="font-semibold text-blue-900">
            Frontend Developer
          </span>{" "}
          from Goa with <span className="font-semibold">2+ years</span> of
          experience specializing in React.js. <br />
          <br />I build responsive, user-friendly web applications with
          expertise in{" "}
          <span className="underline decoration-purple-800">
            JavaScript
          </span>,{" "}
          <span className="underline decoration-blue-800">Tailwind CSS</span>,
          and{" "}
          <span className="underline decoration-pink-800">API integration</span>
          . <br />
          <br />I also create interactive dashboards in{" "}
          <span className="font-semibold text-yellow-200">Power BI</span>,
          turning data into meaningful insights. Passionate about solving
          challenges, crafting smooth user experiences, and exploring new
          technologies that make the web more engaging.
        </p>

        {/* CTA Button */}
        {/* <div className="mt-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Let’s Connect 🚀
          </motion.a>
        </div> */}
      </motion.div>
    </div>
  );
};

export default About;
