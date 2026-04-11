import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/faqs.css'; // Adjust path as needed

const FAQ = () => {
  // State to track which question is currently open
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqData = [
    {
      category: "Orders & Shipping",
      items: [
        { 
          id: "q1", 
          q: "How do I track my Eter shipment?", 
          a: "Once your order ships, you will receive a confirmation email with a tracking number. You can also view your order status by logging into your account and visiting the 'Orders' section." 
        },
        { 
          id: "q2", 
          q: "Do you offer same-day delivery in Phnom Penh?", 
          a: "Yes. Orders placed before 2:00 PM local time are eligible for same-day delivery within the Phnom Penh metropolitan area." 
        }
      ]
    },
    {
      category: "Returns & Refunds",
      items: [
        { 
          id: "q3", 
          q: "What is your standard return policy?", 
          a: "You have 14 calendar days to return an item from the date you received it. To be eligible, your item must be unused and in the same condition that you received it, including the original packaging." 
        },
        { 
          id: "q4", 
          q: "How long do refunds take to process?", 
          a: "Once we receive your item, we will inspect it and notify you. If your return is approved, we will initiate a refund to your original method of payment within 3-5 business days." 
        }
      ]
    },
    {
      category: "Account & Payment",
      items: [
        { 
          id: "q5", 
          q: "What payment methods are accepted?", 
          a: "We accept all major credit cards (Visa, Mastercard), ABA Pay, KHQR, and cash on delivery (COD) for specific regions." 
        },
        { 
          id: "q6", 
          q: "How do I update my billing information?", 
          a: "Sign in to your Eter account, navigate to 'Account Settings', and select 'Payment Methods' to add, remove, or update your billing details." 
        }
      ]
    }
  ];

  return (
    <div className="faq">
      {/* Hero Section */}
      <header className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about purchasing, shipping, and managing your Eter account.</p>
      </header>

      {/* FAQ Accordion List */}
      <div className="faq-container">
        {faqData.map((section, index) => (
          <div key={index} className="faq-section">
            <h2 className="faq-category-title">{section.category}</h2>
            
            <div className="faq-list">
              {section.items.map((item) => (
                <div 
                  key={item.id} 
                  className={`faq-item ${openId === item.id ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={openId === item.id}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon">{openId === item.id ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Contact Prompt */}
      <section className="faq-footer">
        <h2>Still need help?</h2>
        <p>Our support team is here to assist you with any other questions.</p>
        <Link to="/contact/support" className="faq-btn-blue">
          Contact Support
        </Link>
      </section>
    </div>
  );
};

export default FAQ;