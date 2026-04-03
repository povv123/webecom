import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { machineTools } from '../../../data/Products/machineToolData'; 
import '../../../styles/machinetools.css'; 

const Machintools = () => {
  const [filter, setFilter] = useState('All');

  // Logic: Check subCategory AND the active tab filter
  const filteredItems = machineTools ? machineTools.filter(p => 
    p.subCategory === 'precision-tool' && (filter === 'All' || p.type === filter)
  ) : [];

  const categories = ['All', 'Lathes', 'Milling Machines', 'CNC Routers', 'Grinders'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="store-container">
      <header className="shop-header">
        <div className="header-content">
          <h1 className="shop-title">{filter === 'All' ? 'Shop Tools' : `Shop ${filter}`}</h1>
       
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
              {cat === 'All' ? 'All Tools' : cat}
            </button>
          ))}
        </div>
      </nav>

      <section className="product-selection">
        <div className="horizontal-scroll-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="apple-card">
                <div className="card-top">
                  <h3 className="card-product-name">{item.name}</h3>
                  <p className="card-subtitle">{item.tagline}</p>
                </div>
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-bottom">
  <div className="price-container">
    <p className="price-tag">${item.price.toLocaleString()}</p>
    {/* Optional: Add industrial lead time or financing */}
    <p className="monthly-tag" style={{ fontSize: '12px', color: '#86868b' }}>
      Industrial financing available.
    </p>
  </div>
  <Link 
    to={`/buy/tools`} 
    state={{ selectedId: item.id }} 
    className="buy-button"
  >
    Buy
  </Link>
</div>
              </div>
            ))
          ) : (
            <div className="no-results">No machinery found. Check subCategory in data.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Machintools;