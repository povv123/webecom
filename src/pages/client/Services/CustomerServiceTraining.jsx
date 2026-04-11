import React from 'react';

import '../../../styles/services/customerservicetraining.css'; 

const CustomerServiceTraining = () => {
  const programs = [
    { title: "Communication", area: "Soft Skills & Empathy" },
    { title: "Support", area: "Technical Troubleshooting" },
    { title: "Retention", area: "Customer Satisfaction" }
  ];

  return (
    <div className="cusser">
      <section className="cusser-hero">
        <h1>Customer Service. <span>Master the art of support.</span></h1>
        <p className="cusser-hero-sub">Building lasting relationships with every interaction.</p>
      </section>
      <section className="cusser-grid">
        {programs.map((p, i) => (
          <div key={i} className="cusser-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="cusser-link">Learn more &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CustomerServiceTraining;