import React from 'react';
import '../../../styles/contact/inquiry.css'; // Adjust path as needed

const Inquiry = () => {
  return (
    <div className="gene">
      <header className="gene-header">
        <h2>General Inquiry</h2>
        <p>Tell us what's on your mind and we'll get back to you within 24 hours.</p>
      </header>
      
      <form className="gene-form">
        <div className="gene-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        
        <div className="gene-group">
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />
        </div>

        <div className="gene-group">
          <label>Message</label>
          <textarea rows="5" placeholder="How can we help?"></textarea>
        </div>

        <button type="submit" className="gene-btn-blue">Send Message</button>
      </form>
    </div>
  );
};

export default Inquiry;