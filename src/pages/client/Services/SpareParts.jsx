import React from 'react';
import '../../../styles/services.css';

const SpareParts = () => {
  const programs = [
    { title: "Inventory", area: "Genuine Components" },
    { title: "Fast Shipping", area: "Next-Day Delivery" },
    { title: "Compatibility", area: "Verified Systems" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Maintenance</p>
        <h1>Spare Parts. <span>The right fit, every time.</span></h1>
        <p className="hero-sub">Original parts to keep your systems authentic.</p>
      </section>
      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Browse Catalog &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};
export default SpareParts;