import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// Import your centralized data file
import { allProductsData } from '../../../data/allProductsData';
import '../../../styles/products/Buypage.css';

import { useBag } from '../../../context/BagContext';

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

  // Smart routing to match the URL to your data keys from allProductsData
  const categoryProducts = useMemo(() => {
    if (!categoryId) return [];
    const formattedCategory = categoryId.toLowerCase().replace(/\s+/g, '');

    const categoryMap = {
      mobile: 'mobile',
      mobilephones: 'mobile',
      laptops: 'laptops',
      laptop: 'laptops',
      machinery: 'machinery',
      machinetools: 'tools',
      tools: 'tools',
      home: 'home',
      homefurniture: 'home',
      office: 'office',
      officefurniture: 'office',
      electronics: 'electronics',
      accessories: 'electronics',
      furnitureacc: 'furnitureacc',
      furnitureaccessories: 'furnitureacc'
    };

    const mappedKey = categoryMap[formattedCategory] || formattedCategory;
    return allProductsData[mappedKey] || allProductsData['laptops'] || [];
  }, [categoryId]);

  const [cartItem, setCartItem] = useState(null);
  const initialSelectedId = location.state?.selectedId;

  // Initialize selected product when data loads
  useEffect(() => {
    if (categoryProducts.length > 0) {
      if (initialSelectedId) {
        const found = categoryProducts.find(p => String(p.id) === String(initialSelectedId));
        setCartItem(found || categoryProducts[0]);
      } else {
        setCartItem(categoryProducts[0]);
      }
      window.scrollTo(0, 0);
    }
  }, [categoryProducts, initialSelectedId]);

  // Checkout State
  const shippingCost = 0;
  const [deliveryMethod, setDeliveryMethod] = useState('shipping');
  const [paymentMethod, setPaymentMethod] = useState('checkout');
  const [addedToBag, setAddedToBag] = useState(false);
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', zip: '', phone: ''
  });

  // Reset payment method if delivery changes away from pickup
  useEffect(() => {
    if (deliveryMethod === 'shipping' && paymentMethod === 'arrival') {
      setPaymentMethod('checkout');
    }
  }, [deliveryMethod, paymentMethod]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert(`Order placed successfully for ${formData.firstName}! Redirecting...`);
  };

  const handleAddToBag = () => {
    if (!cartItem) return;
    addToBag({
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image,
      tagline: cartItem.tagline || 'Pro-level performance',
    });
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  // ✅ SAFELY calculate totals and finance only when cartItem is ready
  const { total, monthlyFinance24, monthlyFinance36 } = useMemo(() => {
    if (!cartItem) {
      return { total: 0, monthlyFinance24: '0.00', monthlyFinance36: '0.00' };
    }
    const calculatedTotal = cartItem.price + shippingCost;
    return {
      total: calculatedTotal,
      monthlyFinance24: (calculatedTotal / 24).toFixed(2),
      monthlyFinance36: (calculatedTotal / 36).toFixed(2)
    };
  }, [cartItem, shippingCost]);

  if (!cartItem) {
    return <div className="loading-container"><p>Loading your checkout...</p></div>;
  }

  const getPaymentButtonText = () => {
    if (paymentMethod === 'checkout') return 'Credit Card';
    if (paymentMethod === 'finance') return 'Financing';
    if (paymentMethod === 'arrival') return 'Pay on Arrival';
    return 'Continue';
  };

  return (
    <div className="buiu">
      <header className="checkout-header">
        <h1>Checkout</h1>
      </header>

      <div className="checkout-main-grid">
        {/* LEFT COLUMN: FORMS */}
        <div className="checkout-form-column">
          <form onSubmit={handlePlaceOrder}>
            <section className="checkout-section">
              <h2>Delivery Method</h2>
              <div className="delivery-method-grid">
                <button type="button" className={`delivery-card ${deliveryMethod === 'shipping' ? 'active' : ''}`} onClick={() => setDeliveryMethod('shipping')}>
                  <IconShipping /> <span>Shipping</span>
                </button>
                <button type="button" className={`delivery-card ${deliveryMethod === 'pickup' ? 'active' : ''}`} onClick={() => setDeliveryMethod('pickup')}>
                  <IconPickup /> <span>Pick up from Store</span>
                </button>
              </div>
            </section>

            <section className="checkout-section">
              <h2>Contact Information</h2>
              <input type="email" name="email" placeholder="Email Address" className="apple-input full-width" value={formData.email} onChange={handleInputChange} required />
            </section>

            <section className="checkout-section">
              <h2>{deliveryMethod === 'shipping' ? 'Shipping Address' : 'Pickup Details'}</h2>
              <div className="input-row">
                <input type="text" name="firstName" placeholder="First Name" className="apple-input half-width" value={formData.firstName} onChange={handleInputChange} required />
                <input type="text" name="lastName" placeholder="Last Name" className="apple-input half-width" value={formData.lastName} onChange={handleInputChange} required />
              </div>
              {deliveryMethod === 'shipping' && (
                <>
                  <input type="text" name="address" placeholder="Street Address" className="apple-input full-width" value={formData.address} onChange={handleInputChange} required />
                  <div className="input-row">
                    <input type="text" name="city" placeholder="City" className="apple-input half-width" value={formData.city} onChange={handleInputChange} required />
                    <input type="text" name="zip" placeholder="ZIP / Postal Code" className="apple-input half-width" value={formData.zip} onChange={handleInputChange} required />
                  </div>
                </>
              )}
              <input type="tel" name="phone" placeholder="Phone Number" className="apple-input full-width" value={formData.phone} onChange={handleInputChange} required />
            </section>
            
            <button type="submit" style={{ display: 'none' }}>Submit</button>
          </form>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY & PAYMENT */}
        <div className="checkout-summary-column">
          <div className="summary-card">
            <h2>Your Order</h2>
            <div className="summary-item-row">
              <img src={cartItem.image} alt={cartItem.name} className="summary-item-img" />
              <div className="summary-item-details">
                <span className="item-name">{cartItem.name}</span>
                <span className="item-desc">{cartItem.tagline || 'Pro-level performance'}</span>
              </div>
              <span className="item-price">${cartItem.price.toLocaleString()}</span>
            </div>
            <hr className="apple-divider" />
            <div className="cost-row"><span>Subtotal</span><span>${cartItem.price.toLocaleString()}</span></div>
            <div className="cost-row"><span>{deliveryMethod === 'shipping' ? 'Shipping' : 'Pickup'}</span><span>Free</span></div>
            <div className="cost-row total-row"><span>Total</span><span>${total.toLocaleString()}</span></div>
            <hr className="apple-divider" />
            
            <h3 className="payment-title">Payment options. <span className="light-text">Select the one that works for you.</span></h3>
            <div className="apple-payment-grid">
              
              {/* Option 1: Checkout */}
              <label className={`payment-block ${paymentMethod === 'checkout' ? 'active' : ''}`}>
                <div className="payment-block-header">
                  <input type="radio" name="payment" value="checkout" checked={paymentMethod === 'checkout'} onChange={() => setPaymentMethod('checkout')} />
                  <div className="payment-info">
                    <span className="payment-name">Checkout</span>
                    <span className="payment-price">${total.toLocaleString()}</span>
                  </div>
                </div>
                <p className="payment-desc">Pay securely with Credit Card or other standard payment methods.</p>
              </label>

              {/* Option 2: Finance */}
              <label className={`payment-block ${paymentMethod === 'finance' ? 'active' : ''}`}>
                <div className="payment-block-header">
                  <input type="radio" name="payment" value="finance" checked={paymentMethod === 'finance'} onChange={() => setPaymentMethod('finance')} />
                  <div className="payment-info">
                    <span className="payment-name">Finance</span>
                    <span className="payment-price">${monthlyFinance24}/mo. for 24 mo.Footnote ※</span>
                  </div>
                </div>
                <p className="payment-desc">Pay over time at 0% APR.</p>
                {/* ✅ THIS LINE FIXES THE WARNING by using monthlyFinance36 */}
                <p className="payment-subtext">From ${monthlyFinance36}/mo. over 36 mo. with a select carrier deal Footnote ∆</p>
              </label>

              {/* Option 3: Arrival Payment */}
              {deliveryMethod === 'pickup' && (
                <label className={`payment-block ${paymentMethod === 'arrival' ? 'active' : ''}`}>
                  <div className="payment-block-header">
                    <input type="radio" name="payment" value="arrival" checked={paymentMethod === 'arrival'} onChange={() => setPaymentMethod('arrival')} />
                    <div className="payment-info">
                      <span className="payment-name">Arrival Payment</span>
                      <span className="payment-price">${total.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="payment-desc">Pay easily when your order arrives at your destination.</p>
                </label>
              )}
            </div>

            <button type="button" className="apple-btn-primary full-width place-order-btn" onClick={handlePlaceOrder}>{getPaymentButtonText()}</button>
            <button type="button" className="apple-btn-primary full-width place-order-btn" onClick={handleAddToBag}>{addedToBag ? '✓ Added to Bag' : 'Add to Bag'}</button>
            
            <p className="terms-text">
              By placing your order, you agree to our Terms of Sale and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;