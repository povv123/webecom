import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { allProductsData } from '../../../data/allProductsData'; 


const BuyPage = () => {
  const { categoryId } = useParams(); 
  
  // Memoize the data lookup to fix the ESLint dependency warning
  const categoryProducts = useMemo(() => {
    return allProductsData[categoryId] || [];
  }, [categoryId]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Update selected product when category changes or page loads
  useEffect(() => {
    if (categoryProducts.length > 0) {
      setSelectedProduct(categoryProducts[0]);
      window.scrollTo(0, 0); // Smooth scroll to top on category change
    }
  }, [categoryProducts]);

  if (!selectedProduct) {
    return (
      <div className="loading-container">
        <p>Loading your selections...</p>
      </div>
    );
  }

  return (
    <div className="apple-buy-container">
      {/* 1. Sticky Top Bar */}
      <nav className="buy-nav">
        <div className="nav-content">
          <span className="product-name-nav">{selectedProduct.name}</span>
          <div className="nav-right">
            <span className="nav-price">From ${selectedProduct.price}</span>
            <button className="buy-btn-small">Buy</button>
          </div>
        </div>
      </nav>

      <div className="buy-main-grid">
        {/* 2. Left Column: Sticky Product Image */}
        <div className="image-column">
          <div className="sticky-wrapper">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="main-product-img" 
            />
          </div>
        </div>

        {/* 3. Right Column: Selection Logic */}
        <div className="options-column">
          <header className="buy-header">
            <span className="new-badge">New</span>
            <h1 className="buy-title">Buy {selectedProduct.name}</h1>
            <p className="delivery-info">Get superfast, free delivery on your order.</p>
          </header>
          
          <section className="selection-group">
            <h3>Model. <span className="light-text">Which is best for you?</span></h3>
            <div className="card-list">
              {categoryProducts.map((item) => (
                <button 
                  key={item.id} 
                  className={`option-card ${selectedProduct.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedProduct(item)}
                >
                  <div className="card-content">
                    <div className="card-info">
                      <span className="name">{item.name}</span>
                      <span className="desc">{item.description || 'Professional Grade'}</span>
                    </div>
                    <span className="price">${item.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Bottom Summary Bar (Mobile Optimized) */}
          <div className="summary-section">
            <div className="summary-box">
              <h2>Total: ${selectedProduct.price}</h2>
              <button className="apple-btn-primary">Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;