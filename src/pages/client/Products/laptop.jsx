import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { laptops } from '../../../data/Products/laptopData'; 
import '../../../styles/laptop.css'; 

const LaptopPage = () => {
  const [filter, setFilter] = useState('All');

  // Filter logic based on the 'brand' property in your data
  const filteredLaptops = laptops ? laptops.filter(p => 
    p.subCategory === 'laptop' && (filter === 'All' || p.brand === filter)
  ) : [];

  // Brands updated to match your specific laptopData array
  const brands = ['All', 'Apple', 'Dell', 'HP', 'Lenovo', 'Microsoft', 'Razer', 'ASUS'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <div className="store-container">
      <header className="shop-header">
        <div className="header-content">
           <h1 className="shop-title">
             {filter === 'All' ? 'Shop All Laptops' : `Shop ${filter === 'Apple' ? 'Mac' : filter}`}
           </h1>
        </div>
      </header>

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

      <section className="product-selection">
        <div className="selection-intro">
          <h2><strong>Powerful Performance.</strong> Find your perfect fit.</h2>
        </div>

        <div className="horizontal-scroll-grid">
          {filteredLaptops.map((item) => (
            <div key={item.id} className="apple-card">
              {item.isNew && <span className="new-label">NEW</span>}
              
              <div className="card-top">
                <h3 className="card-product-name">{item.name}</h3>
                {/* Uses 'tagline' from your data, just like accessories */}
                <p className="card-subtitle">{item.tagline}</p>
              </div>

              <div className="card-image-wrapper">
                {/* Laptops look better with a slightly wider max-width than accessories */}
                <img src={item.image} alt={item.name} className="laptop-img" />
              </div>

           
             

             <div className="card-bottom">
  <div className="price-container">
    <p className="price-tag">
      From ${item.price.toLocaleString()} or ${Math.round(item.price / 12)}/mo.
    </p>
  </div>
  
  <Link 
    to={`/buy/laptops`} 
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

export default LaptopPage;