import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link from React Router
import '../../../styles/careers/opening.css';

const Opening = () => {
  const [search, setSearch] = useState("");

  // Updated with realistic Cambodian market roles
  const jobs = [
    { id: 1, title: "E-commerce Seller Assistant", location: "Phnom Penh", team: "Sales" },
    { id: 2, title: "Retail Store Manager", location: "Siem Reap", team: "Retail Operations" },
    { id: 3, title: "Logistics & Fleet Coordinator", location: "Phnom Penh", team: "Supply Chain" },
    { id: 4, title: "Senior Frontend Developer", location: "Phnom Penh / Remote", team: "Engineering" },
    { id: 5, title: "Customer Experience Specialist", location: "Remote (Cambodia)", team: "Support" },
    { id: 6, title: "Digital Marketing Executive", location: "Sihanoukville", team: "Marketing" },
    { id: 7, title: "Warehouse Assistant Manager", location: "Phnom Penh", team: "Operations" }
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) || 
    job.team.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="openings-container">
      <header className="openings-header">
        <h1>Search Openings</h1>
        <p className="openings-subtitle">Join us in shaping the future of retail in Cambodia.</p>
        <div className="search-bar-wrapper">
          <input 
            type="text" 
            placeholder="Search by role, team, or location..." 
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="job-row">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.team} — {job.location}</p>
              </div>
              
              {/* 2. Replaced the <button> with a <Link> */}
              <Link 
                to="/careers/apply" 
                state={{ selectedPosition: job.title }} 
                className="apple-btn-outline"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Apply
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

export default Opening;