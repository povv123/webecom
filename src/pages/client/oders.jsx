import React from 'react';
import { Link } from 'react-router-dom';


const Orders = () => {
  // Mock state: assuming no orders for the empty state UI
  const hasOrders = false; 

  return (
    <div className="ord-container">
      <div className="ord-content">
        <h1 className="ord-title">Your Orders</h1>
        
        {hasOrders ? (
          <div className="ord-list">
            {/* Order history logic would go here */}
          </div>
        ) : (
          <div className="ord-empty-state">
            <h2 className="ord-empty-title">You have no recent orders.</h2>
            <p className="ord-empty-text">When you place an order, it will appear here.</p>
            <Link to="/" className="ord-btn-continue">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;