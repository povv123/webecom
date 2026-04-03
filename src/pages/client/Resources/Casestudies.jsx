import React from 'react';


const CaseStudies = () => {
  const cases = [
    { company: "Skyline Arch", result: "40%", metric: "Increase in Efficiency", color: "#0071e3" },
    { company: "MediCore", result: "2x", metric: "Faster Data Processing", color: "#ac39ff" }
  ];

  return (
    <div className="resource-page case-studies">
      <header className="resource-header">
        <h1>Real results. <span>Real impact.</span></h1>
      </header>

      <div className="case-grid">
        {cases.map((c, i) => (
          <div key={i} className="case-card">
            <p className="company-name">{c.company}</p>
            <h2 style={{ color: c.color }}>{c.result}</h2>
            <p className="metric-text">{c.metric}</p>
            <button className="apple-btn-outline">View Case Study</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;