import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/yoursave.css';

import { useBag } from '../../context/BagContext';

const YourSaves = ({ savedItems = [], onRemoveFromSaves }) => {
  
  const { addToBag } = useBag();

  const [addedIds, setAddedIds] = useState([]);


  const handleAddToBag = (item) => {
    addToBag({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 2000);
  };

  return (
    <div className="save-container">
      <div className="save-content">
        <h1 className="save-title">Your Saves</h1>

        {savedItems.length > 0 ? (
          <div className="save-grid">
            {savedItems.map((item) => (
              <div key={item.id} className="save-item-card">
                <img src={item.image} alt={item.name} className="save-item-img" />

                <div className="save-item-details">
                  <h3 className="save-item-name">{item.name}</h3>
                  <p className="save-item-price">${item.price?.toLocaleString()}</p>
                </div>

                <div className="save-item-actions">
                  <button
                    className="save-btn-add-to-bag"
                    onClick={() => handleAddToBag(item)}
                  >
                    {addedIds.includes(item.id) ? '✓ Added to Bag' : 'Add to Bag'}
                  </button>

                  <button
                    className="save-btn-remove"
                    onClick={() => onRemoveFromSaves(item.id)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="save-empty-state">
            <h2 className="save-empty-title">You haven't saved any items yet.</h2>
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