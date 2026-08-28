import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/facilitymanagement.css'; 

const FacilityManagement = () => {
  return (
    <div className="facil">
      {/* Sticky Local Navigation */}
      <nav className="facil-local-nav">
        <div className="facil-nav-container">
          <span className="facil-nav-brand">Eter Facilities</span>
          <div className="facil-nav-links">
            <a href="#overview">Overview</a>
            <a href="#smart-office">Smart Office</a>
            <a href="#security">Security</a>
            <a href="#services">Core Services</a>
            <Link to="/Services/Bookservice" className="facil-btn-nav">Book a Service</Link>
          </div>
        </div>
      </nav>

  
      <section id="overview" className="facil-section facil-hero">
      
        <h1>Facility Management. <br/><span>Your environment, optimized.</span></h1>
        <p className="facil-hero-sub">
          Seamlessly managing the spaces where you work. From IoT energy control in Phnom Penh high-rises to comprehensive security across regional commercial hubs.
        </p>
      </section>

      {/* 2. Smart Office & Energy */}
      <section id="smart-office" className="facil-section facil-feature">
        <div className="facil-feature-text">
          <h3 className="facil-section-title">Smart Office & IoT</h3>
          <h2 className="facil-headline">Automate your efficiency.</h2>
          <p className="facil-desc">
            Transform traditional workspaces into intelligent environments. We integrate automated climate control, smart lighting, and real-time energy monitoring to significantly reduce your carbon footprint and daily operational overhead.
          </p>
        </div>
        <div className="facil-feature-visual facil-glass-panel">
          <span className="facil-visual-placeholder">IoT Energy Dashboard View</span>
        </div>
      </section>

      {/* 3. Safety & Security */}
      <section id="security" className="facil-section facil-feature-alt">
        <div className="facil-feature-visual facil-glass-panel">
          <span className="facil-visual-placeholder">Centralized Security Feed View</span>
        </div>
        <div className="facil-feature-text">
          <h3 className="facil-section-title">Safety & Security</h3>
          <h2 className="facil-headline">Total peace of mind.</h2>
          <p className="facil-desc">
            Protect your assets and your personnel. Our facility teams deploy and manage 24/7 centralized surveillance, biometric access controls, and rapid-response fire/safety protocols tailored to Cambodian commercial regulations.
          </p>
        </div>
      </section>

      {/* 4. Core Services (Cards) */}
      <section id="services" className="facil-section facil-stories">
        <div className="facil-stories-header">
          <h3 className="facil-section-title">Space Planning</h3>
          <h2 className="facil-headline">Designed for productivity.</h2>
        </div>
        
        <div className="facil-grid">
          <div className="facil-card">
            <h3>Workspace Optimization</h3>
            <p className="facil-metric">15%</p>
            <p>Average increase in usable floor space achieved through our ergonomic and dynamic space-planning audits.</p>
            <button className="facil-link">Explore planning <span className="facil-chevron">&gt;</span></button>
          </div>
          <div className="facil-card">
            <h3>Preventive Upkeep</h3>
            <p className="facil-metric">24/7</p>
            <p>Round-the-clock janitorial and environmental maintenance to ensure your facilities remain pristine and welcoming.</p>
            <button className="facil-link">View maintenance <span className="facil-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default FacilityManagement;