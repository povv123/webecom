import React from 'react';

const Quote = () => {
  return (
    <div className="form-container">
      <header className="form-header">
        <h2>Request a Quote</h2>
        <p>Scale your business with Eter's industrial and office solutions.</p>
      </header>

      <form className="apple-form">
        <div className="form-row">
          <div className="input-group">
            <label>Company Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Industry</label>
            <select>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Manufacturing</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label>Estimated Budget</label>
          <input type="text" placeholder="e.g. $5,000 - $10,000" />
        </div>

        <button type="submit" className="apple-btn-blue">Submit Request</button>
      </form>
    </div>
  );
};

export default Quote;