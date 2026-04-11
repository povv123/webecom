import React from 'react';
import { Link } from 'react-router-dom';
import { mobiles } from '../../../data/Products/mobilephoneData'; 
import { laptops } from '../../../data/Products/laptopData';
import { machineryProducts } from '../../../data/Products/machineryData';
import { homeFurniture } from '../../../data/Products/homefurdata';
import '../../../styles/products/Productsss.css'; 

// --- Custom Apple-Style SVG Icons (Monoline, clean, outline only) ---
const IconMobile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
    <path d="M12 18h.01"></path>
  </svg>
);

const IconLaptop = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M20 16V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11m16 0H4m16 0c.55 0 1 .45 1 1v1H3v-1c0-.55.45-1 1-1"></path>
  </svg>
);

const IconAccessories = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
);

const IconOffice = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M6 4h12a2 2 0 0 1 2 2v8H4V6a2 2 0 0 1 2-2z"></path>
    <path d="M4 14h16"></path>
    <path d="M12 14v8"></path>
    <path d="M8 22h8"></path>
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
    <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5z"></path>
    <path d="M4 18v2"></path>
    <path d="M20 18v2"></path>
    <path d="M12 11v5"></path>
  </svg>
);

const IconTools = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const IconMachinery = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
// -----------------------------------------------------------

const Products = () => {
  const shelfItems = [
    { name: "Mobile Phones", icon: <IconMobile />, path: "/products/electronics/mobile" },
    { name: "Laptops", icon: <IconLaptop />, path: "/products/electronics/laptops" },
    { name: "Accessories", icon: <IconAccessories />, path: "/products/electronics/accessories" },
    { name: "Office", icon: <IconOffice />, path: "/products/furniture/office" },
    { name: "Home", icon: <IconHome />, path: "/products/furniture/home" },
    { name: "Tools", icon: <IconTools />, path: "/products/industrial/machinetools" },
    { name: "Machinery", icon: <IconMachinery />, path: "/products/industrial/machinery" },
  ];

  
  // Logic to group products by category lines
  const featuredProducts = [
    ...(mobiles || []).filter(p => p.isNew).slice(0, 2),
    ...(laptops || []).filter(p => p.isNew).slice(0, 2),
    ...(machineryProducts || []).filter(p => p.isNew).slice(0, 2),
  ];

  const electronicsLine = [...(mobiles || []), ...(laptops || [])].slice(0, 6);
  const furnitureLine = [...(homeFurniture || [])].slice(0, 6);
  const machineryLine = [...(machineryProducts || [])].slice(0, 6);

  // Reusable Card Component to keep the code short
  const ProductCard = ({ item }) => (
    <article className="store-card">
      <div className="card-header">
        <p className="card-category-label">{item.brand} • {item.subCategory}</p>
        <h3 className="card-title">{item.name}</h3>
        <p className="card-tagline">{item.tagline}</p>
      </div>
      <div className="card-image-wrapper">
        <img src={item.image} alt={item.name} className="store-img" />
      </div>
      <div className="card-footer">
      <span className="card-price">From ${item.price.toLocaleString()}</span>
      
      {/* FIXED LINK */}
      <Link 
        to={`/buy/${item.category}`} 
        state={{ selectedId: item.id }} 
        className="buy-btn"
      >
        Buy
      </Link>
    </div>
    </article>
  );

  return (
    <div className="apple-store-page">
      <header className="store-hero">
        <div className="hero-content">
          <h1 className="hero-title">Store. <span>The best way to buy the products you love.</span></h1>
        </div>
      </header>

      <nav className="product-shelf">
        <div className="shelf-scroll">
          {shelfItems.map((item, i) => (
            <Link key={i} to={item.path} className="shelf-item">
              {/* Replaced emoji with the SVG icon */}
              <div className="shelf-icon-wrapper">{item.icon}</div>
              <span className="shelf-name">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="store-main-content">
        {/* LINE 1: LATEST */}
        <h2 className="grid-heading">The latest. <span>Take a look at what’s new.</span></h2>
        <div className="product-scroll-container">
          {featuredProducts.map(item => <ProductCard key={item.id} item={item} />)}
        </div>

        {/* LINE 2: ELECTRONICS */}
        <h2 className="grid-heading">Electronics. <span>Mobile & Laptops.</span></h2>
        <div className="product-scroll-container">
          {electronicsLine.map(item => <ProductCard key={item.id} item={item} />)}
        </div>

        {/* PROMO TILES */}
        <section className="shop-by-section">
          <div className="quick-category-grid">
             <div className="promo-card dark-theme">
                <h3>Industrial Machinery</h3>
                <p>Power for the toughest jobs.</p>
                <Link to="/products/industrial/machinery" className="btn-white">Shop Machinery</Link>
             </div>
             <div className="promo-card light-theme">
                <h3>Home Furnishings</h3>
                <p>Make yourself at home.</p>
                <Link to="/products/furniture/home" className="btn-blue">Explore Furniture</Link>
             </div>
          </div>
        </section>

        {/* LINE 3: FURNITURE */}
        <h2 className="grid-heading">Furniture. <span>Essentials for home & office.</span></h2>
        <div className="product-scroll-container">
          {furnitureLine.map(item => <ProductCard key={item.id} item={item} />)}
        </div>

        {/* LINE 4: INDUSTRIAL */}
        <h2 className="grid-heading">Machinery. <span>High-performance tools.</span></h2>
        <div className="product-scroll-container">
          {machineryLine.map(item => <ProductCard key={item.id} item={item} />)}
        </div>
      </main>
    </div>
  );
};

export default Products;