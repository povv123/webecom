import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/contact/support.css'; 

const Support = () => {
  const supportCategories = [
    {
      id: "orders",
      title: "Track an Order",
      desc: "Check the status of your recent Eter purchases and shipments.",
      linkText: "View Order Status"
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      desc: "Learn about our return policies and start a return process.",
      linkText: "Start a Return"
    },
    {
      id: "account",
      title: "Account Management",
      desc: "Update your profile, payment methods, and security settings.",
      linkText: "Manage Account"
    },
    {
      id: "tech",
      title: "Technical Issues",
      desc: "Troubleshoot platform errors, integrations, or API problems.",
      linkText: "Get Technical Help"
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
            <Link to={`/support/${category.id}`} className="supp-link">
              {category.linkText} <span className="supp-chevron">&gt;</span>
            </Link>
          </div>
        ))}
      </section>

      {/* Connect with an Expert Section */}
      <section className="supp-contact-section">
        <h2>Still need help?</h2>
        <p>Our e-commerce specialists are available 24/7 to assist you.</p>
        <div className="supp-contact-options">
          <div className="supp-contact-box">
            <h4>Live Chat</h4>
            <p>Average wait: 2 mins</p>
            <button className="supp-btn-blue">Start Chat</button>
          </div>
          <div className="supp-contact-box">
            <h4>Call Us</h4>
            <p>1-800-ETER-HELP</p>
            <button className="supp-btn-outline">See Hours</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
