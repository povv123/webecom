import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mobiles } from '../../../data/Products/mobilephoneData'; 
import '../../../styles/Phone.css'; 

const MobilePhonePage = () => {
  const [filter, setFilter] = useState('All');

  // Filter based on the 'mobile' subCategory and brand selection
  const filteredMobiles = mobiles ? mobiles.filter(p => 
    p.subCategory === 'mobile' && (filter === 'All' || p.brand === filter)
  ) : [];

  const brands = ['All', 'Apple', 'Samsung', 'Google', 'OnePlus'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="store-container">
      {/* 1. Global Nav Placeholder (Top links like Mac, iPad, iPhone) */}
      <nav className="apple-global-nav">
        {/* You can map through your categories here */}
      </nav>

      {/* 2. Page Header */}
      <header className="shop-header">
        <div className="header-content">
         <h1 className="shop-title">
      {filter === 'All' ? 'Shop SmartPhone' : `Shop ${filter === 'Apple' ? 'Mac' : filter}`}
    </h1>

        </div>
      </header>

      {/* 3. Secondary Local Nav (Sub-categories) */}
      <nav className="local-sub-nav">
        <div className="sub-nav-wrapper">
          {brands.map(b => (
            <button 
              key={b} 
              className={filter === b ? 'nav-item active' : 'nav-item'} 
              onClick={() => setFilter(b)}
            >
              {b === 'All' ? 'All Models' : b}
            </button>
          ))}
          
        </div>
      </nav>

      {/* 4. Product Selection Section */}
      <section className="product-selection">
        <div className="selection-intro">
          <h2><strong>All models.</strong> Take your pick.</h2>
        </div>

        <div className="horizontal-scroll-grid">
          {filteredMobiles.map((item) => (
            <div key={item.id} className="apple-card">
              {item.isNew && <span className="new-label">NEW</span>}
              
              <div className="card-top">
                <h3 className="card-product-name">{item.name}</h3>
              </div>

              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Color dots placeholder */}
         
<div className="card-bottom">
  <div className="price-container">
    <p className="price-tag">
      From ${item.price} or ${Math.round(item.price / 24)}/mo. for 24 mo.
    </p>
  </div>
  
  <Link 
    to={`/buy/mobile`} 
    state={{ selectedId: item.id }} 
    className="buy-button"
  >
    Buy
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