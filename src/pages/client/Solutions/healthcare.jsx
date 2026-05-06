import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/solution/healthcare.css'; 

const Healthcare = () => {
  return (
    <div className="healt">
      {/* Sticky Local Navigation */}
      <nav className="healt-local-nav">
        <div className="healt-nav-container">
          <span className="healt-nav-brand">Eter Healthcare</span>
          <div className="healt-nav-links">
            <a href="#overview">Overview</a>
            <a href="#hospital-care">Hospital Care</a>
            <a href="#home-care">Home Care</a>
            <a href="#success-stories">Success Stories</a>
            <Link to="/Solutions/Bookasolution" className="healt-btn-nav">Book a Solution</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="healt-section healt-hero">
        <p className="healt-eyebrow">Eter for Healthcare</p>
        <h1>A new dimension of <br/><span>patient care.</span></h1>
        <p className="healt-hero-sub">
          Transforming Cambodia’s medical infrastructure with advanced spatial computing, secure data, and limitless connectivity.
        </p>
      </section>

      {/* 2. Hospital Care */}
      <section id="hospital-care" className="healt-section healt-feature">
        <div className="healt-feature-text">
          <h3 className="healt-section-title">Hospital Care</h3>
          <h2 className="healt-headline">Precision at scale.</h2>
          <p className="healt-desc">
            Equip major institutions like Calmette and Royal Phnom Penh Hospital with centralized electronic health records (EHR) and 3D spatial visualization. Empower surgical teams to plan complex procedures with interactive, life-size anatomical models before entering the operating room.
          </p>
        </div>
        <div className="healt-feature-visual healt-glass-panel">
          <span className="healt-visual-placeholder">Spatial Surgical Planning View</span>
        </div>
      </section>

      {/* 3. Home Care & Telehealth */}
      <section id="home-care" className="healt-section healt-feature-alt">
        <div className="healt-feature-visual healt-glass-panel">
          <span className="healt-visual-placeholder">Telehealth Dashboard View</span>
        </div>
        <div className="healt-feature-text">
          <h3 className="healt-section-title">Home Care</h3>
          <h2 className="healt-headline">Expert care, anywhere.</h2>
          <p className="healt-desc">
            Bridge the gap between capital specialists and regional clinics in Siem Reap, Battambang, and beyond. Eter's ultra-low latency spatial communication allows doctors to conduct virtual check-ups and monitor home-care patients in real-time, bringing the clinic directly to the living room.
          </p>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section id="success-stories" className="healt-section healt-stories">
        <div className="healt-stories-header">
          <h3 className="healt-section-title">Success Stories</h3>
          <h2 className="healt-headline">Proven in practice.</h2>
        </div>
        
        <div className="healt-grid">
          <div className="healt-card">
            <h3>Phnom Penh Medical Center</h3>
            <p className="healt-metric">40%</p>
            <p>Reduction in patient wait times through automated EHR systems and optimized spatial scheduling.</p>
            <button className="healt-link">Read the case study <span className="healt-chevron">&gt;</span></button>
          </div>
          <div className="healt-card">
            <h3>Siem Reap Regional Clinic</h3>
            <p className="healt-metric">2,000+</p>
            <p>Successful telehealth consultations conducted in the first year, saving patients hours of travel time.</p>
            <button className="healt-link">Read the case study <span className="healt-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="healt-section healt-cta">
        <h2>Ready to upgrade your practice?</h2>
        <p>Speak with our healthcare specialists to find the right Eter solution for your institution.</p>
        <Link to="/contact/inquiry" className="healt-btn-primary">Get in touch</Link>
      </section>
    </div>
  );
};

export default Healthcare;