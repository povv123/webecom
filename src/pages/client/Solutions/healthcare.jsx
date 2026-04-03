import React from 'react';


const Healthcare = () => {
  const features = [
    { title: "Precision Tools", desc: "Industrial-grade hardware for medical environments." },
    { title: "Data Security", desc: "End-to-end encryption for patient and research data." },
    { title: "24/7 Support", desc: "Critical care support for high-stakes environments." }
  ];

  return (
    <div className="solutions-detail healthcare">
      <header className="solutions-hero">
        <p className="eyebrow">Eter for Healthcare</p>
        <h1>Technology that cares for <span>those who care.</span></h1>
        <p className="hero-sub">Empowering medical professionals with precision and reliability.</p>
      </header>

      <section className="solutions-grid">
        {features.map((f, i) => (
          <div key={i} className="solution-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      <div className="case-study-banner">
        <h2>See how General Hospital uses Eter.</h2>
        <button className="apple-link">Read the story &gt;</button>
      </div>
    </div>
  );
};

export default Healthcare;