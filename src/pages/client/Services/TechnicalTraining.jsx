import React from 'react';
import '../../../styles/services.css';

const TechnicalTraining = () => {
  const programs = [
    { title: "Engineering", area: "DevOps & Full Stack" },
    { title: "Data Science", area: "ML & Predictive Analytics" },
    { title: "Security", area: "Ethical Hacking & Encryption" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Training</p>
        <h1>Technical Training. <span>Elevate your team’s expertise.</span></h1>
        <p className="hero-sub">Advanced workshops led by industry veterans.</p>
      </section>

      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Curriculum &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechnicalTraining;