import React from 'react';
import "../../../styles/aboutus.css";

const AboutUs = () => {
  const history = [
    { year: '2018', title: 'The Spark.', desc: 'Started with a team of three and a single vision to simplify the complex.' },
    { year: '2022', title: 'Going Global.', desc: 'Expanded to 12 countries, bringing our signature design to millions.' },
    { year: '2026', title: 'Net Zero.', desc: 'Achieved full carbon neutrality across our entire product lineup.' },
  ];

  const leaders = [
    { name: 'Sarah Chen', role: 'Apple Specialist', img: '👤' },
    { name: 'Marcus Vane', role: 'Hardware Engineering', img: '👤' },
    { name: 'Elena Rossi', role: 'Head of Design', img: '👤' },
    { name: 'Julian Kwok', role: 'Operations', img: '👤' },
  ];

  return (
    <div className="apple-about-page antialiased font-sans">
      
      {/* --- MISSION HERO --- */}
      <section className="mission-hero bg-white">
        <div className="container-center reveal-on-scroll">
          <h2 className="mission-label">Our Mission</h2>
          <h1 className="apple-text-gradient">
            To create tools that <br /> 
            <span className="text-gray-400 italic">empower humanity.</span>
          </h1>
          <p className="mission-subtext">
            We believe technology is at its best when it's invisible. We build for privacy, for the planet, and for you.
          </p>
        </div>
      </section>

      {/* --- SPATIAL HISTORY --- */}
      <section className="history-section">
        <div className="container-wide">
          <h2 className="section-title text-center">Our History</h2>
          <div className="grid-container">
            {history.map((item, i) => (
              <div key={i} className="spatial-card">
                <div className="year-display">{item.year}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RETAIL LEADERSHIP CAROUSEL --- */}
      <section className="leadership-retail bg-white">
        <div className="container-wide overflow-visible">
          <header className="mb-12 text-left px-6 md:px-0">
            <h2 className="section-title text-left">
              Help is here. <span className="text-gray-400">Whenever and however you need it.</span>
            </h2>
          </header>

          <div className="retail-carousel hide-scrollbar px-6 md:px-0">
            {leaders.map((person, i) => (
              <div key={i} className="retail-card group">
                <div className="retail-text">
                  <p className="retail-role">{person.role}</p>
                  <h3 className="retail-name">{person.name}</h3>
                </div>
                <div className="retail-portrait">
                  <div className="portrait-icon">{person.img}</div>
                </div>
              </div>
            ))}
            <div className="carousel-spacer" />
          </div>
        </div>
      </section>

      {/* --- JOIN CTA --- */}
      <section className="cta-section bg-white border-t border-gray-100">
        <div className="container-center">
          <h2 className="cta-title">
            Want to join us? <br />
            <span className="text-black">Work at Eter.</span>
          </h2>
          <button className="apple-pill-button">
            View Openings
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;