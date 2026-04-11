import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/resources.css'; 

const Resources = () => {
  const categories = [
    { title: "Insights & Blog", path: "/resources/blog", desc: "Latest industry trends and company news." },
    { title: "Case Studies", path: "/resources/case-studies", desc: "Real-world success stories from our global partners." },
    { title: "Whitepapers", path: "/resources/whitepapers", desc: "In-depth technical research and industrial reports." },
    { title: "Support & FAQs", path: "/resources/faqs", desc: "Common questions and technical guidance." }
  ];

  return (
    <div className="rereso">
      <header className="rereso-hero">
        <p className="rereso-eyebrow">Knowledge Center</p>
        <h1>Everything you need to move forward.</h1>
        <p className="rereso-sub">Explore our library of research, insights, and technical support.</p>
      </header>

      <section className="rereso-grid">
        {categories.map((cat, i) => (
          <Link to={cat.path} key={i} className="rereso-card">
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
            <span className="rereso-link">
              Browse {cat.title} <span className="rereso-chevron">&gt;</span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Resources;