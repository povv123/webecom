import React from 'react';

import '../../../styles/services/technicaltraining.css'; // Make sure to create this CSS file

const TechnicalTraining = () => {
  const programs = [
    { title: "Law", area: "lawer" },
    { title: "Hight school", area: "grade 9 to 12" },
    { title: "English", area: "Special english" }
  ];

  return (
    <div className="TTT">
      <section className="TTT-hero">
        <h1>Technical Training. <span>Elevate your team’s expertise.</span></h1>
        <p className="TTT-hero-sub">Advanced workshops led by industry veterans.</p>
      </section>

      <section className="TTT-grid">
        {programs.map((p, i) => (
          <div key={i} className="TTT-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="TTT-link">Learn more &gt;</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechnicalTraining;