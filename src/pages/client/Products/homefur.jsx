import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsBySubCategory } from '../../../API/products';
import '../../../styles/products/homefur.css';

const HomeFurniturePage = () => {
  const [filter, setFilter] = useState('All');
  const [homeFurniture, setHomeFurniture] = useState([]);

  useEffect(() => {
    getProductsBySubCategory('home-furniture').then(setHomeFurniture).catch(() => setHomeFurniture([]));
  }, []);

  // Filter based on 'home-furniture' subCategory and the 'type' field
  const filteredItems = homeFurniture ? homeFurniture.filter(p =>
    p.subCategory === 'home-furniture' && (filter === 'All' || p.type === filter)
  ) : [];

  // Categories for a complete Home Furniture store
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
    <div className="fhome-store-container">
      {/* Page Header */}
      <header className="fhome-shop-header">
        <div className="fhome-header-content">
           <h1 className="fhome-shop-title">
             {filter === 'All' ? 'Shop Furniture' : `Shop ${filter}`}
           </h1>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="fhome-local-sub-nav">
        <div className="fhome-sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'fhome-nav-item active' : 'fhome-nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Furniture' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Product Selection Section */}
      <section className="fhome-product-selection">
        <div className="fhome-selection-intro">
          <h2><strong>Make yourself at home.</strong> Beautifully crafted for every room.</h2>
        </div>

        <div className="fhome-horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="fhome-apple-card">
                {item.isNew && <span className="fhome-new-label">New Collection</span>}
                
                <div className="fhome-card-top">
                  <h3 className="fhome-card-product-name">{item.name}</h3>
                  <p className="fhome-card-subtitle">{item.tagline || item.dimensions}</p>
                </div>

                <div className="fhome-card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '200px', objectFit: 'contain' }} 
                  />
                </div>

                <div className="fhome-card-bottom">
                  <div className="fhome-price-container">
                    <p className="fhome-price-tag">
                      ${item.price.toLocaleString()}
                    </p>
                    {item.price > 500 && (
                      <p className="fhome-monthly-tag">As low as ${Math.round(item.price / 24)}/mo.</p>
                    )}
                  </div>
                  
                  {/* Button Group for Learn More & Buy */}
                  <div className="fhome-button-group">
                    <Link 
                      to={`/product/${item.id}`} 
                      className="fhome-learn-more-button"
                    >
                      Learn more 
                    </Link>
                    <Link 
                      to={`/buy/home`} 
                      state={{ selectedId: item.id }} 
                      className="fhome-buy-button"
                    >
                      Buy {'>'}
                    </Link>
                  </div>
                  
                </div>
              </div>
            ))
          ) : (
            <div className="fhome-no-results">
              <p>No furniture items found in the {filter} category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeFurniturePage;