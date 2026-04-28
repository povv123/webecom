import React, { useState } from 'react';
import '../../styles/Admin/Services.css'; 

const Services = () => {
 
  const [services] = useState([
    {
      id: 'SRV-001',
      name: 'Business Strategy Consulting',
      description: 'Comprehensive market analysis and growth planning.',
      category: 'Consulting',
      subcategory: 'Business strategy',
      pricingModel: 'Retainer',
      basePrice: '$5,000/mo',
      status: 'Active',
    },
    {
      id: 'SRV-002',
      name: 'IT Infrastructure Audit',
      description: 'Security and performance review of current IT systems.',
      category: 'Consulting',
      subcategory: 'IT consulting',
      pricingModel: 'Fixed Rate',
      basePrice: '$2,500',
      status: 'Active',
    },
    {
      id: 'SRV-003',
      name: 'Heavy Equipment Servicing',
      description: 'On-site repair and preventative maintenance for machinery.',
      category: 'Maintenance',
      subcategory: 'Equipment servicing',
      pricingModel: 'Hourly',
      basePrice: '$150/hr',
      status: 'Active',
    },
    {
      id: 'SRV-004',
      name: 'Corporate Facility Management',
      description: 'Full-service building and grounds maintenance.',
      category: 'Maintenance',
      subcategory: 'Facility Management',
      pricingModel: 'Retainer',
      basePrice: 'Custom Quote',
      status: 'Paused',
    },
    {
      id: 'SRV-005',
      name: 'Onboarding & Customer Service Training',
      description: '2-day intensive workshop for new support agents.',
      category: 'Training',
      subcategory: 'Customer service training',
      pricingModel: 'Per Person',
      basePrice: '$499/seat',
      status: 'Draft',
    },
  ]);

  return (
    <div className="services-container">
      {/* Page Header */}
      <div className="services-header">
        <div>
          <h2>Services Management</h2>
          <p>Configure your service offerings, categories, and pricing models.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search services..." />
          </div>
          <button className="btn-primary">+ Add New Service</button>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="services-table">
          <thead>
            <tr>
              <th>Service Details</th>
              <th>Category Allocation</th>
              <th>Pricing Model</th>
              <th>Base Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                {/* Service Name and Description */}
                <td>
                  <div className="service-info-cell">
                    <span className="fw-500">{service.name}</span>
                    <span className="text-muted description-text">{service.description}</span>
                  </div>
                </td>

                {/* Category & Subcategory */}
                <td>
                  <div className="category-cell">
                    <span className={`category-badge cat-${service.category.toLowerCase()}`}>
                      {service.category}
                    </span>
                    <span className="text-muted subcategory-text">{service.subcategory}</span>
                  </div>
                </td>

                {/* Pricing Model */}
                <td>
                  <span className="fw-500 text-dark">{service.pricingModel}</span>
                </td>

                {/* Base Rate */}
                <td>
                  <span className="base-price-text">{service.basePrice}</span>
                </td>

                {/* Status Badge */}
                <td>
                  <span className={`status-badge status-${service.status.toLowerCase()}`}>
                    {service.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="actions-cell">
                  <button className="btn-text edit">Edit</button>
                  <button className="btn-text delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;