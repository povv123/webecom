import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// 1. Update the import to your furniture data file
import { furnitureItems } from '../../../data/Products/officefurnitureData'; 
import '../../../styles/accessories.css'; 

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
    <div className="store-container">
      {/* 1. Page Header */}
      <header className="shop-header">
        <div className="header-content">
           <h1 className="shop-title">
             {filter === 'All' ? 'Shop Furnitures' : `Shop ${filter}`}
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
              {cat === 'All' ? 'All Furniture' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Product Selection Section */}
      <section className="product-selection">
        <div className="selection-intro">
          <h2><strong>Build your dream office.</strong> Comfort meets productivity.</h2>
        </div>

        <div className="horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="apple-card">
                {item.isNew && <span className="new-label">NEW ARRIVAL</span>}
                
                <div className="card-top">
                  <h3 className="card-product-name">{item.name}</h3>
                  <p className="card-subtitle">{item.tagline || item.material}</p>
                </div>

                <div className="card-image-wrapper">
                  {/* Furniture images usually look better slightly larger */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '180px', objectFit: 'contain' }} 
                  />
                </div>
                    <div className="card-bottom">
  <div className="price-container">
    <p className="price-tag">
      ${item.price.toLocaleString()}
    </p>
  </div>

  <Link 
    to={`/buy/office`} 
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
              <p>No furniture items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OfficeFurniturePage;