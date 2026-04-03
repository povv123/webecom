import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { accessories } from '../../../data/Products/electronicaccessoriesData'; 
import '../../../styles/products/accessories.css'; 

const AccessoriesPage = () => {
  const [filter, setFilter] = useState('All');

  // FIX: Ensure we use p.type to match your electronicaccessoriesData.jsx
  const filteredItems = accessories ? accessories.filter(p => 
    p.subCategory === 'accessory' && (filter === 'All' || p.type === filter)
  ) : [];

  // FIX: Categories must EXACTLY match the 'type' strings in your data file
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
    <div className="store-container">
      <header className="shop-header">
        <div className="header-content">
           <h1 className="shop-title">
             {filter === 'All' ? 'Shop Accessories' : `Shop ${filter}`}
           </h1>
        </div>
      </header>

      <nav className="local-sub-nav">
        <div className="sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'nav-item active' : 'nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {/* This displays 'All Accessories' for the All button, otherwise the name */}
              {cat === 'All' ? 'All Accessories' : cat}
            </button>
          ))}
        </div>
      </nav>

      <section className="product-selection">
        <div className="selection-intro">
          <h2><strong>Essentials.</strong> The perfect additions.</h2>
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
                  <img src={item.image} alt={item.name} style={{ maxHeight: '150px' }} />
                </div>

                <div className="card-bottom">
  <p className="price-tag">
    ${item.price.toFixed(2)}
  </p>
  
  <Link 
    to={`/buy/electronics`} 
    state={{ selectedId: item.id }} 
    className="buy-button"
  >
    Buy
  </Link>
</div>

              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No accessories found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;