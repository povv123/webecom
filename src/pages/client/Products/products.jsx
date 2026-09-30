import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsBySubCategory } from '../../../API/products';
import '../../../styles/products/Productsss.css';

// --- Local product images (adjust the ../../../ depth if your file sits elsewhere) ---
import acerSwiftX from '../../../assets/images/Products/acer-swift-x.jpg';
import alienwareM18 from '../../../assets/images/Products/alienware-m18.jpg';
import galaxyS24Ultra from '../../../assets/images/Products/galaxy-s24-ultra.jpg';
import iphone16 from '../../../assets/images/Products/iphone_16__b6tkv86m2gc2_large_2x.jpg';
import iphone17 from '../../../assets/images/Products/iphone_17__fb1277oq3eaa_large_2x.jpg';
import iphone17e from '../../../assets/images/Products/iphone_17e__cq5ygzct314y_large_2x.jpg';
import iphone17Pro from '../../../assets/images/Products/iphone_17pro__t1j902iw6kya_large_2x.jpg';
import iphoneAir from '../../../assets/images/Products/iphone_air__b5qmgl05ojyq_large_2x.jpg';
import iphone15Pro from '../../../assets/images/Products/iphone-15-pro.jpg';
import iphoneProMaxUltra from '../../../assets/images/Products/iphone-pro-max-ultra.jpg';
import lgGram17 from '../../../assets/images/Products/lg-gram-17.jpg';
import macbookAirM3 from '../../../assets/images/Products/macbook-air-m3.jpg';
import msiStealth16 from '../../../assets/images/Products/msi-stealth-16.jpg';
import galaxyBook4 from '../../../assets/images/Products/samsung-galaxy-book4.jpg';

// --- Demo products shown until the database returns real data ---
// To add more later: import an image above, then add one line here.
const DEMO_MOBILES = [
  { id: 'demo-m1', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone 17 Pro', tagline: 'All-new pro performance.', price: 1199, image: iphone17Pro, isNew: true },
  { id: 'demo-m2', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone Air', tagline: 'Impossibly thin.', price: 999, image: iphoneAir, isNew: true },
  { id: 'demo-m3', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone 17', tagline: 'Brilliant in every way.', price: 799, image: iphone17 },
  { id: 'demo-m4', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone 17e', tagline: 'Essential, made better.', price: 599, image: iphone17e },
  { id: 'demo-m5', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone 16', tagline: 'Built for Apple Intelligence.', price: 699, image: iphone16 },
  { id: 'demo-m6', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone 15 Pro', tagline: 'Titanium. So strong.', price: 999, image: iphone15Pro },
  { id: 'demo-m7', brand: 'Apple', subCategory: 'Mobile', name: 'iPhone Pro Max Ultra', tagline: 'The biggest and best.', price: 1299, image: iphoneProMaxUltra },
  { id: 'demo-m8', brand: 'Samsung', subCategory: 'Mobile', name: 'Galaxy S24 Ultra', tagline: 'Epic in every way.', price: 1299, image: galaxyS24Ultra },
];

const DEMO_LAPTOPS = [
  { id: 'demo-l1', brand: 'Apple', subCategory: 'Laptop', name: 'MacBook Air M3', tagline: 'Lean. Mean. M3 machine.', price: 1099, image: macbookAirM3, isNew: true },
  { id: 'demo-l2', brand: 'Acer', subCategory: 'Laptop', name: 'Swift X', tagline: 'Creator power, portable.', price: 899, image: acerSwiftX, isNew: true },
  { id: 'demo-l3', brand: 'Alienware', subCategory: 'Laptop', name: 'Alienware m18', tagline: 'Desktop-class gaming.', price: 2499, image: alienwareM18 },
  { id: 'demo-l4', brand: 'LG', subCategory: 'Laptop', name: 'LG Gram 17', tagline: 'Big screen, light build.', price: 1599, image: lgGram17 },
  { id: 'demo-l5', brand: 'MSI', subCategory: 'Laptop', name: 'Stealth 16', tagline: 'Slim gaming powerhouse.', price: 1899, image: msiStealth16 },
  { id: 'demo-l6', brand: 'Samsung', subCategory: 'Laptop', name: 'Galaxy Book4', tagline: 'Everyday, connected.', price: 1049, image: galaxyBook4 },
];

// No product images yet for these; add items here later.
const DEMO_MACHINERY = [];
const DEMO_FURNITURE = [];

// --- Custom Apple-Style SVG Icons ---
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

// Decor / Furniture Accessories Icon (Minimalist Table Lamp)
const IconDecor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M9 18h6"></path>
    <path d="M12 18v-4"></path>
    <path d="M8 14h8l1-8H7l1 8z"></path>
    <path d="M12 3v3"></path>
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

// --- Product card (defined outside Products so it isn't re-created on every render) ---
const ProductCard = ({ item, categoryType }) => {
  const finalCategory = item.routeCategory || categoryType;

  return (
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
        <span className="card-price">From ${item.price?.toLocaleString()}</span>
        <Link
          to={`/buy/${finalCategory}`}
          state={{ selectedId: item.id }}
          className="buy-btn"
        >
          Buy
        </Link>
      </div>
    </article>
  );
};

const Products = () => {
  // Start with demo data so the page looks complete immediately
  const [mobiles, setMobiles] = useState(DEMO_MOBILES);
  const [laptops, setLaptops] = useState(DEMO_LAPTOPS);
  const [machineryProducts, setMachineryProducts] = useState(DEMO_MACHINERY);
  const [homeFurniture, setHomeFurniture] = useState(DEMO_FURNITURE);

  useEffect(() => {
    // Replace demo data only when the database returns real products
    const load = (subCategory, setter) =>
      getProductsBySubCategory(subCategory)
        .then(data => {
          if (Array.isArray(data) && data.length > 0) setter(data);
        })
        .catch(() => {}); // keep demo data on failure

    load('mobile', setMobiles);
    load('laptop', setLaptops);
    load('machinery', setMachineryProducts);
    load('home-furniture', setHomeFurniture);
  }, []);

  const shelfItems = [
    { name: "Mobile Phones", icon: <IconMobile />, path: "/products/electronics/mobile" },
    { name: "Laptops", icon: <IconLaptop />, path: "/products/electronics/laptops" },
    { name: "Accessories", icon: <IconAccessories />, path: "/products/electronics/accessories" },
    { name: "Office", icon: <IconOffice />, path: "/products/furniture/office" },
    { name: "Home", icon: <IconHome />, path: "/products/furniture/home" },
    { name: "Decor", icon: <IconDecor />, path: "/products/furniture/accessories" },
    { name: "Tools", icon: <IconTools />, path: "/products/industrial/machinetools" },
    { name: "Machinery", icon: <IconMachinery />, path: "/products/industrial/machinery" },
  ];

  const featuredProducts = [
    ...(mobiles || []).filter(p => p.isNew).slice(0, 2).map(p => ({ ...p, routeCategory: 'mobile' })),
    ...(laptops || []).filter(p => p.isNew).slice(0, 2).map(p => ({ ...p, routeCategory: 'laptops' })),
    ...(machineryProducts || []).filter(p => p.isNew).slice(0, 2).map(p => ({ ...p, routeCategory: 'machinery' })),
  ];

  const electronicsLine = [
    ...(mobiles || []).map(p => ({ ...p, routeCategory: 'mobile' })),
    ...(laptops || []).map(p => ({ ...p, routeCategory: 'laptops' })),
  ].slice(0, 6);

  const furnitureLine = [...(homeFurniture || [])].slice(0, 6);
  const machineryLine = [...(machineryProducts || [])].slice(0, 6);

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
              <div className="shelf-icon-wrapper">{item.icon}</div>
              <span className="shelf-name">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="store-main-content">

        <h2 className="grid-heading">The latest. <span>Take a look at what’s new.</span></h2>
        <div className="product-scroll-container">
          {featuredProducts.map(item => <ProductCard key={item.id} item={item} />)}
        </div>

        <h2 className="grid-heading">Electronics. <span>Mobile & Laptops.</span></h2>
        <div className="product-scroll-container">
          {electronicsLine.map(item => <ProductCard key={item.id} item={item} />)}
        </div>

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

        {furnitureLine.length > 0 && (
          <>
            <h2 className="grid-heading">Furniture. <span>Essentials for home & office.</span></h2>
            <div className="product-scroll-container">
              {furnitureLine.map(item => <ProductCard key={item.id} item={item} categoryType="home" />)}
            </div>
          </>
        )}

        {machineryLine.length > 0 && (
          <>
            <h2 className="grid-heading">Machinery. <span>High-performance tools.</span></h2>
            <div className="product-scroll-container">
              {machineryLine.map(item => <ProductCard key={item.id} item={item} categoryType="machinery" />)}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Products;