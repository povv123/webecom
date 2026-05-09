import React from "react";

export default function AccountManagement() {
  return (
    <div className="support-card account-management">
      {/* Updated to a user/account icon */}
      <div className="card-icon icon-blue"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>

      <div className="card-body">
        <h3 className="card-title">Account Management</h3>
        <p className="card-desc">
          Update your profile, payment methods, and security settings.
        </p>
      </div>

      <a className="card-link" href="http://localhost:3000/support/account">
        Manage Account
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}