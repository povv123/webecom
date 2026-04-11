import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/account.css'; 

const Account = () => {
  // Mock user data - this will eventually come from your backend/auth state
  const user = {
    name: "your name ",
    email: "youremail@gamil.com",
    phone: "+ (855) xxx xxx xx"
  };

  return (
    <div className="acc-container">
      <div className="acc-content">
        
        {/* Page Header */}
        <header className="acc-header">
          <h1 className="acc-title">Account Settings</h1>
          <p className="acc-subtitle">Manage your personal information, payments, and security.</p>
        </header>

        <div className="acc-grid">
          
          {/* 1. Personal Info Section */}
          <section className="acc-section">
            <div className="acc-section-header">
              <h2>Personal Information</h2>
              <button className="acc-edit-btn">Edit</button>
            </div>
            <div className="acc-info-group">
              <div className="acc-info-row">
                <span className="acc-label">Name</span>
                <span className="acc-value">{user.name}</span>
              </div>
              <div className="acc-info-row">
                <span className="acc-label">Email</span>
                <span className="acc-value">{user.email}</span>
              </div>
              <div className="acc-info-row">
                <span className="acc-label">Phone</span>
                <span className="acc-value">{user.phone}</span>
              </div>
            </div>
          </section>

          {/* 2. Payment & Shipping Section */}
          <section className="acc-section">
            <div className="acc-section-header">
              <h2>Payment & Shipping</h2>
            </div>
            <div className="acc-info-group">
              <div className="acc-info-row acc-nav-row">
                <span className="acc-label">Saved Payment Methods</span>
                <span className="acc-arrow-link">{'>'}</span>
              </div>
              <div className="acc-info-row acc-nav-row">
                <span className="acc-label">Shipping Addresses</span>
                <span className="acc-arrow-link">{'>'}</span>
              </div>
            </div>
          </section>

          {/* 3. Security Section */}
          <section className="acc-section">
            <div className="acc-section-header">
              <h2>Sign-In & Security</h2>
            </div>
            <div className="acc-info-group">
              <div className="acc-info-row acc-nav-row">
                <span className="acc-label">Change Password</span>
                <span className="acc-arrow-link">{'>'}</span>
              </div>
              <div className="acc-info-row acc-nav-row">
                <span className="acc-label">Two-Factor Authentication</span>
                <span className="acc-status-badge">On</span>
              </div>
            </div>
          </section>

        </div>

        {/* Sign Out Button */}
        <div className="acc-footer">
          <Link to="/signin" className="acc-signout-btn">
            Sign Out
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Account;