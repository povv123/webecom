import React from 'react';
import '../../../styles/contact/quote.css'; // Adjust path as needed

const Quote = () => {
  return (
    <div className="requ">
      <header className="requ-header">
        <h2>Request a Quote</h2>
        <p>Scale your business with Eter's industrial and office solutions.</p>
      </header>

      <form className="requ-form">
        <div className="requ-row">
          <div className="requ-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />
          </div>
          <div className="requ-group">
            <label>Industry</label>
            <select>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Manufacturing</option>
            </select>
          </div>
        </div>

        <div className="requ-group">
          <label>Estimated Budget</label>
          <input type="text" placeholder="e.g. $5,000 - $1,000,000" />
        </div>

        <button type="submit" className="requ-btn-blue">Submit Request</button>
      </form>
    </div>
  );
};

export default Quote;