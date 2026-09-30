import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/contact/trackss.css';
import { listOrders } from '../../../API/orders';
import { useAuth } from '../../../context/AuthContext';

const fmtDate = (d) =>
  new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });

// backend status -> how many tracker steps are done
const STEP_INDEX = { pending: 1, paid: 2, shipped: 3 };

const Track = () => {
  const { isAuthenticated } = useAuth();
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    const code = orderId.trim().replace(/^#/, '').replace(/^ETER-/i, '').toUpperCase();
    if (!code) return;

    setLoading(true);
    setError('');
    try {
      // Order numbers shown on the Orders page are the last 8 characters of the id.
      const orders = await listOrders();
      const found = orders.find((o) => o._id.slice(-8).toUpperCase() === code || o._id.toUpperCase() === code);
      if (!found) {
        setError('We could not find an order with that number on your account.');
      } else {
        setOrder(found);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setOrder(null); setError(''); };

  const done = order ? STEP_INDEX[order.status] || 0 : 0;
  const steps = [
    { name: 'Order Placed', date: order && fmtDate(order.createdAt) },
    { name: 'Processed', date: done >= 2 && order ? fmtDate(order.updatedAt) : '' },
    { name: 'On the Way', date: done >= 3 && order ? fmtDate(order.updatedAt) : '' },
    { name: 'Delivered', date: '' },
  ];
  const addr = order?.shippingAddress;

  return (
    <div className="track-container">
      <div className="track-card">
        <div className="track-header">
          <h1>Track an Order</h1>
          <p>Check the status of your recent Eter purchases and shipments.</p>
        </div>

        {!isAuthenticated ? (
          <p style={{ textAlign: 'center' }}>
            Please <Link to="/signin" state={{ from: { pathname: '/contact/track' } }}>sign in</Link> to track your orders.
          </p>
        ) : !order ? (
          <form className="track-form" onSubmit={handleTrack}>
            <div className="input-group">
              <label htmlFor="order-id">Order Number</label>
              <input
                type="text"
                id="order-id"
                placeholder="e.g. A1B2C3D4 (shown on your Orders page)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: '#ff3b30', fontSize: 14 }}>{error}</p>}
            <button type="submit" className="btn-track" disabled={loading}>
              {loading ? 'Searching…' : 'Track Status'}
            </button>
          </form>
        ) : order.status === 'cancelled' ? (
          <div className="order-results">
            <div className="order-info-brief">
              <span>Order: <strong>#{order._id.slice(-8).toUpperCase()}</strong></span>
              <button className="btn-reset" onClick={reset}>New Search</button>
            </div>
            <p style={{ textAlign: 'center', padding: '24px 0' }}>This order was cancelled.</p>
          </div>
        ) : (
          <div className="order-results">
            <div className="order-info-brief">
              <span>Order: <strong>#{order._id.slice(-8).toUpperCase()}</strong></span>
              <button className="btn-reset" onClick={reset}>New Search</button>
            </div>

            <div className="stepper-wrapper">
              {steps.map((step, idx) => {
                const state = idx < done ? 'completed' : idx === done ? 'active' : '';
                return (
                  <div key={step.name} className={`stepper-item ${state}`}>
                    <div className="step-counter">{state === 'completed' ? '✓' : idx + 1}</div>
                    <div className="step-name">{step.name}</div>
                    {step.date && <div className="step-date">{step.date}</div>}
                  </div>
                );
              })}
            </div>

            {addr && (
              <div className="shipping-details">
                <h3>Shipping Address</h3>
                <p>{addr.street}{addr.apt ? `, ${addr.apt}` : ''}</p>
                <p>{[addr.city, addr.state].filter(Boolean).join(', ')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;