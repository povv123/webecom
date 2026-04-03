import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// 1. Update the import to your new accessories-focused data file
import { furnitureAccessories } from '../../../data/Products/furnitureAccessoriesData'; 
import '../../../styles/furnitureAccessories.css'; 

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
    <div className="store-container">
      {/* 1. Page Header */}
      <header className="shop-header">
        <div className="header-content">
           <h1 className="shop-title">
             {filter === 'All' ? 'Shop Accents' : `Shop ${filter}`}
           </h1>
       
        </div>
      </header>

      {/* 2. Category Navigation */}
      <nav className="local-sub-nav">
        <div className="sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'nav-item active' : 'nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Accents' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Product Selection Section */}
      <section className="product-selection">
        <div className="selection-intro">
          <h2><strong>The finishing touch.</strong> Small details, big impact.</h2>
        </div>

        <div className="horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="apple-card">
                {item.isNew && <span className="new-label">NEW</span>}
                
                <div className="card-top">
                  <h3 className="card-product-name">{item.name}</h3>
                  <p className="card-subtitle">{item.tagline || item.brand}</p>
                </div>

                <div className="card-image-wrapper">
                  {/* Accessories look better slightly smaller to emphasize "objects" */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '160px', objectFit: 'contain' }} 
                  />
                </div>


                  <div className="card-bottom">
                         <div className="price-container">
                         <p className="price-tag">
                                ${item.price.toFixed(2)}
                                  </p>
                             </div>
  
                             
                            <Link 
                              to={`/buy/furnitureacc`} 
                            className="buy-button">  Buy </Link>
                          </div>

                              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No accents found in the {filter} category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FurnitureAccessoriesPage;