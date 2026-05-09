// src/pages/client/Resources/blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/blog.css';

const ALL_POSTS = [
  { id: 1, title: "How AI Is Reshaping Enterprise Workflows in 2025", desc: "A deep dive into the tools, frameworks, and organizational shifts that are enabling companies to move faster and smarter than ever before.", readTime: "8 min read", date: "May 1, 2025", category: "AI & Innovation", featured: true },
  { id: 2, title: "Zero Trust Security: From Strategy to Execution", desc: "Learn how leading enterprises are implementing zero trust architectures to protect distributed workforces and sensitive data.", readTime: "6 min read", date: "Apr 22, 2025", category: "Security" },
  { id: 3, title: "The Real ROI of Employee Productivity Tools", desc: "New data shows that the right productivity stack can save each knowledge worker over 4 hours per week. Here's what that looks like.", readTime: "5 min read", date: "Apr 15, 2025", category: "Productivity" },
  { id: 4, title: "Cloud Modernization Without the Chaos", desc: "A practical playbook for enterprises migrating legacy systems to the cloud while maintaining uptime, compliance, and team momentum.", readTime: "7 min read", date: "Apr 8, 2025", category: "IT & Cloud" },
  { id: 5, title: "Building for Global Scale: Lessons from 50 Enterprise Deployments", desc: "We analyzed 50 global deployments to extract the patterns that separate smooth rollouts from painful ones.", readTime: "10 min read", date: "Mar 30, 2025", category: "Strategy" },
  { id: 6, title: "The Quiet Power of Async-First Organizations", desc: "Teams that default to asynchronous communication ship faster, burn out less, and retain employees longer.", readTime: "4 min read", date: "Mar 18, 2025", category: "Productivity" },
  { id: 7, title: "Why Most AI Pilots Fail — And How to Fix That", desc: "Only 15% of enterprise AI pilots make it to production. We break down the structural mistakes and how to avoid them.", readTime: "9 min read", date: "Mar 5, 2025", category: "AI & Innovation" },
  { id: 8, title: "Infrastructure as Code: A Maturity Model", desc: "From manual provisioning to fully automated environments — where does your organization sit, and what's next?", readTime: "6 min read", date: "Feb 20, 2025", category: "IT & Cloud" },
];

const CATEGORIES = ["All", "AI & Innovation", "Security", "Productivity", "IT & Cloud", "Strategy"];

const CATEGORY_COLORS = {
  "AI & Innovation": "#0066cc",
  "Security":        "#6d28d9",
  "Productivity":    "#059669",
  "IT & Cloud":      "#0891b2",
  "Strategy":        "#b45309",
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = ALL_POSTS.filter(p =>
    (filter === "All" || p.category === filter) &&
    (search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()))
  );

  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest     = filtered.filter(p => p.id !== featured?.id);

  return (
    <div className="blogss">
      <div className="blogss-sub-header">
        <Link to="/resources" className="blogss-back-link">← Resources</Link>
        <nav className="blogss-breadcrumb">
          <Link to="/resources">Resources</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="blogss-sub-hero">
       
        <h1 className="blogss-sub-title">Insights to keep you <span>ahead.</span></h1>
        <p className="blogss-hero-sub">
          Expert analysis, practical guides, and deep dives on the topics that matter most to enterprise teams.
        </p>
      </section>

      {/* Controls */}
      <div className="blogss-controls">
        <div className="blogss-search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search articles…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="blogss-filter-pills">
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`blogss-pill${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="blogss-blog-featured">
          <div className="blogss-blog-featured-body">
            <span
              className="blogss-cat-badge"
              style={{ "--cat-color": CATEGORY_COLORS[featured.category] || "#555" }}
            >
              {featured.category}
            </span>
            <h2>{featured.title}</h2>
            <p>{featured.desc}</p>
            <div className="blogss-blog-meta">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
            <button className="blogss-read-btn">Read article →</button>
          </div>
          <div className="blogss-blog-featured-visual">
            <div className="blogss-blog-featured-pattern" />
          </div>
        </div>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <section className="blogss-blog-grid-wrap">
          <div className="blogss-blog-grid">
            {rest.map(p => (
              <article key={p.id} className="blogss-blog-card">
                <span
                  className="blogss-cat-badge"
                  style={{ "--cat-color": CATEGORY_COLORS[p.category] || "#555" }}
                >
                  {p.category}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="blogss-blog-card-footer">
                  <span className="blogss-blog-meta-sm">{p.date} · {p.readTime}</span>
                  <button className="blogss-card-link">Read →</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <div className="blogss-empty">No articles match your search. Try a different keyword or category.</div>
      )}
    </div>
  );
}