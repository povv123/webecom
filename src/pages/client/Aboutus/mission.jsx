import React from "react";
import { NavLink, Link } from "react-router-dom";

// Styling
import "../../../styles/aboutus/mission.css"; 

// Assets
import AboutusImg from '../../../assets/images/mission.jpg';

/**
 * Reusable component for the Mission Pillar cards 
 */
const MissionCard = ({ title, link = "/about/mission" }) => (
  <div className="mission-card">
    <h3 className="mission-title">{title}</h3>
    <Link to={link} className="mission-text-link">Explore Initiative →</Link>
  </div>
);

/**
 * Reusable component for the Reports section
 */
const ReportGroup = ({ category, reports }) => (
  <div className="mission-report-group">
    <h4 className="mission-report-category">{category}</h4>
    <ul className="mission-report-list">
      {reports.map((report) => (
        <li key={report}>
          <a 
            href="#!" 
            className="mission-report-item"
            rel="noopener noreferrer"
            onClick={(e) => e.preventDefault()}
          >
            {report}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const OurMission = () => {
  const handleDummyClick = (e) => e.preventDefault();

  return (
    <div className="mission-page-wrapper">
      
      {/* 1. STICKY LOCAL NAVIGATION */}
      <nav className="mission-local-nav">
        <div className="mission-nav-content">
          <span className="mission-nav-brand">Our Mission</span>
          <div className="mission-nav-links">
            <NavLink 
              to="/about" 
              end 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/about/mission" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
               Mission
            </NavLink>
            <NavLink 
              to="/about/history" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              History
            </NavLink>
            <NavLink 
              to="/about/leadership" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
             Leadership
            </NavLink>
          </div>
        </div>
      </nav>

      {/* 2. FULL WIDTH HERO WITH OVERLAY */}
      <header className="mission-hero-full-width-img">
        <img src={AboutusImg} alt="Eter Store flagship design in Cambodia" className="mission-header-pic" />
        <h1 className="mission-hero-text-overlay">Our Mission</h1>
      </header>

      <main className="mission-main-container">
        
        {/* 3. BREADCRUMB */}
        <nav className="mission-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Eter Cambodia</Link> 
          <span aria-hidden="true"> &nbsp; &gt; &nbsp; </span> 
          <span style={{ color: '#1d1d1f' }}><strong>Store Mission</strong></span>
        </nav>

        {/* 4. HERO TEXT SECTION */}
        <section className="mission-hero">
          <p className="mission-hero-label">The Eter Store Mission</p>
          <h2 className="mission-hero-quote">
            “We believe we will be billionair .”
          </h2>
          <cite className="mission-hero-author">— Servial CEO Pheakdey</cite>
          
          <div className="mission-hero-description">
            <p>
              The Eter Store is more than a place to shop. It is a destination where Cambodia's 
              digital future meets world-class retail design. We are committed to bringing the 
              latest global technology directly to the Kingdom.
            </p>
            <p>
              From our flagship experiences to our localized digital platform, we empower Khmer 
              customers to explore, create, and connect through premium technology and 
              unparalleled service.
            </p>
          </div>
        </section>

        {/* 5. RETAIL IMPACT SUMMARY */}
        <section className="mission-disclosure">
          <h2>Retail Progress in Cambodia</h2>
          <p>
            Our mission is driven by transparency and excellence. We provide comprehensive 
            insights into our retail expansion, local supply chain sustainability, and our 
            commitment to authentic products for the Cambodian market.
          </p>
          <a 
            href="#!" 
            onClick={handleDummyClick} 
            className="mission-cta-text"
            rel="noopener noreferrer"
          >
            View our Retail Disclosure Index →
          </a>
        </section>

        <section className="mission-grid-section">
          <p className="mission-grid-intro">How we serve the Kingdom:</p>
          <div className="mission-grid">
            <MissionCard title="Authenticity Guaranteed" />
            <MissionCard title="Khmer Language Support" />
            <MissionCard title="Next-Day Delivery" />
            <MissionCard title="Phnom Penh Experience" />
            <MissionCard title="Data Privacy" />
            <MissionCard title="Youth Tech Education" />
            <MissionCard title="Sustainable Packaging" />
          </div>
        </section>

        {/* 6. STORE PERFORMANCE REPORTS */}
        <section className="mission-reports-section">
          <h2 className="mission-section-title">Store Insights</h2>
          <div className="mission-reports-top-links">
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">Annual Retail Review</a>
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">2026 Store Roadmap</a>
          </div>

          <div className="mission-reports-grid">
            <ReportGroup 
              category="Customer Experience" 
              reports={[
                "2026 Cambodia Satisfaction Report", 
                "Khmer Shopping UX Case Study", 
                "In-Store Service Standards"
              ]} 
            />
            <ReportGroup 
              category="Privacy & Security" 
              reports={["Customer Data Protection", "Secure Transaction Standards"]} 
            />
            <ReportGroup 
              category="Community Outreach" 
              reports={["Impact of Eter Digital Hubs in Cambodia"]} 
            />
            <ReportGroup 
              category="Talent" 
              reports={[
                "Khmer Specialist Training Progress", 
                "Retail Career Development FY26"
              ]} 
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurMission;