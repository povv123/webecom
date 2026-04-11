import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/contact/shippig.css'; // Adjust path as needed

const Shipping = () => {
  const deliveryZones = [
    {
      id: "phnom-penh",
      title: "Phnom Penh Delivery",
      desc: "Same-day or next-day delivery straight to your door or office anywhere in the capital.",
      time: "1 - 24 hours",
      price: "$1.50 - $2.00",
      linkText: "View PP Zones"
    },
    {
      id: "provinces",
      title: "Provincial Shipping",
      desc: "Fast, reliable shipping to Siem Reap, Sihanoukville, Battambang, and all other provinces via our courier partners (e.g., J&T, Vireak Buntham).",
      time: "1 - 3 business days",
      price: "From $2.50",
      linkText: "View Provincial Rates"
    },
    {
      id: "pickup",
      title: "Store Pickup",
      desc: "Order online and pick up your items for free at our central Phnom Penh warehouse.",
      time: "Ready in 2 hours",
      price: "Free",
      linkText: "Get Directions"
    }
  ];

  return (
    <div className="ship">
      {/* Hero Section */}
      <header className="ship-hero">
        <h1>Shipping & Delivery</h1>
        <p className="ship-sub">
          Fast, reliable delivery across Phnom Penh and all provinces in Cambodia.
        </p>
      </header>

      {/* Delivery Zones Grid */}
      <section className="ship-grid">
        {deliveryZones.map((zone) => (
          <div key={zone.id} className="ship-card">
            <h3>{zone.title}</h3>
            <p className="ship-desc">{zone.desc}</p>
            <div className="ship-stats">
              <div className="stat">
                <span className="stat-label">Estimated Time:</span>
                <span className="stat-value">{zone.time}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Starting Price:</span>
                <span className="stat-value">{zone.price}</span>
              </div>
            </div>
            <Link to={`/shipping/${zone.id}`} className="ship-link">
              {zone.linkText} <span className="ship-chevron">&gt;</span>
            </Link>
          </div>
        ))}
      </section>

      {/* Support & Tracking Footer */}
      <section className="ship-footer-info">
        <div className="ship-info-block">
          <h2>Track Your Order</h2>
          <p>Have a tracking number from J&T Express, Capitol, or our local rider?</p>
          <div className="ship-search-container">
            <input 
              type="text" 
              className="ship-tracking-input" 
              placeholder="Enter tracking or order number" 
            />
            <button className="ship-btn-blue">Track</button>
          </div>
        </div>
        <div className="ship-info-block">
          <h2>Delivery Support</h2>
          <p>Missing a package or need to change your delivery location in Phnom Penh?</p>
          <Link to="/contact/support">
            <button className="ship-btn-outline">Contact Support</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shipping;