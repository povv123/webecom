import React from "react";
import { NavLink, Link } from "react-router-dom";

// Styling - Ensure this path points to the CSS file we just updated
import "../../../styles/aboutus/leadership.css"; 

// Assets
import LeadershipHero from '../../../assets/images/leadership.jpg';


const LeaderProfileCard = ({ name, title, description, image }) => (
  <article className="leader-card">
    <div className="leader-profile-img-container">
      <img src={image} alt={name} className="leader-profile-img" />
    </div>
    <h3 className="leader-title">{name}</h3>
    <p className="leader-role-text">{title}</p>
    <p className="leader-bio-text">{description}</p>
    <a href="#!" onClick={(e) => e.preventDefault()} className="leader-text-link">
      Learn more about {name.split(' ')[0]}
    </a>
  </article>
);


const GovernanceGroup = ({ category, reports }) => (
  <div className="leader-report-group">
    <h4 className="leader-report-category">{category}</h4>
    <ul className="leader-report-list">
      {reports.map((report) => (
        <li key={report}>
          <a 
            href="#!" 
            className="leader-report-item"
            onClick={(e) => e.preventDefault()}
          >
            {report}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Leadership = () => {
  const handleDummyClick = (e) => e.preventDefault();

  return (
    <div className="leader-page-wrapper">
      
      {/* 1. STICKY LOCAL NAVIGATION */}
      <nav className="leader-local-nav">
        <div className="leader-nav-content">
          <span className="leader-nav-brand">Our Teams</span>
          <div className="leader-nav-links">
            <NavLink to="/about" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              About Us
            </NavLink>
            <NavLink to="/about/mission" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
             Mission
            </NavLink>
            <NavLink to="/about/history" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              History
            </NavLink>
            <NavLink to="/about/leadership" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Leadership
            </NavLink>
          </div>
        </div>
      </nav>

      {/* 2. FULL WIDTH HERO WITH OVERLAY */}
      <header className="leader-hero-full-width-img">
        <img src={LeadershipHero} alt="Eter Leadership Campus" className="leader-header-pic" />
        <h1 className="leader-hero-text-overlay">Our Values</h1>
      </header>

      <main className="leader-main-container">
        
        {/* 3. BREADCRUMB */}
        <nav className="leader-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Eter Hub</Link> 
          <span aria-hidden="true"> &nbsp; &gt; &nbsp; </span> 
          <Link to="/about">About Eter</Link>
          <span aria-hidden="true"> &nbsp; &gt; &nbsp; </span> 
          <span style={{ color: '#1d1d1f' }}><strong>Leadership & Values</strong></span>
        </nav>

        {/* 4. HERO TEXT SECTION */}
        <section className="leader-hero">
          <p className="leader-hero-label">Corporate Responsibility</p>
          <h2 className="leader-hero-quote">
            “Leadership is about vision, responsibility, and inspiring people to achieve more.”
          </h2>
          <cite className="leader-hero-author">— Eter Executive Board</cite>
          
          <div className="leader-hero-description">
            <p>
              We believe that business can be a force for good. Eter’s leadership team is dedicated to building a digital ecosystem in Cambodia that values integrity, transparency, and relentless innovation. 
            </p>
            <p>
              By combining regional expertise with global standards, we ensure that every decision we make empowers our customers, communities, and the Khmer tech ecosystem.
            </p>
          </div>
        </section>

        {/* 5. EXECUTIVE TEAM GRID */}
        <section className="leader-grid-section">
          <h2 className="leader-section-title">Executive Officers</h2>
          <div className="leader-grid">
            <LeaderProfileCard 
              name="Pheakdey" 
              title="Chief Executive Officer" 
              description="Leads company strategy and long-term innovation for the Eter ecosystem."
              image="/images/ceo.jpg"
            />
            <LeaderProfileCard 
              name="Sopheak" 
              title="Chief Operating Officer" 
              description="Oversees regional operations, retail execution, and logistics efficiency."
              image="/images/coo.jpg"
            />
            <LeaderProfileCard 
              name="Vannak" 
              title="Chief Financial Officer" 
              description="Manages financial growth, sustainability, and investor relations."
              image="/images/cfo.jpg"
            />
          </div>
        </section>

        {/* 6. GOVERNANCE & TRANSPARENCY REPORTS */}
        <section className="leader-reports-section">
          <h2 className="leader-section-title">Corporate Governance</h2>
          <div className="leader-reports-top-links">
            <a href="#!" onClick={handleDummyClick}>Governance Guidelines</a>
            <a href="#!" onClick={handleDummyClick}>Code of Ethics</a>
            <a href="#!" onClick={handleDummyClick}>Committee Composition</a>
          </div>

          <div className="leader-reports-grid">
            <GovernanceGroup 
              category="Board of Directors" 
              reports={[
                "Board Committees", 
                "Director Biographies", 
                "Contact the Board"
              ]} 
            />
            <GovernanceGroup 
              category="Policies" 
              reports={[
                "Human Rights Policy", 
                "Anti-Corruption Policy",
                "Conflict Minerals Statement"
              ]} 
            />
            <GovernanceGroup 
              category="Regulatory" 
              reports={[
                "SEC Filings", 
                "Tax Transparency Report",
                "Quarterly Results"
              ]} 
            />
            <GovernanceGroup 
              category="Digital Trust" 
              reports={[
                "Cybersecurity Governance", 
                "AI Ethics Framework",
                "Privacy Standards"
              ]} 
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Leadership;