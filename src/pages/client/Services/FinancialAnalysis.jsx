import React from 'react';
import '../../../styles/services.css';

const FinancialAnalysis = () => {
  const programs = [
    { title: "Risk Assessment", area: "Market & Credit Risk" },
    { title: "Wealth Management", area: "Investment Strategy" },
    { title: "Budgeting", area: "Capital Allocation" }
  ];

  return (
    <div className="service-sub-container">
      <section className="service-hero">
        <p className="eyebrow">Consulting</p>
        <h1>Financial Analysis. <span>Clarity in every number.</span></h1>
        <p className="hero-sub">Insightful data to drive your financial future.</p>
      </section>
      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="std-link">View Analysis &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};
export default FinancialAnalysis;