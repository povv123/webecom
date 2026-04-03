import React from 'react';
import { useParams, Link } from 'react-router-dom';


const ProductOverview = () => {
  const { productId } = useParams();

  // In a real app, you would fetch(productId) here
  const product = {
    name: "iPhone 15 Pro",
    slogan: "Titanium. So strong. So light. So Pro.",
    description: "The first iPhone with an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.",
    image: "/images/products/iphone-hero.jpg"
  };

  return (
    <div className="product-overview">
      {/* Sticky Sub-Nav */}
      <nav className="product-local-nav">
        <div className="nav-content">
          <h2>{product.name}</h2>
          <div className="nav-links">
            <Link to="#" className="active">Overview</Link>
            <Link to={`/products/detail/${productId}`}>Tech Specs</Link>
            <Link to={`/products/buy/${productId}`} className="buy-btn-small">Buy</Link>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <p className="eyebrow">New</p>
        <h1>{product.name}</h1>
        <p className="slogan">{product.slogan}</p>
        <div className="hero-image">
          <img src={product.image} alt={product.name} />
        </div>
      </section>

      <section className="feature-highlight">
        <div className="feature-text">
          <h2>Forged in titanium.</h2>
          <p>{product.description}</p>
        </div>
      </section>
    </div>
  );
};

export default ProductOverview;