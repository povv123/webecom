import React, { useState } from 'react';

import '../../styles/Admin/Conact.css'; 

export default function AdminContact() {
  // --- Form State ---
  const [pageHeader, setPageHeader] = useState({
    title: "Need help? Start here.",
    subtitle: "Choose a topic below to find solutions, get pricing, or connect with an Eter expert."
  });

  const [contactOptions, setContactOptions] = useState([
    { 
      id: 1, 
      title: 'General Inquiry', 
      description: 'Questions about our company, partners, or general services.', 
      actionText: 'Contact Us >',
      link: '/contact/inquiry'
    },
    { 
      id: 2, 
      title: 'Request a Quote', 
      description: 'Get a customized pricing model for your specific business needs.', 
      actionText: 'Get Pricing >',
      link: '/contact/quote'
    },
    { 
      id: 3, 
      title: 'Technical Support', 
      description: '24/7 assistance for existing clients and technical troubleshooting.', 
      actionText: 'Get Help >',
      link: '/contact/support'
    },
    { 
      id: 4, 
      title: 'Shipping & Delivery', 
      description: 'Fast, reliable delivery across Cambodia.', 
      actionText: 'View Details >',
      link: '/contact/ship'
    }
  ]);

  // --- Handlers ---
  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setPageHeader(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (id, field, value) => {
    setContactOptions(contactOptions.map(option => 
      option.id === id ? { ...option, [field]: value } : option
    ));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // API call would go here to save to database
    alert('Contact page content saved successfully!');
    console.log('Saved Contact Data:', { pageHeader, contactOptions });
  };

  return (
    <div className="db-main-content">
      
      {/* Page Header */}
      <header className="db-header">
        <div>
          <p className="db-header__eyebrow">Content Management</p>
          <h1 className="db-header__title">Manage "Contact" Page</h1>
        </div>
        <div className="db-header__actions">
          <button onClick={handleSave} className="db-btn-primary">
            Save Changes
          </button>
        </div>
      </header>

      <form onSubmit={handleSave} className="db-form">
        
        {/* Panel 1: Page Intro Text */}
        <section className="db-panel">
          <h2 className="db-panel-title">Page Introduction</h2>
          
          <div className="db-form-grid">
            <div className="db-form-group">
              <label className="db-label">Main Heading</label>
              <input 
                type="text" 
                name="title"
                value={pageHeader.title} 
                onChange={handleHeaderChange}
                className="db-input"
              />
            </div>

            <div className="db-form-group">
              <label className="db-label">Subtext / Description</label>
              <textarea 
                name="subtitle"
                value={pageHeader.subtitle} 
                onChange={handleHeaderChange}
                rows="3"
                className="db-textarea"
              />
            </div>
          </div>
        </section>

        {/* Panel 2: Contact Options Grid */}
        <section className="db-panel">
          <div className="db-panel-header">
            <h2 className="db-panel-title no-border">Contact Options</h2>
            <span style={{ fontSize: '0.85rem', color: '#666' }}>Edit the cards displayed to the user</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {contactOptions.map((option) => (
              <div key={option.id} style={{ backgroundColor: '#f9f9f9', padding: '1.25rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                
                <div className="db-form-group" style={{ marginBottom: '1rem' }}>
                  <label className="db-label">Card Title</label>
                  <input 
                    type="text" 
                    value={option.title} 
                    onChange={(e) => handleOptionChange(option.id, 'title', e.target.value)}
                    className="db-input"
                  />
                </div>

                <div className="db-form-group" style={{ marginBottom: '1rem' }}>
                  <label className="db-label">Description</label>
                  <textarea 
                    value={option.description} 
                    onChange={(e) => handleOptionChange(option.id, 'description', e.target.value)}
                    rows="3"
                    className="db-textarea"
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="db-form-group" style={{ flex: 1 }}>
                    <label className="db-label">Button Text</label>
                    <input 
                      type="text" 
                      value={option.actionText} 
                      onChange={(e) => handleOptionChange(option.id, 'actionText', e.target.value)}
                      className="db-input"
                    />
                  </div>
                  <div className="db-form-group" style={{ flex: 1 }}>
                    <label className="db-label">Link Path</label>
                    <input 
                      type="text" 
                      value={option.link} 
                      onChange={(e) => handleOptionChange(option.id, 'link', e.target.value)}
                      className="db-input"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </form>
    </div>
  );
}