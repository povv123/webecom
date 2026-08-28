import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { accessories } from '../../../data/Products/electronicaccessoriesData'; 
import '../../../styles/products/accessories.css'; 

const AccessoriesPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = accessories ? accessories.filter(p => 
    p.subCategory === 'accessory' && (filter === 'All' || p.type === filter)
  ) : [];

  const categories = [
    'All', 
    'Audio', 
    'Power & Cables', 
    'Cases & Protection', 
    'Mice & Keyboards'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="Assmomo-store-container">
      <header className="Assmomo-shop-header">
        <div className="Assmomo-header-content">
           <h1 className="Assmomo-shop-title">
             {filter === 'All' ? 'Shop Accessories' : `Shop ${filter}`}
           </h1>
        </div>
      </header>

      <nav className="Assmomo-local-sub-nav">
        <div className="Assmomo-sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'Assmomo-nav-item active' : 'Assmomo-nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Accessories' : cat}
            </button>
          ))}
        </div>
      </nav>

      <section className="Assmomo-product-selection">
        <div className="Assmomo-selection-intro">
          <h2><strong>Essentials.</strong> The perfect additions.</h2>
        </div>

        <div className="Assmomo-horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="Assmomo-apple-card">
                {item.isNew && <span className="Assmomo-new-label">New</span>} 
                
                {/* 1. Image is now on top */}
                <div className="Assmomo-card-image-wrapper">
                  <img src={item.image} alt={item.name} style={{ maxHeight: '150px' }} />
                </div>

                {/* 2. Title and subtitle are now below the image */}
                <div className="Assmomo-card-top">
                  <h3 className="Assmomo-card-product-name">{item.name}</h3>
                  <p className="Assmomo-card-subtitle">{item.tagline || item.brand}</p>
                </div>

                {/* 3. Price and buttons remain at the bottom */}
                <div className="Assmomo-card-bottom">
                  <div className="Assmomo-price-container">
                    <p className="Assmomo-price-tag">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="Assmomo-button-group">
                    <Link 
                      to={`/product/${item.id}`} 
                      className="Assmomo-learn-more-button"
                    >
                      Learn more 
                    </Link>
                    <Link 
                      to={`/buy/electronics`} 
                      state={{ selectedId: item.id }} 
                      className="Assmomo-buy-button"
                    >
                      Buy  {'>'}
                    </Link>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="Assmomo-no-results">
              <p>No accessories found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;