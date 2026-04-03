import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const categories = [
    { title: "Insights & Blog", path: "/resources/blog", desc: "Latest industry trends and company news." },
    { title: "Case Studies", path: "/resources/case-studies", desc: "Real-world success stories from our global partners." },
    { title: "Whitepapers", path: "/resources/whitepapers", desc: "In-depth technical research and industrial reports." },
    { title: "Support & FAQs", path: "/resources/faqs", desc: "Common questions and technical guidance." }
  ];

  return (
    <div className="resources-page">
      <header className="solutions-hero">
        <p className="eyebrow">Knowledge Center</p>
        <h1>Everything you need to <span>move forward.</span></h1>
        <p className="hero-sub">Explore our library of research, insights, and technical support.</p>
      </header>

      <section className="solutions-grid">
        {categories.map((cat, i) => (
          <Link to={cat.path} key={i} className="solution-card resource-link">
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
            <span className="apple-link">Browse {cat.title} &gt;</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Resources;