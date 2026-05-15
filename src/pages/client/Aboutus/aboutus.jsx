import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../../styles/aboutus/aboutus.css"; 

// Assets
import AboutusImg from '../../../assets/images/Aboutus.jpg';

const ValueCard = ({ title, link = "/about" }) => (
  <div className="abhu-value-card">
    <h3 className="abhu-value-title">{title}</h3>
    <Link to={link} className="abhu-text-link">Learn More →</Link>
  </div>
);

const ReportGroup = ({ category, reports }) => (
  <div className="abhu-report-group">
    <h4 className="abhu-report-category">{category}</h4>
    <ul className="abhu-report-list">
      {reports.map((report) => (
        <li key={report}>
          <a 
            href="#!" 
            className="abhu-report-item"
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

const AboutUs = () => {
  const handleDummyClick = (e) => e.preventDefault();

  return (
    <div className="abhu-page-wrapper">
      
  
      <nav className="abhu-local-nav">
        <div className="abhu-nav-content">
          <span className="abhu-nav-brand">About Us</span>
          <div className="abhu-nav-links">
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
      <header className="abhu-hero-full-width-img">
        <img src={AboutusImg} alt="Eter Corporate Values and vision" className="abhu-header-pic" />
        <h1 className="abhu-hero-text-overlay">About Us</h1>
      </header>

      <main className="abhu-main-container">
        
        {/* 3. BREADCRUMB */}
        <nav className="abhu-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Eter Cambodia</Link> 
          <span aria-hidden="true"> &nbsp; &gt; &nbsp; </span> 
          <span style={{ color: '#1d1d1f' }}><strong>About Us & Values</strong></span>
        </nav>

        {/* 4. HERO TEXT SECTION */}
        <section className="abhu-hero">
          <p className="abhu-hero-label">Corporate Philosophy</p>
          <h2 className="abhu-hero-quote">
            “We believe we will be Success.”
          </h2>
          <cite className="abhu-hero-author">— Servial CEO Pheakdey</cite>
          
          <div className="abhu-hero-description">
            <p>
              We are committed to demonstrating that business can and should be a force for good. 
              Achieving that takes innovation, collaboration, and a focus on serving others. 
              It also means leading with our values in the technology we make, the way we make it, 
              and how we treat people and the planet we share. 
            </p>
            <p>
              We’re always working to leave the world better than we found it, and to create 
              powerful tools that empower others to do the same.
            </p>
          </div>
        </section>

        {/* 5. DISCLOSURE SECTION */}
        <section className="abhu-disclosure">
          <h2>Eter Values Summary</h2>
          <p>
            We have a wide range of reports and websites that outline key progress across 
            each of our values and other key topics. We’ve also mapped our disclosures 
            across metrics outlined by the SASB (ISSB) and TCFD voluntary disclosure frameworks.
          </p>
          <a 
            href="#!" 
            onClick={handleDummyClick} 
            className="abhu-cta-text"
            rel="noopener noreferrer"
          >
            View our Eter Disclosure Index →
          </a>
        </section>

        {/* 6. VALUES GRID */}
        <section className="abhu-values-grid-section">
          <p className="abhu-grid-intro">Visit our values websites and explore our reports:</p>
          <div className="abhu-values-grid">
            <ValueCard title="Accessibility" />
            <ValueCard title="Education" />
            <ValueCard title="Environment" />
            <ValueCard title="Inclusion & Diversity" />
            <ValueCard title="Privacy" />
            <ValueCard title="Racial Equity and Justice" />
            <ValueCard title="Supply Chain Innovation" />
          </div>
        </section>

        {/* 7. SELECT REPORTS */}
        <section className="abhu-reports-section">
          <h2 className="abhu-section-title">Select Reports</h2>
          <div className="abhu-reports-top-links">
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">Proxy Statement</a>
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">2026 10-K</a>
          </div>

          <div className="abhu-reports-grid">
            <ReportGroup 
              category="Environment" 
              reports={[
                "2026 Environmental Progress Report", 
                "Product Environmental Reports", 
                "Annual Green Bond Impact Report: FY25 Update"
              ]} 
            />
            <ReportGroup 
              category="Privacy" 
              reports={["Transparency Report", "App Store Transparency Report"]} 
            />
            <ReportGroup 
              category="Racial Equity and Justice" 
              reports={["Racial Equity and Justice Initiative Impact Overview"]} 
            />
            <ReportGroup 
              category="Supply Chain Innovation" 
              reports={[
                "People and Environment in our Supply Chain: 2026 Annual Progress Report", 
                "Conflict Minerals Report"
              ]} 
            />
          </div>
        </section>

        {/* 8. ADDITIONAL TOPICS */}
        <section className="abhu-additional-topics">
          <h2 className="abhu-section-title">Additional Topics</h2>
          <div className="abhu-topics-flex">
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">Ethics and Compliance Website</a>
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">Work at Eter</a>
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">Life at Eter</a>
            <a href="#!" onClick={handleDummyClick} rel="noopener noreferrer">Eter Benefits</a>
          </div>
          <p className="abhu-footer-note">
            See also our <Link to="/about/leadership">Leadership and Governance Website</Link> for more information, documents, and policies.
          </p>
        </section>

      </main>
    </div>
  );
};

export default AboutUs;