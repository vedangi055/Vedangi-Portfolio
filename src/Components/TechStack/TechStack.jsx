import React, { useState } from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const TechStack = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };
  return (
    <div
      id="TechStack"
      className="p-10 md:p-20 bg-blue-400 shadow-xl mx-0 md:mx-20 bg-opacity-50 rounded-lg p-12 mt-10"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold font-mono mb-6 hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
        TECHONOLOGIES
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap gap-10">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("React")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="p-3 bg-gray-300 flex items-center rounded-2xl shadow-2xl hover:bg-sky-800 transition-all duration-300">
              <FaReact color="#61DAFB" size={50} />
            </span>

            {hoveredIcon === "React" && (
              <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                React
              </span>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("HTML")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="p-3 bg-gray-300 flex items-center rounded-2xl shadow-2xl hover:bg-orange-900 transition-all duration-300">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            {hoveredIcon === "HTML" && (
              <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                HTML5
              </span>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("CSS")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="p-3 bg-gray-300 flex items-center rounded-2xl shadow-2xl hover:bg-sky-900 transition-all duration-300">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            {hoveredIcon === "CSS" && (
              <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                CSS3
              </span>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("JavaScript")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="p-3 bg-gray-300 flex items-center rounded-2xl shadow-2xl hover:bg-yellow-900 transition-all duration-300">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            {hoveredIcon === "JavaScript" && (
              <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                JavaScript
              </span>
            )}
          </div>

          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span> */}
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
