import React, { useState, useEffect, useMemo } from 'react';
import '../../styles/Admin/Order.css';
import { getAllOrders, updateOrderStatus } from '../../API/admin';

// Backend statuses -> labels used by this screen
const STATUS_LABEL = { pending: 'Unfulfilled', paid: 'Processing', shipped: 'Completed', cancelled: 'Cancelled' };
const NEXT_STEP = {
  pending: { to: 'paid', label: 'Mark as Paid' },
  paid: { to: 'shipped', label: 'Mark as Shipped' },
};


function adaptOrder(o) {
  const user = typeof o.userId === 'object' && o.userId ? o.userId : {};
  const customer = o.customer || {
    firstName: user.firstName || (user.email ? user.email.split('@')[0] : 'Customer'),
    lastName: user.lastName || '',
    email: user.email || '—',
    phone: user.phone || '—',
  };
  const subtotal = o.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return {
    _id: o._id,
    id: `ORD-${o._id.slice(-6).toUpperCase()}`,
    date: new Date(o.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
    rawStatus: o.status,
    status: STATUS_LABEL[o.status] || o.status,
    deliveryMethod: o.deliveryMethod || 'Not specified',
    customer,
    shippingAddress: o.shippingAddress || null,
    provincialDetails: o.provincialDetails || null,
    items: o.items,
    payment: {
      method: o.paymentMethod || '—',
      details: 'Paid securely with standard payment method.',
      financeDetails: o.financeDetails || '',
    },
    summary: { subtotal, shipping: o.shippingFee || 0, total: o.total },
  };
}

export default function Order() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedId, setSelectedId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getAllOrders()
      .then((list) => setOrders(list.map(adaptOrder)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const selectedOrder = useMemo(() => orders.find((o) => o._id === selectedId) || null, [orders, selectedId]);
  const setSelectedOrder = (order) => setSelectedId(order ? order._id : null);

  const handleAdvance = async () => {
    const step = NEXT_STEP[selectedOrder.rawStatus];
    if (!step) return;
    setUpdating(true);
    try {
      const updated = await updateOrderStatus(selectedOrder._id, step.to);
      setOrders((prev) => prev.map((o) => (o._id === updated._id ? { ...o, rawStatus: updated.status, status: STATUS_LABEL[updated.status] } : o)));
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  const handleCancel = async () => {
    if (!window.confirm('Cancel this order?')) return;
    setUpdating(true);
    try {
      const updated = await updateOrderStatus(selectedOrder._id, 'cancelled');
      setOrders((prev) => prev.map((o) => (o._id === updated._id ? { ...o, rawStatus: updated.status, status: STATUS_LABEL[updated.status] } : o)));
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab !== 'All' && order.status !== activeTab) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [order.id, order.customer.firstName, order.customer.lastName, order.customer.email]
      .join(' ').toLowerCase().includes(q);
  });

  const handlePrintInvoice = () => {
    if (selectedOrder) {
      localStorage.setItem('printInvoiceData', JSON.stringify(selectedOrder));
      window.open(`/invoice/${selectedOrder.id}`, '_blank');
    }
  };

  // --- VIEW 1: ORDERS LIST ---
  if (!selectedOrder) {
    return (
      <div className="AdminOrder-wrapper">
        <header className="AdminOrder-header">
          <div>
            <p className="AdminOrder-eyebrow">Store Management</p>
            <h1 className="AdminOrder-title">Orders</h1>
          </div>
          <div className="AdminOrder-header-actions">
          </div>
        </header>

        <div className="AdminOrder-content">
          <div className="AdminOrder-toolbar">
            <div className="AdminOrder-tabs">
              {['All', 'Unfulfilled', 'Processing', 'Completed', 'Cancelled'].map(tab => (
                <button 
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="AdminOrder-search">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#86868b">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search orders, customers..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          </div>

          <div className="AdminOrder-table-container">
            <table className="AdminOrder-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Payment Method</th>
                  <th>Fulfillment</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading || error || filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="AdminOrder-empty-message">
                      {loading ? 'Loading orders…' : error ? `Could not load orders: ${error}` : 'No orders found.'}
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="AdminOrder-row">
                      <td className="fw-600 text-dark">{order.id}</td>
                      
                      <td>
                        <div className="customer-cell">
                          <span className="fw-600 text-dark">{order.customer.firstName} {order.customer.lastName}</span>
                          <span className="text-muted">{order.customer.email}</span>
                        </div>
                      </td>

                      <td className="text-muted">{order.date}</td>

                      <td>
                        <div className="total-cell">
                          <span className="fw-600 text-dark">${order.summary.total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                        </div>
                      </td>

                      <td>
                        <span className="text-dark">{order.payment.method}</span>
                      </td>

                      <td>
                        <span className={`status-badge fulfillment-${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </td>

                      <td className="text-right">
                        <button className="btn-text" onClick={() => setSelectedOrder(order)}>
                          View Details
                          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: ORDER DETAILS ---
  return (
    <div className="AdminOrder-wrapper">
      
      <header className="AdminOrder-header detail-mode">
        <div className="AdminOrder-header-left">
          
          <button className="btn-back" onClick={() => setSelectedOrder(null)}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Orders
          </button>
          
          <div className="title-row title-row-spaced">
            <h1 className="AdminOrder-title">Order {selectedOrder.id}</h1>
            <span className={`status-badge fulfillment-${selectedOrder.status.toLowerCase()}`}>
              {selectedOrder.status}
            </span>
          </div>
          <p className="text-muted">Placed on {selectedOrder.date}</p>
        </div>
        <div className="AdminOrder-header-right">
          
          <button 
            onClick={handlePrintInvoice}
            className="btn-secondary AdminOrder-invoice-link"
          >
            Print Invoice
          </button>

          {NEXT_STEP[selectedOrder.rawStatus] && (
            <button className="btn-primary" onClick={handleAdvance} disabled={updating}>
              {updating ? 'Saving…' : NEXT_STEP[selectedOrder.rawStatus].label}
            </button>
          )}
          {['pending', 'paid'].includes(selectedOrder.rawStatus) && (
            <button className="btn-secondary" onClick={handleCancel} disabled={updating}>Cancel Order</button>
          )}
        </div>
      </header>

      <div className="AdminOrder-detail-layout">
        
        {/* LEFT COLUMN */}
        <div className="AdminOrder-main-column">
          
          <div className="detail-card">
            <h2>Contact Information</h2>
            <div className="info-grid">
              <div>
                <span className="label">Customer Name</span>
                <p>{selectedOrder.customer.firstName} {selectedOrder.customer.lastName}</p>
              </div>
              <div>
                <span className="label">Email Address</span>
                <p>{selectedOrder.customer.email}</p>
              </div>
              <div>
                <span className="label">Phone Number</span>
                <p>{selectedOrder.customer.phone}</p>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <h2>Delivery Method</h2>
            <div className="delivery-banner">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#0071e3" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <div>
                <h3>{selectedOrder.deliveryMethod}</h3>
                <p>
                  {selectedOrder.deliveryMethod === 'PP Delivery' && 'Local Phnom Penh Delivery'}
                  {selectedOrder.deliveryMethod === 'Provinces' && 'Inter-Provincial Shipping'}
                  {selectedOrder.deliveryMethod === 'Store Pickup' && 'In-Store Pickup'}
                </p>
              </div>
            </div>

            {/* Dynamic rendering based on shipping type */}
            {(selectedOrder.deliveryMethod === 'PP Delivery' || selectedOrder.deliveryMethod === 'Provinces') && selectedOrder.shippingAddress && (
              <div className="info-grid address-grid address-grid-spaced">
                <div>
                  <span className="label">Shipping Address</span>
                  <p>
                    {selectedOrder.shippingAddress.street}<br/>
                    {selectedOrder.shippingAddress.apt && <>{selectedOrder.shippingAddress.apt}<br/></>}
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zip}
                  </p>
                </div>
                
                {/* Specific field for provincial shipping details */}
                {selectedOrder.deliveryMethod === 'Provinces' && selectedOrder.provincialDetails && (
                  <div>
                    <span className="label">Provincial Shipping Details</span>
                    <p>
                      <strong>Bus/Courier:</strong> {selectedOrder.provincialDetails.busCompany}<br/>
                      <strong>Drop-off:</strong> {selectedOrder.provincialDetails.dropOffStation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="detail-card">
            <h2>Payment Details</h2>
            <div className="info-grid">
              <div>
                <span className="label">Method selected</span>
                <p className="fw-600">{selectedOrder.payment.method}</p>
              </div>
              <div className="info-grid-span-2">
                <span className="label">Terms</span>
                <p>
                  {selectedOrder.payment.method === 'Credit Card' 
                    ? selectedOrder.payment.details 
                    : selectedOrder.payment.financeDetails}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="AdminOrder-side-column">
          <div className="detail-card sticky-card">
            <h2>Your Order</h2>
            
            <div className="product-list">
              {selectedOrder.items.map((item, idx) => (
                <div className="product-item" key={idx}>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Qty {item.quantity} × ${item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="total-line">
                <span>Subtotal</span>
                <span>${selectedOrder.summary.subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="total-line">
                <span>Shipping</span>
                <span>{selectedOrder.summary.shipping === 0 ? 'Free' : `$${selectedOrder.summary.shipping.toLocaleString(undefined, {minimumFractionDigits: 2})}`}</span>
              </div>
              <div className="total-line grand-total">
                <span>Total</span>
                <span>${selectedOrder.summary.total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}