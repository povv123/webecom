import React from "react";
import { NavLink } from "react-router-dom";
import Openings from "./openings";
import Internships from "./internships";
import "../../../styles/careers/careers.css";

const Careers = () => {
  return (
    <div className="career-container">

      <div className="career-nav">
        <NavLink to="/careers" className="nav-link" end>
          Careers 
        </NavLink>
        <NavLink to="/careers/openings" className="nav-link">
          Opening Job
        </NavLink>
        <NavLink to="/careers/internships" className="nav-link">
          Internships
        </NavLink>
      </div>

      {/* HERO SECTION */}
      <section className="hero-image">
        <img src="/images/apple-park.jpg"  />
        <h1>Join WWIII with Trump </h1>
      </section>
    
      <section className="quote-section">
        <p className="quote">
          “Help us build the future of tools. Whether you’re a seasoned expert or a student looking for your first big challenge, there’s a place for you here.”
        </p>
      </section>

      <div id="open-roles">
        <Openings />
      </div>

      <div id="internships">
        <Internships />
      </div>

    </div>
  );
};

export default Careers;