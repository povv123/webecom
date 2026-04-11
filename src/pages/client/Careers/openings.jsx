import React, { useState } from 'react';
import '../../../styles/careers/opening.css';

const Opening = () => {
  const [search, setSearch] = useState("");

  const jobs = [
    { id: 1, title: "Senior Frontend Developer", location: "Phnom Penh / Remote", team: "Engineering" },
    { id: 2, title: "Product Designer", location: "Singapore", team: "Design" },
    { id: 3, title: "E-commerce Specialist", location: "Remote", team: "Marketing" },
    { id: 4, title: "Supply Chain Manager", location: "Phnom Penh", team: "Operations" }
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) || 
    job.team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="openings-container">
      <header className="openings-header">
        <h1>Search Openings</h1>
        <div className="search-bar-wrapper">
          <input 
            type="text" 
            placeholder="Search by role or team..." 
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
              <button className="apple-btn-outline">Apply</button>
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