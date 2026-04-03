import React from 'react';


const Whitepapers = () => {
  const papers = [
    { title: "Security Standards 2026", size: "2.4 MB", type: "PDF" },
    { title: "The Industrial IoT Report", size: "5.1 MB", type: "PDF" },
    { title: "Global Supply Chain Logistics", size: "1.8 MB", type: "PDF" }
  ];

  return (
    <div className="resource-page whitepapers">
      <header className="resource-header">
        <h1>Technical Resources</h1>
        <p>Deep dives into the technology powering Eter.</p>
      </header>

      <div className="paper-list">
        {papers.map((p, i) => (
          <div key={i} className="paper-row">
            <div className="paper-info">
              <span className="file-icon">📄</span>
              <h3>{p.title}</h3>
            </div>
            <div className="paper-actions">
              <span>{p.size}</span>
              <button className="download-btn">Download {p.type}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whitepapers;