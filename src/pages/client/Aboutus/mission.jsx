import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/aboutus/mission.css";

// Importing ONLY the background image
import missionImg from '../../../assets/images/mission.jpg';

const Mission = () => {
  // Just a simple list of words - no images attached!
  const coreValues = [
    "Innovation", 
    "Quality", 
    "Integrity", 
    "Sustainability"
  ];

  return (
    <div className="about-container">

      {/* NAV */}
      <div className="about-nav">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/about/mission" className="nav-link">Mission</NavLink>
        <NavLink to="/about/history" className="nav-link">History</NavLink>
        <NavLink to="/about/leadership" className="nav-link">Leadership</NavLink>
      </div>

      {/* HERO */}
      <section className="hero-image">
        <img src={missionImg} alt="Company Mission" className="mission-image" />
        <h1>Mission & Vision</h1>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <p className="quote">
          “Our mission is to create products that enrich people’s lives and empower the future.”
        </p>
        <span className="author">— Company Vision</span>
      </section>

      {/* CONTENT */}
      <section className="description">
        <h3>Our Mission</h3>
        <p>
          We strive to deliver high-quality products that combine innovation,
          simplicity, and performance to improve everyday experiences.
        </p>

        <h3>Our Vision</h3>
        <p>
          To become a global leader in technology, shaping a smarter and more
          sustainable future for everyone.
        </p>
      </section>

      {/* VALUES GRID */}
      <section className="values">
        <h3>Our Core Values</h3>

        <div className="grid">
          {/* Mapping through the text array we created above */}
          {coreValues.map((item, i) => (
            <div className="value-card" key={i}>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Mission;