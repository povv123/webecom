
import '../../styles/Admin/dashboard.css';
import React from 'react';

export default function AdminHome() {
  // --- Mock Data ---
  const kpiData = [
    { title: 'New Accounts', value: '124', trend: '+12% this week', color: '#34c759', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> },
    { title: 'Recent Orders', value: '85', trend: '+5% this week', color: '#0071e3', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> },
    { title: 'Active Services', value: '42', trend: 'Steady', color: '#ff9500', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /> },
    { title: 'New Messages', value: '12', trend: 'Needs attention', color: '#ff3b30', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> },
  ];

  const recentContacts = [
    { id: 1, name: 'Sarah Connor', subject: 'Installation Help', time: '10 mins ago', status: 'Unread' },
    { id: 2, name: 'John Doe', subject: 'Bulk Order Inquiry', time: '1 hour ago', status: 'Unread' },
    { id: 3, name: 'Tech Solutions Inc', subject: 'Maintenance Contract', time: '3 hours ago', status: 'Replied' },
  ];

  const stockAlerts = [
    { id: 1, item: 'Dell XPS 13 Screen Replacement', remaining: 2, status: 'Critical' },
    { id: 2, item: 'Logitech MX Master 3', remaining: 5, status: 'Low' },
    { id: 3, item: 'USB-C Hubs (Anker)', remaining: 8, status: 'Low' },
  ];

  return (
    <div className="AdminHome-wrapper">
      
      {/* Top Header */}
      <header className="AdminHome-header">
        <div>
          <p className="AdminHome-eyebrow">Overview</p>
          <h1 className="AdminHome-title">Welcome Admin</h1>
        </div>
        <div className="AdminHome-header-actions">
          <button className="AdminHome-btn-secondary">Download Report</button>
        </div>
      </header>

      <div className="AdminHome-content">
        
        {/* KPI Grid */}
        <div className="AdminHome-kpi-grid">
          {kpiData.map((kpi, index) => (
            <div key={index} className="AdminHome-card AdminHome-kpi-card">
              <div className="AdminHome-kpi-header">
                <div className="AdminHome-kpi-icon" style={{ backgroundColor: `${kpi.color}15`, color: kpi.color }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {kpi.icon}
                  </svg>
                </div>
                <h3 className="AdminHome-kpi-title">{kpi.title}</h3>
              </div>
              <p className="AdminHome-kpi-value">{kpi.value}</p>
              <p className="AdminHome-kpi-trend">{kpi.trend}</p>
            </div>
          ))}
        </div>

        {/* Main Dashboard Layout */}
        <div className="AdminHome-dashboard-grid">
          
          {/* Left Column: Contacts & Messages */}
          <div className="AdminHome-column">
            <div className="AdminHome-card">
              <div className="AdminHome-card-header-row">
                <h2 className="AdminHome-card-title">Recent Contact Requests</h2>
                <button className="AdminHome-btn-text">View All</button>
              </div>
              
              <div className="AdminHome-list">
                {recentContacts.map(contact => (
                  <div key={contact.id} className="AdminHome-list-item">
                    <div className="AdminHome-contact-info">
                      <h4 className="AdminHome-item-title">{contact.name}</h4>
                      <p className="AdminHome-item-subtitle">{contact.subject}</p>
                    </div>
                    <div className="AdminHome-contact-meta">
                      <span className="AdminHome-item-time">{contact.time}</span>
                      <span className={`AdminHome-badge ${contact.status === 'Unread' ? 'badge-red' : 'badge-gray'}`}>
                        {contact.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stock Alerts & Services */}
          <div className="AdminHome-column">
            
            {/* Stock Alerts Widget */}
            <div className="AdminHome-card" style={{ marginBottom: '24px' }}>
              <div className="AdminHome-card-header-row">
                <h2 className="AdminHome-card-title">Inventory Alerts</h2>
                <button className="AdminHome-btn-text">Manage Stock</button>
              </div>
              <div className="AdminHome-list">
                {stockAlerts.map(alert => (
                  <div key={alert.id} className="AdminHome-list-item">
                    <div>
                      <h4 className="AdminHome-item-title">{alert.item}</h4>
                      <p className="AdminHome-item-subtitle">Only {alert.remaining} left in stock</p>
                    </div>
                    <span className={`AdminHome-badge ${alert.status === 'Critical' ? 'badge-red' : 'badge-orange'}`}>
                      {alert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Service Summary */}
            <div className="AdminHome-card AdminHome-service-promo">
              <div className="AdminHome-service-text">
                <h2 className="AdminHome-card-title" style={{ color: '#fff' }}>Service Department</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: '8px 0 16px 0' }}>
                  There are currently 14 active repair/maintenance tickets pending completion.
                </p>
                <button className="AdminHome-btn-primary-inverse">Review Services</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}