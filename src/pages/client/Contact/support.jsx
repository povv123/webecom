import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/contact/support.css'; 

const Support = () => {
  const supportCategories = [
    {
      id: "orders",
      title: "Track an Order",
      desc: "Check the status of your recent Eter purchases and shipments.",
      linkText: "View Order Status",
      path: "/contact/track" // Updated to match App.js
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      desc: "Learn about our return policies and start a return process.",
      linkText: "Start a Return",
      path: "/contact/returns" // Updated to match App.js
    },
    {
      id: "account",
      title: "Account Management",
      desc: "Update your profile, payment methods, and security settings.",
      linkText: "Manage Account",
      path: "/account" // Updated to match App.js
    },
    {
      id: "tech",
      title: "Technical Issues",
      desc: "Troubleshoot platform errors, integrations, or API problems.",
      linkText: "Get Technical Help",
      path: "/contact/technical-help" 
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      desc: "Fast, reliable delivery across Cambodia.",
      linkText: "View shipping options",
      path: "/contact/ship" 
    }
  ];

  return (
    <div className="supp">
      {/* Search & Hero Section */}
      <header className="supp-hero">
        <h1>Welcome to Servierl Support</h1>
        <div className="supp-search-container">
          <input 
            type="text" 
            className="supp-search-input" 
            placeholder="Search for topics, issues, or order numbers" 
          />
        </div>
      </header>

      {/* Common Topics Grid */}
      <section className="supp-grid">
        {supportCategories.map((category) => (
          <div key={category.id} className="supp-card">
            <h3>{category.title}</h3>
            <p>{category.desc}</p>
            <Link to={category.path} className="supp-link">
              {category.linkText} <span className="supp-chevron">&gt;</span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Support;