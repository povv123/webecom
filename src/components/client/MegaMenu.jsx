import React, { useState, useEffect } from 'react';
import { navData } from '../../data/navData';
import './MegaMenu.css';

const MegaMenu = () => {
  const [activeId, setActiveId] = useState(null);          
  const [isMobileOpen, setIsMobileOpen] = useState(false); 
  const [mobileViewId, setMobileViewId] = useState(null);  

  const mainNav = navData.filter(item => item.type !== 'utility');
  const searchItem = navData.find(item => item.id === 'search');
  const bagItem = navData.find(item => item.id === 'bag');

  // Desktop Hover Logic
  const handleMouseEnter = (id) => {
    if (window.innerWidth <= 834) return;
    const item = navData.find(i => i.id === id);
    if (item && item.columns && item.columns.length > 0) {
      setActiveId(id);
    } else {
      setActiveId(null);
    }
  };

  const activeItemDesktop = navData.find(item => item.id === activeId);
  const activeItemMobile = navData.find(item => item.id === mobileViewId);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset slider position when menu closes
      setTimeout(() => setMobileViewId(null), 300); 
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  return (
    <>
      <div className={`mega-nav-wrapper ${isMobileOpen ? 'mega-nav-open' : ''} ${mobileViewId ? 'mega-submenu-view' : ''}`}>
        
        <header className="mega-header" onMouseLeave={() => setActiveId(null)}>
          <nav className="mega-nav-container">
            <ul className="mega-nav-list mega-desktop-nav-list">
              {/* Logo */}
              <li className="mega-nav-item">
                <a href="/" className="mega-nav-link mega-logo-link">
                  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.3051 8.3051 0 0 1 -1.0926 2.2614c-.6816.997-1.3943 1.9902-2.4914 1.9902-.11 0-.411-.031-.722-.149-.3332-.1217-.7241-.2645-1.1666-.2645s-.8584.1441-1.2061.271c-.296.108-.578.21-.692.21-1.0736 0-1.8589-.9932-2.5405-1.9902-1.3943-2.0283-2.4531-5.7256-1.0195-8.2139a4.34 4.34 0 0 1 3.6328-2.2354c.12 0 .432.032.748.156.3359.1318.7119.2803 1.1113.2803.376 0 .7539-.1489 1.1-.2856.3091-.1211.6031-.2364.7171-.2364a4.013 4.013 0 0 1 3.044 1.4883zm-3.6611-3.6477a3.3444 3.3444 0 0 0 .8008-2.4348 3.3934 3.3934 0 0 0 -2.2031 1.1348 3.1953 3.1953 0 0 0 -.8438 2.3389 2.7661 2.7661 0 0 0 2.2461-1.0389z" fill="currentColor"></path>
                  </svg>
                </a>
              </li>

              {/* Desktop Links */}
              {mainNav.map((item) => (
                <li key={item.id} className="mega-nav-item mega-desktop-only" onMouseEnter={() => handleMouseEnter(item.id)}>
                  <a href={item.path} className="mega-nav-link">{item.title}</a>
                </li>
              ))}

              {/* Action Icons & Hamburger */}
              <li className="mega-nav-item mega-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                
                {/* Modern Apple Store Search Icon (SF Symbol) */}
                <a href={searchItem?.path} className="mega-action-btn" aria-label="Search">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </a>
                
                {/* Modern Apple Store Bag Icon (SF Symbol) */}
                <a href={bagItem?.path} className="mega-action-btn" aria-label="Shopping Bag">
                  <svg width="15" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
                    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                  </svg>
                </a>

                {/* Mobile Menu Toggle Button */}
                <button 
                  className={`mega-menu-toggle ${isMobileOpen ? 'mega-is-active' : ''}`} 
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                >
                  <span className="mega-hamburger-line mega-top"></span>
                  <span className="mega-hamburger-line mega-mid"></span>
                  <span className="mega-hamburger-line mega-bottom"></span>
                </button>
              </li>
            </ul>
          </nav>

          {/* =========================================
              DESKTOP MEGAMENU PANEL
              ========================================= */}
          <div className={`mega-panel mega-desktop-only ${activeId && !isMobileOpen ? 'mega-is-visible' : ''}`}>
            <div className="mega-panel-inner">
              <div className="mega-panel-content">
                {activeItemDesktop?.columns.map((col, idx) => (
                  <div key={idx} className="mega-panel-column">
                    <h3 className="mega-column-heading">{col.heading}</h3>
                    <ul className="mega-column-list">
                      {col.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a href={link.path} className="mega-column-item-link">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* =========================================
            MOBILE MENU PANEL (Sliding Panes)
            ========================================= */}
        <div className="mega-nav-list-container">
          <div className="mega-nav-slider-wrapper">
            
            {/* PANE 1: MAIN MENU */}
            <div className="mega-pane mega-main-pane">
              <div className="mega-mobile-nav-list">
                {mainNav.map((item) => (
                  <div key={item.id} className="mega-mobile-nav-item">
                    {item.columns && item.columns.length > 0 ? (
                      // If it has a submenu, open the sliding pane
                      <button className="mega-mobile-link-btn" onClick={() => setMobileViewId(item.id)}>
                        {item.title}
                        <span className="mega-chevron">›</span>
                      </button>
                    ) : (
                      // If no submenu, standard link
                      <a href={item.path} className="mega-mobile-link" onClick={() => setIsMobileOpen(false)}>
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* PANE 2: SUB MENU */}
            <div className="mega-pane mega-sub-pane">
              {/* Circular 'X' Button for Back */}
              <button className="mega-back-btn" onClick={() => setMobileViewId(null)} aria-label="Go back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <h2 className="mega-sub-pane-title">{activeItemMobile?.title}</h2>
              
              <div className="mega-sub-pane-content">
                {activeItemMobile?.columns.map((col, idx) => (
                  <div key={idx} className="mega-sub-pane-col">
                    <h3>{col.heading}</h3>
                    {col.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.path} onClick={() => setIsMobileOpen(false)}>
                        {link.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Background Overlay (Desktop only) */}
        <div className={`mega-page-overlay mega-desktop-only ${activeId && !isMobileOpen ? 'mega-is-active' : ''}`} />
      </div>

      <div className="mega-header-spacer" />
    </>
  );
};

export default MegaMenu;