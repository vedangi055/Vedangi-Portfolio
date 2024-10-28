import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex bg-black shadow-xl mx-0 md:mx-10 bg-opacity-30 rounded-lg p-12"
    >
      <div className="flex">
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-blue-300 mt-6 mb-4 w-full font-sans hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
          ABOUT
        </h2>
      </div>

      <div className="md:flex w-full items-center">
        <img
          className="h-72 md:h-80 md:w-1/3 w-full object-cover rounded-lg"
          src={AboutImg}
          alt="About img"
        />

        <div className="md:w-2/3 w-full md:pl-8">
          <p
            className="text-xl md:text-md leading-tight text-wrap"
            style={{ fontStyle: "oblique" }}
          >
            Hi, I'm Vedangi, a Frontend Developer from Goa with 1+ year of
            experience specializing in React.js development. Proficient in
            React.js, JavaScript, HTML, CSS, Tailwind CSS, and API integration.
            Experienced with form validation, state management, and UI/UX
            improvements. In my current role, I have worked on building dynamic
            and responsive web applications using React.js, including
            integrating complex forms with API data, validation systems, and
            managing state for dropdown fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
