import React, { useState } from 'react';
import '../../styles/Admin/Resources.css'; 

const Resources = () => {

    
    
  const [resources] = useState([
    {
      id: 'RES-001',
      title: '10 Trends in E-Commerce for 2024',
      type: 'Blog Post',
      category: 'Industry Insights',
      status: 'Published',
      metrics: '1.2k views',
      date: 'Oct 24, 2023',
    },
    {
      id: 'RES-002',
      title: 'How Acme Corp Increased Sales by 50%',
      type: 'Case Study',
      category: 'B2B Solutions',
      status: 'Published',
      metrics: '850 downloads',
      date: 'Oct 18, 2023',
    },
    {
      id: 'RES-003',
      title: 'The Future of B2B Logistics and Shipping',
      type: 'Whitepaper',
      category: 'Logistics',
      status: 'Draft',
      metrics: '-',
      date: 'Pending',
    },
    {
      id: 'RES-004',
      title: 'Updated 30-Day Return Policy',
      type: 'FAQ',
      category: 'Customer Support',
      status: 'Published',
      metrics: '5.4k views',
      date: 'Oct 01, 2023',
    },
    {
      id: 'RES-005',
      title: 'Top 5 Ergonomic Chairs for Remote Workers',
      type: 'Blog Post',
      category: 'Product Reviews',
      status: 'Archived',
      metrics: '3.4k views',
      date: 'Jan 12, 2023',
    },
  ]);

  return (
    <div className="resources-container">
      {/* Page Header */}
      <div className="resources-header">
        <div>
          <h2>Resources & Content</h2>
          <p>Manage your blog posts, whitepapers, case studies, and FAQs.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search content..." />
          </div>
          <button className="btn-primary">+ Add Content</button>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="resources-table">
          <thead>
            <tr>
              <th>Title & Details</th>
              <th>Content Type</th>
              <th>Status</th>
              <th>Metrics</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((item) => (
              <tr key={item.id}>
                {/* Title and Category */}
                <td>
                  <div className="resource-title-cell">
                    <span className="fw-500">{item.title}</span>
                    <span className="text-muted">{item.category}</span>
                  </div>
                </td>

                {/* Content Type Badge */}
                <td>
                  <span className={`type-badge type-${item.type.replace(/ /g, '-').toLowerCase()}`}>
                    {item.type}
                  </span>
                </td>

                {/* Status Badge */}
                <td>
                  <span className={`status-badge status-${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>

                {/* Metrics (Views/Downloads) */}
                <td>
                  <span className="fw-500 metrics-text">{item.metrics}</span>
                </td>

                <td className="date-cell">{item.date}</td>

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

export default Resources;