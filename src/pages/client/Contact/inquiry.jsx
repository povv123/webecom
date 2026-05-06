import React, { useState } from 'react';
import '../../../styles/contact/inquiry.css';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    urgency: 'normal',
    message: '',
    contactPreference: 'email'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry Submitted:', formData);
    // Integrate with your backend or email service here
  };

  return (
    <div className="gene">
      <header className="gene-header">
        <h2>Service Inquiry</h2>
        <p>Please provide details about the service you require, and our team will assist you shortly.</p>
      </header>

      <form className="gene-form" onSubmit={handleSubmit}>
        {/* Contact Information Row */}
        <div className="gene-row">
          <div className="gene-group">
            <label>Full Name</label>
            <input 
              type="text" name="fullName" required
              value={formData.fullName} onChange={handleChange}
              placeholder="Enter your full name" 
            />
          </div>
          <div className="gene-group">
            <label>Email Address</label>
            <input 
              type="email" name="email" required
              value={formData.email} onChange={handleChange}
              placeholder="name@gmail.com" 
            />
          </div>
        </div>

        <div className="gene-row">
          <div className="gene-group">
            <label>Phone Number</label>
            <input 
              type="tel" name="phone"
              value={formData.phone} onChange={handleChange}
              placeholder="+855 XXX ..." 
            />
          </div>
          <div className="gene-group">
            <label>Preferred Contact Method</label>
            <select name="contactPreference" value={formData.contactPreference} onChange={handleChange}>
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">Telegram</option>
            </select>
          </div>
        </div>

        {/* Service Category Selection */}
        <div className="gene-row">
          <div className="gene-group">
            <label>Service Required</label>
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
              <option value="" disabled>Select a service category</option>
              <option value="Business Strategy">Business Strategy</option>
              <option value="Customer Service Training">Customer Service Training</option>
              <option value="Equipment Servicing">Equipment Servicing</option>
              <option value="Facility Management">Facility Management</option>
              <option value="Financial Analysis">Financial Analysis</option>
              <option value="Internet Provider">Internet Provider</option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Logistics Services">Logistics Services</option>
              <option value="Spare Parts">Spare Parts & Components</option>
              <option value="Taxes">Tax & Compliance</option>
              <option value="Technical Training">Technical Training</option>
            </select>
          </div>

          <div className="gene-group">
            <label>Urgency Level</label>
            <select name="urgency" value={formData.urgency} onChange={handleChange}>
              <option value="low">Low (General Inquiry)</option>
              <option value="normal">Normal</option>
              <option value="high">High (Urgent Support)</option>
            </select>
          </div>
        </div>

        <div className="gene-group">
          <label>Additional Details / Project Scope</label>
          <textarea 
            name="message" rows="5" required
            value={formData.message} onChange={handleChange}
            placeholder="Please describe your specific needs..."
          ></textarea>
        </div>

        <button type="submit" className="gene-btn-blue">Submit Request</button>
      </form>
    </div>
  );
};

export default Inquiry;