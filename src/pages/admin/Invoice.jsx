import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/Admin/Invoice.css';

const Invoice = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedInvoiceData = localStorage.getItem('printInvoiceData');
    
    if (storedInvoiceData) {
      const parsedData = JSON.parse(storedInvoiceData);
      setOrder(parsedData);
      localStorage.removeItem('printInvoiceData');
    }
  }, [id]);

  useEffect(() => {
    if (order) {
      setTimeout(() => {
        window.print();
      }, 500); 
    }
  }, [order]);

  if (!order) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading invoice data or no data found...</div>;
  }

  return (
    <div className="invoice-container">
      
   
      <div className="invoice-logo">
        <h2>LOGO</h2>
        <p>Company Name</p>
      </div>

      <header className="invoice-header">
        <div className="issued-to">
          <p className="label">ISSUED TO:</p>
          <h3>{order.customer.firstName} {order.customer.lastName}</h3>
          <p>{order.deliveryMethod}</p>
          
          {order.shippingAddress && (
            <>
              <p>{order.shippingAddress.street} {order.shippingAddress.apt || ''}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
            </>
          )}
        </div>
        
     
        <div className="invoice-meta">
          <div className="meta-row">
            <span className="meta-label">INVOICE ID NO:</span>
            <span className="meta-value">{order.id}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">DATE:</span>
            <span className="meta-value">{order.date}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">STATUS:</span>
            <span className="meta-value">{order.status}</span>
          </div>
        </div>
      </header>

      <table className="invoice-table">
        <thead>
          <tr>
            <th className="desc">DESCRIPTION</th>
            <th>UNIT PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {(order.items || []).map((item, idx) => (
            <tr key={idx}>
              <td className="desc">
                <strong>{item.name}</strong>
                {item.tagline && <><br/><span className="desc-tagline">{item.tagline}</span></>}
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="invoice-summary">
        <div className="summary-row">
          <span className="summary-label">SUBTOTAL</span>
          <span className="summary-value">${order.summary.subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">SHIPPING</span>
          <span className="summary-value">{order.summary.shipping === 0 ? 'Free' : `$${order.summary.shipping.toFixed(2)}`}</span>
        </div>
        <div className="summary-row total-row">
          <span className="summary-label">TOTAL</span>
          <span className="summary-value">${order.summary.total.toFixed(2)}</span>
        </div>
      </section>

      <footer className="invoice-signatures">
        <div className="sig-box">SIGNATURE CUSTOMER</div>
        <div className="sig-box">STORE SIGNATURE</div>
      </footer>
    </div>
  );
};

export default Invoice;