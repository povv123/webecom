import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/aboutus/aboutus.css";

const Mission = () => {
  return (
    <div className="about-container">

      {/* NAV */}
      <div className="about-nav">
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/about/mission" className="nav-link">Mission</NavLink>
        <NavLink to="/about/history" className="nav-link">History</NavLink>
        <NavLink to="/about/leadership" className="nav-link">Leadership</NavLink>
      </div>

      {/* HERO */}
      <section className="hero-image">
        <img src="/images/mission.jpg" alt="mission" />
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
          {["Innovation", "Quality", "Integrity", "Sustainability"].map((item, i) => (
            <div className="value-card" key={i}>
              <img src={`/images/mission${i + 1}.jpg`} alt={item} />
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Mission;