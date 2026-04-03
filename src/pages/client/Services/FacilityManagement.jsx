import React from 'react';
import '../../../styles/services.css';

const FacilityManagement = () => {
  const programs = [
    { title: "Smart Office", area: "IoT & Energy Control" },
    { title: "Safety", area: "Security & Monitoring" },
    { title: "Space Planning", area: "Optimal Environment" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Maintenance</p>
        <h1>Facility Management. <span>Your environment, optimized.</span></h1>
        <p className="hero-sub">Seamlessly managing the spaces where you work.</p>
      </section>

      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Explore Spaces &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FacilityManagement;