import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/internetprovider.css'; // Make sure to create this CSS file

const InternetProvider = () => {
  return (
    <div className="interrr">
      {/* Sticky Local Navigation */}
      <nav className="interrr-local-nav">
        <div className="interrr-nav-container">
          <span className="interrr-nav-brand">Eter Internet</span>
          <div className="interrr-nav-links">
            <a href="#overview">Overview</a>
            <a href="#fiber">Fiber Optic</a>
            <a href="#enterprise">Enterprise Solutions</a>
            <a href="#reliability">Reliability</a>
            <Link to="/Services/Bookservice" className="interrr-btn-nav">Book a Service</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="interrr-section interrr-hero">
        <h1>Internet Services. <br/><span>Connect at the speed of thought.</span></h1>
        <p className="interrr-hero-sub">
          Stable, ultra-high-bandwidth fiber solutions designed for modern Cambodian enterprises, ensuring seamless operations nationwide.
        </p>
      </section>

      {/* 2. Fiber Optic */}
      <section id="fiber" className="interrr-section interrr-feature">
        <div className="interrr-feature-text">
          <h3 className="interrr-section-title">High-Speed Access</h3>
          <h2 className="interrr-headline">Pure fiber power.</h2>
          <p className="interrr-desc">
            Experience unparalleled download and upload speeds with our 100% fiber-optic network. Built to support heavy data loads, cloud computing, and uninterrupted video conferencing for offices across Phnom Penh and growing regional hubs.
          </p>
        </div>
        <div className="interrr-feature-visual interrr-glass-panel">
          <span className="interrr-visual-placeholder">Fiber Network Map View</span>
        </div>
      </section>

      {/* 3. Enterprise Solutions */}
      <section id="enterprise" className="interrr-section interrr-feature-alt">
        <div className="interrr-feature-visual interrr-glass-panel">
          <span className="interrr-visual-placeholder">Dedicated Leased Line Dashboard</span>
        </div>
        <div className="interrr-feature-text">
          <h3 className="interrr-section-title">Dedicated Solutions</h3>
          <h2 className="interrr-headline">Uncontended bandwidth.</h2>
          <p className="interrr-desc">
            For mission-critical operations, shared internet isn't enough. Our Dedicated Internet Access (DIA) provides guaranteed, symmetrical speeds with comprehensive Service Level Agreements (SLAs), ensuring your business is never left offline.
          </p>
        </div>
      </section>

      {/* 4. Reliability (Cards) */}
      <section id="reliability" className="interrr-section interrr-stories">
        <div className="interrr-stories-header">
          <h3 className="interrr-section-title">Network Uptime</h3>
          <h2 className="interrr-headline">Engineered for reliability.</h2>
        </div>
        
        <div className="interrr-grid">
          <div className="interrr-card">
            <h3>Uptime Guarantee</h3>
            <p className="interrr-metric">99.9%</p>
            <p>Backed by strict SLAs, redundant routing, and 24/7 network monitoring from our central Network Operations Center.</p>
            <button className="interrr-link">View SLA details <span className="interrr-chevron">&gt;</span></button>
          </div>
          <div className="interrr-card">
            <h3>Latency Optimization</h3>
            <p className="interrr-metric">&lt;5ms</p>
            <p>Ultra-low latency routing to local data centers and direct peering with major international internet gateways.</p>
            <button className="interrr-link">View peering map <span className="interrr-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InternetProvider;