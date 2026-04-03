import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mobiles } from '../../../data/Products/mobilephoneData'; 
import '../../../styles/products/Phone.css'; 

const MobilePhonePage = () => {
  const [filter, setFilter] = useState('All');

  const filteredMobiles = mobiles ? mobiles.filter(p => 
    p.subCategory === 'mobile' && (filter === 'All' || p.brand === filter)
  ) : [];

  const brands = ['All Models', 'Apple', 'Samsung', 'Google', 'OnePlus'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="store-container">
      {/* Secondary Local Nav */}
      <nav className="local-sub-nav">
        <div className="sub-nav-wrapper">
          {brands.map(b => (
            <button 
              key={b} 
              className={filter === (b === 'All Models' ? 'All' : b) ? 'nav-item active' : 'nav-item'} 
              onClick={() => setFilter(b === 'All Models' ? 'All' : b)}
            >
              {b}
            </button>
          ))}
        </div>
      </nav>

      <header className="shop-header">
        <div className="header-content text-center">
          <h1 className="shop-title">
            {filter === 'All' ? 'All models.' : filter} <span className="text-secondary">Take your pick.</span>
          </h1>
        </div>
      </header>

      <section className="product-selection">
        <div className="product-grid">
          {filteredMobiles.map((item) => (
            <div key={item.id} className="product-card-neo">
              {/* Product Image */}
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Text Content */}
              <div className="card-body-neo">
                {item.isNew && <span className="new-label">New</span>}
                <h3 className="card-product-name">{item.name}</h3>
                <p className="card-tagline">The power of {item.brand} in your pocket.</p>
                
                <div className="price-info">
                  <p className="price-main">From ${item.price} or ${Math.round(item.price / 12)}/mo.</p>
                  <p className="price-sub text-xs">for 12 mo.*</p>
                </div>
              </div>

              {/* Footer Actions: Pill Button + Buy Link */}
              <div className="card-footer-neo">
                <Link to={`/products/item/${item.id}`} className="learn-more-btn">
                  Learn more
                </Link>
                <Link 
                  to={`/buy/mobile`} 
                  state={{ selectedId: item.id }} 
                  className="buy-link-blue"
                >
                  Buy {'>'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobilePhonePage;