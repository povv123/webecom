import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { navData } from '../../data/navData';
import './MegaMenu.css';

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 14.5L10.5 10.5M12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BagIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5H13V14C13 14.5523 12.5523 15 12 15H2C1.44772 15 1 14.5523 1 14V5Z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4 6V4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4V6" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

const MegaMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 834);
  const location = useLocation();

  // 1. Separate "Text" links from "Utility" (Icon) links
  const mainNavItems = navData.filter(item => item.id !== 'search' && item.id !== 'bag');
  const searchItem = navData.find(item => item.id === 'search');
  const bagItem = navData.find(item => item.id === 'bag');

  useEffect(() => {
    const handleResize = () => {
      const mobileStatus = window.innerWidth <= 834;
      setIsMobile(mobileStatus);
      if (!mobileStatus) {
        setIsMobileMenuOpen(false);
        setActiveSubMenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const handleNavClick = (item, e) => {
    const hasSubMenu = item.columns && item.columns.length > 0;
    if (isMobile && hasSubMenu) {
      e.preventDefault();
      setActiveSubMenu(item);
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <nav className={`apple-nav ${isMobileMenuOpen ? 'nav-open' : ''}`} role="navigation">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>Chab buy pleam </Link>
        </div>

        {/* Navigation Slider Wrapper */}
        <div className={`nav-list-container ${activeSubMenu ? 'submenu-view' : ''}`}>
          <div className="nav-slider-wrapper">
            
            {/* PANE 1: MAIN LIST */}
            <div className="pane main-pane">
              <ul className="nav-list">
                {mainNavItems.map((item) => (
                  <li key={item.id} className={`nav-item ${item.columns?.length > 0 ? 'group' : ''}`}>
                    <NavLink 
                      to={item.path} 
                      onClick={(e) => handleNavClick(item, e)} 
                      end={item.path === "/"}
                    >
                      {item.title}
                    </NavLink>

                    {/* Desktop Dropdown logic stays the same */}
                    {!isMobile && item.columns?.length > 0 && (
                      <div className="desktop-mega">
                        <div className="mega-content">
                          {item.columns.map((col, idx) => (
                            <div key={idx} className="mega-col">
                              <h4>{col.heading}</h4>
                              {col.links.map(link => (
                                <Link key={link.path} to={link.path}>{link.name}</Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* PANE 2: SUBMENU VIEW */}
            <div className="pane sub-pane">
              {activeSubMenu && (
                <div className="sub-pane-content">
                  <button className="back-btn" onClick={() => setActiveSubMenu(null)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Menu
                  </button>
                  <h2 className="sub-pane-title">{activeSubMenu.title}</h2>
                  <div className="sub-pane-grid">
                    {activeSubMenu.columns.map((col, idx) => (
                      <div key={idx} className="sub-pane-col">
                        <h3>{col.heading}</h3>
                        {col.links.map(link => (
                          <NavLink key={link.path} to={link.path} onClick={closeMenu}>
                            {link.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons (Search & Bag Icons) */}
        <div className="nav-actions">
          <Link 
            to={searchItem?.path || "/search"} 
            className="action-btn" 
            aria-label="Search" 
            onClick={closeMenu}
          >
            <SearchIcon />
          </Link>
          <Link 
            to={bagItem?.path || "/shop/bag"} 
            className="action-btn" 
            aria-label="Shopping Bag" 
            onClick={closeMenu}
          >
            <BagIcon />
          </Link>
          
          <button 
            className="menu-toggle" 
            onClick={() => isMobileMenuOpen ? closeMenu() : setIsMobileMenuOpen(true)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line top"></span>
            <span className="hamburger-line mid"></span>
            <span className="hamburger-line bottom"></span>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default MegaMenu;