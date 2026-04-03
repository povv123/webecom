import React from 'react';


const CustomerServiceTraining = () => {
  const programs = [
    { title: "Communication", area: "Soft Skills & Empathy" },
    { title: "Support", area: "Technical Troubleshooting" },
    { title: "Retention", area: "Customer Satisfaction" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Training</p>
        <h1>Customer Service. <span>Master the art of support.</span></h1>
        <p className="hero-sub">Building lasting relationships with every interaction.</p>
      </section>
      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Training Modules &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};
export default CustomerServiceTraining;