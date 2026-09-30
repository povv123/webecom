import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsBySubCategory } from '../../../API/products';
import '../../../styles/products/laptop.css';

// --- Local laptop images (adjust the ../../../ depth if your file sits elsewhere) ---
import acerSwiftX from '../../../assets/images/Products/acer-swift-x.jpg';
import alienwareM18 from '../../../assets/images/Products/alienware-m18.jpg';
import lgGram17 from '../../../assets/images/Products/lg-gram-17.jpg';
import macbookAirM3 from '../../../assets/images/Products/macbook-air-m3.jpg';
import msiStealth16 from '../../../assets/images/Products/msi-stealth-16.jpg';
import galaxyBook4 from '../../../assets/images/Products/samsung-galaxy-book4.jpg';

// --- Demo laptops shown until the database returns real data ---
// To add more later: import an image above, then add one line here.
const DEMO_LAPTOPS = [
  { id: 'demo-l1', brand: 'Apple', subCategory: 'laptop', name: 'MacBook Air M3', tagline: 'Lean. Mean. M3 machine.', price: 1099, image: macbookAirM3, isNew: true },
  { id: 'demo-l2', brand: 'Acer', subCategory: 'laptop', name: 'Swift X', tagline: 'Creator power, portable.', price: 899, image: acerSwiftX, isNew: true },
  { id: 'demo-l3', brand: 'Alienware', subCategory: 'laptop', name: 'Alienware m18', tagline: 'Desktop-class gaming.', price: 2499, image: alienwareM18 },
  { id: 'demo-l4', brand: 'LG', subCategory: 'laptop', name: 'LG Gram 17', tagline: 'Big screen, light build.', price: 1599, image: lgGram17 },
  { id: 'demo-l5', brand: 'MSI', subCategory: 'laptop', name: 'Stealth 16', tagline: 'Slim gaming powerhouse.', price: 1899, image: msiStealth16 },
  { id: 'demo-l6', brand: 'Samsung', subCategory: 'laptop', name: 'Galaxy Book4', tagline: 'Everyday, connected.', price: 1049, image: galaxyBook4 },
];

const LaptopPage = () => {
  // Defaulting to 'All' to show every model on first load
  const [filter, setFilter] = useState('All');
  // Start with demo data so the page looks complete immediately
  const [laptops, setLaptops] = useState(DEMO_LAPTOPS);

  useEffect(() => {
    // Replace demo data only when the database returns real products
    getProductsBySubCategory('laptop')
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setLaptops(data);
      })
      .catch(() => {}); // keep demo data on failure
  }, []);

  // Filter logic based on the 'brand' property in your data
  const filteredLaptops = (laptops || []).filter(p =>
    p.subCategory === 'laptop' && (filter === 'All' || p.brand === filter)
  );

  // Includes the demo brands plus your original ones
  const brands = ['All', 'Apple', 'Acer', 'Alienware', 'LG', 'MSI', 'Samsung', 'Dell', 'HP', 'Lenovo', 'Microsoft', 'Razer', 'ASUS'];

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
          {filteredLaptops.length === 0 && (
            <p className="laptop-empty-message">No laptops found for this brand yet.</p>
          )}

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
                    From ${item.price?.toLocaleString()} or ${Math.round((item.price || 0) / 12)}/mo. for 12 mo.*
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