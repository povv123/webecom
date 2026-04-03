import React from 'react';

const Taxes = () => {
  const features = [
    { 
      title: "Fiscal Compliance", 
      desc: "Comprehensive navigation of regional and international tax regulations." 
    },
    { 
      title: "Strategic Planning", 
      desc: "Optimization of tax liabilities through forward-looking corporate structuring." 
    },
    { 
      title: "Audit Protection", 
      desc: "Robust documentation and advisory to ensure full transparency and preparedness." 
    }
  ];

  return (
    <div className="solutions-detail taxes">
      <header className="solutions-hero">
        <p className="eyebrow">Eter for Finance</p>
        <h1>Precision in <span>fiscal management.</span></h1>
        <p className="hero-sub">Providing clarity and confidence in an ever-evolving regulatory landscape.</p>
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
        <h2>Streamline your annual filings with Eter.</h2>
        <button className="apple-link">View tax solutions &gt;</button>
      </div>
    </div>
  );
};

export default Taxes;