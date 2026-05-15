import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/spareparts.css'; // Make sure to create this CSS file

const SpareParts = () => {
  return (
    <div className="spae">
      {/* Sticky Local Navigation */}
      <nav className="spae-local-nav">
        <div className="spae-nav-container">
          <span className="spae-nav-brand">Eter Parts Center</span>
          <div className="spae-nav-links">
            <a href="#overview">Overview</a>
            <a href="#inventory">Genuine Inventory</a>
            <a href="#shipping">Rapid Shipping</a>
            <a href="#reliability">Reliability</a>
            <Link to="/Services/Bookservice" className="spae-btn-nav">Book a Service</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="spae-section spae-hero">
        <h1>Spare Parts. <br/><span>The right fit, every time.</span></h1>
        <p className="spae-hero-sub">
          Original OEM parts to keep your systems authentic, compliant, and operational across manufacturing and commercial sectors.
        </p>
      </section>


      <section id="inventory" className="spae-section spae-feature">
        <div className="spae-feature-text">
          <h3 className="spae-section-title">Genuine Components</h3>
          <h2 className="spae-headline">Zero compromise on quality.</h2>
          <p className="spae-desc">
            Protect your equipment from the risks of counterfeit components. We source and stock only certified Original Equipment Manufacturer (OEM) parts, ensuring seamless integration, warranty compliance, and maximum hardware lifespan.
          </p>
        </div>
        <div className="spae-feature-visual spae-glass-panel">
          <span className="spae-visual-placeholder">Component Verification System View</span>
        </div>
      </section>

      {/* 3. Fast Shipping */}
      <section id="shipping" className="spae-section spae-feature-alt">
        <div className="spae-feature-visual spae-glass-panel">
          <span className="spae-visual-placeholder">Logistics Tracking Dashboard View</span>
        </div>
        <div className="spae-feature-text">
          <h3 className="spae-section-title">Next-Day Delivery</h3>
          <h2 className="spae-headline">Rapid dispatch, nationwide.</h2>
          <p className="spae-desc">
            When hardware fails, downtime is your biggest expense. Leveraging our localized warehousing, we offer prioritized dispatch and next-day delivery to major economic zones, from Phnom Penh to Battambang and Sihanoukville.
          </p>
        </div>
      </section>

      
      <section id="reliability" className="spae-section spae-stories">
        <div className="spae-stories-header">
          <h3 className="spae-section-title">Scale & Support</h3>
          <h2 className="spae-headline">Built for heavy industry.</h2>
        </div>
        
        <div className="spae-grid">
          <div className="spae-card">
            <h3>Verified Compatibility</h3>
            <p className="spae-metric">100%</p>
            <p>Guaranteed system matching using our proprietary serial number and hardware architecture database.</p>
            <button className="spae-link">Check compatibility <span className="spae-chevron">&gt;</span></button>
          </div>
          <div className="spae-card">
            <h3>Inventory Depth</h3>
            <p className="spae-metric">50k+</p>
            <p>Individual SKUs for commercial HVAC, generators, and IT infrastructure ready to ship immediately.</p>
            <button className="spae-link">Browse catalog <span className="spae-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SpareParts;