import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";


import "../../../styles/services/services.css";

import BurritoVideo from '../../../assets/videos/Cook a burrito.mp4';

const Services = () => {
  return (
    <div className="servre servre-dark-mode">
      
  
      <nav className="servre-local-nav">
        <div className="servre-nav-content">
          <NavLink to="/services" end className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Overview</NavLink>
          
          <NavLink to="/services/consulting/strategy" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Strategy</NavLink>
          <NavLink to="/services/consulting/it" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>IT</NavLink>
          <NavLink to="/services/consulting/financial" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Finance</NavLink>
          <NavLink to="/services/consulting/taxes" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Taxes</NavLink>
          <NavLink to="/services/consulting/logistics" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Logistics</NavLink>

          <NavLink to="/services/maintenance/equipment" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Equipment</NavLink>
          <NavLink to="/services/maintenance/facility" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Facility</NavLink>
          <NavLink to="/services/maintenance/repair" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Parts</NavLink>
          <NavLink to="/services/maintenance/isp" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Internet</NavLink>

          <NavLink to="/services/training/technical" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Technical</NavLink>
          <NavLink to="/services/training/customer-service" className={({ isActive }) => isActive ? "servre-nav-item active" : "servre-nav-item"}>Customer Care</NavLink>
        </div>
      </nav>

    
      <header className="servre-ent-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="servre-ent-hero-text"
        >
         
          <h1>All your industrial needs.<br/> <span className="servre-gradient-text">In one seamless ecosystem.</span></h1>
          <p className="servre-hero-subtext">Strategy, Maintenance, and Training. United.</p>
        </motion.div>
      </header>

 
      <section className="servre-ent-video-wrapper">
        <div className="servre-video-fade-top"></div>
        <video 
          className="servre-ent-video"
          src={BurritoVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="servre-video-fade-bottom"></div>
      </section>

      <main className="servre-ent-grid-container">
        
        {/* Card 1 */}
        <Link to="/services/consulting/strategy" className="servre-ent-card card-strategy">
          <div className="servre-ent-card-content">
            <h3>Strategy & IT</h3>
            <p>Blueprints for modern enterprise success.</p>
            <span className="servre-ent-link">Explore Consulting &rarr;</span>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/services/maintenance/equipment" className="servre-ent-card card-maintenance">
          <div className="servre-ent-card-content">
            <h3>Infrastructure</h3>
            <p>Zero-downtime solutions for your facility.</p>
            <span className="servre-ent-link">Explore Maintenance &rarr;</span>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/services/training/technical" className="servre-ent-card card-training">
          <div className="servre-ent-card-content">
            <h3>Workforce</h3>
            <p>Upskill your team with technical mastery.</p>
            <span className="servre-ent-link">Explore Training &rarr;</span>
          </div>
        </Link>

      </main>
    </div>
  );
};

export default Services;