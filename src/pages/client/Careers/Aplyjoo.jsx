import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../styles/careers/aplyjoo.css'; 

const Aplyjoo = () => {


  const location = useLocation();
  const positionTitle = location.state?.selectedPosition || "General Application";

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+855 ', 
    expectedSalary: '',
    portfolioUrl: '',
    coverLetter: ''
  });

  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", { positionTitle, ...formData, resume: fileName });
    alert("Thank you! Your application for " + positionTitle + " has been submitted successfully.");
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="aplyjoo-container">
      <div className="aplyjoo-card">
        
        <div className="aplyjoo-header">
          <h1>Join the Team</h1>
          <p>Tell us a little about yourself and why you'd be a great fit.</p>
        </div>

        <form className="aplyjoo-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="position">Position Applying For</label>
            <input 
              type="text" 
              id="position"
              name="position"
              value={positionTitle} 
              readOnly 
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input 
              type="text" 
              id="fullName"
              name="fullName"
              placeholder="e.g. Sokha Chea" 
              value={formData.fullName}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="sokha@example.com" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expectedSalary">Expected Salary (USD)</label>
              <input 
                type="number" 
                id="expectedSalary"
                name="expectedSalary"
                placeholder="e.g. 500" 
                value={formData.expectedSalary}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="portfolioUrl">LinkedIn / Portfolio URL</label>
              <input 
                type="text" 
                id="portfolioUrl"
                name="portfolioUrl"
                placeholder="https://..." 
                value={formData.portfolioUrl}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Resume / CV *</label>
            <div className="file-upload-wrapper">
              <input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileChange}
                required 
              />
              <span className="file-upload-label">
                {fileName ? fileName : "Click to upload or drag and drop"}
              </span>
              <span className="file-upload-hint">PDF, DOC, or DOCX (Max 5MB)</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter / Additional Note</label>
            <textarea 
              id="coverLetter"
              name="coverLetter"
              placeholder="Why are you interested in this role?"
              value={formData.coverLetter}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="aplyjoo-submit-btn">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default Aplyjoo;