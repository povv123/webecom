import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/businessstrategy.css'; 

const BusinessStrategy = () => {
  return (
    <div className="strat">
      {/* Sticky Local Navigation */}
      <nav className="strat-local-nav">
        <div className="strat-nav-container">
          <span className="strat-nav-brand">Eter Strategy</span>
          <div className="strat-nav-links">
            <a href="#overview">Overview</a>
            <a href="#corporate-strategy">Corporate Strategy</a>
            <a href="#market-expansion">Market Expansion</a>
            <a href="#case-studies">Case Studies</a>
            <Link to="/Services/Bookservice" className="strat-btn-nav">Book a Service</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="strat-section strat-hero">
        <p className="strat-eyebrow">Eter for Business</p>
        <h1>A new dimension of <br/><span>enterprise growth.</span></h1>
        <p className="strat-hero-sub">
          Transforming corporate operations with data-driven insights, scalable frameworks, and intelligent forecasting tools.
        </p>
      </section>

      {/* 2. Corporate Strategy */}
      <section id="corporate-strategy" className="strat-section strat-feature">
        <div className="strat-feature-text">
          <h3 className="strat-section-title">Corporate Strategy</h3>
          <h2 className="strat-headline">Precision in planning.</h2>
          <p className="strat-desc">
            Equip your executive board with real-time analytics and predictive modeling. Empower leadership to simulate complex market scenarios and restructure organizational frameworks with interactive, dynamic data visualizations before committing capital.
          </p>
        </div>
        <div className="strat-feature-visual strat-glass-panel">
          <span className="strat-visual-placeholder">Interactive Forecasting Dashboard View</span>
        </div>
      </section>

      {/* 3. Market Expansion */}
      <section id="market-expansion" className="strat-section strat-feature-alt">
        <div className="strat-feature-visual strat-glass-panel">
          <span className="strat-visual-placeholder">Global Market Analytics View</span>
        </div>
        <div className="strat-feature-text">
          <h3 className="strat-section-title">Market Expansion</h3>
          <h2 className="strat-headline">Global reach, local impact.</h2>
          <p className="strat-desc">
            Bridge the gap between headquarters and emerging markets. Eter's deep-market analytics and ultra-low latency collaborative tools allow distributed teams to align on product launches, monitor regional competitors, and adapt strategies in real-time.
          </p>
        </div>
      </section>

      {/* 4. Case Studies */}
      <section id="case-studies" className="strat-section strat-stories">
        <div className="strat-stories-header">
          <h3 className="strat-section-title">Case Studies</h3>
          <h2 className="strat-headline">Proven in practice.</h2>
        </div>
        
        <div className="strat-grid">
          <div className="strat-card">
            <h3>Mekong Logistics Group</h3>
            <p className="strat-metric">35%</p>
            <p>Increase in supply chain efficiency through predictive resource allocation and automated workflow mapping.</p>
            <button className="strat-link">Read the case study <span className="strat-chevron">&gt;</span></button>
          </div>
          <div className="strat-card">
            <h3>TechFin Southeast Asia</h3>
            <p className="strat-metric">2.5x</p>
            <p>Growth in user acquisition year-over-year after utilizing our specialized market penetration frameworks.</p>
            <button className="strat-link">Read the case study <span className="strat-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default BusinessStrategy;