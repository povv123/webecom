import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// 1. Updated to import machineryProducts
import { machineryProducts } from '../../../data/Products/machineryData'; 
import '../../../styles/products/machinetools.css'; 

const MachineryPage = () => {
  const [filter, setFilter] = useState('All');

  /**
   * FILTER LOGIC
   * 1. Targets 'machinery' subCategory.
   * 2. Matches the industrial type selected via the nav buttons.
   */
  const filteredItems = machineryProducts ? machineryProducts.filter(p => 
    p.subCategory === 'machinery' && (filter === 'All' || p.type === filter)
  ) : [];

  // 2. Heavy Machinery specific categories
  const categories = [
    'All', 
    'Excavators', 
    'Wheel Loaders', 
    'Forklifts', 
    'Generators', 
    'Industrial Lathes'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="store-container machinery-theme">
      {/* 1. Page Header */}
      <header className="shop-header">
        <div className="header-content">
          <h1 className="shop-title">
            {filter === 'All' ? 'Shop Machinery' : `Shop ${filter}`}
          </h1>
        
        </div>
      </header>

      {/* 2. Heavy Navigation */}
      <nav className="local-sub-nav">
        <div className="sub-nav-wrapper">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'nav-item active' : 'nav-item'} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Equipment' : cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Machinery Selection Section */}
      <section className="product-selection">
        <div className="selection-intro">
          <h2><strong>Power on demand.</strong> Engineered for industrial scale.</h2>
        </div>

        <div className="horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="apple-card">
                <div className="card-top">
                  {item.isNew && <span className="new-label">NEW GEN</span>}
                  <h3 className="card-product-name">{item.name}</h3>
                  <p className="card-subtitle">{item.tagline || item.brand}</p>
                </div>
                
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                
               <div className="card-bottom">
  <div className="price-container">
    <p className="price-tag">${item.price.toLocaleString()}</p>
    <p className="monthly-tag">
      Business Lease: ${Math.round(item.price / 60)}/mo.
    </p>
  </div>
  
  {/* UPDATE: Route to /buy/machinery and pass the item ID for auto-selection */}
  <Link 
    to={`/buy/machinery`} 
    state={{ selectedId: item.id }} 
    className="buy-button"
  >
    Buy
  </Link>
</div>
              </div>
            ))
          ) : (
            <div className="no-results" style={{ textAlign: 'center', width: '100%', padding: '50px' }}>
              <p>No heavy machinery found for "{filter}".</p>
              <p style={{ fontSize: '12px', color: '#86868b' }}>
                Ensure your data file uses <strong>subCategory: "machinery"</strong>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MachineryPage;