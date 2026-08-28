import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { machineryProducts } from '../../../data/Products/machineryData'; 
import '../../../styles/products/machine.css'; 

const MachineryPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = machineryProducts ? machineryProducts.filter(p => 
    p.subCategory === 'machinery' && (filter === 'All' || p.type === filter)
  ) : [];


  const categories = [
    'All', 
    'Excavators', 
    'Wheel Loaders', 
    'Forklifts', 
    'Generators', 
    'Industrial Lathes',
    'Electronic Machines' 
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="machie-store-container">
      {/* 1. Page Header */}
      <header className="machie-shop-header">
        <div className="machie-header-content">
          <h1 className="machie-shop-title">
            {filter === 'All' ? 'Shop Machinery' : `Shop ${filter}`}
          </h1>
        </div>
      </header>

      {/* 2. Heavy Navigation */}
      <nav className="machie-local-sub-nav">
        <div className="machie-sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'machie-nav-item active' : 'machie-nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Equipment' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Machinery Selection Section */}
      <section className="machie-product-selection">
        <div className="machie-selection-intro">
          {/* Updated text to encompass electronic machines */}
          <h2><strong>Power on demand.</strong> Heavy mechanical and electronic machines engineered for industrial scale.</h2>
        </div>

        <div className="machie-horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="machie-apple-card">
                
                <div className="machie-card-top">
                  {item.isNew && <span className="machie-new-label">New Gen</span>}
                  <h3 className="machie-card-product-name">{item.name}</h3>
                  <p className="machie-card-subtitle">{item.tagline || item.brand}</p>
                </div>
                
                <div className="machie-card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ maxHeight: '180px', objectFit: 'contain' }}
                  />
                </div>
                
                <div className="machie-card-bottom">
                  <div className="machie-price-container">
                    <p className="machie-price-tag">${item.price.toLocaleString()}</p>
                    <p className="machie-monthly-tag">
                      Business Lease: ${Math.round(item.price / 60)}/mo.
                    </p>
                  </div>
                  
                  {/* NEW: Button Group for Learn More & Buy */}
                  <div className="machie-button-group">
                    <Link 
                      to={`/product/${item.id}`} 
                      className="machie-learn-more-button"
                    >
                      Learn more 
                    </Link>
                    <Link 
                      to={`/buy/machinery`} 
                      state={{ selectedId: item.id }} 
                      className="machie-buy-button"
                    >
                      Buy  {'>'}
                    </Link>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="machie-no-results">
              <p>No machinery found for "{filter}".</p>
              <p style={{ fontSize: '12px', color: '#86868b' }}>
                Ensure your data file uses <strong>subCategory: "machinery"</strong> and matches the category exact spelling.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MachineryPage;