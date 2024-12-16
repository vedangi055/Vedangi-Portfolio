import React from "react";
import TextChange from "../TextChange";
import image from "../../assets/girl-coding.png";
import resume from "../../assets/Resume.pdf";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p
          className="text-sm md:text-2xl tracking-tight"
          style={{ marginTop: "10px", fontFamily: "serif", color: "darkslateblue" }}
        >
          Thank you for visiting! This portfolio highlights my work, skills, and experience. Feel free to explore and connect with me for any opportunities or collaborations!
        </p>

        <div className="mt-6 flex space-x-4">
          <a
            href="#Footer"
            className="sm:w-1/2 md:w-1/3 inline-block bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-purple-700 hover:shadow-lg text-center"
          >
            Contact Me
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-1/2 md:w-1/3 inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg ml-5 text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
