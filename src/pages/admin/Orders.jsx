import React, { useState } from 'react';
import '../../styles/Admin/Order.css';

export default function Order() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Updated mock data with new delivery methods and provincial details
  const [orders] = useState([
    { 
      id: 'ORD-8402',
      date: 'April 28, 2026',
      status: 'Unfulfilled',
      deliveryMethod: 'PP Delivery', // Updated to PP Delivery
      customer: { firstName: 'Michael', lastName: 'Chang', email: 'm.chang@example.com', phone: '+855 12 345 678' },
      shippingAddress: { street: 'St. 271, Sangkat Toul Tompoung', apt: 'House 12B', city: 'Phnom Penh', state: 'PP', zip: '12000' },
      product: { name: 'MacBook Pro 16"', tagline: 'M3 Max chip.', price: 3299.00, image: 'https://via.placeholder.com/80x80?text=MacBook' },
      payment: { method: 'Finance', details: 'Paid over time.', financeDetails: '$137.45/mo. for 24 mo.' },
      summary: { subtotal: 3299.00, shipping: 5.00, total: 3304.00 }
    },
    { 
      id: 'ORD-8401',
      date: 'April 28, 2026',
      status: 'Processing',
      deliveryMethod: 'Provinces', // Updated to Provinces
      customer: { firstName: 'Sarah', lastName: 'Jenkins', email: 'sarah.j@example.com', phone: '+855 98 765 432' },
      shippingAddress: { street: 'National Road 6', apt: 'Near Phsar Leu', city: 'Siem Reap', state: 'SR', zip: '17000' },
      provincialDetails: { busCompany: 'Virak Buntham', dropOffStation: 'Siem Reap Main Branch' }, // Added Provincial Details
      product: { name: 'Galaxy S24 Ultra', tagline: 'Galaxy AI is here.', price: 1299.00, image: 'https://via.placeholder.com/80x80?text=S24+Ultra' },
      payment: { method: 'Credit Card', details: 'Paid securely with standard payment method.', financeDetails: '' },
      summary: { subtotal: 1299.00, shipping: 2.50, total: 1301.50 }
    },
    { 
      id: 'ORD-8400',
      date: 'April 27, 2026',
      status: 'Unfulfilled',
      deliveryMethod: 'Store Pickup', // Updated to match new naming
      customer: { firstName: 'Emma', lastName: 'Watson', email: 'emma.w@example.com', phone: '+855 77 111 222' },
      shippingAddress: null, 
      product: { name: 'AirPods Pro', tagline: 'Magic runs in the family.', price: 249.00, image: 'https://via.placeholder.com/80x80?text=AirPods' },
      payment: { method: 'Credit Card', details: 'Paid securely with standard payment method.', financeDetails: '' },
      summary: { subtotal: 249.00, shipping: 0.00, total: 249.00 }
    }
  ]);

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'All') return true;
    return order.status === activeTab;
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
              {['All', 'Unfulfilled', 'Processing', 'Completed'].map(tab => (
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
              <input type="text" placeholder="Search orders, customers..." />
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
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="AdminOrder-empty-message">
                      No orders found for this status.
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

          <button className="btn-primary">Fulfill Order</button>
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
              <div className="product-item">
                <div className="img-container">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#86868b">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div className="item-details">
                  <h3>{selectedOrder.product.name}</h3>
                  <p>{selectedOrder.product.tagline}</p>
                </div>
                <span className="item-price">${selectedOrder.product.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
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