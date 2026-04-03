import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/aboutus/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-container">


      {/* TOP NAV (APPLE STYLE) */}
      <div className="about-nav">

            <NavLink to="/about" className="nav-link" >
          Hello wwIII
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
        <img src="/images/apple-park.jpg" alt="hero" />
        <h1>Our Values</h1>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <p className="quote">
          “We believe that business, at its best, serves the public good,
          empowers people around the world, and binds us together as never before.”
        </p>
        <span className="author">— CEO</span>
      </section>

      {/* DESCRIPTION */}
      <section className="description">
        <p>
          We are committed to demonstrating that business can and should be a
          force for good. Achieving that takes innovation, collaboration, and a
          focus on serving others. It also means leading with our values in the
          technology we make, the way we make it, and how we treat people and the planet.
        </p>
      </section>

      {/* DISCLOSURE */}
      <section className="disclosure">
        <div className="left">
          <img src="/images/report.jpg" alt="report" />
        </div>
        <div className="right">
          <p>
            We have a wide range of reports and websites that outline key
            progress across each of our values and other topics.
          </p>
          <a href="#">View our Disclosure Index →</a>
        </div>
      </section>
​

      <section className="disclosure">
        <div className="left">
          <img src="/images/report.jpg" alt="report" />
        </div>
        <div className="right">
          <p>
            We have a wide range of reports and websites that outline key
            progress across each of our values and other topics.
          </p>
          <a href="#">View our Disclosure Index →</a>
        </div>
      </section>

     
     
    </div>
  );
};

export default AboutUs;