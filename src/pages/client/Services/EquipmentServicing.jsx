import React from 'react';


const EquipmentServicing = () => {
  const programs = [
    { title: "Preventive", area: "Scheduled Inspections" },
    { title: "Emergency", area: "24/7 Rapid Response" },
    { title: "Diagnostics", area: "Hardware Performance" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Maintenance</p>
        <h1>Equipment Servicing. <span>Keep your gear at peak performance.</span></h1>
        <p className="hero-sub">Minimize downtime with expert technical care.</p>
      </section>

      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">Service Details &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EquipmentServicing;