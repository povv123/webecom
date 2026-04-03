import React from 'react';


const BusinessStrategy = () => {
  const features = [
    { 
      title: "Market Intelligence", 
      desc: "Deep-dive analytics to identify emerging trends and competitive advantages." 
    },
    { 
      title: "Operational Scaling", 
      desc: "Frameworks designed to streamline workflows and drive sustainable growth." 
    },
    { 
      title: "Risk Mitigation", 
      desc: "Proactive modeling to safeguard assets and ensure long-term stability." 
    }
  ];

  return (
    <div className="solutions-detail business-strategy">
      <header className="solutions-hero">
        <p className="eyebrow">Eter for Business</p>
        <h1>Strategy that empowers <span>visionary leaders.</span></h1>
        <p className="hero-sub">Transforming complex data into actionable roadmaps for global success.</p>
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
        <h2>See how Global Corp scaled with Eter.</h2>
        <button className="apple-link">View the blueprint &gt;</button>
      </div>
    </div>
  );
};

export default BusinessStrategy;