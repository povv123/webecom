import React, { useState } from 'react';
import '../../styles/Admin/Solutions.css'; 

const Solutions = () => {

  
  const [solutions] = useState([
    {
      id: 'SOL-001',
      name: 'Smart Campus Infrastructure',
      description: 'End-to-end IT and furniture setup for modern educational facilities.',
      industry: 'Education',
      bundledProducts: 45,
      bundledServices: 3,
      activeClients: 12,
      status: 'Active',
    },
    {
      id: 'SOL-002',
      name: 'Clinical Workspace Optimization',
      description: 'Ergonomic furniture and sanitized tech setups for clinics.',
      industry: 'Healthcare',
      bundledProducts: 18,
      bundledServices: 2,
      activeClients: 8,
      status: 'Active',
    },
    {
      id: 'SOL-003',
      name: 'Heavy Duty Automation Setup',
      description: 'Robotics, heavy machinery, and ongoing maintenance contracts.',
      industry: 'Manufacturing',
      bundledProducts: 8,
      bundledServices: 4,
      activeClients: 3,
      status: 'Active',
    },
    {
      id: 'SOL-004',
      name: 'Remote Learning Starter Kit',
      description: 'Laptops, webcams, and internet provisioning for students.',
      industry: 'Education',
      bundledProducts: 5,
      bundledServices: 1,
      activeClients: 0,
      status: 'Draft',
    },
    {
      id: 'SOL-005',
      name: 'Legacy Factory Retrofit',
      description: 'Upgrading older manufacturing lines with new sensors and IT.',
      industry: 'Manufacturing',
      bundledProducts: 22,
      bundledServices: 5,
      activeClients: 1,
      status: 'Deprecated',
    },
  ]);

  return (
    <div className="solutions-container">
      {/* Page Header */}
      <div className="solutions-header">
        <div>
          <h2>Industry Solutions</h2>
          <p>Manage bundled packages tailored for specific business sectors.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search solutions..." />
          </div>
          <button className="btn-primary">+ Create Solution</button>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="solutions-table">
          <thead>
            <tr>
              <th>Solution Package</th>
              <th>Target Industry</th>
              <th>Bundle Contents</th>
              <th>Active Clients</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {solutions.map((solution) => (
              <tr key={solution.id}>
                {/* Solution Name and Description */}
                <td>
                  <div className="solution-info-cell">
                    <span className="fw-500">{solution.name}</span>
                    <span className="text-muted description-text">{solution.description}</span>
                  </div>
                </td>

                {/* Industry Badge */}
                <td>
                  <span className={`industry-badge ind-${solution.industry.toLowerCase()}`}>
                    {solution.industry}
                  </span>
                </td>

                {/* Bundle Details (Products + Services) */}
                <td>
                  <div className="bundle-cell">
                    <span className="text-dark fw-500">{solution.bundledProducts} <span className="text-muted fw-normal">Products</span></span>
                    <span className="text-dark fw-500">{solution.bundledServices} <span className="text-muted fw-normal">Services</span></span>
                  </div>
                </td>

                {/* Active Clients Metric */}
                <td>
                  <div className="clients-cell">
                    <span className={`fw-500 ${solution.activeClients > 0 ? 'has-clients' : ''}`}>
                      {solution.activeClients}
                    </span>
                  </div>
                </td>

                {/* Status Badge */}
                <td>
                  <span className={`status-badge status-${solution.status.toLowerCase()}`}>
                    {solution.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="actions-cell">
                  <button className="btn-text edit">Edit</button>
                  <button className="btn-text view">View Packages</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Solutions;