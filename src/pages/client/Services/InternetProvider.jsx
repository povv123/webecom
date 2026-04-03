import React from 'react';
import '../../../styles/services.css';

const InternetProvider = () => {
  const programs = [
    { title: "Fiber Optic", area: "High-Speed Access" },
    { title: "Enterprise", area: "Dedicated Solutions" },
    { title: "Network", area: "Reliability & Uptime" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Maintenance</p>
        <h1>Internet Services. <span>Connect at the speed of thought.</span></h1>
        <p className="hero-sub">Stable, high-bandwidth solutions for modern business.</p>
      </section>
      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Check Coverage &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};
export default InternetProvider;