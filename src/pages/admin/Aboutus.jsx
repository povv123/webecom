import React, { useState } from 'react';
import '../../styles/Admin/Aboutus.css'; 

export default function AdminAboutUs() {

  const [formData, setFormData] = useState({
    heroQuote: "“We believe we will be Success.”",
    heroAuthor: "— Servial CEO Pheakdey",
    heroDescription: "We are committed to demonstrating that business can and should be a force for good. Achieving that takes innovation, collaboration, and a focus on serving others. It also means leading with our values in the technology we make, the way we make it, and how we treat people and the planet we share.\n\nWe’re always working to leave the world better than we found it, and to create powerful tools that empower others to do the same.",
    disclosureText: "We have a wide range of reports and websites that outline key progress across each of our values and other key topics. We’ve also mapped our disclosures across metrics outlined by the SASB (ISSB) and TCFD voluntary disclosure frameworks.",
  });

  const [valuesList, setValuesList] = useState([
    { id: 1, title: 'Accessibility' },
    { id: 2, title: 'Education' },
    { id: 3, title: 'Environment' },
    { id: 4, title: 'Inclusion & Diversity' },
    { id: 5, title: 'Privacy' },
    { id: 6, title: 'Racial Equity and Justice' },
    { id: 7, title: 'Supply Chain Innovation' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fixes the warning by using setValuesList to add a new item
  const handleAddValue = () => {
    const newValue = prompt("Enter the title for the new value:");
    if (newValue && newValue.trim() !== "") {
      const newItem = {
        id: Date.now(), // Generate a simple unique ID
        title: newValue.trim()
      };
      setValuesList([...valuesList, newItem]);
    }
  };

  const handleDeleteValue = (id) => {
    if (window.confirm("Are you sure you want to delete this value?")) {
      setValuesList(valuesList.filter(val => val.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();


    alert('About Us content saved successfully!');
    console.log('Saved Data:', formData, valuesList);
  };

  return (
    <div className="db-main-content">
      
      {/* Header */}
      <header className="db-header">
        <div>
          <p className="db-header__eyebrow">Content Management</p>
          <h1 className="db-header__title">Manage "About Us" Page</h1>
        </div>
        <div className="db-header__actions">
          <button onClick={handleSave} className="db-btn-primary">
            Save Changes
          </button>
        </div>
      </header>

      <form onSubmit={handleSave} className="db-form">
        
        {/* Panel 1: Hero & Philosophy */}
        <section className="db-panel">
          <h2 className="db-panel-title">Hero & Philosophy</h2>
          
          <div className="db-form-grid">
            <div className="db-form-group">
              <label className="db-label">Hero Quote</label>
              <input 
                type="text" 
                name="heroQuote"
                value={formData.heroQuote} 
                onChange={handleChange}
                className="db-input"
              />
            </div>

            <div className="db-form-group">
              <label className="db-label">Quote Author</label>
              <input 
                type="text" 
                name="heroAuthor"
                value={formData.heroAuthor} 
                onChange={handleChange}
                className="db-input"
              />
            </div>

            <div className="db-form-group">
              <label className="db-label">Philosophy Description</label>
              <textarea 
                name="heroDescription"
                value={formData.heroDescription} 
                onChange={handleChange}
                rows="6"
                className="db-textarea"
              />
            </div>
          </div>
        </section>

        {/* Panel 2: Eter Values Summary */}
        <section className="db-panel">
          <h2 className="db-panel-title">Values Summary & Disclosure</h2>
          
          <div className="db-form-group">
            <label className="db-label">Disclosure Text</label>
            <textarea 
              name="disclosureText"
              value={formData.disclosureText} 
              onChange={handleChange}
              rows="4"
              className="db-textarea"
            />
          </div>
        </section>

        {/* Panel 3: Values Grid Management */}
        <section className="db-panel">
          <div className="db-panel-header">
            <h2 className="db-panel-title no-border">Values Grid</h2>
            <button type="button" onClick={handleAddValue} className="db-btn-secondary">
              + Add Value
            </button>
          </div>
          
          <ul className="db-list">
            {valuesList.map((val) => (
              <li key={val.id} className="db-list-item">
                <span>{val.title}</span>
                <div className="db-list-actions">
                  <button type="button" className="db-btn-text db-text-primary">Edit</button>
                  <button 
                    type="button" 
                    onClick={() => handleDeleteValue(val.id)} 
                    className="db-btn-text db-text-danger"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

      </form>
    </div>
  );
}