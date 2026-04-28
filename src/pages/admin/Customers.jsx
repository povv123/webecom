import React, { useState } from 'react';
import '../../styles/Admin/Customers.css';

const Customers = () => {
 
  const [customers] = useState([
    {
      id: 'USR-001',
      name: 'Sarah Jenkins',
      email: 'sarah.j@example.com',
      status: 'Active',
      orders: 12,
      spent: 3450.00,
      joined: 'Mar 15, 2022',
    },
    {
      id: 'USR-002',
      name: 'Marcus Chen',
      email: 'm.chen99@example.com',
      status: 'Active',
      orders: 4,
      spent: 890.50,
      joined: 'Jan 02, 2023',
    },
    {
      id: 'USR-003',
      name: 'Elena Rodriguez',
      email: 'elena.rodz@example.com',
      status: 'Inactive',
      orders: 1,
      spent: 45.50,
      joined: 'Oct 23, 2023',
    },
    {
      id: 'USR-004',
      name: 'David Smith',
      email: 'dsmith.work@example.com',
      status: 'Active',
      orders: 8,
      spent: 5420.00,
      joined: 'Nov 10, 2021',
    },
    {
      id: 'USR-005',
      name: 'Jessica Taylor',
      email: 'jtaylor@example.com',
      status: 'Suspended',
      orders: 0,
      spent: 0.00,
      joined: 'Oct 24, 2023',
    },
  ]);

  // Helper function to get initials for the avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="customers-container">
      {/* Page Header */}
      <div className="customers-header">
        <div>
          <h2>Customer Accounts</h2>
          <p>View user details, purchase history, and manage access.</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search accounts..." />
          </div>
       
        </div>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Status</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                {/* Customer Profile Info (Avatar + Name + Email) */}
                <td>
                  <div className="customer-info-cell">
                    <div className="customer-avatar">
                      {getInitials(customer.name)}
                    </div>
                    <div className="customer-details">
                      <span className="fw-500">{customer.name}</span>
                      <span className="text-muted">{customer.email}</span>
                    </div>
                  </div>
                </td>

                {/* Account Status Badge */}
                <td>
                  <span className={`status-badge status-${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>

                {/* Lifetime Value Metrics */}
                <td>
                  <span className="fw-500">{customer.orders}</span>
                </td>
                <td>
                  <span className="fw-500">${customer.spent.toFixed(2)}</span>
                </td>

                {/* Joined Date */}
                <td className="date-cell">{customer.joined}</td>

                {/* Actions */}
                <td className="actions-cell">
                  <button className="btn-text edit">Edit</button>
                  <button className="btn-text view">View History</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;