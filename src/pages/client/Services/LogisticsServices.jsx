import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/logisticsservices.css'; // Make sure to create/update this CSS file

const LogisticsServices = () => {
  return (
    <div className="loogic">
      {/* Sticky Local Navigation */}
      <nav className="loogic-local-nav">
        <div className="loogic-nav-container">
          <span className="loogic-nav-brand">Eter Logistics</span>
          <div className="loogic-nav-links">
            <a href="#overview">Overview</a>
            <a href="#supply-chain">Supply Chain</a>
            <a href="#fleet-management">Fleet Management</a>
            <a href="#success-stories">Success Stories</a>
            <Link to="/contact/inquiry" className="loogic-btn-nav">Contact us</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="loogic-section loogic-hero">
        <p className="loogic-eyebrow">Eter for Supply Chain</p>
        <h1>Seamless delivery. <br/><span>Global reach.</span></h1>
        <p className="loogic-hero-sub">
          Optimizing your supply chain with real-time tracking, intelligent routing, and automated inventory management.
        </p>
      </section>

      {/* 2. Supply Chain Visibility */}
      <section id="supply-chain" className="loogic-section loogic-feature">
        <div className="loogic-feature-text">
          <h3 className="loogic-section-title">Supply Chain Visibility</h3>
          <h2 className="loogic-headline">Track every asset, everywhere.</h2>
          <p className="loogic-desc">
            Gain end-to-end visibility into your global supply chain. Our platform integrates with IoT sensors and ERP systems to provide real-time location data, temperature monitoring, and predictive delay alerts across all your shipments.
          </p>
        </div>
        <div className="loogic-feature-visual loogic-glass-panel">
          <span className="loogic-visual-placeholder">Global Supply Chain Map View</span>
        </div>
      </section>

      {/* 3. Fleet Management */}
      <section id="fleet-management" className="loogic-section loogic-feature-alt">
        <div className="loogic-feature-visual loogic-glass-panel">
          <span className="loogic-visual-placeholder">Fleet Telemetry Dashboard View</span>
        </div>
        <div className="loogic-feature-text">
          <h3 className="loogic-section-title">Fleet Management</h3>
          <h2 className="loogic-headline">Intelligent routing at scale.</h2>
          <p className="loogic-desc">
            Reduce fuel consumption and maintenance costs with AI-driven route optimization. Eter's algorithms analyze traffic patterns, weather conditions, and vehicle telemetry to ensure your fleet operates at peak efficiency.
          </p>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section id="success-stories" className="loogic-section loogic-stories">
        <div className="loogic-stories-header">
          <h3 className="loogic-section-title">Success Stories</h3>
          <h2 className="loogic-headline">Proven in practice.</h2>
        </div>
        
        <div className="loogic-grid">
          <div className="loogic-card">
            <h3>Trans-Pacific Freight Co.</h3>
            <p className="loogic-metric">-22%</p>
            <p>Reduction in average transit times through dynamic rerouting and port congestion predictive modeling.</p>
            <button className="loogic-link">Read the case study <span className="loogic-chevron">&gt;</span></button>
          </div>
          <div className="loogic-card">
            <h3>Regional Cold Chain</h3>
            <p className="loogic-metric">99.9%</p>
            <p>Temperature compliance rate achieved using our automated alert systems and real-time IoT monitoring.</p>
            <button className="loogic-link">Read the case study <span className="loogic-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="loogic-section loogic-cta">
        <h2>Ready to streamline your logistics?</h2>
        <p>Speak with our supply chain experts to build a resilient, efficient logistics network tailored to your business.</p>
        <Link to="/contact/inquiry" className="loogic-btn-primary">Get in touch</Link>
      </section>
    </div>
  );
};

export default LogisticsServices;