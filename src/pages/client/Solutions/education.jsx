import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/solution/education.css';

const Education = () => {
  return (
    <div className="educasolution">
      {/* Sticky Local Navigation */}
      <nav className="educasolution-local-nav">
        <div className="educasolution-nav-container">
          <span className="educasolution-nav-brand">Eter Education</span>
          <div className="educasolution-nav-links">
            <a href="#overview">Overview</a>
            <a href="#classroom">Smart Classroom</a>
            <a href="#remote-learning">Remote Learning</a>
            <a href="#success-stories">Success Stories</a>
            <Link to="/Solutions/Bookasolution" className="educasolution-btn-nav">Book a Solution</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview (Hero) */}
      <section id="overview" className="educasolution-section educasolution-hero">
      
        <h1>Shaping the next <br /><span>generation of learners.</span></h1>
        <p className="educasolution-hero-sub">
          Empowering Cambodian students and teachers with immersive spatial learning, real-time collaboration tools, and cutting-edge EdTech designed for every classroom — from Phnom Penh to the provinces.
        </p>
        <div className="educasolution-hero-stats">
          <div className="educasolution-stat">
            <span className="educasolution-stat-number">3.2M+</span>
            <span className="educasolution-stat-label">Students in Cambodia</span>
          </div>
          <div className="educasolution-stat">
            <span className="educasolution-stat-number">13,000+</span>
            <span className="educasolution-stat-label">Schools Nationwide</span>
          </div>
          <div className="educasolution-stat">
            <span className="educasolution-stat-number">25</span>
            <span className="educasolution-stat-label">Provinces Covered</span>
          </div>
        </div>
      </section>

      {/* Cambodia Context Band */}
      <section className="educasolution-context-band">
        <div className="educasolution-context-inner">
          <p className="educasolution-context-title">Why Cambodia?</p>
          <p className="educasolution-context-body">
            Cambodia's education sector is growing rapidly, with the government prioritizing digital transformation through the Digital Economy and Digital Society Policy 2021–2035. Yet rural schools still face connectivity gaps, teacher shortages, and limited access to quality learning materials. Eter bridges this divide with offline-capable spatial tools, multilingual Khmer support, and community-centered deployment models.
          </p>
        </div>
      </section>

      {/* 2. Smart Classroom */}
      <section id="classroom" className="educasolution-section educasolution-feature">
        <div className="educasolution-feature-text">
          <h3 className="educasolution-section-title">Smart Classroom</h3>
          <h2 className="educasolution-headline">Learning that comes alive.</h2>
          <p className="educasolution-desc">
            Transform ordinary classrooms into immersive 3D environments. Students in Phnom Penh, Siem Reap, and beyond can explore Angkor Wat in spatial detail, dissect virtual organisms in biology class, or walk through historical timelines — all without leaving their seats. Full support for Khmer-language content and MOEYS-aligned curriculum.
          </p>
          <ul className="educasolution-feature-list">
            <li>✦ Khmer-language spatial content library</li>
            <li>✦ MOEYS national curriculum alignment</li>
            <li>✦ Works on low-bandwidth or offline networks</li>
            <li>✦ Compatible with budget Android tablets</li>
          </ul>
        </div>
        <div className="educasolution-feature-visual educasolution-glass-panel">
          <span className="educasolution-visual-placeholder">Smart Classroom Augmented View</span>
        </div>
      </section>

      {/* 3. Remote Learning */}
      <section id="remote-learning" className="educasolution-section educasolution-feature-alt">
        <div className="educasolution-feature-visual educasolution-glass-panel">
          <span className="educasolution-visual-placeholder">Remote Learning Portal View</span>
        </div>
        <div className="educasolution-feature-text">
          <h3 className="educasolution-section-title">Remote Learning</h3>
          <h2 className="educasolution-headline">No student left behind.</h2>
          <p className="educasolution-desc">
            Reaching students in Mondulkiri, Ratanakiri, and other rural provinces where qualified teachers are scarce. Eter's remote learning platform delivers live and recorded lessons via satellite-optimized streams, enabling expert teachers in the capital to guide hundreds of classrooms simultaneously through shared spatial sessions.
          </p>
          <ul className="educasolution-feature-list">
            <li>✦ Satellite-optimized video for rural connectivity</li>
            <li>✦ Live multi-classroom spatial sessions</li>
            <li>✦ Teacher-to-student ratio improvement tools</li>
            <li>✦ Community learning center deployment kits</li>
          </ul>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section id="success-stories" className="educasolution-section educasolution-stories">
        <div className="educasolution-stories-header">
          <h3 className="educasolution-section-title">Success Stories</h3>
          <h2 className="educasolution-headline">Proven in the classroom.</h2>
        </div>

        <div className="educasolution-grid">
          <div className="educasolution-card">
            <div className="educasolution-card-tag">Phnom Penh</div>
            <h3>Bak Touk High School</h3>
            <p className="educasolution-metric">40%</p>
            <p>Increase in STEM examination scores after introducing Eter's spatial science labs across grades 7–12.</p>
            <button className="educasolution-link">Read the case study <span className="educasolution-chevron">&gt;</span></button>
          </div>
          <div className="educasolution-card">
            <div className="educasolution-card-tag">Siem Reap Province</div>
            <h3>Rural Community Schools</h3>
            <p className="educasolution-metric">1,800+</p>
            <p>Students in remote villages now accessing qualified instruction weekly through Eter's satellite-linked learning hubs.</p>
            <button className="educasolution-link">Read the case study <span className="educasolution-chevron">&gt;</span></button>
          </div>
          <div className="educasolution-card">
            <div className="educasolution-card-tag">Ministry Partnership</div>
            <h3>MOEYS Pilot Program</h3>
            <p className="educasolution-metric">12</p>
            <p>Provinces selected for the national Eter EdTech pilot, with full rollout targeted by 2026 under Cambodia's Digital Economy policy.</p>
            <button className="educasolution-link">Read the case study <span className="educasolution-chevron">&gt;</span></button>
          </div>
        </div>
      </section>

      {/* 5. Partners Band */}
      <section className="educasolution-partners">
        <p className="educasolution-partners-label">Trusted by institutions across Cambodia</p>
        <div className="educasolution-partners-logos">
          <span>MOEYS</span>
          <span>Royal University of Phnom Penh</span>
          <span>USAID Cambodia</span>
          <span>UNESCO Phnom Penh</span>
          <span>IFC Education</span>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="educasolution-section educasolution-cta">
        <h2>Ready to transform education in Cambodia?</h2>
        <p>Speak with our education specialists to build a custom Eter solution for your school, university, or ministry program.</p>
        <Link to="/contact/quote" className="educasolution-btn-primary">Request a Quote</Link>
      </section>
    </div>
  );
};

export default Education;