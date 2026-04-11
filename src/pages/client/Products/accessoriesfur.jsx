import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// 1. Update the import to your new accessories-focused data file
import { furnitureAccessories } from '../../../data/Products/furnitureAccessoriesData'; 
import '../../../styles/products/furnitureAccessories.css'; 

const FurnitureAccessoriesPage = () => {
  const [filter, setFilter] = useState('All');

  // Filter based on 'furnishing-accessory' subCategory and 'type'
  const filteredItems = furnitureAccessories ? furnitureAccessories.filter(p => 
    p.subCategory === 'furnishing-accessory' && (filter === 'All' || p.type === filter)
  ) : [];

  // 2. Boutique categories for home accents
  const categories = [
    'All', 
    'Lighting', 
    'Textiles', 
    'Wall Decor', 
    'Vases & Pots', 
    'Candles'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="fasso-store-container">
      {/* 1. Page Header */}
      <header className="fasso-shop-header">
        <div className="fasso-header-content">
           <h1 className="fasso-shop-title">
             {filter === 'All' ? 'Shop Accents' : `Shop ${filter}`}
           </h1>
        </div>
      </header>

      {/* 2. Category Navigation */}
      <nav className="fasso-local-sub-nav">
        <div className="fasso-sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'fasso-nav-item active' : 'fasso-nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Accents' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Product Selection Section */}
      <section className="fasso-product-selection">
        <div className="fasso-selection-intro">
          <h2><strong>The finishing touch.</strong> Small details, big impact.</h2>
        </div>

        <div className="fasso-horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="fasso-apple-card">
                {item.isNew && <span className="fasso-new-label">New</span>}
                
                <div className="fasso-card-top">
                  <h3 className="fasso-card-product-name">{item.name}</h3>
                  <p className="fasso-card-subtitle">{item.tagline || item.brand}</p>
                </div>

                <div className="fasso-card-image-wrapper">
                  {/* Accessories look better slightly smaller to emphasize "objects" */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '160px', objectFit: 'contain' }} 
                  />
                </div>

                <div className="fasso-card-bottom">
                  <div className="fasso-price-container">
                    <p className="fasso-price-tag">
                      {/* Updated to display Cambodian Riel (KHR) formatting */}
                      {item.price.toLocaleString()} KHR
                    </p>
                  </div>
                  
                  {/* NEW: Button Group for Learn More & Buy */}
                  <div className="fasso-button-group">
                    <Link 
                      to={`/furnitureacc/${item.id}`} /* Adjust this route to match your detail page */
                      className="fasso-learn-more-button"
                    >
                      Learn more 
                    </Link>
                    <Link 
                      to={`/buy/furnitureacc`} 
                      state={{ selectedId: item.id }}
                      className="fasso-buy-button"
                    > 
                      Buy  {'>'}
                    </Link>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="fasso-no-results">
              <p>No accents found in the {filter} category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FurnitureAccessoriesPage;