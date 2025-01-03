import React, { useState } from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    id="microsoft-dotnet"
    width="50"
    height="50"
  >
    <path
      fill="#1384C8"
      d="M40.335 78.188h-1.685v-9.65c0-.762.05-1.69.14-2.785h-.038c-.158.64-.303 1.104-.43 1.391l-4.902 11.044h-.821l-4.911-10.964c-.138-.306-.283-.799-.43-1.471h-.036c.052.576.081 1.509.081 2.804v9.631h-1.626v-14.371h2.225l4.409 10.021c.332.754.547 1.328.651 1.72h.069c.288-.785.517-1.375.688-1.762l4.505-9.979h2.11v14.371h.001zM45.523 78.188h-1.639v-10.263h1.639v10.263zm.283-13.942c0 .303-.106.555-.317.763-.207.208-.464.312-.764.312-.293 0-.548-.101-.757-.301-.209-.201-.313-.458-.313-.774 0-.296.104-.549.313-.754s.464-.305.757-.305c.3 0 .557.099.764.305.211.205.317.458.317.754M55.764 77.713c-.786.483-1.726.722-2.812.722-1.472 0-2.655-.488-3.561-1.464-.879-.947-1.321-2.169-1.321-3.667 0-1.681.48-3.042 1.45-4.077.964-1.036 2.261-1.553 3.892-1.553.892 0 1.683.174 2.375.521v1.687c-.766-.538-1.576-.805-2.445-.805-1.045 0-1.896.365-2.555 1.093-.687.745-1.034 1.742-1.034 2.985 0 1.194.317 2.14.948 2.837.633.694 1.476 1.042 2.538 1.042.897 0 1.738-.295 2.524-.882v1.561h.001zM63.604 69.59c-.289-.223-.706-.331-1.255-.331-.668 0-1.229.298-1.683.901-.516.673-.771 1.604-.771 2.795v5.232h-1.644v-10.262h1.644v2.116h.039c.241-.749.614-1.325 1.112-1.733.466-.373.992-.561 1.572-.561.438 0 .762.047.984.14l.002 1.703zM72.758 73.075c0-1.313-.296-2.317-.89-3.006-.575-.662-1.38-.992-2.416-.992-1.021 0-1.841.334-2.453 1.003-.647.715-.971 1.725-.971 3.035 0 1.228.308 2.192.93 2.879.618.692 1.45 1.039 2.494 1.039 1.08 0 1.907-.352 2.474-1.051.555-.684.832-1.652.832-2.907m1.685-.057c0 1.635-.462 2.949-1.382 3.934-.924.989-2.167 1.483-3.73 1.483-1.54 0-2.767-.494-3.665-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.5-3.162 1.503-4.139.929-.906 2.17-1.363 3.726-1.363 1.53 0 2.726.477 3.587 1.422.853.95 1.284 2.258 1.284 3.922M82.589 75.442c0 .84-.313 1.536-.942 2.091-.687.601-1.63.901-2.816.901-.971 0-1.822-.203-2.545-.618v-1.766c.804.654 1.692.983 2.667.983 1.301 0 1.952-.479 1.952-1.434 0-.401-.143-.734-.431-.991-.289-.262-.851-.576-1.685-.943-.859-.376-1.472-.762-1.833-1.163-.434-.476-.652-1.093-.652-1.854 0-.852.341-1.561 1.014-2.125.675-.567 1.542-.85 2.606-.85.815 0 1.546.159 2.194.481v1.654c-.677-.488-1.451-.732-2.329-.732-.544 0-.981.136-1.307.399-.329.27-.494.614-.494 1.034 0 .455.138.808.412 1.061.244.233.761.519 1.541.852.876.367 1.509.748 1.895 1.137.5.494.753 1.121.753 1.883M92.629 73.075c0-1.313-.297-2.317-.892-3.006-.575-.662-1.381-.992-2.415-.992-1.021 0-1.841.334-2.456 1.003-.646.715-.969 1.725-.969 3.035 0 1.228.309 2.192.924 2.879.626.692 1.459 1.039 2.501 1.039 1.082 0 1.906-.352 2.474-1.051.555-.684.833-1.652.833-2.907m1.688-.057c0 1.635-.466 2.949-1.388 3.934-.92.989-2.163 1.483-3.727 1.483-1.542 0-2.768-.494-3.667-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.504-3.162 1.502-4.139.928-.906 2.171-1.363 3.728-1.363 1.531 0 2.725.477 3.584 1.422.855.95 1.291 2.258 1.291 3.922M101.555 64.438c-.323-.179-.682-.27-1.091-.27-1.15 0-1.721.724-1.721 2.175v1.582h2.405v1.392h-2.405v8.871h-1.645v-8.871h-1.745v-1.392h1.745v-1.664c0-1.129.346-2.016 1.05-2.654.603-.555 1.34-.831 2.217-.831.508 0 .902.061 1.189.178v1.484zM108.039 78.085c-.388.222-.904.333-1.543.333-1.791 0-2.687-1.005-2.687-3.014v-5.867h-1.416v-1.391h1.416v-2.047h1.644v2.047h2.228v1.391h-2.228v5.633c0 .699.138 1.209.414 1.525.276.317.641.474 1.093.474.427 0 .816-.123 1.165-.369v1.285h-.006zM118.272 78.188h-1.659v-10.263h1.659v10.263zm.286-13.942c0 .303-.105.555-.315.763-.208.208-.465.312-.762.312-.293 0-.549-.101-.758-.301-.209-.201-.313-.458-.313-.774 0-.296.104-.549.313-.754s.465-.305.758-.305c.298 0 .555.099.762.305.21.205.315.458.315.754M122.595 77.955c.461 0 .811-.14 1.053-.421.246-.28.369-.671.369-1.172v-4.9h-2.242v-1.391h2.242v-1.591h1.645v1.591h1.53v1.391h-1.53v4.896c0 .943-.236 1.67-.708 2.177-.471.508-1.113.762-1.926.762-.565 0-1.116-.131-1.649-.393v-1.344c.488.303.985.454 1.493.454M46.806 48.994c0 1.95-.31 3.739-.93 5.364-.62 1.625-1.498 3.057-2.639 4.292-1.142 1.235-2.494 2.221-4.062 2.947-1.568.726-3.287 1.089-5.156 1.089H9.982V11.755h23.946c1.862 0 3.59.346 5.188 1.033 1.597.686 2.962 1.663 4.094 2.931 1.131 1.269 2.021 2.696 2.666 4.28.644 1.583.966 3.261.966 5.033v23.961h-.036zM39.097 50.61v-25.08c0-1.3-.222-2.503-.663-3.609-.44-1.106-1.056-2.064-1.847-2.875-.791-.812-1.737-1.448-2.841-1.909-1.104-.461-2.323-.692-3.655-.692H17.275v41.399h12.818c1.333 0 2.554-.226 3.663-.675 1.109-.45 2.055-1.083 2.847-1.901.791-.818 1.414-1.785 1.868-2.901.455-1.116.683-2.339.683-3.668M84.9 21.659l-5.944 5.824a30.725 30.725 0 0110.093 22.68 30.71 30.71 0 01-10.132 22.758l5.944 5.865a37.516 37.516 0 0012.29-28.623c0-11.174-4.744-21.193-12.251-28.504"
    />
    <path
      fill="#0A60A5"
      d="M101.038 14.057L94.874 20.1a44.912 44.912 0 0114.762 33.063 44.91 44.91 0 01-14.795 33.128l6.157 6.065c9.518-8.536 15.564-20.895 15.564-34.794 0-13.783-6.02-26.145-15.524-34.505M67.078 64.163a14.316 14.316 0 01-9.536 3.862 14.313 14.313 0 01-9.535-3.861l-5.924 5.764c4.015 3.847 9.459 6.22 15.459 6.22a21.144 21.144 0 0014.092-5.471l-4.556-6.057zM51.92 59.69a14.315 14.315 0 019.535-3.862c3.71 0 7.138 1.391 9.754 3.877l5.914-5.754a21.056 21.056 0 00-15.668-6.354 21.06 21.06 0 00-14.1 5.459l4.566 6.634zM45.31 21.852l5.925-5.804c-4.015-3.847-9.46-6.22-15.459-6.22a21.144 21.144 0 00-14.092 5.471l4.565 6.057a14.317 14.317 0 019.536-3.861 14.315 14.315 0 019.535 3.861zM29.235 36.622c0 1.476.571 2.857 1.604 3.89a5.482 5.482 0 003.9 1.612c1.473 0 2.857-.571 3.89-1.612a5.478 5.478 0 001.604-3.89c0-1.473-.571-2.857-1.604-3.89a5.482 5.482 0 00-3.89-1.612c-1.473 0-2.857.571-3.9 1.612a5.478 5.478 0 00-1.604 3.89"
    />
  </svg>
);

const MongoDBIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    id="mongodb"
    width="50"
    height="50"
  >
    <path
      fill="#FFF"
      d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
    ></path>
    <path
      fill="#A6A385"
      d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
    ></path>
    <path
      fill="#FFF"
      d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
    ></path>
    <path
      fill="#499D4A"
      d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
    ></path>
    <path
      fill="#FFF"
      d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
    ></path>
    <path
      fill="#58AA50"
      d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
    ></path>
  </svg>
);

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

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("ASPNET")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="p-3 bg-gray-300 flex items-center rounded-2xl shadow-2xl hover:bg-sky-900 transition-all duration-300">
              <SvgIcon />
            </span>
            {hoveredIcon === "ASPNET" && (
              <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                ASP.NET
              </span>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("MongoDB")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="p-3 bg-gray-300 flex items-center rounded-2xl shadow-2xl hover:bg-green-800 transition-all duration-300">
              <MongoDBIcon />
            </span>
            {hoveredIcon === "MongoDB" && (
              <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                MongoDB
              </span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;
