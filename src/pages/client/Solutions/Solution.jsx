import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/solution/solution.css';

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
            <div className="soluu-sector-icon">⚕️</div>
            <h3>Healthcare</h3>
            <p>Revolutionize patient care, medical imaging, and remote surgical training with immersive spatial computing.</p>
            <span className="soluu-link">
              Explore Healthcare <span className="soluu-chevron">&gt;</span>
            </span>
          </Link>

          {/* Education Link */}
          <Link to="/solutions/education" className="soluu-sector-card">
            <div className="soluu-sector-icon">🎓</div>
            <h3>Education</h3>
            <p>Empower the next generation with interactive learning environments and high-speed connected campus infrastructure.</p>
            <span className="soluu-link">
              Explore Education <span className="soluu-chevron">&gt;</span>
            </span>
          </Link>

          {/* Manufacturing Link */}
          <Link to="/solutions/manufacturing" className="soluu-sector-card">
            <div className="soluu-sector-icon">⚙️</div>
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