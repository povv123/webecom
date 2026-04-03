import React from 'react';


const ITConsulting = () => {
  const programs = [
    { title: "Cloud Systems", area: "Architecture & Migration" },
    { title: "Cybersecurity", area: "Protection & Compliance" },
    { title: "Software Dev", area: "Custom Tooling & AI" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Consulting</p>
        <h1>IT Consulting. <span>Technology built for scale.</span></h1>
        <p className="hero-sub">Future-proofing your infrastructure today.</p>
      </section>

      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">View Tech Stack &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ITConsulting;