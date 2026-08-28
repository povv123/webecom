import React, { useState, useEffect } from 'react';
import { navData } from '../../data/navData';
import { useBag } from '../../context/BagContext';
import { useAuth } from '../../context/AuthContext';
import './MegaMenu.css';

const MegaMenu = () => {
  const { totalCount } = useBag();
  const { isAuthenticated } = useAuth();

  const [activeId, setActiveId] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileViewId, setMobileViewId] = useState(null);

  // LANGUAGE PERSISTENCE: Check localStorage first, fallback to 'en'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('appLanguage') || 'en';
  });
  
  const [showLangMenu, setShowLangMenu] = useState(false);

  // LANGUAGE PERSISTENCE: Save language selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const translations = {
    en: {
      search: 'Search',
      bag: 'Shopping Bag',
      english: 'English',
      khmer: 'Khmer',
    },
    kh: {
      search: 'ស្វែងរក',
      bag: 'កន្ត្រក',
      english: 'អង់គ្លេស',
      khmer: 'ខ្មែរ',
    },
  };

  const t = translations[language];

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

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <>
      <div
        className={`mega-nav-wrapper ${isMobileOpen ? 'mega-nav-open' : ''} ${
          mobileViewId ? 'mega-submenu-view' : ''
        }`}
      >
        <header
          className="mega-header"
          onMouseLeave={() => setActiveId(null)}
        >
          <nav className="mega-nav-container">
            <ul className="mega-nav-list mega-desktop-nav-list">

              {/* Desktop Links */}
              {mainNav.map((item) => (
                <li
                  key={item.id}
                  className="mega-nav-item mega-desktop-only"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <a href={item.path} className="mega-nav-link">
                    {item.title[language]}
                  </a>
                </li>
              ))}

              {/* Actions */}
              <li
                className="mega-nav-item mega-nav-actions"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >

                {/* Language Switcher */}
                <div
                  className="mega-language-switcher"
                  style={{ position: 'relative' }}
                >
                  <button
                    className="mega-action-btn"
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    aria-label="Language"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </button>

                  {showLangMenu && (
                    <div className="mega-language-dropdown">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setShowLangMenu(false);
                        }}
                      >
                        🇺🇸 {t.english}
                      </button>

                      <button
                        onClick={() => {
                          setLanguage('kh');
                          setShowLangMenu(false);
                        }}
                      >
                        🇰🇭 {t.khmer}
                      </button>
                    </div>
                  )}
                </div>

                {/* Search */}
                <a
                  href={searchItem?.path}
                  className="mega-action-btn"
                  aria-label={t.search}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line
                      x1="21"
                      y1="21"
                      x2="16.65"
                      y2="16.65"
                    ></line>
                  </svg>
                </a>

                {/* Account */}
                <a
                  href={isAuthenticated ? '/account' : '/signin'}
                  className="mega-action-btn"
                  aria-label={isAuthenticated ? 'Account' : 'Sign In'}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </a>

                {/* Bag */}
                <a
                  href={bagItem?.path}
                  className="mega-action-btn"
                  aria-label={t.bag}
                  style={{ position: 'relative' }}
                >
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
                    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                  </svg>

                  {totalCount > 0 && (
                    <span className="mega-bag-badge">
                      {totalCount > 99 ? '99+' : totalCount}
                    </span>
                  )}
                </a>

                {/* Mobile Toggle */}
                <button
                  className={`mega-menu-toggle ${
                    isMobileOpen ? 'mega-is-active' : ''
                  }`}
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  aria-label={
                    isMobileOpen ? 'Close menu' : 'Open menu'
                  }
                >
                  <span className="mega-hamburger-line mega-top"></span>
                  <span className="mega-hamburger-line mega-mid"></span>
                  <span className="mega-hamburger-line mega-bottom"></span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Desktop Megamenu */}
          <div
            className={`mega-panel mega-desktop-only ${
              activeId && !isMobileOpen ? 'mega-is-visible' : ''
            }`}
          >
            <div className="mega-panel-inner">
              <div className="mega-panel-content">
                {activeItemDesktop?.columns.map((col, idx) => (
                  <div key={idx} className="mega-panel-column">
                    
                    {col.heading && (
                      <h3 className="mega-column-heading">
                        {col.heading[language]}
                      </h3>
                    )}

                    <ul className="mega-column-list">
                      {col.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a
                            href={link.path}
                            className="mega-column-item-link"
                          >
                            {link.name[language]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className="mega-nav-list-container">
          <div className="mega-nav-slider-wrapper">

            {/* Main Pane */}
            <div className="mega-pane mega-main-pane">
              <div className="mega-mobile-nav-list">
                {mainNav.map((item) => (
                  <div
                    key={item.id}
                    className="mega-mobile-nav-item"
                  >
                    {item.columns && item.columns.length > 0 ? (
                      <button
                        className="mega-mobile-link-btn"
                        onClick={() => setMobileViewId(item.id)}
                      >
                        {item.title[language]}
                        <span className="mega-chevron">›</span>
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="mega-mobile-link"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.title[language]}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sub Pane */}
            <div className="mega-pane mega-sub-pane">
              <button
                className="mega-back-btn"
                onClick={() => setMobileViewId(null)}
                aria-label="Go back"
              >
                ✕
              </button>

              <h2 className="mega-sub-pane-title">
                {activeItemMobile?.title[language]}
              </h2>

              <div className="mega-sub-pane-content">
                {activeItemMobile?.columns.map((col, idx) => (
                  <div key={idx} className="mega-sub-pane-col">
                    
                    {col.heading && <h3>{col.heading[language]}</h3>}

                    {col.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.path}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {link.name[language]}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Overlay */}
        <div
          className={`mega-page-overlay mega-desktop-only ${
            activeId && !isMobileOpen ? 'mega-is-active' : ''
          }`}
        />
      </div>

      <div className="mega-header-spacer" />
    </>
  );
};

export default MegaMenu;