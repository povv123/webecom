import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../../styles/services/services.css";

const Services = () => {
  return (
    <div className="servv">
      {/* APPLE STYLE SUB-NAV */}
      <nav className="sub-nav">
        <div className="sub-nav-container">
          <NavLink to="/services" end className="nav-link">Overview</NavLink>
          
          {/* Consulting Category */}
          <NavLink to="/services/consulting/strategy" className="nav-link">Strategy</NavLink>
          <NavLink to="/services/consulting/it" className="nav-link">IT</NavLink>
          <NavLink to="/services/consulting/financial" className="nav-link">Finance</NavLink>
          <NavLink to="/services/consulting/taxes" className="nav-link">Taxes</NavLink>
          <NavLink to="/services/consulting/logistics" className="nav-link">Logistics</NavLink>

          {/* Maintenance Category */}
          <NavLink to="/services/maintenance/equipment" className="nav-link">Equipment</NavLink>
          <NavLink to="/services/maintenance/facility" className="nav-link">Facility</NavLink>
          <NavLink to="/services/maintenance/repair" className="nav-link">Parts</NavLink>
          <NavLink to="/services/maintenance/isp" className="nav-link">Internet</NavLink>

          {/* Training Category */}
          <NavLink to="/services/training/technical" className="nav-link">Technical</NavLink>
          <NavLink to="/services/training/customer-service" className="nav-link">Customer Care</NavLink>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-image">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-container"
        >
          <img src="/images/industrial-hero.jpg" alt="Industrial Services" />
          <h1>Expertise for every <br/> <span className="gradient-text">industrial need.</span></h1>
        </motion.div>
      </section>

      {/* DISCLOSURE SECTIONS WITH DIRECT LINKS */}
      
      {/* 1. Strategy & Consulting */}
      <section className="disclosure">
        <div className="left">
          <img src="/images/strategy-bg.jpg" alt="Strategy" />
        </div>
        <div className="right">
          <h3>Business Strategy & IT</h3>
          <p>Blueprints for modern enterprise success through data and analysis.</p>
          <div className="link-group">
            <Link to="/services/consulting/strategy">Business Strategy →</Link>
            <Link to="/services/consulting/it">IT Consulting →</Link>
            <Link to="/services/consulting/financial">Financial Analysis →</Link>
            <Link to="/services/consulting/taxes">Taxes →</Link>
            <Link to="/services/consulting/logistics">Logistics →</Link>
          </div>
        </div>
      </section>

      {/* 2. Maintenance & Infrastructure */}
      <section className="disclosure alt-layout">
        <div className="left">
          <img src="/images/maintenance-bg.jpg" alt="Maintenance" />
        </div>
        <div className="right">
          <h3>Equipment & Facility</h3>
          <p>Zero-downtime solutions for industrial machinery and facility infrastructure.</p>
          <div className="link-group">
            <Link to="/services/maintenance/equipment">Equipment Servicing →</Link>
            <Link to="/services/maintenance/facility">Facility Management →</Link>
            <Link to="/services/maintenance/repair">Spare Parts →</Link>
            <Link to="/services/maintenance/isp">Internet Provider →</Link>
          </div>
        </div>
      </section>

      {/* 3. Workforce Training */}
      <section className="disclosure">
        <div className="left">
          <img src="/images/training-bg.jpg" alt="Training" />
        </div>
        <div className="right">
          <h3>Professional Development</h3>
          <p>Upskill your team with technical mastery and elite customer service.</p>
          <div className="link-group">
            <Link to="/services/training/technical">Technical Training →</Link>
            <Link to="/services/training/customer-service">Customer Service Training →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;