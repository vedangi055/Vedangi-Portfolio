import React from "react";
import CertificationsCard from "../Certifications/CertificationsCard";
const Certifications = () => {
  return (
    <div
      id="Certifications"
      className="p-10 md:p-20 bg-blue-600 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-10"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold font-mono mb-6 hover:text-sky-800 duration-100 hover:drop-shadow-[0_0_25px_rgba(0,191,255,1.5)]">
        CERTIFICATIONS
      </h1>
      {/* Horizontal scrolling container */}
      <div className="flex gap-6 overflow-x-auto">
        {/* Individual Certification Cards */}
        <CertificationsCard
          title="Next.js Web Dev: Master this Powerful React Framework"
          source="Udemy"
          certificateLink="https://www.udemy.com/certificate/UC-ea29fd69-7ef3-40e8-8ced-58649f8c67f9/"
          iconColor="#4285F4"
        />
        <CertificationsCard
          title="The Ultimate React Course 2023: React, Redux"
          source="Udemy"
          certificateLink="https://udemy-certificate.s3.amazonaws.com/image/UC-129af3fb-5f4a-490b-9f70-95233d8c3a1c.jpg"
          iconColor="#34D399"
        />
        <CertificationsCard
          title="The Modern JavaScript Bootcamp"
          source="Udemy"
          certificateLink="https://www.udemy.com/certificate/UC-a1e22f85-99bb-4e25-98b8-f07189049a6d/"
          iconColor="#FBBF24"
        />
        <CertificationsCard
          title="Analyzing and Visualizing Data with Microsoft Power BI"
          source="Great Learning"
          certificateLink="https://olympus.mygreatlearning.com/courses/30824/certificate?pb_id=581"
          iconColor="#34D399"
        />
        <CertificationsCard
          title="JavaScript (Basic)"
          source="HackerRank"
          certificateLink="https://www.hackerrank.com/certificates/8304b2ae87bf"
          iconColor="#34D399"
        />
        <CertificationsCard
          title="React.js (Basic)"
          source="HackerRank"
          certificateLink="https://www.hackerrank.com/certificates/b8cd7f452ed1"
          iconColor="#4285F4"
        />
        <CertificationsCard
          title="A Gentle Introduction to ASP.NET"
          source="Udemy"
          certificateLink="https://www.udemy.com/certificate/UC-30f211fa-75c7-4031-a64a-58822fc3912f/"
          iconColor="#EF4444"
        />
      </div>
    </div>
  );
};

export default Certifications;
