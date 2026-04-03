import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactMethods = [
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
    <div className="contact-main-page">
      {/* Hero Section */}
      <header className="solutions-hero">
        <p className="eyebrow">Connect with Eter</p>
        <h1>How can we <span>help you?</span></h1>
        <p className="hero-sub">
          Whether you’re a global enterprise or a growing startup, our experts are ready to assist.
        </p>
      </header>

      {/* Navigation Grid */}
      <section className="solutions-grid">
        {contactMethods.map((method) => (
          <div key={method.id} className="solution-card">
            <h3>{method.title}</h3>
            <p>{method.desc}</p>
            <Link to={method.path} className="apple-link">
              {method.label} &gt;
            </Link>
          </div>
        ))}
      </section>

      {/* Global Offices / Additional Info */}
      <section className="contact-footer-info">
        <div className="info-block">
          <h2>Our Headquarters</h2>
          <p>123 Innovation Drive, Silicon Valley, CA</p>
          <p>contact@eter-solutions.com</p>
        </div>
        <div className="info-block">
          <h2>Global Reach</h2>
          <p>Offices in London, Tokyo, and Berlin.</p>
          <button className="apple-btn-blue">View all locations</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;