import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/careers/opening.css';

const Internship = () => {
  const [search, setSearch] = useState("");

  // Updated with school (tutoring/education) and store (retail/mart) intern roles in Cambodia
  const internships = [
    { id: 1, title: "Teaching Assistant Intern", location: "Phnom Penh", team: "Education" },
    { id: 2, title: "Retail Operations Intern", location: "Siem Reap", team: "Store Management" },
    { id: 3, title: "Student Experience Intern", location: "Battambang", team: "Administration" },
    { id: 4, title: "Inventory Management Intern", location: "Phnom Penh", team: "Supply Chain" },
    { id: 5, title: "EdTech Developer Intern", location: "Remote (Cambodia)", team: "Engineering" },
    { id: 6, title: "Store Visual Merchandising Intern", location: "Sihanoukville", team: "Retail Design" },
    { id: 7, title: "Customer Service Intern", location: "Phnom Penh", team: "Support" }
  ];

  const filteredInternships = internships.filter(intern => 
    intern.title.toLowerCase().includes(search.toLowerCase()) || 
    intern.team.toLowerCase().includes(search.toLowerCase()) ||
    intern.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="openings-container">
      <header className="openings-header">
        <h1>Search Internship Programs</h1>
        <p className="openings-subtitle">Start your career shaping the future </p>
        <div className="search-bar-wrapper">
          <input 
            type="text" 
            placeholder="Search by role, team, or location..." 
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="job-list">
        {filteredInternships.length > 0 ? (
          filteredInternships.map(intern => (
            <div key={intern.id} className="job-row">
              <div className="job-info">
                <h3>{intern.title}</h3>
                <p>{intern.team} — {intern.location}</p>
              </div>
              
              <Link 
                to="/careers/Internform" 
                state={{ selectedPosition: intern.title }} 
                className="apple-btn-outline"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Join us
              </Link>
              
            </div>
          ))
        ) : (
          <p className="no-results">No positions found matching "{search}"</p>
        )}
      </div>
    </div>
  );
};

export default Internship;
