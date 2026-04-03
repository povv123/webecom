import React from 'react';
import '../../../styles/careers.css';

const Internship = () => {
  const programs = [
    { title: "Engineering", area: "Software, Hardware, & AI" },
    { title: "Design", area: "UI/UX & Product Design" },
    { title: "Business", area: "Marketing, Finance, & Operations" }
  ];

  return (
    <div className="internship-container">
      <section className="intern-hero">
        <p className="eyebrow">Early Talent</p>
        <h1>Your career starts here. <span>Do the best work of your life.</span></h1>
        <p className="hero-sub">Summer 2026 applications are now open.</p>
      </section>

      <section className="program-grid">
        {programs.map((p, i) => (
          <div key={i} className="program-card">
            <h3>{p.title}</h3>
            <p>{p.area}</p>
            <button className="apple-link">Learn about {p.title} &gt;</button>
          </div>
        ))}
      </section>

      <div className="intern-cta">
        <h2>Ready to make an impact?</h2>
        <button className="apple-btn-blue">Apply for Internship</button>
      </div>
    </div>
  );
};

export default Internship;