import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { allProductsData } from '../../../data/allProductsData';
import { useBag } from '../../../context/BagContext';
import '../../../styles/products/Buypage.css';

// --- Custom SVG Icons ---
const IconShipping = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const IconPickup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const BuyPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const { addToBag } = useBag();

  const categoryProducts = useMemo(() => {
    if (!categoryId) return [];
    const formattedCategory = categoryId.toLowerCase().replace(/\s+/g, '');
    const categoryMap = { mobile: 'mobile', mobilephones: 'mobile', laptops: 'laptops', machinery: 'machinery', machinetools: 'tools', tools: 'tools', home: 'home', office: 'office', electronics: 'electronics', accessories: 'electronics', furnitureacc: 'furnitureacc' };
    return allProductsData[categoryMap[formattedCategory] || formattedCategory] || allProductsData['laptops'] || [];
  }, [categoryId]);

  const [cartItem, setCartItem] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('phnom-penh');
  const [paymentMethod, setPaymentMethod] = useState('checkout');
  const [addedToBag, setAddedToBag] = useState(false);
  
  // Expanded form data state to handle Cambodian delivery formats
  const [formData, setFormData] = useState({ 
    email: '', 
    firstName: '', 
    lastName: '', 
    phone: '',
    addressLine: '', // House No, Street No
    district: '',    // Khan / City
    commune: '',     // Sangkat
    province: '',    // Province Name
    courier: '',     // J&T, Vireak Buntham, Capitol, etc.
    note: ''         // Landmarks or branch details
  });

  useEffect(() => {
    const initialSelectedId = location.state?.selectedId;
    if (categoryProducts.length > 0) {
      const found = initialSelectedId ? categoryProducts.find(p => String(p.id) === String(initialSelectedId)) : categoryProducts[0];
      setCartItem(found || categoryProducts[0]);
      window.scrollTo(0, 0);
    }
  }, [categoryProducts, location.state]);

  const { total, monthlyFinance24 } = useMemo(() => {
    if (!cartItem) return { total: 0, monthlyFinance24: '0.00' };
    return { total: cartItem.price, monthlyFinance24: (cartItem.price / 24).toFixed(2) };
  }, [cartItem]);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handlePlaceOrder = (e) => { 
    e.preventDefault(); 
    const actionText = paymentMethod === 'finance' ? 'Financing process started' : 'Order placed';
    alert(`${actionText} for ${formData.firstName}!`); 
  };

  const handleAddToBag = () => {
    if (!cartItem) return;
    addToBag({ ...cartItem, tagline: cartItem.tagline || 'Pro-level performance' });
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  if (!cartItem) return <div className="loading-container"><p>Loading your checkout...</p></div>;

  return (
    <div className="buyonemre">
      <header className="checkout-header"><h1>Checkout</h1></header>

      <div className="checkout-main-grid">
        {/* LEFT COLUMN: FORMS */}
        <div className="checkout-form-column">
          <section className="checkout-section">
            <h2>Delivery Method</h2>
            <div className="delivery-method-grid">
              <button type="button" className={`delivery-card ${deliveryMethod === 'phnom-penh' ? 'active' : ''}`} onClick={() => setDeliveryMethod('phnom-penh')}>
                <IconShipping /> <span>PP Delivery</span>
              </button>
              <button type="button" className={`delivery-card ${deliveryMethod === 'provinces' ? 'active' : ''}`} onClick={() => setDeliveryMethod('provinces')}>
                <IconShipping /> <span>Provinces</span>
              </button>
              <button type="button" className={`delivery-card ${deliveryMethod === 'pickup' ? 'active' : ''}`} onClick={() => setDeliveryMethod('pickup')}>
                <IconPickup /> <span>Store Pickup</span>
              </button>
            </div>
          </section>

          <form onSubmit={handlePlaceOrder}>
            {/* Contact Information - Always Visible */}
            <section className="checkout-section">
              <h2>Contact Information</h2>
              <div className="input-row">
                <input type="text" name="firstName" placeholder="First Name" className="eter-input half-width" value={formData.firstName} onChange={handleInputChange} required />
                <input type="text" name="lastName" placeholder="Last Name" className="eter-input half-width" value={formData.lastName} onChange={handleInputChange} required />
              </div>
              <input type="email" name="email" placeholder="Email Address" className="eter-input full-width" value={formData.email} onChange={handleInputChange} required />
              <input type="tel" name="phone" placeholder="Phone Number (e.g., 0XX XXX XXX)" className="eter-input full-width" value={formData.phone} onChange={handleInputChange} required />
            </section>

            {/* Phnom Penh Address Fields */}
            {deliveryMethod === 'phnom-penh' && (
              <section className="checkout-section">
                <h2>Phnom Penh Delivery Details</h2>
                <input type="text" name="addressLine" placeholder="House No., Street No. / Name" className="eter-input full-width" value={formData.addressLine} onChange={handleInputChange} required />
                <div className="input-row">
                  <input type="text" name="district" placeholder="Khan (District)" className="eter-input half-width" value={formData.district} onChange={handleInputChange} required />
                  <input type="text" name="commune" placeholder="Sangkat (Commune)" className="eter-input half-width" value={formData.commune} onChange={handleInputChange} required />
                </div>
                <input type="text" name="note" placeholder="Landmark or Delivery Instructions (Optional)" className="eter-input full-width" value={formData.note} onChange={handleInputChange} />
              </section>
            )}

            {/* Provincial Address Fields */}
            {deliveryMethod === 'provinces' && (
              <section className="checkout-section">
                <h2>Provincial Shipping Details</h2>
                <input type="text" name="province" placeholder="Province (e.g., Siem Reap, Battambang)" className="eter-input full-width" value={formData.province} onChange={handleInputChange} required />
                <div className="input-row">
                  <input type="text" name="district" placeholder="City / District" className="eter-input half-width" value={formData.district} onChange={handleInputChange} required />
                  <input type="text" name="courier" placeholder=" (e.g., J&T, Vireak Buntham)" className="eter-input half-width" value={formData.courier} onChange={handleInputChange} required />
                </div>
                <input type="text" name="note" placeholder="Specific Branch Location or Notes (Optional)" className="eter-input full-width" value={formData.note} onChange={handleInputChange} />
              </section>
            )}

            {/* Note: Store Pickup requires no extra fields */}
          </form>
        </div>

        {/* RIGHT COLUMN: SUMMARY */}
        <div className="checkout-summary-column">
          <div className="summary-card">
            <h2>Your Order</h2>
            <div className="summary-item-row">
              <img src={cartItem.image} alt={cartItem.name} className="summary-item-img" />
              <div className="summary-item-details">
                <span className="item-name">{cartItem.name}</span>
                <span className="item-desc">{cartItem.tagline}</span>
              </div>
              <span className="item-price">${cartItem.price.toLocaleString()}</span>
            </div>
            
            <hr className="eter-divider" />
            <div className="cost-row"><span>Total</span><span>${total.toLocaleString()}</span></div>
            
            <h3 className="payment-title">Payment options</h3>
            <div className="eter-payment-grid">
              
              {/* Checkout Block */}
              <div 
                className={`payment-block ${paymentMethod === 'checkout' ? 'active' : ''}`} 
                onClick={() => setPaymentMethod('checkout')}
              >
                <div className="payment-info">
                  <span className="payment-name">Credit Card</span>
                  <span className="payment-price">${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Finance Block */}
              <div 
                className={`payment-block ${paymentMethod === 'finance' ? 'active' : ''}`} 
                onClick={() => setPaymentMethod('finance')}
              >
                <div className="payment-info">
                  <span className="payment-name">Finance</span>
                  <span className="payment-price">${monthlyFinance24}/mo.</span>
                </div>
              </div>

            </div>

            {/* DYNAMIC BUTTON TEXT based on paymentMethod (BLACK BUTTON) */}
            <button type="button" className="eter-btn-black full-width place-order-btn" onClick={handlePlaceOrder}>
              {paymentMethod === 'finance' ? 'Financing' : 'Checkout'}
            </button>
            
            {/* ADD TO BAG (BLUE BUTTON) */}
            <button type="button" className="eter-btn-blue full-width place-order-btn" onClick={handleAddToBag}>
              {addedToBag ? '✓ Added' : 'Add to Bag'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;