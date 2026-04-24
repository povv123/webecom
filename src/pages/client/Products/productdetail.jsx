import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProductsData } from '../../../data/allProductsData'; 
import '../../../styles/products/ProductDetail.css'; 

const allProducts = Object.values(allProductsData).flat().filter(Boolean);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('Default');

  useEffect(() => {


    const currentProduct = allProducts.find(p => p.id.toString() === id);
    setProduct(currentProduct);

   
    if (currentProduct) {
      const related = allProducts.filter(
        p => p.subCategory === currentProduct.subCategory && p.id !== currentProduct.id
      );
      setComparedProducts(related.slice(0, 4));
    }
    
    // Reset scroll position on load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return <div className="prdss-loading">Loading product details...</div>;
  }

  // Handle Comparison Sorting
  const sortedComparisons = [...comparedProducts].sort((a, b) => {
    if (sortOrder === 'Price: Low to High') return a.price - b.price;
    if (sortOrder === 'Price: High to Low') return b.price - a.price;
    return 0; 
  });

  const sortOptions = ['Default', 'Price: Low to High', 'Price: High to Low'];


  const getBuyRoute = (subCategory) => {
    switch (subCategory) {
      case 'mobile': return 'mobile';
      case 'laptop': return 'laptops';
      case 'accessory': return 'electronics'; 
      case 'furnishing-accessory': return 'furnitureacc';
      case 'furniture': return 'office'; 
      case 'home-furniture': return 'home';
      case 'machinery': return 'machinery';
      case 'precision-tool': return 'tools';
      default: return subCategory; 
    }
  };

  return (
    <div className="prdss-layout">
  
      <section className="prdss-hero-section">
         <div className="prdss-hero-text">
            {product.isNew && <span className="prdss-hero-new">New</span>}
            <h1 className="prdss-hero-title">{product.name}</h1>
            <p className="prdss-hero-tagline">{product.tagline || 'Supercharged.'}</p>
            <p className="prdss-hero-price">
              From {product.price.toLocaleString()} $
              {(product.subCategory === 'laptop' || product.subCategory === 'mobile') && 
                <span className="prdss-hero-finance"> or {(product.price / 12).toLocaleString(undefined, {maximumFractionDigits: 0})} $/mo.*</span>
              }
            </p>
            <div className="prdss-hero-actions">
              <Link to={`/buy/${getBuyRoute(product.subCategory)}`} state={{ selectedId: product.id }} className="prdss-btn-primary">
                Buy
              </Link>
            </div>
         </div>
         <div className="prdss-hero-image-wrapper">
            <img src={product.image} alt={product.name} className="prdss-hero-img" />
         </div>
      </section>

      {/* 2. Overview / Key Features Section */}
      <section className="prdss-overview-section">
        <div className="prdss-overview-container">
          <div className="prdss-overview-copy">
            <h2>Design. <br />Take it lightly.</h2>
            <p>{product.description || "Designed with meticulous attention to detail, combining powerful capabilities with an elegant, minimalist form factor. It's incredibly thin and light, so you can work, play, or create anywhere."}</p>
          </div>
        </div>
      </section>

      {/* 3. Compare Section */}
      <section className="prdss-compare-section">
        <div className="prdss-compare-header">
          <h2>Compare {product.subCategory ? product.subCategory.replace('-', ' ') : 'Similar Items'}</h2>
          
          <div className="prdss-text-filter-group">
            {sortOptions.map(option => (
              <span 
                key={option}
                className={`prdss-text-filter-item ${sortOrder === option ? 'active' : ''}`}
                onClick={() => setSortOrder(option)}
              >
                {option}
              </span>
            ))}
          </div>
        </div>

        <div className="prdss-compare-grid">
          {sortedComparisons.length > 0 ? (
            sortedComparisons.map((item) => (
              <div key={item.id} className="prdss-compare-card">
                <div className="prdss-cc-img-wrapper">
                   <img src={item.image} alt={item.name} className="prdss-compare-img" />
                </div>
                <div className="prdss-compare-meta">
                  <h4>{item.name}</h4>
                  <p className="prdss-compare-desc">{item.tagline || 'Essential power.'}</p>
                  <p className="prdss-compare-price">From {item.price.toLocaleString()} $</p>
                  <div className="prdss-cc-actions">
                    <Link to={`/buy/${getBuyRoute(item.subCategory)}`} state={{ selectedId: item.id }} className="prdss-btn-primary small">
                      Buy
                    </Link>
                    <Link to={`/product/${item.id}`} className="prdss-compare-link">Learn more &gt;</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="prdss-no-compare">No other similar items available for comparison right now.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;