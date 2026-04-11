import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { machineTools } from '../../../data/Products/machineToolData'; 
import '../../../styles/products/machinetools.css'; 

const Machintools = () => {
  const [filter, setFilter] = useState('All');

  // Logic: Check subCategory AND the active tab filter
  const filteredItems = machineTools ? machineTools.filter(p => 
    p.subCategory === 'precision-tool' && (filter === 'All' || p.type === filter)
  ) : [];

  const categories = ['All', 'Lathes', 'Milling Machines', 'CNC Routers', 'Grinders'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="toto-store-container">
      <header className="toto-shop-header">
        <div className="toto-header-content">
          <h1 className="toto-shop-title">{filter === 'All' ? 'Shop Tools' : `Shop ${filter}`}</h1>
        </div>
      </header>

      <nav className="toto-local-sub-nav">
        <div className="toto-sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'toto-nav-item active' : 'toto-nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Tools' : cat}
            </button>
          ))}
        </div>
      </nav>

      <section className="toto-product-selection">
        {/* Optional: Add a selection intro here if you want consistency with other pages */}
        <div className="toto-selection-intro">
          <h2><strong>Precision Engineering.</strong> Built for performance.</h2>
        </div>

        <div className="toto-horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="toto-apple-card">
                
                {/* 1. Title & Subtitle */}
                <div className="toto-card-top">
                  <h3 className="toto-card-product-name">{item.name}</h3>
                  <p className="toto-card-subtitle">{item.tagline}</p>
                </div>
                
                {/* 2. Image */}
                <div className="toto-card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '180px', objectFit: 'contain' }} 
                  />
                </div>
                
                {/* 3. Price & Buttons */}
                <div className="toto-card-bottom">
                  <div className="toto-price-container">
                    <p className="toto-price-tag">${item.price.toLocaleString()}</p>
                    <p className="toto-monthly-tag">
                      Industrial financing available.
                    </p>
                  </div>
                  
                  {/* NEW: Button Group for Learn More & Buy */}
                  <div className="toto-button-group">
                    <Link 
                      to={`/tools/${item.id}`} /* Adjust this route to match your detail page */
                      className="toto-learn-more-button"
                    >
                      Learn more 
                    </Link>
                    <Link 
                      to={`/buy/tools`} 
                      state={{ selectedId: item.id }} 
                      className="toto-buy-button"
                    >
                      Buy {'>'}
                    </Link>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="toto-no-results">
              <p>No machinery found. Check subCategory in data.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Machintools;