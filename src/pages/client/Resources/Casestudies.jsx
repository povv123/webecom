import React from 'react';
import '../../../styles/resources/casestudies.css'; 

const CaseStudies = () => {
  const cases = [
    { company: "Skyline Arch", result: "40%", metric: "Increase in Efficiency", color: "#0071e3" },
    { company: "MediCore", result: "2x", metric: "Faster Data Processing", color: "#ac39ff" }
  ];

  return (
    <div className="casca">
      <header className="casca-header">
        <h1>Real results. <span>Real impact.</span></h1>
      </header>

      <div className="casca-grid">
        {cases.map((c, i) => (
          <div key={i} className="casca-card">
            <p className="casca-company">{c.company}</p>
            <h2 className="casca-result" style={{ color: c.color }}>{c.result}</h2>
            <p className="casca-metric">{c.metric}</p>
            <button className="casca-btn-outline" style={{ borderColor: c.color, color: c.color }}>
              View Case Study
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;