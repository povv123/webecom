import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// 1. Ensure your data file is renamed or updated accordingly
import { homeFurniture } from '../../../data/Products/homefurdata'; 
import '../../../styles/homefur.css'; 

const HomeFurniturePage = () => {
  const [filter, setFilter] = useState('All');

  // Filter based on 'home-furniture' subCategory and the 'type' field
  const filteredItems = homeFurniture ? homeFurniture.filter(p => 
    p.subCategory === 'home-furniture' && (filter === 'All' || p.type === filter)
  ) : [];

  // 2. Categories for a complete Home Furniture store
  const categories = [
    'All', 
    'Living Room', 
    'Bedroom', 
    'Dining', 
    'Storage', 
    'Decor'
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
             {filter === 'All' ? 'Shop Furniture' : `Shop ${filter}`}
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
          <h2><strong>Make yourself at home.</strong> Beautifully crafted for every room.</h2>
        </div>

        <div className="horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="apple-card">
                {item.isNew && <span className="new-label">NEW COLLECTION</span>}
                
                <div className="card-top">
                  <h3 className="card-product-name">{item.name}</h3>
                  <p className="card-subtitle">{item.tagline || item.dimensions}</p>
                </div>

                <div className="card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '200px', objectFit: 'contain' }} 
                  />
                </div>

               <div className="card-bottom">
  <div className="price-container">
    <p className="price-tag">
      ${item.price.toLocaleString()}
    </p>
    {item.price > 500 && (
      <p className="monthly-tag">As low as ${Math.round(item.price / 24)}/mo.</p>
    )}
  </div>
  

  <Link 
    to={`/buy/home`} 
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
              <p>No furniture items found in the {filter} category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeFurniturePage;