import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/careers/jobform.css'; 

const Jobform = () => {
  return (
    <div className="jpfo-container">
      {/* Sticky Local Navigation */}
      <nav className="jpfo-local-nav">
        <div className="jpfo-nav-container">
          <span className="jpfo-nav-brand">Eter Careers</span>
          <div className="jpfo-nav-links">
            <a href="#overview">Overview</a>
            <a href="#culture">Culture</a>
            <a href="#benefits">Benefits</a>
            <a href="#values">Values</a>
            {/* UPDATED: Links directly to your Aplyjoo form */}
            <Link to="/careers/apply" className="jpfo-btn-nav">Apply Now</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="jpfo-section jpfo-hero">
        <p className="jpfo-eyebrow">Work With Us</p>
        <h1>Join the team. <br/><span>Do the best work of your life.</span></h1>
        <p className="jpfo-hero-sub">
          We are looking for passionate, innovative thinkers to help us shape the future of e-commerce and retail technology across Cambodia.
        </p>
      </section>

      {/* 2. Culture (Left Text, Right Image) */}
      <section id="culture" className="jpfo-section jpfo-feature">
        <div className="jpfo-feature-text">
          <h3 className="jpfo-section-title">Our Environment</h3>
          <h2 className="jpfo-headline">A culture of innovation.</h2>
          <p className="jpfo-desc">
            We believe that great ideas come from everywhere. Our modern offices in Phnom Penh are designed to foster collaboration, creativity, and open communication. Here, your voice matters, and your impact is visible.
          </p>
        </div>
        <div className="jpfo-feature-visual jpfo-glass-panel">
          <span className="jpfo-visual-placeholder">Team Collaboration Workspace</span>
        </div>
      </section>

      {/* 3. Benefits (Left Image, Right Text) */}
      <section id="benefits" className="jpfo-section jpfo-feature-alt">
        <div className="jpfo-feature-visual jpfo-glass-panel">
          <span className="jpfo-visual-placeholder">Health & Wellness Benefits</span>
        </div>
        <div className="jpfo-feature-text">
          <h3 className="jpfo-section-title">Comprehensive Perks</h3>
          <h2 className="jpfo-headline">Taking care of our people.</h2>
          <p className="jpfo-desc">
            Your well-being is our priority. We offer competitive salaries, premium health insurance (including family coverage), flexible working hours, and generous paid time off to ensure you thrive both inside and outside the office.
          </p>
        </div>
      </section>

      {/* 4. Values (Cards) */}
      <section id="values" className="jpfo-section jpfo-stories">
        <div className="jpfo-stories-header">
          <h3 className="jpfo-section-title">What Drives Us</h3>
          <h2 className="jpfo-headline">Empowering your growth.</h2>
        </div>
        
        <div className="jpfo-grid">
          <div className="jpfo-card">
            <h3>Continuous Learning</h3>
            <p className="jpfo-metric">Grow</p>
            <p>Access to premium online courses, mentorship programs, and dedicated time for personal development to keep your skills sharp.</p>
            <Link to="/about/mission" className="jpfo-link">Read our mission <span className="jpfo-chevron">&gt;</span></Link>
          </div>
          <div className="jpfo-card">
            <h3>Diversity & Inclusion</h3>
            <p className="jpfo-metric">Belong</p>
            <p>We are building a workplace that reflects the diverse communities we serve across Cambodia, where everyone feels valued.</p>
            <Link to="/about/mission" className="jpfo-link">Learn about our values <span className="jpfo-chevron">&gt;</span></Link>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="jpfo-section jpfo-cta">
        <h2>Ready to make an impact?</h2>
        <p>Submit your application and let's build the future together.</p>
        {/* UPDATED: Links directly to your Aplyjoo form */}
        <Link to="/careers/apply" className="jpfo-btn-primary">Apply Now</Link>
      </section>
    </div>
  );
};

export default Jobform;