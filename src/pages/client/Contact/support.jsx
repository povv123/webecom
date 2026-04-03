import React from 'react';

const Support = () => {
  return (
    <div className="form-container">
      <header className="form-header">
        <h2>Get Support</h2>
        <p>Our technical team is ready to assist you with your Eter products.</p>
      </header>

      <form className="apple-form">
        <div className="input-group">
          <label>Order ID or Serial Number</label>
          <input type="text" placeholder="e.g. ETR-123456" />
        </div>

        <div className="input-group">
          <label>Issue Category</label>
          <div className="radio-group">
            <label><input type="radio" name="cat" /> Technical Issue</label>
            <label><input type="radio" name="cat" /> Shipping/Delivery</label>
            <label><input type="radio" name="cat" /> Warranty Claim</label>
          </div>
        </div>

        <button type="submit" className="apple-btn-blue">Open Ticket</button>
      </form>
    </div>
  );
};

export default Support;