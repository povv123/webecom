import React from 'react';
import '../../../styles/services.css';

const LogisticsServices = () => {
  const programs = [
    { title: "Supply Chain", area: "Optimization & Flow" },
    { title: "Distribution", area: "Global Warehousing" },
    { title: "Freight", area: "Air, Sea, & Land" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Consulting</p>
        <h1>Logistics Services. <span>Moving your world.</span></h1>
        <p className="hero-sub">Reliable delivery systems for a global market.</p>
      </section>
      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Track Logistics &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};
export default LogisticsServices;