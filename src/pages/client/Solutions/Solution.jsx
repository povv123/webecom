import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/solution/solution.css';

// --- Custom Apple-Style SVG Icons (Monoline, clean, outline only) ---
const IconHealthcare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M12 8v8"></path>
    <path d="M8 12h8"></path>
  </svg>
);

const IconEducation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const IconManufacturing = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
// ----------------------------------------------------------------------

const Solution = () => {
  return (
    <div className="soluu">
      {/* 1. Hero Section */}
      <section className="soluu-section soluu-hero">
        <h2 className="soluu-eyebrow">Eter Vision</h2>
        <h1 className="soluu-title">
          The era of spatial <br />
          <span>computing is here.</span>
        </h1>
        <p className="soluu-hero-sub">
          Seamlessly blend digital enterprise content with your physical space. 
          Work, collaborate, and create in ways never before possible.
        </p>
        <div className="soluu-hero-actions">
          <button className="soluu-btn-primary">Book a demo</button>
          <button className="soluu-btn-secondary">Buy</button>
        </div>
      </section>

      {/* 2. Sectors / Industries Section (Replaced Productivity & Connection) */}
      <section className="soluu-section soluu-sectors">
        <div className="soluu-sectors-header">
          <h3 className="soluu-section-title">Industries</h3>
          <h2 className="soluu-headline">Tailored offerings by sector.</h2>
          <p className="soluu-desc-center">
            Discover how Eter's spatial computing and enterprise platforms are transforming workflows across key industries.
          </p>
        </div>

        <div className="soluu-sector-grid">
          {/* Healthcare Link */}
          <Link to="/solutions/healthcare" className="soluu-sector-card">
            <div className="soluu-sector-icon"><IconHealthcare /></div>
            <h3>Healthcare</h3>
            <p>Revolutionize patient care, medical imaging, and remote surgical training with immersive spatial computing.</p>
            <span className="soluu-link">
              Explore Healthcare <span className="soluu-chevron">&gt;</span>
            </span>
          </Link>

          {/* Education Link */}
          <Link to="/solutions/education" className="soluu-sector-card">
            <div className="soluu-sector-icon"><IconEducation /></div>
            <h3>Education</h3>
            <p>Empower the next generation with interactive learning environments and high-speed connected campus infrastructure.</p>
            <span className="soluu-link">
              Explore Education <span className="soluu-chevron">&gt;</span>
            </span>
          </Link>

          {/* Manufacturing Link */}
          <Link to="/solutions/manufacturing" className="soluu-sector-card">
            <div className="soluu-sector-icon"><IconManufacturing /></div>
            <h3>Manufacturing</h3>
            <p>Optimize assembly lines, enhance predictive maintenance, and build 3D prototypes faster in spatial environments.</p>
            <span className="soluu-link">
              Explore Manufacturing <span className="soluu-chevron">&gt;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* 3. OS / Apps Section */}
      <section className="soluu-section soluu-os">
        <div className="soluu-os-content">
          <h3 className="soluu-section-title">eterOS</h3>
          <h2 className="soluu-headline">An operating system<br/>designed for spatial.</h2>
          <p className="soluu-desc">
            Navigate naturally using your eyes, hands, and voice. Apps fill the space around you, 
            beyond the boundaries of a display. They move anywhere, scale to the perfect size, 
            react to the lighting in your room, and even cast shadows.
          </p>
        </div>
        <div className="soluu-os-grid">
          <div className="soluu-os-card">
            <h4>Infinite Scaling</h4>
            <p>Apps grow beyond the dimensions of your room.</p>
          </div>
          <div className="soluu-os-card">
            <h4>Intuitive Tracking</h4>
            <p>Navigate just by looking at apps, buttons, and text fields.</p>
          </div>
        </div>
      </section>

      {/* 4. Technology & Hardware Section */}
      <section className="soluu-section soluu-tech">
        <div className="soluu-tech-header">
          <h3 className="soluu-section-title">Technology</h3>
          <h2 className="soluu-headline">Innovation you can see, hear, and feel.</h2>
          <p className="soluu-desc-center">Pushing boundaries from the inside out with revolutionary dual-chip performance.</p>
        </div>
        
        <div className="soluu-tech-grid">
          <div className="soluu-tech-item soluu-glass-panel">
            <h3>Visuals</h3>
            <p>Custom micro‑OLED displays delivering more pixels than a 4K TV to each eye.</p>
          </div>
          <div className="soluu-tech-item soluu-glass-panel">
            <h3>Audio</h3>
            <p>Advanced Spatial Audio analyzes your room's acoustic properties to adapt and match sound to your space.</p>
          </div>
          <div className="soluu-tech-item soluu-glass-panel">
            <h3>Processing</h3>
            <p>Virtually lag-free, real-time views of the world powered by advanced silicon architecture.</p>
          </div>
        </div>
      </section>

      {/* 5. Values & Privacy Section */}
      <section className="soluu-section soluu-values">
        <div className="soluu-values-content">
          <h3 className="soluu-section-title">Values</h3>
          <h2 className="soluu-headline">Designed to make a difference.</h2>
          <p className="soluu-desc">
            Privacy and security are built in from the ground up. Data from cameras and sensors is 
            processed at the system level, so individual apps don't need to see your surroundings. 
            Your physical inputs are never shared with third parties.
          </p>
          <button className="soluu-link">
            Learn more about Privacy <span className="soluu-chevron">&gt;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solution;