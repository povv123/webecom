import React, { useState } from 'react';
import '../../styles/Admin/Careers.css';

const Careers = () => {
  // Mock data representing job postings and internships
  const [jobs] = useState([
    {
      id: 'JOB-1042',
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      status: 'Open',
      applicants: 42,
      posted: 'Oct 15, 2023',
    },
    {
      id: 'JOB-1043',
      title: 'Digital Marketing Intern',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Internship',
      status: 'Open',
      applicants: 128,
      posted: 'Oct 18, 2023',
    },
    {
      id: 'JOB-1044',
      title: 'Customer Support Specialist',
      department: 'Support',
      location: 'Austin, TX',
      type: 'Full-time',
      status: 'Draft',
      applicants: 0,
      posted: '-',
    },
    {
      id: 'JOB-1045',
      title: 'Warehouse Manager',
      department: 'Logistics',
      location: 'Chicago, IL',
      type: 'Full-time',
      status: 'Closed',
      applicants: 86,
      posted: 'Sep 01, 2023',
    },
    {
      id: 'JOB-1046',
      title: 'Part-time UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Part-time',
      status: 'Open',
      applicants: 15,
      posted: 'Oct 22, 2023',
    },
  ]);

  return (
    <div className="careers-container">
      {/* Page Header */}
      <div className="careers-header">
        <div>
          <h2>Careers & Hiring</h2>
          <p>Manage job postings, internships, and review incoming applications.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search postings..." />
          </div>
          <button className="btn-primary">+ Create Posting</button>
        </div>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="careers-stats-grid">
        <div className="stat-card">
          <span className="stat-title">Active Openings</span>
          <span className="stat-value">3</span>
        </div>
        <div className="stat-card">
          <span className="stat-title">Total Applicants</span>
          <span className="stat-value text-blue">271</span>
        </div>
        <div className="stat-card">
          <span className="stat-title">Draft Postings</span>
          <span className="stat-value">1</span>
        </div>
        <div className="stat-card">
          <span className="stat-title">Active Internships</span>
          <span className="stat-value">1</span>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="careers-table">
          <thead>
            <tr>
              <th>Job Title & Dept</th>
              <th>Type & Location</th>
              <th>Applicants</th>
              <th>Date Posted</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                {/* Title and Department */}
                <td>
                  <div className="job-title-cell">
                    <span className="fw-500 text-dark">{job.title}</span>
                    <span className="text-muted">{job.department}</span>
                  </div>
                </td>

                {/* Type and Location */}
                <td>
                  <div className="job-meta-cell">
                    <span className={`type-badge type-${job.type.replace(/ /g, '-').toLowerCase()}`}>
                      {job.type}
                    </span>
                    <span className="text-muted location-text">{job.location}</span>
                  </div>
                </td>

                {/* Applicants Metric */}
                <td>
                  <div className="applicants-cell">
                    <span className={`fw-500 ${job.applicants > 0 ? 'has-applicants' : ''}`}>
                      {job.applicants}
                    </span>
                    <span className="text-muted">candidates</span>
                  </div>
                </td>

                <td className="date-cell">{job.posted}</td>

                {/* Status Badge */}
                <td>
                  <span className={`status-badge status-${job.status.toLowerCase()}`}>
                    {job.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="actions-cell">
                  <button className="btn-text edit">Edit</button>
                  <button className="btn-text view" disabled={job.applicants === 0}>
                    View Candidates
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Careers;