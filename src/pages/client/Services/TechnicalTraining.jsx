import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/technicaltraining.css'; 

const TechnicalTraining = () => {
  const programs = [
    { title: "Law", area: "Lawyer & Legal Professionals" }, 
    { title: "High School", area: "Grades 9 to 12 Academic Support" },
    { title: "English", area: "Specialized Business English" }
  ];

  return (
    <div className="TTT-container">
      {/* Local Nav: Sticky blurred header */}
      <nav className="TTT-localnav">
        <div className="TTT-localnav-content">
          <div className="TTT-localnav-title">
            <Link to="/">Technical Training</Link>
          </div>
          <div className="TTT-localnav-actions">
            <Link to="/Services/Bookservice" className="TTT-localnav-button">
              Book now
            </Link>
          </div>
        </div>
      </nav>

      <main className="TTT-content">
        {/* Hero Section: Centered, Bold Typography */}
        <section className="TTT-hero">
          <h1>Elevate your team’s expertise. <span>Technical Training.</span></h1>
          <p className="TTT-hero-sub">
            Advanced workshops led by industry veterans to move your partners, 
            yourselves, and the industry forward.
          </p>
        </section>

        {/* Grid Section: Cards with Action Links */}
        <section className="TTT-grid">
          {programs.map((p, i) => (
            <div key={i} className="TTT-card">
              <div className="TTT-card-info">
                <h3>{p.title}</h3>
                <p>{p.area}</p>
              </div>
              <button className="TTT-link">Learn more</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TechnicalTraining;