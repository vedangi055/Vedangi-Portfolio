import React from "react";
import InternshipsCard from "./InternshipsCard";

const Internships = () => {
  return (
    <div
      id="Internships"
      className="p-10 md:p-20 bg-blue-400 shadow-xl mx-0 md:mx-20 bg-opacity-50 rounded-lg p-12 mt-10"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold font-mono mb-6 hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
        INTERNSHIPS
      </h1>

      <div className="flex flex-col md:flex-row justify-left gap-8">
        <InternshipsCard
          iconColor="#DDA0DD"
          internshipTitle="Technical Intern"
          company="Cloud Counselage Pvt Ltd."
          date="Aug 2021 - Sep 2021"
          responsibilities={["Machine Learning Intern"]}
        />
        <InternshipsCard
          iconColor="#9932CC"
          internshipTitle="Technical Intern"
          company="Cloud Counselage Pvt Ltd."
          date="Dec 2020 - Jan 2021"
          responsibilities={["Data Science Intern"]}
        />
        <InternshipsCard
          iconColor="#BA55D3"
          internshipTitle="Mentorship Program"
          company="Persistent Systems Ltd."
          date="Oct 2020 - Nov 2020"
          responsibilities={[
            "Privacy Preserving AI Techniques",
            "Building privacy preserving machine learning models using differential privacy ",
          ]}
        />
      </div>
    </div>
  );
};

export default Internships;
