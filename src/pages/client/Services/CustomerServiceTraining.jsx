import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/services/technicaltraining.css';

const CustomerServiceTraining = () => {
  const programs = [
    { title: "Communication", area: "Verbal & Written Skills for Client-Facing Roles" },
    { title: "Conflict Resolution", area: "De-escalation Techniques & Complaint Handling" },
    { title: "CRM & Digital Tools", area: "Hands-on Training for Modern Service Platforms" }
  ];

  return (
    <div className="TTT-container">
      {/* Local Nav: Sticky blurred header */}
      <nav className="TTT-localnav">
        <div className="TTT-localnav-content">
          <div className="TTT-localnav-title">
            <Link to="/">Customer Service Training</Link>
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
          <p className="TTT-eyebrow">People at the center</p>
          <h1>Empower your frontline. <span>Customer Service Training.</span></h1>
          <p className="TTT-hero-sub">
            Practical programs designed to build confident, empathetic service
            professionals who turn every interaction into a lasting impression.
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

export default CustomerServiceTraining;