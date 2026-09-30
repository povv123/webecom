import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cart.css';

import { useBag } from '../../context/BagContext';

const Cart = () => {

  const { bagItems, removeFromBag, updateQuantity, totalCount, totalPrice } = useBag();

  return (
    <div className="bagfi-container">
      <div className="bagfi-content">

        {bagItems.length > 0 ? (
  
          <div className="bagfi-filled-layout">
            <h1 className="bagfi-title">Your Bag ({totalCount} {totalCount === 1 ? 'item' : 'items'})</h1>

            <div className="bagfi-items-list">
              {bagItems.map((item) => (
                <div key={item.id} className="bagfi-item-row">
                  <img src={item.image} alt={item.name} className="bagfi-item-img" />

                  <div className="bagfi-item-details">
                    <span className="bagfi-item-name">{item.name}</span>
                    {item.tagline && (
                      <span className="bagfi-item-tagline">{item.tagline}</span>
                    )}
                    <div className="bagfi-qty-control">
                      <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span className="bagfi-item-qty">{item.quantity}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>

                  <div className="bagfi-item-right">
                    <span className="bagfi-item-price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      className="bagfi-remove-btn"
                      onClick={() => removeFromBag(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bagfi-summary">
              <div className="bagfi-summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="bagfi-summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="bagfi-summary-row bagfi-summary-total">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <Link to="/buy/bag" className="bagfi-checkout-btn">
                Checkout
              </Link>
            </div>
          </div>

        ) : (
          // EMPTY STATE — unchanged from your original
          <div className="bagfi-empty-layout bagfi-empty-state">
            <h1 className="bagfi-empty-title">Your Bag is empty.</h1>
            <p className="bagfi-empty-signin-text">
              <Link to="/signin" className="bagfi-text-link">Sign in</Link> to see if you have any saved items
            </p>

            <div className="bagfi-profile-section">
              <h3 className="bagfi-profile-heading">My Profile</h3>
              <ul className="bagfi-profile-list">

                <li className="bagfi-profile-item">
                  <Link to="/orders" className="bagfi-profile-link">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="bagfi-icon">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    Orders
                  </Link>
                </li>

                <li className="bagfi-profile-item">
                  <Link to="/saves" className="bagfi-profile-link">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="bagfi-icon">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Your Saves
                  </Link>
                </li>

                <li className="bagfi-profile-item">
                  <Link to="/account" className="bagfi-profile-link">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="bagfi-icon">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Account
                  </Link>
                </li>

                <li className="bagfi-profile-item">
                  <Link to="/signin" className="bagfi-profile-link">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="bagfi-icon">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Sign in
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;