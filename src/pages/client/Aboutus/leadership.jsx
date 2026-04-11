import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/aboutus/leadership.css";


import leadershipImg from '../../../assets/images/leadership.jpg';

const Leadership = () => {
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
       <img src={leadershipImg} alt="our Leaders" className="leadership-image" />
        <h1>Leadership</h1>
      </section>

      {/* INTRO */}
      <section className="quote-section">
        <p className="quote">
          “Leadership is about vision, responsibility, and inspiring people to achieve more.”
        </p>
      </section>

      {/* LEADERS GRID */}
      <section className="leaders">
        <div className="leader-card">
          <img src="/images/ceo.jpg" alt="CEO" />
          <h3>Chief Executive Officer</h3>
          <p>Leads company strategy and innovation.</p>
        </div>

        <div className="leader-card">
          <img src="/images/coo.jpg" alt="COO" />
          <h3>Chief Operating Officer</h3>
          <p>Oversees global operations and execution.</p>
        </div>

        <div className="leader-card">
          <img src="/images/cfo.jpg" alt="CFO" />
          <h3>Chief Financial Officer</h3>
          <p>Manages financial growth and sustainability.</p>
        </div>
      </section>

    </div>
  );
};

export default Leadership;