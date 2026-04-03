import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* SECTION 1: MAIN HERO (Electronics) */}
      <section className="hero-section main-hero">
        <div className="hero-content">
          <h1 className="hero-title">iPhone 15 Pro</h1>
          <h2 className="hero-subtitle">Titanium. So strong. So light. So Pro.</h2>
          <div className="hero-cta">
            <Link to="/products/electronics/mobile" className="btn-link">Learn more &gt;</Link>
            <Link to="/products/buy/iphone-15-pro" className="btn-buy">Buy</Link>
          </div>
        </div>
        <div className="hero-image-box">
          <img src="/assets/images/iphone-hero.png" alt="iPhone 15 Pro" />
        </div>
      </section>

      {/* SECTION 2: INDUSTRIAL HERO (Machinery) */}
      <section className="hero-section machinery-hero">
        <div className="hero-content">
          <h1 className="hero-title">Industrial Power.</h1>
          <h2 className="hero-subtitle">High-performance machinery for the bold.</h2>
          <div className="hero-cta">
            <Link to="/products/industrial/machinery" className="btn-link">Explore Fleet &gt;</Link>
          </div>
        </div>
        <div className="hero-image-box">
          <img src="/assets/images/machinery-hero.png" alt="Heavy Machinery" />
        </div>
      </section>

      {/* SECTION 3: 2-UP GRID (Furniture & Accessories) */}
      <div className="home-grid">
        <div className="grid-item furniture-box">
          <div className="grid-content">
            <h3>Home Office</h3>
            <p>Work in comfort. Design for focus.</p>
            <Link to="/products/furniture/office" className="btn-link">Shop Furniture &gt;</Link>
          </div>
        </div>
        
        <div className="grid-item tech-box">
          <div className="grid-content">
            <h3>Laptops</h3>
            <p>Mind-blowing. Head-turning.</p>
            <Link to="/products/electronics/laptops" className="btn-link">Learn more &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;