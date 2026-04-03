import React from 'react';

const Inquiry = () => {
  return (
    <div className="form-container">
      <header className="form-header">
        <h2>General Inquiry</h2>
        <p>Tell us what's on your mind and we'll get back to you within 24 hours.</p>
      </header>
      
      <form className="apple-form">
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea placeholder="How can we help?"></textarea>
        </div>

        <button type="submit" className="apple-btn-blue">Send Message</button>
      </form>
    </div>
  );
};

export default Inquiry;