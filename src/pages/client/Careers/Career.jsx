import React from "react";
import { NavLink } from "react-router-dom";
import Openings from "./openings";
import Internships from "./internships";
import "../../../styles/careers/careers.css";

const Careers = () => {
  return (
    <div className="carr-container">
      
      {/* Sticky Local Navigation */}
      <nav className="carr-local-nav">
        <div className="carr-nav-container">
          <span className="carr-nav-brand">Eter Careers</span>
          <div className="carr-nav-links">
            <NavLink to="/careers" className="carr-nav-item" end>Overview</NavLink>
            <NavLink to="/careers/openings" className="carr-nav-item">Open Jobs</NavLink>
            <NavLink to="/careers/internships" className="carr-nav-item">Internships</NavLink>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="carr-section carr-hero">
               <h1>Join us. <br/><span>Build the future.</span></h1>
        <p className="carr-hero-sub">
          Discover a place where your best work can happen. We are looking for passionate people to help us build the next generation of tools.
        </p>
      </section>

      {/* 2. Culture / Quote Section (Split Layout) */}
      <section className="carr-section carr-feature">
        <div className="carr-feature-text">
          <h3 className="carr-section-title">Our Culture</h3>
          <h2 className="carr-headline">Do the best work of your life.</h2>
          <p className="carr-desc">
            “Help us build the future of tools. Whether you’re a seasoned expert or a student looking for your first big challenge, there’s a place for you here. We believe in innovation, collaboration, and pushing the boundaries of what's possible.”
          </p>
        </div>
        <div className="carr-feature-visual carr-glass-panel">
          {/* Replaced placeholder with your image */}
          <img src="/images/apple-park.jpg" alt="Eter Campus" className="carr-campus-img" />
        </div>
      </section>

      {/* 3. Open Roles Section */}
      <section id="open-roles" className="carr-section carr-roles">
        <div className="carr-roles-header">
          <h3 className="carr-section-title">Opportunities</h3>
          <h2 className="carr-headline">Find your fit.</h2>
          <p className="carr-desc-center">
            Explore our open positions across engineering, design, operations, and more.
          </p>
        </div>
        
        {/* Mounts your custom Openings component inside a clean wrapper */}
        <div className="carr-component-wrapper">
          <Openings />
        </div>
      </section>

      {/* 4. Internships Section */}
      <section id="internships" className="carr-section carr-internships">
        <div className="carr-roles-header">
          <h3 className="carr-section-title">Students & Grads</h3>
          <h2 className="carr-headline">Start your journey.</h2>
          <p className="carr-desc-center">
            Bring your fresh perspective to Eter. Our internship programs offer real-world experience and mentorship.
          </p>
        </div>

        {/* Mounts your custom Internships component inside a clean wrapper */}
        <div className="carr-component-wrapper">
          <Internships />
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="carr-section carr-cta">
        <h2>Ready to make an impact?</h2>
        <p>Set up your profile, submit your resume, and let's create something amazing together.</p>
        <NavLink to="/careers/openings" className="carr-btn-primary">View Open Jobs</NavLink>
      </section>

    </div>
  );
};

export default Careers;