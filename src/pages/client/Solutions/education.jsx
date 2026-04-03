import React from 'react';


const Education = () => {
  const tracks = [
    { title: "K-12 Learning", desc: "Interactive tools designed for the next generation." },
    { title: "Higher Education", desc: "High-performance laptops for research and creation." },
    { title: "Institution Pricing", desc: "Specialized bulk rates for schools and universities." }
  ];

  return (
    <div className="solutions-detail education">
      <header className="solutions-hero">
        <p className="eyebrow">Eter for Education</p>
        <h1>Imagine a world <span>where every student excels.</span></h1>
        <p className="hero-sub">Tools built to inspire the thinkers and creators of tomorrow.</p>
      </header>

      <section className="solutions-grid">
        {tracks.map((t, i) => (
          <div key={i} className="solution-card">
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <button className="apple-btn-small">Learn more</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Education;