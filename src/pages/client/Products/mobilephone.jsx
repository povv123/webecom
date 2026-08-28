import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mobiles } from '../../../data/Products/mobilephoneData'; 
import '../../../styles/products/Phone.css'; 

const MobilePhonePage = () => {
  // Defaulting to 'All' to show every model on first load
  const [filter, setFilter] = useState('All');

  // Filter logic based on the 'brand' property in your data
  const filteredMobiles = mobiles ? mobiles.filter(p => 
    p.subCategory === 'mobile' && (filter === 'All' || p.brand === filter)
  ) : [];

  const brands = ['All', 'Apple', 'Samsung', 'Google', 'OnePlus'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="phon-page-container">
      <header className="phon-shop-header">
        <div className="phon-header-content text-center">
           <h1 className="phon-shop-title">
             {filter === 'All' ? 'Shop All Phones' : `Shop ${filter === 'Apple' ? 'iPhone' : filter}`}
           </h1>
        </div>
      </header>

      <nav className="phon-local-sub-nav">
        <div className="phon-sub-nav-wrapper">
          {brands.map(b => (
            <button 
              key={b} 
              className={filter === b ? 'phon-nav-item active' : 'phon-nav-item'} 
              onClick={() => setFilter(b)}
            >
              {b === 'All' ? 'All Models' : b === 'Apple' ? 'iPhone' : b}
            </button>
          ))}
        </div>
      </nav>

      <section className="phon-product-selection">
        <div className="phon-selection-intro text-center">
          {/* Brand-specific marketing copy */}
          {filter === 'Apple' ? (
            <h2><strong>iPhone.</strong> Forged in titanium.</h2>
          ) : filter === 'Samsung' ? (
            <h2><strong>Galaxy.</strong> Epic in every way.</h2>
          ) : (
            <h2><strong>Premium Performance.</strong> Find your perfect fit in Cambodia.</h2>
          )}
        </div>

        <div className="phon-horizontal-scroll-grid">
          {filteredMobiles.map((item) => (
            <div key={item.id} className="phon-apple-card">
              {item.isNew && <span className="phon-new-label">New Arrival</span>}
              
              <div className="phon-card-top">
                <h3 className="phon-card-product-name">{item.name}</h3>
                <p className="phon-card-subtitle">Official {item.brand} Cambodia Warranty.</p>
              </div>

              <div className="phon-card-image-wrapper">
                <img src={item.image} alt={item.name} className="phon-img" />
              </div>

              <div className="phon-card-bottom">
                <div className="phon-price-container">
                  <p className="phon-price-tag">
                    From ${item.price.toLocaleString()} or approx. ${Math.round(item.price / 12)}/mo. for 12 mo.*
                  </p>
                </div>
                
              
                <div className="phon-button-group">
                  {/* UPDATED: Link routes to the universal /product/:id page */}
                  <Link 
                    to={`/product/${item.id}`} 
                    className="phon-learn-more-button"
                  >
                    Learn more 
                  </Link>
                  <Link 
                    to={`/buy/mobile`} 
                    state={{ selectedId: item.id }} 
                    className="phon-buy-button"
                  >
                    Buy {'>'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
   
    </div>
  );
};

export default MobilePhonePage;