import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/search.css"
const SearchPage = () => {
  const [query, setQuery] = useState("");

  
  const quickLinks = [
    { title: "Business Strategy", path: "/services/consulting/strategy", category: "Services" },
    { id: 2, title: "Healthcare Solutions", path: "/solutions/healthcare", category: "Solutions" },
    { id: 3, title: "Latest iPhone", path: "/products/electronics/mobile", category: "Products" },
    { id: 4, title: "Support Center", path: "/contact/support", category: "Help" }
  ];

 
  const allContent = [
    { id: 1, title: "iPhone 15 Pro", category: "Products", path: "/products/electronics/mobile" },
    { id: 2, title: "MacBook Air M3", category: "Products", path: "/products/electronics/laptops" },
    { id: 3, title: "Business Strategy", category: "Services", path: "/services/consulting/strategy" },
    { id: 4, title: "Tax Compliance", category: "Services", path: "/services/consulting/taxes" },
    { id: 5, title: "Healthcare Systems", category: "Solutions", path: "/solutions/healthcare" },
    { id: 6, title: "Education Tech", category: "Solutions", path: "/solutions/education" },
    { id: 7, title: "Whitepapers", category: "Resources", path: "/resources/whitepapers" },
  ];

  const filteredResults = allContent.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-container">
        

        <header className="search-header">
          <div className="search-input-group">
            <span className="search-icon"></span>
            <input
              type="text"
              placeholder="Search "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && <button className="clear-btn" onClick={() => setQuery("")}>Close</button>}
          </div>
        </header>

        <section className="search-content">
          {query.length > 0 ? (
          

            <div className="results-wrapper">
              <p className="section-label">Search Results</p>
              {filteredResults.length > 0 ? (
                filteredResults.map(item => (
                  <Link to={item.path} key={item.id} className="search-item">
                    <span className="item-cat">{item.category}</span>
                    <span className="item-title">{item.title}</span>
                  </Link>
                ))
              ) : (
                <p className="no-results">No results found for "{query}"</p>
              )}
            </div>
          ) : (
           
            <div className="quick-links-wrapper">
              <p className="section-label">Quick Links</p>
              <div className="quick-links-grid">
                {quickLinks.map((link, i) => (
                  <Link to={link.path} key={i} className="quick-link-card">
                    <span className="q-cat">{link.category}</span>
                    <span className="q-title">{link.title}</span>
                  </Link>
                ))}
              </div>

              <div className="trending-searches">
                <p className="section-label">Suggested Sections</p>
                <div className="tag-cloud">
                  <Link to="/products">All Products</Link>
                  <Link to="/services">Our Services</Link>
                  <Link to="/solutions">Industry Solutions</Link>
                  <Link to="/resources/blog">Read Blog</Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SearchPage;