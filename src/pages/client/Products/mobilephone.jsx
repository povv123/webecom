import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsBySubCategory } from '../../../API/products';
import '../../../styles/products/Phone.css';

// --- Local phone images (adjust the ../../../ depth if your file sits elsewhere) ---
import galaxyS24Ultra from '../../../assets/images/Products/galaxy-s24-ultra.jpg';
import iphone16 from '../../../assets/images/Products/iphone_16__b6tkv86m2gc2_large_2x.jpg';
import iphone17 from '../../../assets/images/Products/iphone_17__fb1277oq3eaa_large_2x.jpg';
import iphone17e from '../../../assets/images/Products/iphone_17e__cq5ygzct314y_large_2x.jpg';
import iphone17Pro from '../../../assets/images/Products/iphone_17pro__t1j902iw6kya_large_2x.jpg';
import iphoneAir from '../../../assets/images/Products/iphone_air__b5qmgl05ojyq_large_2x.jpg';
import iphone15Pro from '../../../assets/images/Products/iphone-15-pro.jpg';
import iphoneProMaxUltra from '../../../assets/images/Products/iphone-pro-max-ultra.jpg';

// --- Demo phones shown until the database returns real data ---
// To add more later: import an image above, then add one line here.
const DEMO_MOBILES = [
  { id: 'demo-m1', brand: 'Apple', subCategory: 'mobile', name: 'iPhone 17 Pro', tagline: 'All-new pro performance.', price: 1199, image: iphone17Pro, isNew: true },
  { id: 'demo-m2', brand: 'Apple', subCategory: 'mobile', name: 'iPhone Air', tagline: 'Impossibly thin.', price: 999, image: iphoneAir, isNew: true },
  { id: 'demo-m3', brand: 'Apple', subCategory: 'mobile', name: 'iPhone 17', tagline: 'Brilliant in every way.', price: 799, image: iphone17 },
  { id: 'demo-m4', brand: 'Apple', subCategory: 'mobile', name: 'iPhone 17e', tagline: 'Essential, made better.', price: 599, image: iphone17e },
  { id: 'demo-m5', brand: 'Apple', subCategory: 'mobile', name: 'iPhone 16', tagline: 'Built for Apple Intelligence.', price: 699, image: iphone16 },
  { id: 'demo-m6', brand: 'Apple', subCategory: 'mobile', name: 'iPhone 15 Pro', tagline: 'Titanium. So strong.', price: 999, image: iphone15Pro },
  { id: 'demo-m7', brand: 'Apple', subCategory: 'mobile', name: 'iPhone Pro Max Ultra', tagline: 'The biggest and best.', price: 1299, image: iphoneProMaxUltra },
  { id: 'demo-m8', brand: 'Samsung', subCategory: 'mobile', name: 'Galaxy S24 Ultra', tagline: 'Epic in every way.', price: 1299, image: galaxyS24Ultra },
];

const MobilePhonePage = () => {
  // Defaulting to 'All' to show every model on first load
  const [filter, setFilter] = useState('All');
  // Start with demo data so the page looks complete immediately
  const [mobiles, setMobiles] = useState(DEMO_MOBILES);

  useEffect(() => {
    // Replace demo data only when the database returns real products
    getProductsBySubCategory('mobile')
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setMobiles(data);
      })
      .catch(() => {}); // keep demo data on failure
  }, []);

  // Filter logic based on the 'brand' property in your data
  const filteredMobiles = (mobiles || []).filter(p =>
    p.subCategory === 'mobile' && (filter === 'All' || p.brand === filter)
  );

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
          {filteredMobiles.length === 0 && (
            <p className="phon-empty-message">No phones found for this brand yet.</p>
          )}

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
                    From ${item.price?.toLocaleString()} or approx. ${Math.round((item.price || 0) / 12)}/mo. for 12 mo.*
                  </p>
                </div>

                <div className="phon-button-group">
                  {/* Link routes to the universal /product/:id page */}
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