import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/solution/manufacturing.css'; 

const Manufacturing = () => {
  return (
    <div className="manuu">
      {/* Sticky Local Navigation */}
      <nav className="manuu-local-nav">
        <div className="manuu-nav-container">
         
          <div className="manuu-nav-links">
            <a href="#overview">Overview</a>
            <a href="#assembly-line">Assembly Line</a>
            <a href="#prototyping">Prototyping</a>
            <a href="#success-stories">Success Stories</a>
            <Link to="/Solutions/Bookasolution" className="manuu-btn-nav">Book a Solution</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="manuu-section manuu-hero">
     
        <h1>Building the future <br/><span>of industry.</span></h1>
        <p className="manuu-hero-sub">
          Modernize your factory floor, streamline supply chains, and accelerate R&D with spatial computing and real-time IoT integration.
        </p>
      </section>

      {/* 2. Assembly Line */}
      <section id="assembly-line" className="manuu-section manuu-feature">
        <div className="manuu-feature-text">
          <h3 className="manuu-section-title">Assembly Line</h3>
          <h2 className="manuu-headline">Real-time efficiency.</h2>
          <p className="manuu-desc">
            Overlay digital twins, IoT sensor data, and step-by-step schematics directly onto the physical assembly line. Empower your technicians to catch defects before they happen, perform predictive maintenance, and minimize costly downtime.
          </p>
        </div>
        <div className="manuu-feature-visual manuu-glass-panel">
          <span className="manuu-visual-placeholder">Factory Floor Augmented View</span>
        </div>
      </section>

      {/* 3. Prototyping & R&D */}
      <section id="prototyping" className="manuu-section manuu-feature-alt">
        <div className="manuu-feature-visual manuu-glass-panel">
          <span className="manuu-visual-placeholder">3D Spatial CAD View</span>
        </div>
        <div className="manuu-feature-text">
          <h3 className="manuu-section-title">Prototyping</h3>
          <h2 className="manuu-headline">Design without limits.</h2>
          <p className="manuu-desc">
            Accelerate research and development by bringing flat CAD drawings into life-size spatial environments. Collaborate with global engineering teams on 3D models in real time, saving millions in physical prototyping costs and weeks of iteration time.
          </p>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section id="success-stories" className="manuu-section manuu-stories">
        <div className="manuu-stories-header">
          <h3 className="manuu-section-title">Success Stories</h3>
          <h2 className="manuu-headline">Proven on the floor.</h2>
        </div>
        
        <div className="manuu-grid">
          <div className="manuu-card">
            <h3>Global Auto Motors</h3>
            <p className="manuu-metric">25%</p>
            <p>Reduction in vehicle assembly time utilizing Eter's spatial technician guidance systems.</p>
            <button className="manuu-link">Read the case study <span className="manuu-chevron">&gt;</span></button>
          </div>
          <div className="manuu-card">
            <h3>AeroTech Dynamics</h3>
            <p className="manuu-metric">$2.4M</p>
            <p>Saved in aerospace physical prototyping costs during the first quarter of implementation.</p>
            <button className="manuu-link">Read the case study <span className="manuu-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="manuu-section manuu-cta">
        <h2>Ready to modernize your factory?</h2>
        <p>Speak with our industrial specialists to build a custom Eter solution for your manufacturing needs.</p>
        <Link to="/contact/quote" className="manuu-btn-primary">Request a Quote</Link>
      </section>
    </div>
  );
};

export default Manufacturing;