import React from 'react';

const Mission = () => {
  const values = [
    { title: "Inclusion", desc: "Building a platform where every brand and user belongs." },
    { title: "Innovation", desc: "Pushing the boundaries of what e-commerce can be." },
    { title: "Integrity", desc: "Transparency in every transaction, from click to delivery." }
  ];

  return (
    <div className="mission-page">
      <section className="mission-hero">
        <p className="eyebrow">Our Mission</p>
        <h1>To empower the world's creators through <span>seamless technology.</span></h1>
      </section>

      <section className="values-grid">
        {values.map((v, i) => (
          <div key={i} className="value-card">
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Mission;