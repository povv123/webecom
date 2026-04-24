import React, { useState, useEffect } from 'react';
import { navData } from '../../data/navData';
import { useBag } from '../../context/BagContext'; // 1. IMPORT ADDED HERE
import './MegaMenu.css';

// 2. REMOVED THE bagCount PROP
const MegaMenu = () => {
  // 3. PULL totalCount DIRECTLY FROM CONTEXT
  const { totalCount } = useBag();

  const [activeId, setActiveId] = useState(null);          
  const [isMobileOpen, setIsMobileOpen] = useState(false); 
  const [mobileViewId, setMobileViewId] = useState(null);  

  const mainNav = navData.filter(item => item.type !== 'utility');
  const searchItem = navData.find(item => item.id === 'search');
  const bagItem = navData.find(item => item.id === 'bag');

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

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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

              {/* Desktop Links */}
              {mainNav.map((item) => (
                <li key={item.id} className="mega-nav-item mega-desktop-only" onMouseEnter={() => handleMouseEnter(item.id)}>
                  <a href={item.path} className="mega-nav-link">{item.title}</a>
                </li>
              ))}

              {/* Action Icons & Hamburger */}
              <li className="mega-nav-item mega-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                
                {/* Search Icon */}
                <a href={searchItem?.path} className="mega-action-btn" aria-label="Search">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </a>
                
                {/* Bag Icon with Notification Badge */}
                <a href={bagItem?.path} className="mega-action-btn" aria-label="Shopping Bag" style={{ position: 'relative' }}>
                  <svg width="15" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
                    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                  </svg>
                  {/* 4. REPLACED bagCount WITH totalCount */}
                  {totalCount > 0 && (
                    <span className="mega-bag-badge">
                      {totalCount > 99 ? '99+' : totalCount}
                    </span>
                  )}
                </a>

                {/* Mobile Menu Toggle */}
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

          {/* Desktop Megamenu Panel */}
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

        {/* Mobile Menu Panel */}
        <div className="mega-nav-list-container">
          <div className="mega-nav-slider-wrapper">
            
            {/* Pane 1: Main Menu */}
            <div className="mega-pane mega-main-pane">
              <div className="mega-mobile-nav-list">
                {mainNav.map((item) => (
                  <div key={item.id} className="mega-mobile-nav-item">
                    {item.columns && item.columns.length > 0 ? (
                      <button className="mega-mobile-link-btn" onClick={() => setMobileViewId(item.id)}>
                        {item.title}
                        <span className="mega-chevron">›</span>
                      </button>
                    ) : (
                      <a href={item.path} className="mega-mobile-link" onClick={() => setIsMobileOpen(false)}>
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pane 2: Sub Menu */}
            <div className="mega-pane mega-sub-pane">
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