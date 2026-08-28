import React, { useState } from 'react';
import '../../../styles/contact/trackss.css';

const Track = () => {
  const [orderId, setOrderId] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderId.trim()) {
      setShowStatus(true);
    }
  };

  return (
    <div className="track-container">
      <div className="track-card">
        <div className="track-header">
          <h1>Track an Order</h1>
          <p>Check the status of your recent Eter purchases and shipments.</p>
        </div>

        {!showStatus ? (
          <form className="track-form" onSubmit={handleTrack}>
            <div className="input-group">
              <label htmlFor="order-id">Order ID or Tracking Number</label>
              <input 
                type="text" 
                id="order-id" 
                placeholder="e.g. ETER-123456" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-track">Track Status</button>
          </form>
        ) : (
          <div className="order-results">
            <div className="order-info-brief">
              <span>Order: <strong>#{orderId}</strong></span>
              <button className="btn-reset" onClick={() => setShowStatus(false)}>New Search</button>
            </div>

            <div className="stepper-wrapper">
              <div className="stepper-item completed">
                <div className="step-counter">✓</div>
                <div className="step-name">Order Placed</div>
                <div className="step-date">May 05, 2026</div>
              </div>
              <div className="stepper-item completed">
                <div className="step-counter">✓</div>
                <div className="step-name">Processed</div>
                <div className="step-date">May 06, 2026</div>
              </div>
              <div className="stepper-item active">
                <div className="step-counter">3</div>
                <div className="step-name">On the Way</div>
                <div className="step-date">Expected Today</div>
              </div>
              <div className="stepper-item">
                <div className="step-counter">4</div>
                <div className="step-name">Delivered</div>
              </div>
            </div>

            <div className="shipping-details">
              <h3>Shipping Address</h3>
              <p>Phnom Penh Tower, Monivong Blvd</p>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;