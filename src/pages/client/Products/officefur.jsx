import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { furnitureItems } from '../../../data/Products/officefurnitureData'; 
import '../../../styles/products/officefur.css'; 

const OfficeFurniturePage = () => {
  const [filter, setFilter] = useState('All');

  // Filter based on 'furniture' subCategory and the 'type' field
  const filteredItems = furnitureItems ? furnitureItems.filter(p => 
    p.subCategory === 'furniture' && (filter === 'All' || p.type === filter)
  ) : [];

  // 2. Updated categories for an Office Furniture store
  const categories = [
    'All', 
    'Chairs', 
    'Desks', 
    'Storage', 
    'Lighting', 
    'Accessories'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="ofic-store-container">
      {/* 1. Page Header */}
      <header className="ofic-shop-header">
        <div className="ofic-header-content">
           <h1 className="ofic-shop-title">
             {filter === 'All' ? 'Shop Furniture' : `Shop ${filter}`}
           </h1>
        </div>
      </header>

      {/* 2. Category Navigation */}
      <nav className="ofic-local-sub-nav">
        <div className="ofic-sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'ofic-nav-item active' : 'ofic-nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Furniture' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Product Selection Section */}
      <section className="ofic-product-selection">
        <div className="ofic-selection-intro">
          <h2><strong>Build your dream office.</strong> Comfort meets productivity.</h2>
        </div>

        <div className="ofic-horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="ofic-apple-card">
                {item.isNew && <span className="ofic-new-label">New Arrival</span>}
                
                {/* 1. Title First */}
                <div className="ofic-card-header">
                  <h3 className="ofic-card-product-name">{item.name}</h3>
                </div>

                {/* 2. Picture Second */}
                <div className="ofic-card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '180px', objectFit: 'contain' }} 
                  />
                </div>

                {/* 3. Description Third */}
                <div className="ofic-card-description">
                  <p className="ofic-card-subtitle">{item.tagline || item.material}</p>
                </div>

                {/* 4. Price, Learn More, and Buy Last */}
                <div className="ofic-card-bottom">
                  <div className="ofic-price-container">
                    <p className="ofic-price-tag">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="ofic-button-group">
                    {/* UPDATED: Link routes to the universal /product/:id page */}
                    <Link 
                      to={`/product/${item.id}`} 
                      className="ofic-learn-more-button"
                    >
                      Learn more 
                    </Link>
                    <Link 
                      to={`/buy/office`} 
                      state={{ selectedId: item.id }} 
                      className="ofic-buy-button"
                    >
                      Buy {'>'}
                    </Link>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="ofic-no-results">
              <p>No furniture items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OfficeFurniturePage;