import React from 'react';
/* Ensure the path is correct based on your folder structure */
import "../../../styles/leadership.css"; 

const Leadership = () => {
  const leaders = [
    { name: "Sokhom N.", role: "Chief Executive Officer", img: "/images/team/ceo.jpg" },
    { name: "Elena R.", role: "Head of Product Design", img: "/images/team/design.jpg" },
    { name: "Marcus T.", role: "VP of Engineering", img: "/images/team/eng.jpg" }
  ];

  return (
    <div className="leadership-page antialiased">
      {/* Centered Apple-style Header */}
      <header className="leadership-header">
        <div className="container-wide">
          <h1 className="leadership-title">
            Help is here. <br />
            <span className="text-gray-400">Whenever you need it.</span>
          </h1>
          <p className="leadership-intro">
            A diverse team united by a passion for excellence and human-centered design.
          </p>
        </div>
      </header>

      {/* Horizontal Carousel (As seen in your screenshot) */}
      <div className="leadership-carousel-container">
        <div className="leadership-carousel hide-scrollbar">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-retail-card group">
              {/* Top-left text content */}
              <div className="leader-text-top">
                <p className="leader-role-label">{leader.role}</p>
                <h3 className="leader-name-display">{leader.name}</h3>
              </div>
              
              {/* Center-bottom image logic */}
              <div className="leader-image-bottom">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="leader-portrait-img"
                />
              </div>
            </div>
          ))}
          {/* Spacer for the "Bleed" effect on the right */}
          <div className="carousel-end-spacer" />
        </div>
      </div>
    </div>
  );
};

export default Leadership;