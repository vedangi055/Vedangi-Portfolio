import React from "react";
import InternshipsCard from "./InternshipsCard";
import cert1 from "../../assets/CCPart.pdf";
import cert2 from "../../assets/CCExp.pdf";
import cert3 from "../../assets/PSL.pdf";

const Internships = () => {
  const internships = [
    {
      iconColor: "#DDA0DD",
      internshipTitle: "Machine Learning Intern",
      company: "Cloud Counselage Pvt Ltd.",
      date: "Aug 2021 - Sep 2021",
      responsibilities: [
        "Built a Movie Recommendation System using item-based collaborative filtering to improve personalized recommendations.",
      ],
      certificateLink: cert1,
    },
    {
      iconColor: "#9932CC",
      internshipTitle: "Data Science Intern",
      company: "Cloud Counselage Pvt Ltd.",
      date: "Dec 2020 - Jan 2021",
      responsibilities: [
        "Developed a generalized data-cleaning algorithm to preprocess diverse datasets.",
        "Researched and implemented key data cleaning techniques for improved data quality.",
      ],
      certificateLink: cert2,
    },
    {
      iconColor: "#BA55D3",
      internshipTitle: "Mentorship Program",
      company: "Persistent Systems Ltd.",
      date: "Oct 2020 - Nov 2020",
      responsibilities: [
        "Worked on privacy-preserving ML models using differential privacy (PATE) and evaluated security risks.",
      ],
      certificateLink: cert3,
    },
  ];

  return (
    <section
      id="Internships"
      className="py-16 px-6 md:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Internships
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((item, index) => (
          <InternshipsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Internships;