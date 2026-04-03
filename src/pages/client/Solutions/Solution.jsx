import React from 'react';

const EducationSolution = () => {
  const features = [
    { 
      title: "Interactive Learning", 
      desc: "Hardware and software integration designed for modern classroom engagement." 
    },
    { 
      title: "Campus Connectivity", 
      desc: "High-speed infrastructure to support thousands of concurrent users safely." 
    },
    { 
      title: "Administrative Efficiency", 
      desc: "Automated systems for student records, scheduling, and resource allocation." 
    }
  ];

  return (
    <div className="solutions-detail education">
      <header className="solutions-hero">
        <p className="eyebrow">Eter for Education</p>
        <h1>Empowering the <span>next generation.</span></h1>
        <p className="hero-sub">Scalable technology solutions built for schools, universities, and research labs.</p>
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
        <h2>See how Central University transformed their campus.</h2>
        <button className="apple-link">Read the case study &gt;</button>
      </div>
    </div>
  );
};

export default EducationSolution;