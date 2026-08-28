// src/pages/client/Resources/Casestudies.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/casestudies.css';

const CASES = [
  {
    id: 1,
    company: "FinCore Bank",
    industry: "Financial Services",
    employees: "14,000",
    countries: 30,
    title: "FinCore Reduced IT Costs by 38% With Unified Device Management",
    desc: "With 14,000 employees across 30 countries, FinCore needed a scalable, secure, and seamless device management solution. Here's how they did it.",
    challenge: "Legacy device management systems created security gaps and onboarding delays across international offices.",
    solution: "Deployed a unified endpoint management platform with zero-touch provisioning and automated compliance monitoring.",
    results: ["38% cost reduction", "2× faster onboarding", "99.9% uptime", "Zero security incidents in 12 months"],
    color: "#0e7490",
  },
  {
    id: 2,
    company: "MedAxis Health",
    industry: "Healthcare",
    employees: "6,200",
    countries: 1,
    title: "MedAxis Modernized Patient Care Coordination Across 80 Clinics",
    desc: "MedAxis deployed a new integrated platform across all facilities, enabling real-time care coordination and eliminating paperwork bottlenecks.",
    challenge: "Paper-based referral systems caused 3–5 day delays in specialist referrals and poor care continuity.",
    solution: "Integrated patient data platform with real-time referral workflows and secure messaging across all 80 clinic locations.",
    results: ["60% less paperwork", "3× faster referrals", "4.8★ staff satisfaction", "18% reduction in readmissions"],
    color: "#7c3aed",
  },
  {
    id: 3,
    company: "VectorTech Manufacturing",
    industry: "Manufacturing",
    employees: "3,800",
    countries: 8,
    title: "VectorTech Cut Supply Chain Delays by 42% Using Predictive Analytics",
    desc: "By replacing spreadsheets with AI-driven forecasting tools, VectorTech's supply chain team now anticipates disruptions before they happen.",
    challenge: "Manual spreadsheet-based supply chain tracking led to reactive decisions and frequent production stoppages.",
    solution: "Implemented an AI-powered predictive analytics layer integrated with existing ERP systems across all 8 countries.",
    results: ["42% fewer delays", "22% inventory savings", "$8M annual impact", "15% faster supplier negotiation"],
    color: "#c2410c",
  },
];

const INDUSTRIES = ["All", "Financial Services", "Healthcare", "Manufacturing"];

export default function CasestudiPage() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = CASES.filter(c => filter === "All" || c.industry === filter);

  return (
    <div className="res">
      <div className="res-sub-header">
        <Link to="/resources" className="res-back-link">← Resources</Link>
        <nav className="res-breadcrumb">
          <Link to="/resources">Resources</Link>
          <span>/</span>
          <span>Case Studies</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="res-sub-hero">
        <p className="res-eyebrow">Case Studies</p>
        <h1 className="res-sub-title">Real results. <span>Real organisations.</span></h1>
        <p className="res-hero-sub">
          See how enterprises across industries achieve measurable outcomes with modern technology and strategy.
        </p>
      </section>

      {/* Stats bar */}
      <div className="res-stat-bar">
        <div className="res-stat-item"><span className="res-stat-num">40+</span><span className="res-stat-lbl">Published studies</span></div>
        <div className="res-stat-div" />
        <div className="res-stat-item"><span className="res-stat-num">12</span><span className="res-stat-lbl">Industries</span></div>
        <div className="res-stat-div" />
        <div className="res-stat-item"><span className="res-stat-num">$2B+</span><span className="res-stat-lbl">Client impact</span></div>
        <div className="res-stat-div" />
        <div className="res-stat-item"><span className="res-stat-num">95%</span><span className="res-stat-lbl">Client retention</span></div>
      </div>

      {/* Filter */}
      <div className="res-controls" style={{ justifyContent: "center" }}>
        <div className="res-filter-pills">
          {INDUSTRIES.map(ind => (
            <button
              key={ind}
              className={`res-pill${filter === ind ? " active" : ""}`}
              onClick={() => setFilter(ind)}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Case cards */}
      <section className="res-cases-list">
        {filtered.map(cs => (
          <article key={cs.id} className="res-case-card">
            <div className="res-case-accent" style={{ background: cs.color }} />
            <div className="res-case-body">
              <div className="res-case-top">
                <div>
                  <span className="res-case-industry" style={{ color: cs.color }}>{cs.industry}</span>
                  <h2 className="res-case-company">{cs.company}</h2>
                  <p className="res-case-sub">{cs.employees} employees · {cs.countries} {cs.countries === 1 ? "country" : "countries"}</p>
                </div>
                <div className="res-case-results-row">
                  {cs.results.slice(0, 2).map(r => (
                    <span key={r} className="res-result-chip" style={{ "--chip-color": cs.color }}>{r}</span>
                  ))}
                </div>
              </div>

              <h3 className="res-case-title">{cs.title}</h3>
              <p className="res-case-desc">{cs.desc}</p>

              {expanded === cs.id && (
                <div className="res-case-expanded">
                  <div className="res-case-detail">
                    <h4>Challenge</h4>
                    <p>{cs.challenge}</p>
                  </div>
                  <div className="res-case-detail">
                    <h4>Solution</h4>
                    <p>{cs.solution}</p>
                  </div>
                  <div className="res-case-detail">
                    <h4>Results</h4>
                    <ul className="res-results-list">
                      {cs.results.map(r => (
                        <li key={r}>
                          <span className="res-result-dot" style={{ background: cs.color }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="res-case-footer">
                <button
                  className="res-case-toggle"
                  onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
                >
                  {expanded === cs.id ? "Show less ↑" : "Read full study ↓"}
                </button>
                <div className="res-all-chips">
                  {cs.results.slice(2).map(r => (
                    <span key={r} className="res-result-chip" style={{ "--chip-color": cs.color }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}