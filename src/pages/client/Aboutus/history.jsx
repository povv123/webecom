import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/aboutus/aboutus.css";

const History = () => {
  return (
    <div className="about-container">

      {/* TOP NAV */}
      <div className="about-nav">

        <NavLink to="/about" className="nav-link">
          About us
        </NavLink>

        <NavLink to="/about/mission" className="nav-link">
          Mission
        </NavLink>

        <NavLink to="/about/history" className="nav-link">
          History
        </NavLink>

        <NavLink to="/about/leadership" className="nav-link">
          Leadership
        </NavLink>

      </div>

      {/* HERO */}
      <section className="hero-image">
        <img src="/images/history.jpg" alt="history" />
        <h1>Our History</h1>
      </section>

      {/* INTRO */}
      <section className="quote-section">
        <p className="quote">
          “Our journey is defined by innovation, growth, and a commitment to excellence.”
        </p>
        <span className="author">— Company Statement</span>
      </section>

      {/* DESCRIPTION */}
      <section className="description">
        <p>
          Since our founding, we have continuously pushed the boundaries of
          technology and design. What began as a small vision has grown into a
          global company delivering impactful products and services.
        </p>
      </section>

      {/* TIMELINE STYLE SECTIONS */}
      <section className="disclosure">
        <div className="left">
          <img src="/images/history1.jpg" alt="start" />
        </div>
        <div className="right">
          <h3>Our Beginning</h3>
          <p>
            We started with a mission to innovate and simplify everyday life
            through technology, building our foundation with passion and purpose.
          </p>
        </div>
      </section>

      <section className="disclosure">
        <div className="left">
          <img src="/images/history2.jpg" alt="growth" />
        </div>
        <div className="right">
          <h3>Growth & Expansion</h3>
          <p>
            Over the years, we expanded globally, reaching new markets and
            continuously improving our products and services.
          </p>
        </div>
      </section>

      <section className="disclosure">
        <div className="left">
          <img src="/images/history3.jpg" alt="today" />
        </div>
        <div className="right">
          <h3>Today</h3>
          <p>
            Today, we stand as a leader in innovation, committed to creating
            meaningful experiences and shaping the future.
          </p>
        </div>
      </section>

    </div>
  );
};

export default History;