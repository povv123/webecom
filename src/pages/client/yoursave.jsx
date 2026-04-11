import React from 'react';
import { Link } from 'react-router-dom';
 

const YourSaves = () => {
  const savedItems = []; // Mock empty state

  return (
    <div className="save-container">
      <div className="save-content">
        <h1 className="save-title">Your Saves</h1>
        
        {savedItems.length > 0 ? (
          <div className="save-grid">
            {/* Saved items mapping would go here */}
          </div>
        ) : (
          <div className="save-empty-state">
            <h2 className="save-empty-title">You haven’t saved any items yet.</h2>
            <p className="save-empty-text">
              Keep track of your favorite products. Just click the bookmark or heart icon on any item to save it here.
            </p>
            <Link to="/" className="save-btn-continue">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourSaves;