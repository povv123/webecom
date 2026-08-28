import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listOrders } from '../../API/orders';
import "../../styles/order.css"

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listOrders()
      .then(setOrders)
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, []);

  const hasOrders = orders.length > 0;

  return (
    <div className="ord-container">
      <div className="ord-content">
        <h1 className="ord-title">Your Orders</h1>

        {loading ? (
          <p className="ord-empty-text">Loading your orders…</p>
        ) : hasOrders ? (
          <div className="ord-list">
            {orders.map(order => (
              <div key={order._id} className="ord-card">
                <div className="ord-card-header">
                  <div>
                    <p className="ord-card-date">
                      Placed {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="ord-card-id">Order #{order._id.slice(-8).toUpperCase()}</p>
                  </div>
                  <span className={`ord-status ord-status-${order.status}`}>{order.status}</span>
                </div>

                <div className="ord-card-items">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="ord-item-row">
                      <span className="ord-item-name">{item.name} <span className="ord-item-qty">× {item.quantity}</span></span>
                      <span className="ord-item-price">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="ord-card-footer">
                  <span>Total</span>
                  <span className="ord-card-total">${order.total.toLocaleString()}</span>
                </div>
              </div>
            ))}
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
