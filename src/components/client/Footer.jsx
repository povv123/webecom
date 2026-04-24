import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; 

// Helper component for mobile accordion lists
const FooterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`footerser-section ${isOpen ? 'open' : ''}`}>
      <h3 onClick={() => setIsOpen(!isOpen)}>
        {title}
        {/* The icon only shows on mobile */}
        <span className="footerser-mobile-icon">{isOpen ? '−' : '+'}</span>
      </h3>
      <div className="footerser-list-wrapper">
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footerser-container">
      <div className="footerser-content">
        
   

        <div className="footerser-divider"></div>

        {/* Main Links Grid */}
        <div className="footerser-directory">
          
          {/* Column 1: Products & Cart */}
          <div className="footerser-column">
            <FooterSection title="Shop & Learn">
              <ul>
                <li><Link to="/products/electronics/mobile">Mobile Phones</Link></li>
                <li><Link to="/products/electronics/laptops">Laptops</Link></li>
                <li><Link to="/products/electronics/accessories">Phone Accessories</Link></li>
                <li><Link to="/products/furniture/home">Home Furniture</Link></li>
                <li><Link to="/products/furniture/office">Office Furniture</Link></li>
                <li><Link to="/products/furniture/accessories">Furniture Accessories</Link></li>
                <li><Link to="/products/industrial/machinery">Machinery</Link></li>
                <li><Link to="/products/industrial/machinetools">Machine Tools</Link></li>
              </ul>
            </FooterSection>
            
            <FooterSection title="Account & Cart">
              <ul>
                <li><Link to="/account">Manage Account</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/register">Create Account</Link></li>
                <li><Link to="/orders">Track Orders</Link></li>
                <li><Link to="/saves">Saved Items</Link></li>
              </ul>
            </FooterSection>
          </div>

          {/* Column 2: Services */}
          <div className="footerser-column">
            <FooterSection title="Services">
              <ul>
                <li><Link to="/services/consulting/strategy">Business Strategy</Link></li>
                <li><Link to="/services/consulting/it">IT Consulting</Link></li>
                <li><Link to="/services/consulting/financial">Financial Analysis</Link></li>
                <li><Link to="/services/consulting/taxes">Taxes</Link></li>
                <li><Link to="/services/consulting/logistics">Logistics Services</Link></li>
                <li><Link to="/services/maintenance/equipment">Equipment Servicing</Link></li>
                <li><Link to="/services/maintenance/facility">Facility Management</Link></li>
                <li><Link to="/services/maintenance/repair">Spare Parts</Link></li>
                <li><Link to="/services/maintenance/isp">Internet Provider</Link></li>
                <li><Link to="/services/training/technical">Technical Training</Link></li>
                <li><Link to="/services/training/customer-service">Customer Service Training</Link></li>
              </ul>
            </FooterSection>
          </div>

         
          <div className="footerser-column">
            <FooterSection title="Solutions">
              <ul>
                <li><Link to="/solutions/education">Education</Link></li>
                <li><Link to="/solutions/healthcare">Healthcare</Link></li>
                <li><Link to="/solutions/manufacturing">Manufacturing</Link></li>
              </ul>
            </FooterSection>

            <FooterSection title="Resources">
              <ul>
                <li><Link to="/resources/case-studies">Case Studies</Link></li>
                <li><Link to="/resources/whitepapers">Whitepapers</Link></li>
                <li><Link to="/resources/blog">Blog</Link></li>
                <li><Link to="/resources/faqs">FAQs</Link></li>
              </ul>
            </FooterSection>
          </div>

        
          <div className="footerser-column">
            <FooterSection title="About Us">
              <ul>
                <li><Link to="/about/mission">Mission</Link></li>
                <li><Link to="/about/history">History</Link></li>
                <li><Link to="/about/leadership">Leadership</Link></li>
              </ul>
            </FooterSection>

            <FooterSection title="Careers">
              <ul>
                <li><Link to="/careers/openings">Job Openings</Link></li>
                <li><Link to="/careers/internships">Internships</Link></li>
              </ul>
            </FooterSection>

            <FooterSection title="Contact Us">
              <ul>
                <li><Link to="/contact/support">Support</Link></li>
                <li><Link to="/contact/inquiry">Sales Inquiry</Link></li>
                <li><Link to="/contact/quote">Request a Quote</Link></li>
                <li><Link to="/contact/ship">Shipping Information</Link></li>
              </ul>
            </FooterSection>
          </div>

        </div>

       
        <div className="footerser-bottom">
          <div className="footerser-locale">
            <Link to="/">Cambodia</Link>
          </div>
          <div className="footerser-legal">
            <div className="footerser-copyright">
              Copyright © {new Date().getFullYear()} Servial Inc. All rights reserved.
            </div>
            <div className="footerser-legal-links">
              <Link to="/">Privacy Policy</Link>
            
              <Link to="/">Site Map</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;