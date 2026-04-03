import React from 'react';
import { Link } from 'react-router-dom';
import { mobiles } from '../../../data/Products/mobilephoneData'; 
import { laptops } from '../../../data/Products/laptopData';
import { machineryProducts } from '../../../data/Products/machineryData';
import { homeFurniture } from '../../../data/Products/homefurdata';
import '../../../styles/products/Productsss.css'; 


const Products = () => {
  const shelfItems = [
    { name: "Mobile Phones", img: "📱", path: "/products/electronics/mobile" },
    { name: "Laptops", img: "💻", path: "/products/electronics/laptops" },
    { name: "Electronics Accessories", img: "🔌", path: "/products/electronics/accessories" },
    { name: "Office Furniture", img: "🪑", path: "/products/furniture/office" },
    { name: "Home Furniture", img: "🛋️", path: "/products/furniture/home" },
    { name: "Tools", img: "🛠️", path: "/products/industrial/machinetools" },
    { name: "Machinery", img: "⚙️", path: "/products/industrial/machinery" },
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
      
      {/* FIXED LINK: 
          - Points to the category engine (e.g., /buy/mobile)
          - Sends the specific ID so the Buy Page auto-selects this exact item
      */}
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
              <div className="shelf-icon-wrapper"><span>{item.img}</span></div>
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