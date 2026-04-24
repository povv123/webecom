import React, { useState } from 'react';
import '../../../styles/careers/intern.css'; 

const InternForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    department: '',
    availability: '',
    location: 'Phnom Penh',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Internship application submitted:", formData);
    alert("Thank you! Your internship application has been received.");
  };

  return (
    <div className="inntern-page-container">
      <div className="inntern-form-card">
        
        <header className="inntern-header">
          <h1 className="inntern-title">Start your new journey.</h1>
          <p className="inntern-subtitle">Apply for our internship program and learn from the best.</p>
        </header>

        <form className="inntern-form" onSubmit={handleSubmit}>
          
          {/* Personal Information */}
          <div className="inntern-form-group">
            <h3 className="inntern-section-title">Personal Information</h3>
            
            <div className="inntern-input-row">
              <div className="inntern-input-wrapper">
                <input 
                  type="text" 
                  name="fullName" 
                  className="inntern-input" 
                  placeholder="Full Name (English or Khmer)" 
                  required 
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inntern-input-row double">
              <div className="inntern-input-wrapper">
                <input 
                  type="email" 
                  name="email" 
                  className="inntern-input" 
                  placeholder="Email Address" 
                  required 
                  onChange={handleChange}
                />
              </div>
              <div className="inntern-input-wrapper">
                <input 
                  type="tel" 
                  name="phone" 
                  className="inntern-input" 
                  placeholder="Phone Number (Telegram preferred)" 
                  required 
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Academic Background */}
          <div className="inntern-form-group">
            <h3 className="inntern-section-title">Academic Background</h3>
            
            <div className="inntern-input-row double">
              <div className="inntern-input-wrapper">
                <input 
                  type="text" 
                  name="university" 
                  className="inntern-input" 
                  placeholder="University / School Name" 
                  required 
                  onChange={handleChange}
                />
              </div>
              <div className="inntern-input-wrapper">
                <input 
                  type="text" 
                  name="major" 
                  className="inntern-input" 
                  placeholder="Major / Field of Study" 
                  required 
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Internship Details */}
          <div className="inntern-form-group">
            <h3 className="inntern-section-title">Internship Preferences</h3>
            
            <div className="inntern-input-row double">
              <div className="inntern-input-wrapper">
                <select name="department" className="inntern-select" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select Department of Interest...</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="E-commerce Operations">E-commerce Operations</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                </select>
              </div>
              
              <div className="inntern-input-wrapper">
                <select name="availability" className="inntern-select" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Availability...</option>
                  <option value="Full-time (3 Months)">Full-time (3 Months)</option>
                  <option value="Full-time (6 Months)">Full-time (6 Months)</option>
                  <option value="Part-time (Morning)">Part-time (Morning)</option>
                  <option value="Part-time (Afternoon)">Part-time (Afternoon)</option>
                </select>
              </div>
            </div>

            <div className="inntern-input-row">
              <div className="inntern-input-wrapper">
                <textarea 
                  name="message" 
                  className="inntern-textarea" 
                  placeholder="What do you hope to learn during this internship?" 
                  rows="3"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* File Upload */}
            <div className="inntern-input-row">
              <div className="inntern-file-upload">
                <label htmlFor="cv-upload-intern" className="inntern-file-label">
                  <span className="inntern-file-icon">📎</span> 
                  Upload CV / Student ID (PDF only)
                </label>
                <input type="file" id="cv-upload-intern" name="cv" accept=".pdf" className="inntern-file-input" />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="inntern-form-actions">
            <button type="submit" className="inntern-submit-btn">Submit Application</button>
            <p className="inntern-disclaimer">By submitting, you agree that your data will be securely processed by our HR team in Cambodia.</p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default InternForm;