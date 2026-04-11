import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cart.css'; 

const Cart = () => {
  // Using an empty array to force the empty state view
  const [cartItems] = useState([]); 

  return (
    <div className="bagfi-container">
      <div className="bagfi-content bagfi-empty-layout">
        
        {cartItems.length > 0 ? (
          <div>
          
          </div>
        ) : (
          <div className="bagfi-empty-state">
            <h1 className="bagfi-empty-title">Your Bag is empty.</h1>
            <p className="bagfi-empty-signin-text">
              <Link to="/signin" className="bagfi-text-link">Sign in</Link> to see if you have any saved items
            </p>

            <div className="bagfi-profile-section">
              <h3 className="bagfi-profile-heading">My Profile</h3>
              <ul className="bagfi-profile-list">
                
                <li className="bagfi-profile-item">
                  <Link to="/orders" className="bagfi-profile-link">
                    {/* Box Icon */}
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
                    {/* Bookmark Icon */}
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="bagfi-icon">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Your Saves
                  </Link>
                </li>

                <li className="bagfi-profile-item">
                  <Link to="/account" className="bagfi-profile-link">
                    {/* Gear/Settings Icon */}
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="bagfi-icon">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Account
                  </Link>
                </li>

                <li className="bagfi-profile-item">
                  <Link to="/signin" className="bagfi-profile-link">
                    {/* User Profile Icon */}
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