import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/taxes.css'; // Make sure to create this CSS file

const Tax = () => {
  return (
    <div className="tax">
      {/* Sticky Local Navigation */}
      <nav className="tax-local-nav">
        <div className="tax-nav-container">
          <span className="tax-nav-brand">Eter Tax Advisory</span>
          <div className="tax-nav-links">
            <a href="#overview">Overview</a>
            <a href="#corporate-tax">Corporate Tax</a>
            <a href="#salary-tax">Tax on Salary</a>
            <a href="#compliance">Key Rates</a>
            <Link to="/Services/Bookservice" className="tax-btn-nav">Book a Service</Link>
          </div>
        </div>
      </nav>

  
      <section id="overview" className="tax-section tax-hero">
        <h1>Navigating Cambodia's <br/><span>Tax Landscape.</span></h1>
        <p className="tax-hero-sub">
          Expert guidance on Corporate Tax, Tax on Salary, and VAT to keep your business compliant and optimized under the GDT self-assessment regime.
        </p>
      </section>

      {/* 2. Corporate Tax */}
      <section id="corporate-tax" className="tax-section tax-feature">
        <div className="tax-feature-text">
          <h3 className="tax-section-title">Corporate Taxation</h3>
          <h2 className="tax-headline">Stay compliant, optimize profits.</h2>
          <p className="tax-desc">
            Navigate Cambodia's corporate tax laws with confidence. We guide you through the standard 20% Tax on Income (TOI), ensure compliance with the 1% Minimum Tax on annual turnover, and manage complex Withholding Tax (WHT) requirements for domestic and international payments.
          </p>
        </div>
        <div className="tax-feature-visual tax-glass-panel">
          <span className="tax-visual-placeholder">Corporate Tax Dashboard View</span>
        </div>
      </section>

      {/* 3. Tax on Salary (TOS) */}
      <section id="salary-tax" className="tax-section tax-feature-alt">
        <div className="tax-feature-visual tax-glass-panel">
          <span className="tax-visual-placeholder">Progressive Payroll Calculator View</span>
        </div>
        <div className="tax-feature-text">
          <h3 className="tax-section-title">Tax on Salary</h3>
          <h2 className="tax-headline">Automated payroll compliance.</h2>
          <p className="tax-desc">
            Manage resident and non-resident employee taxes effortlessly. From calculating progressive monthly KHR tax brackets (0% to 20%) to handling flat 20% Fringe Benefit Taxes (FBT) for allowances, we ensure your payroll is accurate and fully compliant.
          </p>
        </div>
      </section>

      {/* 4. Key Tax Rates (Replaces Case Studies) */}
      <section id="compliance" className="tax-section tax-stories">
        <div className="tax-stories-header">
          <h3 className="tax-section-title">Essential Compliance</h3>
          <h2 className="tax-headline">Key rates at a glance.</h2>
        </div>
        
        <div className="tax-grid">
          <div className="tax-card">
            <h3>Value Added Tax (VAT)</h3>
            <p className="tax-metric">10%</p>
            <p>The standard VAT rate on the supply of goods and services. We handle your monthly VAT filings, input credits, and zero-rated export declarations.</p>
            <button className="tax-link">Learn about VAT <span className="tax-chevron">&gt;</span></button>
          </div>
          <div className="tax-card">
            <h3>Withholding Tax (WHT)</h3>
            <p className="tax-metric">14-15%</p>
            <p>Standard withholding rates for residents (15% on rent and royalties) and non-residents (14% on dividends, interest, and management fees).</p>
            <button className="tax-link">View WHT guidelines <span className="tax-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Tax;