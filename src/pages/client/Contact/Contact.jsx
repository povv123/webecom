import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/contact/contact.css';

const Contact = () => {
  const supportTopics = [
    {
      id: "inquiry",
      title: "General Inquiry",
      desc: "Questions about our company, partners, or general services.",
      path: "/contact/inquiry",
      label: "Contact Us"
    },
    {
      id: "quote",
      title: "Request a Quote",
      desc: "Get a customized pricing model for your specific business needs.",
      path: "/contact/quote",
      label: "Get Pricing"
    },
    {
      id: "support",
      title: "Technical Support",
      desc: "24/7 assistance for existing clients and technical troubleshooting.",
      path: "/contact/support",
      label: "Get Help"
    }
  ];

  return (
    <div className="conta">
      {/* Hero Section */}
      <header className="conta-hero">
        <h1>Need help? Start here.</h1>
        <p className="conta-sub">
          Choose a topic below to find solutions, get pricing, or connect with an Eter expert.
        </p>
      </header>

      {/* Navigation Grid */}
      <section className="conta-grid">
        {supportTopics.map((topic) => (
          <div key={topic.id} className="conta-card">
            <h3>{topic.title}</h3>
            <p>{topic.desc}</p>
            <Link to={topic.path} className="conta-link">
              {topic.label} <span className="conta-chevron">&gt;</span>
            </Link>
          </div>
        ))}
      </section>

      {/* Additional Info / Footer Blocks */}
    <section className="conta-footer-info">
     
        

        {/* New Shipping Block */}
        <div className="conta-info-block">
          <h2>Shipping & Delivery</h2>
          <p>Fast, reliable delivery across Cambodia.</p>
          <Link to="/contact/ship" className="conta-link">
             View shipping options <span className="conta-chevron">&gt;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;