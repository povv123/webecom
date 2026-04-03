import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  const { productId } = useParams();

  const specs = [
    { label: "Finish", value: "Black Titanium, White Titanium, Blue Titanium" },
    { label: "Display", value: "6.1-inch Super Retina XDR display" },
    { label: "Chip", value: "A17 Pro chip with 6-core GPU" },
    { label: "Camera", value: "48MP Main | Ultra Wide | Telephoto" },
    { label: "Battery", value: "Up to 23 hours video playback" }
  ];

  return (
    <div className="product-detail">
      <header className="detail-header">
        <h1>{productId.toUpperCase()} Tech Specs</h1>
      </header>

      <div className="specs-container">
        {specs.map((spec, index) => (
          <div key={index} className="spec-row">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">{spec.value}</div>
          </div>
        ))}
      </div>

      <div className="detail-footer">
        <button className="apple-btn-blue">Compare Models</button>
      </div>
    </div>
  );
};

export default ProductDetail;