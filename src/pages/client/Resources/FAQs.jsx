// src/pages/client/Resources/FAQs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/faqs.css';

const ALL_FAQS = [
  {
    id: 1,
    category: "Getting Started",
    q: "How do I get started with enterprise deployment?",
    a: "Getting started is straightforward. Our Enterprise team will work with you to assess your current environment, define your deployment goals, and create a phased rollout plan. Most enterprises are fully deployed within 60–90 days, including training and onboarding.",
  },
  {
    id: 2,
    category: "Security & Compliance",
    q: "What security certifications and compliance standards are supported?",
    a: "Our platform is certified against SOC 2 Type II, ISO 27001, HIPAA, FedRAMP, and GDPR frameworks. We also support custom compliance configurations for regulated industries such as finance, healthcare, and government.",
  },
  {
    id: 3,
    category: "Platform",
    q: "Can resources be customized for different teams or regions?",
    a: "Yes. Our platform supports granular role-based access controls, regional content segmentation, and department-specific resource libraries. Admins can configure visibility rules, language settings, and approval workflows per team.",
  },
  {
    id: 4,
    category: "Support",
    q: "What support is available for enterprise accounts?",
    a: "Enterprise accounts receive dedicated Customer Success management, 24/7 priority support with a 1-hour SLA, quarterly business reviews, and access to our private beta program for early feature access.",
  },
  {
    id: 5,
    category: "Getting Started",
    q: "Is there a trial or pilot program available?",
    a: "Yes. We offer a 30-day enterprise pilot with full feature access for up to 50 users. Pilots include onboarding assistance, a dedicated implementation specialist, and a readout report at the close of the trial period.",
  },
  {
    id: 6,
    category: "Pricing",
    q: "How is pricing structured for enterprise plans?",
    a: "Enterprise pricing is based on seat count, selected modules, and contract length. Volume discounts apply at 250, 500, and 1,000+ seats. Multi-year agreements include additional benefits and locked-in pricing. Contact our team for a custom quote.",
  },
  {
    id: 7,
    category: "Platform",
    q: "Where can I download all available resources?",
    a: "All whitepapers, case studies, and guides are available individually on this page or as a bundled download via your Enterprise portal. Registered users can also receive new resources automatically via our digest newsletter.",
  },
  {
    id: 8,
    category: "Security & Compliance",
    q: "How is data stored and who has access?",
    a: "Data is stored in SOC 2 certified data centres with AES-256 encryption at rest and TLS 1.3 in transit. Access is governed by your own identity provider via SAML 2.0 or OIDC, and all administrator actions are fully audited.",
  },
  {
    id: 9,
    category: "Support",
    q: "What is the average time to resolve a support ticket?",
    a: "Enterprise accounts have a guaranteed 1-hour first response SLA. Median resolution time for P1 issues is under 4 hours. P2 and P3 issues are typically resolved within 1 business day and 3 business days respectively.",
  },
  {
    id: 10,
    category: "Pricing",
    q: "Are there discounts for non-profit or educational institutions?",
    a: "Yes. We offer reduced pricing for verified non-profit organisations and academic institutions. Discounts range from 20–40% depending on size and contract length. Contact our team to verify eligibility and receive a custom quote.",
  },
];

const CATEGORIES = ["All", "Getting Started", "Security & Compliance", "Platform", "Support", "Pricing"];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faqs-item${isOpen ? " open" : ""}`}>
      <button className="faqs-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <span className="faqs-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="faqs-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [search,      setSearch]      = useState("");
  const [filter,      setFilter]      = useState("All");
  const [openId,      setOpenId]      = useState(null);
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", question: "" });

  const filtered = ALL_FAQS.filter(f =>
    (filter === "All" || f.category === filter) &&
    (search === "" ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase()))
  );

  const grouped = CATEGORIES
    .filter(c => c !== "All")
    .map(cat => ({
      cat,
      items: filtered.filter(f => f.category === cat),
    }))
    .filter(g => g.items.length > 0);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSent(true);
  };

  return (
    <div className="faqs">

      {/* ── Sticky breadcrumb bar ── */}
      <div className="faqs-sub-header">
        <Link to="/resources" className="faqs-back-link">← Resources</Link>
        <nav className="faqs-breadcrumb">
          <Link to="/resources">Resources</Link>
          <span>/</span>
          <span>FAQs</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="faqs-sub-hero">
        <p className="faqs-eyebrow">FAQs</p>
        <h1 className="faqs-sub-title">
          Questions? <span>We have answers.</span>
        </h1>
        <p className="faqs-hero-sub">
          Everything you need to know about enterprise deployment, security, support, and pricing.
        </p>
      </section>

      {/* ── Search + Filter ── */}
      <div className="faqs-controls">
        <div className="faqs-search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search questions…"
            value={search}
            onChange={e => { setSearch(e.target.value); setOpenId(null); }}
          />
        </div>

        <div className="faqs-filter-pills">
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`faqs-pill${filter === c ? " active" : ""}`}
              onClick={() => { setFilter(c); setOpenId(null); }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ── FAQ list ── */}
      <section className="faqs-wrap">
        {filter === "All" && search === "" ? (

          /* Grouped by category */
          grouped.map(g => (
            <div key={g.cat} className="faqs-group">
              <h3 className="faqs-group-title">{g.cat}</h3>
              {g.items.map(f => (
                <FaqItem
                  key={f.id}
                  q={f.q}
                  a={f.a}
                  isOpen={openId === f.id}
                  onToggle={() => setOpenId(openId === f.id ? null : f.id)}
                />
              ))}
            </div>
          ))

        ) : filtered.length > 0 ? (

          /* Flat filtered list */
          <div className="faqs-group">
            {filtered.map(f => (
              <FaqItem
                key={f.id}
                q={f.q}
                a={f.a}
                isOpen={openId === f.id}
                onToggle={() => setOpenId(openId === f.id ? null : f.id)}
              />
            ))}
          </div>

        ) : (

          /* Empty state */
          <div className="faqs-empty">
            No questions match "<strong>{search}</strong>". Try a different keyword or browse all categories.
          </div>

        )}
      </section>

      {/* ── Ask a question ── */}
      <section className="faqs-ask">
        <div className="faqs-ask-inner">
          <h2>Still have a question?</h2>
          <p>Can't find the answer you're looking for? Send it directly to our enterprise team.</p>

          {contactSent ? (
            <div className="faqs-success-message" style={{ maxWidth: 480, margin: "0 auto" }}>
              <h3>Question received.</h3>
              <p>Our team will get back to you within 1 business day.</p>
            </div>
          ) : (
            <form className="faqs-ask-form" onSubmit={handleContactSubmit} noValidate>
              <div className="faqs-form-grid">
                <div className="faqs-field">
                  <label htmlFor="aq-name">Your name</label>
                  <input
                    id="aq-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="faqs-field">
                  <label htmlFor="aq-email">Work email</label>
                  <input
                    id="aq-email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
              </div>
              <div className="faqs-field">
                <label htmlFor="aq-question">Your question</label>
                <textarea
                  id="aq-question"
                  name="question"
                  rows={3}
                  placeholder="Ask us anything about our platform, pricing, or deployment…"
                  value={contactForm.question}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <button type="submit" className="faqs-btn-submit">
                Submit question →
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}