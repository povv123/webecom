import React, { useState } from 'react';
import '../../../styles/contact/technical.css'; 

const TechnicalSupportForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+855 ',
    clientId: '',
    location: '',
    issueCategory: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support Ticket Submitted:', formData);
    // Add API submission logic here
  };

  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Technical Support.</h1>
        <p>24/7 assistance for existing clients and technical troubleshooting.</p>
      </div>

      <form className="apple-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input 
              type="text" 
              name="fullName" 
              placeholder="First and Last Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="clientId" 
              placeholder="Client ID (Optional)" 
              value={formData.clientId} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number (+855)" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group select-wrapper">
            <select 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select your location</option>
              <option value="phnom_penh">Phnom Penh</option>
              <option value="battambang">Battambang</option>
              <option value="siem_reap">Siem Reap</option>
              <option value="kandal">Kandal</option>
              <option value="other">Other Province</option>
            </select>
          </div>
          <div className="form-group select-wrapper">
            <select 
              name="issueCategory" 
              value={formData.issueCategory} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select issue category</option>
              <option value="system_down">System Outage / Server Down</option>
              <option value="software_bug">Software Bug / Glitch</option>
              <option value="account_access">Account & Access Issues</option>
              <option value="billing">Billing & Subscription</option>
              <option value="other">Other Technical Issue</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <textarea 
            name="description" 
            placeholder="Please describe your issue in detail..." 
            rows="5" 
            value={formData.description} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-footer">
          <p className="support-note">
            Need immediate help? Call our local hotline at <strong>1800-20-XXXX</strong> (Toll-free in Cambodia).
          </p>
          <button type="submit" className="apple-btn">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default TechnicalSupportForm;