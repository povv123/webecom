import React, { useState } from 'react';
import '../../../styles/contact/returnfun.css';

const ReturnFund = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    orderId: '',
    email: '',
    reason: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLookup = (e) => {
    e.preventDefault();
    if (formData.orderId && formData.email) setStep(2);
  };

  const handleSubmitReturn = (e) => {
    e.preventDefault();
    if (formData.reason) setStep(3);
    else alert("Please select a reason for return.");
  };

  return (
    <div className="Reurnfunnd-container">
      <div className="Reurnfunnd-content">
        
        <div className="Reurnfunnd-card">
          <div className="Reurnfunnd-header">
            <h1>Returns & Refunds</h1>
            <p>Start a return or check your refund status.</p>
          </div>

          {step === 1 && (
            <form className="Reurnfunnd-form" onSubmit={handleLookup}>
              <div className="Reurnfunnd-input-group">
                <input 
                  type="text" 
                  name="orderId"
                  placeholder="Order ID" 
                  value={formData.orderId}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="Reurnfunnd-input-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <button type="submit" className="Reurnfunnd-btn-primary">Continue</button>
            </form>
          )}

          {step === 2 && (
            <form className="Reurnfunnd-form" onSubmit={handleSubmitReturn}>
              <div className="Reurnfunnd-order-summary">
                <span>Order <strong>#{formData.orderId}</strong></span>
                <button type="button" className="Reurnfunnd-btn-link" onClick={() => setStep(1)}>Edit</button>
              </div>
              
              <div className="Reurnfunnd-item-card">
                <input type="checkbox" id="item1" defaultChecked />
                <label htmlFor="item1" className="Reurnfunnd-item-details">
                  <span className="Reurnfunnd-item-name">Selected Item</span>
                  <span className="Reurnfunnd-item-price">Eligible</span>
                </label>
              </div>

              <div className="Reurnfunnd-input-group">
                <select name="reason" value={formData.reason} onChange={handleInputChange} required>
                  <option value="" disabled>Reason for return</option>
                  <option value="defective">Damaged or defective</option>
                  <option value="wrong_item">Incorrect item received</option>
                  <option value="changed_mind">No longer needed</option>
                </select>
              </div>

              <button type="submit" className="Reurnfunnd-btn-primary">Submit Request</button>
            </form>
          )}

          {step === 3 && (
            <div className="Reurnfunnd-success">
              <div className="Reurnfunnd-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2>Request Sent.</h2>
              <p>Check <strong>{formData.email}</strong> for instructions.</p>
              <button onClick={() => setStep(1)} className="Reurnfunnd-btn-outline">Done</button>
            </div>
          )}
        </div>

        <div className="Reurnfunnd-policy-section">
          <h2>Return Policy</h2>
          <div className="Reurnfunnd-policy-grid">
            <div className="Reurnfunnd-policy-card">
               <svg className="Reurnfunnd-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
               <h4>30 Days</h4>
               <p>Returns accepted within 30 days of delivery.</p>
            </div>
            <div className="Reurnfunnd-policy-card">
               <svg className="Reurnfunnd-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
               <h4>Original State</h4>
               <p>Must be in original packaging with all tags.</p>
            </div>
            <div className="Reurnfunnd-policy-card">
               <svg className="Reurnfunnd-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
               <h4>Refunds</h4>
               <p>Processed within 5-7 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnFund;