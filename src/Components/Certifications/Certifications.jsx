import React from "react";
import CertificationsCard from "./CertificationsCard";

const Certifications = () => {
  const certifications = [
    {
      title: "Next.js Web Dev: Master this Powerful React Framework",
      source: "Udemy",
      link: "https://www.udemy.com/certificate/UC-ea29fd69-7ef3-40e8-8ced-58649f8c67f9/",
    },
    {
      title: "The Ultimate React Course 2023: React, Redux",
      source: "Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-129af3fb-5f4a-490b-9f70-95233d8c3a1c.jpg",
    },
    {
      title: "Modern JavaScript Bootcamp",
      source: "Udemy",
      link: "https://www.udemy.com/certificate/UC-a1e22f85-99bb-4e25-98b8-f07189049a6d/",
    },
    {
      title: "Power BI Data Visualization",
      source: "Great Learning",
      link: "https://olympus.mygreatlearning.com/courses/30824/certificate?pb_id=581",
    },
    {
      title: "JavaScript (Basic)",
      source: "HackerRank",
      link: "https://www.hackerrank.com/certificates/8304b2ae87bf",
    },
    {
      title: "React.js (Basic)",
      source: "HackerRank",
      link: "https://www.hackerrank.com/certificates/b8cd7f452ed1",
    },
  ];

  return (
    <section
      id="Certifications"
      className="py-16 px-6 md:px-20 bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        Certifications
      </h1>

      {/* Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700">
        {certifications.map((cert, index) => (
          <CertificationsCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;