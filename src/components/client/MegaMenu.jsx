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
      <div className={`nav-wrapper ${isMobileOpen ? 'nav-open' : ''} ${mobileViewId ? 'submenu-view' : ''}`}>
        
        <header className="apple-header" onMouseLeave={() => setActiveId(null)}>
          <nav className="nav-container">
            <ul className="nav-list desktop-nav-list">
              {/* Logo */}
              <li className="nav-item">
                <a href="/" className="nav-link logo-link">
                  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.3051 8.3051 0 0 1 -1.0926 2.2614c-.6816.997-1.3943 1.9902-2.4914 1.9902-.11 0-.411-.031-.722-.149-.3332-.1217-.7241-.2645-1.1666-.2645s-.8584.1441-1.2061.271c-.296.108-.578.21-.692.21-1.0736 0-1.8589-.9932-2.5405-1.9902-1.3943-2.0283-2.4531-5.7256-1.0195-8.2139a4.34 4.34 0 0 1 3.6328-2.2354c.12 0 .432.032.748.156.3359.1318.7119.2803 1.1113.2803.376 0 .7539-.1489 1.1-.2856.3091-.1211.6031-.2364.7171-.2364a4.013 4.013 0 0 1 3.044 1.4883zm-3.6611-3.6477a3.3444 3.3444 0 0 0 .8008-2.4348 3.3934 3.3934 0 0 0 -2.2031 1.1348 3.1953 3.1953 0 0 0 -.8438 2.3389 2.7661 2.7661 0 0 0 2.2461-1.0389z" fill="currentColor"></path>
                  </svg>
                </a>
              </li>

              {/* Desktop Links */}
              {mainNav.map((item) => (
                <li key={item.id} className="nav-item desktop-only" onMouseEnter={() => handleMouseEnter(item.id)}>
                  <a href={item.path} className="nav-link">{item.title}</a>
                </li>
              ))}

              {/* Action Icons & Hamburger */}
              <li className="nav-item nav-actions">
                {/* Search Icon SVG (Visible on Mobile & Desktop) */}
                <a href={searchItem?.path} className="action-btn" aria-label="Search">
                  <svg height="44" viewBox="0 0 15 44" width="15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.298 27.202l-3.87-3.87c.701-.929 1.122-2.081 1.122-3.332 0-3.06-2.489-5.55-5.55-5.55-3.06 0-5.55 2.49-5.55 5.55 0 3.061 2.49 5.55 5.55 5.55 1.251 0 2.403-.421 3.332-1.122l3.87 3.87c.151.151.35.228.548.228s.396-.076.548-.228c.303-.303.303-.793 0-1.096zm-8.298-1.652c-2.454 0-4.45-1.997-4.45-4.45s1.997-4.45 4.45-4.45 4.45 1.997 4.45 4.45-1.996 4.45-4.45 4.45z" fill="currentColor" />
                  </svg>
                </a>
                
                {/* Bag Icon SVG (Visible on Mobile & Desktop) */}
                <a href={bagItem?.path} className="action-btn" aria-label="Shopping Bag">
                  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.353 18.228h-1.688v-2.31c0-1.488-1.196-2.7-2.665-2.7s-2.665 1.212-2.665 2.7v2.31h-1.688c-.689 0-1.25.561-1.25 1.25v7.72c0 1.554 1.263 2.82 2.818 2.82h5.67c1.555 0 2.818-1.266 2.818-2.82v-7.72c0-.689-.561-1.25-1.25-1.25zm-6.068-2.31c0-.965.776-1.75 1.715-1.75s1.715.785 1.715 1.75v2.31h-3.43v-2.31zm6.368 11.28c0 1.031-.838 1.87-1.868 1.87h-5.67c-1.031 0-1.868-.839-1.868-1.87v-7.72c0-.166.134-.3.3-.3h1.388v1.89c0 .262.213.475.475.475s.475-.213.475-.475v-1.89h3.43v1.89c0 .262.213.475.475.475s.475-.213.475-.475v-1.89h1.388c.166 0 .3.134.3.3v7.72z" fill="currentColor" />
                  </svg>
                </a>

                {/* Mobile Menu Toggle Button */}
                <button 
                  className={`menu-toggle ${isMobileOpen ? 'is-active' : ''}`} 
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                >
                  <span className="hamburger-line top"></span>
                  <span className="hamburger-line mid"></span>
                  <span className="hamburger-line bottom"></span>
                </button>
              </li>
            </ul>
          </nav>

          {/* =========================================
              DESKTOP MEGAMENU PANEL
              ========================================= */}
          <div className={`megamenu-panel desktop-only ${activeId && !isMobileOpen ? 'is-visible' : ''}`}>
            <div className="megamenu-inner">
              <div className="megamenu-content">
                {activeItemDesktop?.columns.map((col, idx) => (
                  <div key={idx} className="megamenu-column">
                    <h3 className="column-heading">{col.heading}</h3>
                    <ul className="column-list">
                      {col.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a href={link.path} className="column-item-link">{link.name}</a>
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
        <div className="nav-list-container">
          <div className="nav-slider-wrapper">
            
            {/* PANE 1: MAIN MENU */}
            <div className="pane main-pane">
              <div className="mobile-nav-list">
                {mainNav.map((item) => (
                  <div key={item.id} className="mobile-nav-item">
                    {item.columns && item.columns.length > 0 ? (
                      // If it has a submenu, open the sliding pane
                      <button className="mobile-link-btn" onClick={() => setMobileViewId(item.id)}>
                        {item.title}
                        <span className="chevron">›</span>
                      </button>
                    ) : (
                      // If no submenu, standard link
                      <a href={item.path} className="mobile-link" onClick={() => setIsMobileOpen(false)}>
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* PANE 2: SUB MENU */}
            <div className="pane sub-pane">
              {/* Circular 'X' Button for Back */}
              <button className="back-btn" onClick={() => setMobileViewId(null)} aria-label="Go back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <h2 className="sub-pane-title">{activeItemMobile?.title}</h2>
              
              <div className="sub-pane-content">
                {activeItemMobile?.columns.map((col, idx) => (
                  <div key={idx} className="sub-pane-col">
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
        <div className={`page-overlay desktop-only ${activeId && !isMobileOpen ? 'is-active' : ''}`} />
      </div>

      <div className="header-spacer" />
    </>
  );
};

export default MegaMenu;