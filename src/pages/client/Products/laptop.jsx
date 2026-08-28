import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsBySubCategory } from '../../../API/products';
import '../../../styles/products/laptop.css';

const LaptopPage = () => {
  // CHANGED: Defaulting to 'All' to show every model on first load
  const [filter, setFilter] = useState('All');
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    getProductsBySubCategory('laptop').then(setLaptops).catch(() => setLaptops([]));
  }, []);

  // Filter logic based on the 'brand' property in your data
  const filteredLaptops = laptops ? laptops.filter(p =>
    p.subCategory === 'laptop' && (filter === 'All' || p.brand === filter)
  ) : [];

  const brands = ['All', 'Apple', 'Dell', 'HP', 'Lenovo', 'Microsoft', 'Razer', 'ASUS'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="laptop-page-container">
      <header className="laptop-shop-header">
        <div className="laptop-header-content">
           <h1 className="laptop-shop-title">
             {filter === 'All' ? 'Shop All Laptops' : `Shop ${filter === 'Apple' ? 'Mac' : filter}`}
           </h1>
        </div>
      </header>

      <nav className="laptop-local-sub-nav">
        <div className="laptop-sub-nav-wrapper">
          {brands.map(b => (
            <button 
              key={b} 
              className={filter === b ? 'laptop-nav-item active' : 'laptop-nav-item'} 
              onClick={() => setFilter(b)}
            >
              {b === 'All' ? 'All Models' : b === 'Apple' ? 'Mac' : b}
            </button>
          ))}
        </div>
      </nav>

      <section className="laptop-product-selection">
        <div className="laptop-selection-intro">
          
          {filter === 'Apple' ? (
            <h2><strong>Mac.</strong> Mind-blowing. Head-turning.</h2>
          ) : (
            <h2><strong>Powerful Performance.</strong> Find your perfect fit.</h2>
          )}
        </div>

        <div className="laptop-horizontal-scroll-grid">
          {filteredLaptops.map((item) => (
            <div key={item.id} className="laptop-apple-card">
              

              {item.isNew && <span className="laptop-new-label">New</span>}
              
              <div className="laptop-card-top">
                <h3 className="laptop-card-product-name">{item.name}</h3>
                <p className="laptop-card-subtitle">{item.tagline}</p>
              </div>

              <div className="laptop-card-image-wrapper">
                <img src={item.image} alt={item.name} className="laptop-img" />
              </div>

              <div className="laptop-card-bottom">
                <div className="laptop-price-container">
                  <p className="laptop-price-tag">
                    From ${item.price.toLocaleString()} or ${Math.round(item.price / 12)}/mo. for 12 mo.*
                  </p>
                </div>
                
                
                <div className="laptop-button-group">
                 
                  <Link 
                    to={`/product/${item.id}`} 
                    className="laptop-learn-more-button"
                  >
                    Learn more 
                  </Link>
                  <Link 
                    to={`/buy/laptops`} 
                    state={{ selectedId: item.id }} 
                    className="laptop-buy-button"
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

export default LaptopPage;