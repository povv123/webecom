import React from "react";
import { NavLink, Link } from "react-router-dom";

// Styling - Ensure you create this CSS file with the updated 'history-' prefixes
import "../../../styles/aboutus/history.css"; 

// Assets
import HistoryHero from '../../../assets/images/history.jpg';


const HistoryMilestoneCard = ({ year, title, description, image }) => (
  <article className="history-card">
    <div className="history-milestone-img-container">
      <img src={image} alt={`${year} - ${title}`} className="history-milestone-img" />
    </div>
    <h3 className="history-year-title">{year}</h3>
    <p className="history-milestone-subtitle">{title}</p>
    <p className="history-milestone-text">{description}</p>
    <a href="#!" onClick={(e) => e.preventDefault()} className="history-text-link">
      Explore {year} →
    </a>
  </article>
);

const ArchiveGroup = ({ category, reports }) => (
  <div className="history-report-group">
    <h4 className="history-report-category">{category}</h4>
    <ul className="history-report-list">
      {reports.map((report) => (
        <li key={report}>
          <a 
            href="#!" 
            className="history-report-item"
            onClick={(e) => e.preventDefault()}
          >
            {report}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const History = () => {
  const handleDummyClick = (e) => e.preventDefault();

  return (
    <div className="history-page-wrapper">
      
      {/* 1. STICKY LOCAL NAVIGATION */}
      <nav className="history-local-nav">
        <div className="history-nav-content">
          <span className="history-nav-brand">Our History</span>
          <div className="history-nav-links">
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
      <header className="history-hero-full-width-img">
        <img src={HistoryHero} alt="Eter Company History" className="history-header-pic" />
        <h1 className="history-hero-text-overlay">Our History</h1>
      </header>

      <main className="history-main-container">
        
        {/* 3. BREADCRUMB */}
        <nav className="history-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Eter Hub</Link> 
          <span aria-hidden="true"> &nbsp; &gt; &nbsp; </span> 
          <Link to="/about">About Eter</Link>
          <span aria-hidden="true"> &nbsp; &gt; &nbsp; </span> 
          <span style={{ color: '#1d1d1f' }}><strong>History</strong></span>
        </nav>

        {/* 4. HERO TEXT SECTION */}
        <section className="history-hero">
          <p className="history-hero-label">Our Journey</p>
          <h2 className="history-hero-quote">
            “Innovation is not just about the future; it is built on the foundation of our past.”
          </h2>
          <cite className="history-hero-author">— Eter Founders</cite>
          
          <div className="history-hero-description">
            <p>
              From our humble beginnings to becoming a cornerstone of Cambodia's digital revolution, Eter's journey is defined by relentless innovation and a commitment to our community. 
            </p>
            <p>
              Explore the milestones that shaped our vision, the challenges we overcame, and the breakthroughs that continue to drive us forward as the Kingdom's premier technology destination.
            </p>
          </div>
        </section>

        {/* 5. HISTORY MILESTONES GRID */}
        <section className="history-grid-section">
          <h2 className="history-section-title">Key Milestones</h2>
          <div className="history-grid">
            <HistoryMilestoneCard 
              year="2018" 
              title="The Foundation" 
              description="Eter was founded in Phnom Penh with a singular vision to democratize access to premium global technology for the Cambodian market."
              image="/images/history-2018.jpg"
            />
            <HistoryMilestoneCard 
              year="2021" 
              title="Digital Expansion" 
              description="Launched our localized e-commerce platform, overcoming pandemic challenges to bring next-day delivery to all provinces."
              image="/images/history-2021.jpg"
            />
            <HistoryMilestoneCard 
              year="2024" 
              title="The Flagship Era" 
              description="Opened our state-of-the-art flagship store and community tech hub in the heart of the capital, redefining retail in Southeast Asia."
              image="/images/history-2024.jpg"
            />
          </div>
        </section>

        {/* 6. HISTORICAL ARCHIVES */}
        <section className="history-reports-section">
          <h2 className="history-section-title">Historical Archives</h2>
          <div className="history-reports-top-links">
            <a href="#!" onClick={handleDummyClick}>Complete Timeline</a>
            <a href="#!" onClick={handleDummyClick}>Press Releases</a>
            <a href="#!" onClick={handleDummyClick}>Founding Charter</a>
          </div>

          <div className="history-reports-grid">
            <ArchiveGroup 
              category="Decade in Review" 
              reports={[
                "2018-2020 Growth Report", 
                "The Pandemic Pivot (2021)", 
                "Post-Pandemic Expansion"
              ]} 
            />
            <ArchiveGroup 
              category="Product Evolution" 
              reports={[
                "Eter Store v1.0 to v4.0", 
                "Evolution of our Supply Chain",
                "Tech Hub Blueprints"
              ]} 
            />
            <ArchiveGroup 
              category="Community Impact" 
              reports={[
                "First 100 Scholarships", 
                "Tech Literacy Programs (2019-2023)",
                "Green Store Initiatives"
              ]} 
            />
            <ArchiveGroup 
              category="Media & Recognition" 
              reports={[
                "Tech Startup of the Year (2020)", 
                "Cambodia Digital Award (2023)",
                "CEO Interviews Archive"
              ]} 
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default History;