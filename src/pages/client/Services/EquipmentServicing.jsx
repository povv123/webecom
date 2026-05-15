import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/equipmentservicing.css'; 

const EquipmentServicing = () => {
  return (
    <div className="equii">
     
      <nav className="equii-local-nav">
        <div className="equii-nav-container">
          <span className="equii-nav-brand">Eter Technical Services</span>
          <div className="equii-nav-links">
            <a href="#overview">Overview</a>
            <a href="#preventive">Preventive Care</a>
            <a href="#emergency">Emergency Response</a>
            <a href="#capabilities">Capabilities</a>
            <Link to="/Services/Bookservice" className="equii-btn-nav">Book a Service</Link>
          </div>
        </div>
      </nav>

      <section id="overview" className="equii-section equii-hero">
       
        <h1>Equipment Servicing. <br/><span>Peak performance nationwide.</span></h1>
        <p className="equii-hero-sub">
          Minimizing downtime with expert technical care for manufacturing, logistics, and commercial infrastructure across Cambodia.
        </p>
      </section>

      {/* 2. Preventive Maintenance */}
      <section id="preventive" className="equii-section equii-feature">
        <div className="equii-feature-text">
          <h3 className="equii-section-title">Preventive Care</h3>
          <h2 className="equii-headline">Stop breakdowns before they happen.</h2>
          <p className="equii-desc">
            Protect your investments with regularly scheduled inspections and hardware calibrations. We service industrial generators, commercial HVAC systems, and heavy machinery across Phnom Penh, Sihanoukville, and special economic zones (SEZs) to ensure compliance and extend asset longevity.
          </p>
        </div>
        <div className="equii-feature-visual equii-glass-panel">
          <span className="equii-visual-placeholder">Diagnostic Systems Dashboard View</span>
        </div>
      </section>

      {/* 3. Emergency Repair */}
      <section id="emergency" className="equii-section equii-feature-alt">
        <div className="equii-feature-visual equii-glass-panel">
          <span className="equii-visual-placeholder">Mobile Dispatch Map View</span>
        </div>
        <div className="equii-feature-text">
          <h3 className="equii-section-title">Emergency Response</h3>
          <h2 className="equii-headline">24/7 rapid deployment.</h2>
          <p className="equii-desc">
            When critical hardware fails, every minute costs money. Our mobile tech units are stationed regionally for immediate deployment. We offer rapid on-site diagnostics, parts replacement, and emergency repairs to get your production line moving again anywhere in the country.
          </p>
        </div>
      </section>

      {/* 4. Capabilities (Cards) */}
      <section id="capabilities" className="equii-section equii-stories">
        <div className="equii-stories-header">
          <h3 className="equii-section-title">Core Capabilities</h3>
          <h2 className="equii-headline">Hardware we support.</h2>
        </div>
        
        <div className="equii-grid">
          <div className="equii-card">
            <h3>Heavy Machinery & Construction</h3>
            <p className="equii-metric">24h</p>
            <p>Guaranteed initial response time for critical infrastructure and construction equipment breakdowns.</p>
            <button className="equii-link">View service details <span className="equii-chevron">&gt;</span></button>
          </div>
          <div className="equii-card">
            <h3>Power & Climate Control</h3>
            <p className="equii-metric">100+</p>
            <p>Industrial generators and commercial cooling systems actively maintained under our ongoing SLAs.</p>
            <button className="equii-link">View service details <span className="equii-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default EquipmentServicing;