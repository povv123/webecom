import React from 'react';
import '../../../styles/resources/whitepaper.css'; 

const Whitepapers = () => {
  const papers = [
    { 
      title: "Security Standards 2026", 
      desc: "A comprehensive guide to enterprise data encryption, privacy compliance, and threat mitigation.",
      category: "Cybersecurity",
      date: "Mar 12, 2026",
      size: "2.4 MB", 
      type: "PDF" 
    },
    { 
      title: "The Industrial IoT Report", 
      desc: "In-depth analysis of connected sensors, predictive maintenance, and automation in manufacturing.",
      category: "Hardware & IoT",
      date: "Feb 28, 2026",
      size: "5.1 MB", 
      type: "PDF" 
    },
    { 
      title: "Global Supply Chain Logistics", 
      desc: "Strategies for optimizing cross-border e-commerce fulfillment and last-mile delivery efficiency.",
      category: "Logistics",
      date: "Jan 15, 2026",
      size: "1.8 MB", 
      type: "PDF" 
    }
  ];

  return (
    <div className="wpaper">
      <header className="wpaper-header">
        <h1>Technical Resources</h1>
        <p>Deep dives into the technology powering Eter.</p>
      </header>

      <div className="wpaper-list">
        {papers.map((p, i) => (
          <div key={i} className="wpaper-row">
            <div className="wpaper-content">
              <div className="wpaper-icon-container">
                <span className="wpaper-icon">📄</span>
              </div>
              <div className="wpaper-info">
                <div className="wpaper-meta">
                  <span className="wpaper-category">{p.category}</span>
                  <span className="wpaper-dot">•</span>
                  <span className="wpaper-date">{p.date}</span>
                </div>
                <h3 className="wpaper-title">{p.title}</h3>
                <p className="wpaper-desc">{p.desc}</p>
              </div>
            </div>
            
            <div className="wpaper-actions">
              <span className="wpaper-size">{p.size}</span>
              <button className="wpaper-btn-download">
                Download {p.type} <span className="wpaper-download-icon">↓</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whitepapers;