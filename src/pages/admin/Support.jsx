import React, { useState } from 'react';
import '../../styles/Admin/Support.css'; // Ensure this CSS file is created

const Support = () => {
  // Mock data representing customer support tickets
  const [tickets] = useState([
    {
      id: 'TCK-8902',
      customer: 'Sarah Jenkins',
      email: 'sarah.j@example.com',
      subject: 'Where is my order? Tracking not updating.',
      category: 'Shipping',
      priority: 'High',
      status: 'Open',
      created: '2 hours ago',
    },
    {
      id: 'TCK-8901',
      customer: 'Marcus Chen',
      email: 'm.chen99@example.com',
      subject: 'Requesting a refund for defective chair',
      category: 'Returns',
      priority: 'High',
      status: 'In Progress',
      created: '5 hours ago',
    },
    {
      id: 'TCK-8900',
      customer: 'Elena Rodriguez',
      email: 'elena.rodz@example.com',
      subject: 'How do I assemble the modern oak table?',
      category: 'Product Inquiry',
      priority: 'Low',
      status: 'Open',
      created: '1 day ago',
    },
    {
      id: 'TCK-8899',
      customer: 'David Smith',
      email: 'dsmith.work@example.com',
      subject: 'Cannot access my corporate account',
      category: 'Technical',
      priority: 'Medium',
      status: 'Resolved',
      created: '2 days ago',
    },
    {
      id: 'TCK-8898',
      customer: 'Jessica Taylor',
      email: 'jtaylor@example.com',
      subject: 'Need a quote for 50 laptops',
      category: 'Sales',
      priority: 'Medium',
      status: 'Closed',
      created: '3 days ago',
    },
  ]);

  return (
    <div className="support-container">
      {/* Page Header */}
      <div className="support-header">
        <div>
          <h2>Helpdesk & Support</h2>
          <p>Manage customer inquiries, returns, and technical issues.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search tickets or emails..." />
          </div>
          <button className="btn-secondary">Export Log</button>
        </div>
      </div>

      {/* Quick Stats Dashboard */}
      <div className="support-stats-grid">
        <div className="stat-card">
          <span className="stat-title">Needs Attention (Open)</span>
          <span className="stat-value text-danger">2</span>
        </div>
        <div className="stat-card">
          <span className="stat-title">In Progress</span>
          <span className="stat-value text-warning">1</span>
        </div>
        <div className="stat-card">
          <span className="stat-title">Resolved Today</span>
          <span className="stat-value text-success">14</span>
        </div>
        <div className="stat-card">
          <span className="stat-title">Avg Response Time</span>
          <span className="stat-value">1.2 hrs</span>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="support-table">
          <thead>
            <tr>
              <th>Ticket & Subject</th>
              <th>Customer</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                {/* Subject and ID */}
                <td>
                  <div className="ticket-info-cell">
                    <span className="fw-500 text-dark ticket-subject">{ticket.subject}</span>
                    <div className="ticket-meta">
                      <span className="ticket-id">{ticket.id}</span>
                      <span className="text-muted">• {ticket.category}</span>
                    </div>
                  </div>
                </td>

                {/* Customer Details */}
                <td>
                  <div className="customer-cell">
                    <span className="fw-500">{ticket.customer}</span>
                    <span className="text-muted">{ticket.email}</span>
                  </div>
                </td>

                {/* Priority Badge */}
                <td>
                  <span className={`priority-badge prio-${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>

                {/* Status Badge */}
                <td>
                  <span className={`status-badge status-${ticket.status.replace(/ /g, '-').toLowerCase()}`}>
                    {ticket.status}
                  </span>
                </td>

                <td className="date-cell">{ticket.created}</td>

                {/* Actions */}
                <td className="actions-cell">
                  <button className="btn-primary-small">Reply</button>
                  <button className="btn-text">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Support;