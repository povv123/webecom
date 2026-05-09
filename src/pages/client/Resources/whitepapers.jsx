// src/pages/client/Resources/whitepapers.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/whitepaper.css';

const PAPERS = [
  {
    id: 1,
    title: "The Total Economic Impact of Modern Device Management",
    desc: "Commissioned research analyzing cost savings, productivity gains, and security improvements across 200 enterprises over 3 years.",
    tags: ["IT", "ROI", "Research"],
    pages: 48,
    year: 2025,
    category: "Research",
    audience: "IT Leaders, CFOs",
    abstract: "This study quantifies the financial and operational benefits organizations realize when modernizing their device management infrastructure. Based on interviews with 200 enterprise IT and finance leaders, the research models a composite organization and projects 3-year cost savings, productivity gains, and risk reduction metrics.",
  },
  {
    id: 2,
    title: "Enterprise AI Readiness: A Framework for 2025 and Beyond",
    desc: "A comprehensive framework to assess your organization's AI readiness across data, talent, infrastructure, and governance dimensions.",
    tags: ["AI", "Strategy", "Framework"],
    pages: 36,
    year: 2025,
    category: "Framework",
    audience: "C-Suite, Strategy Teams",
    abstract: "Organizations increasingly invest in AI capabilities without a clear readiness baseline. This framework defines five maturity stages across four dimensions — data, talent, infrastructure, and governance — and provides a self-assessment tool enterprises can use to identify gaps and prioritize investments.",
  },
  {
    id: 3,
    title: "Security at Scale: Protecting a Distributed Enterprise Workforce",
    desc: "Best practices, architectural guidance, and real-world benchmarks for securing hybrid and remote enterprise environments.",
    tags: ["Security", "Remote Work", "Best Practices"],
    pages: 52,
    year: 2024,
    category: "Best Practices",
    audience: "CISOs, Security Teams",
    abstract: "The shift to distributed work has expanded the enterprise attack surface dramatically. This paper provides architectural patterns, vendor-neutral tooling guidance, and benchmark data from 150 security teams on how they have adapted their postures to protect endpoints, identities, and data across hybrid environments.",
  },
  {
    id: 4,
    title: "The Future of Work: Productivity Trends Reshaping the Enterprise",
    desc: "Survey data from 1,200 enterprise leaders on how work is evolving — and which investments are paying off most.",
    tags: ["Productivity", "Future of Work", "Survey"],
    pages: 28,
    year: 2024,
    category: "Survey",
    audience: "HR, Operations, Leadership",
    abstract: "Drawing on responses from 1,200 enterprise leaders across 18 countries, this annual survey report identifies the workplace investments delivering the strongest measurable returns — from async-first communication policies to AI-assisted workflows and outcome-based performance tracking.",
  },
];

const CATEGORIES = ["All", "Research", "Framework", "Best Practices", "Survey"];

export default function WhitepapPage() {
  const [filter,     setFilter]     = useState("All");
  const [expanded,   setExpanded]   = useState(null);
  const [downloaded, setDownloaded] = useState([]);

  const filtered = PAPERS.filter(p => filter === "All" || p.category === filter);

  const handleDownload = (id) => {
    if (!downloaded.includes(id)) setDownloaded(prev => [...prev, id]);
  };

  return (
    <div className="whitepap">
      <div className="whitepap-sub-header">
        <Link to="/resources" className="whitepap-back-link">← Resources</Link>
        <nav className="whitepap-breadcrumb">
          <Link to="/resources">Resources</Link>
          <span>/</span>
          <span>Whitepapers</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="whitepap-sub-hero">
        <p className="whitepap-eyebrow">Whitepapers</p>
        <h1 className="whitepap-sub-title">Research-backed. <span>Decision-ready.</span></h1>
        <p className="whitepap-hero-sub">
          Deep research reports and technical guides authored by industry analysts and our expert team.
        </p>
      </section>

      {/* Stats */}
      <div className="whitepap-stat-bar">
        <div className="whitepap-stat-item"><span className="whitepap-stat-num">18</span><span className="whitepap-stat-lbl">Published papers</span></div>
        <div className="whitepap-stat-div" />
        <div className="whitepap-stat-item"><span className="whitepap-stat-num">1,200+</span><span className="whitepap-stat-lbl">Survey respondents</span></div>
        <div className="whitepap-stat-div" />
        <div className="whitepap-stat-item"><span className="whitepap-stat-num">200</span><span className="whitepap-stat-lbl">Enterprise case subjects</span></div>
        <div className="whitepap-stat-div" />
        <div className="whitepap-stat-item"><span className="whitepap-stat-num">Free</span><span className="whitepap-stat-lbl">All downloads</span></div>
      </div>

      {/* Filter */}
      <div className="whitepap-controls">
        <div className="whitepap-filter-pills">
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`whitepap-pill${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Papers grid */}
      <section className="whitepap-grid-wrap">
        <div className="whitepap-grid">
          {filtered.map(wp => (
            <article key={wp.id} className="whitepap-card">
              <div className="whitepap-icon">
                <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
                  <rect x="1" y="1" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 8h12M5 13h12M5 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 1v6h7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="whitepap-body">
                <div className="whitepap-meta-row">
                  <span className="whitepap-category">{wp.category}</span>
                  <span className="whitepap-year">{wp.year}</span>
                </div>

                <h3 className="whitepap-title">{wp.title}</h3>
                <p className="whitepap-desc">{wp.desc}</p>

                <div className="whitepap-tags">
                  {wp.tags.map(t => <span key={t} className="whitepap-tag">{t}</span>)}
                  <span className="whitepap-tag">{wp.pages} pages</span>
                </div>

                {expanded === wp.id && (
                  <div className="whitepap-abstract">
                    <div className="whitepap-abstract-row">
                      <span className="whitepap-ab-label">Audience</span>
                      <span>{wp.audience}</span>
                    </div>
                    <div className="whitepap-abstract-row">
                      <span className="whitepap-ab-label">Abstract</span>
                      <span>{wp.abstract}</span>
                    </div>
                  </div>
                )}

                <div className="whitepap-footer">
                  <button
                    className="whitepap-expand"
                    onClick={() => setExpanded(expanded === wp.id ? null : wp.id)}
                  >
                    {expanded === wp.id ? "Show less" : "Preview"}
                  </button>
                  <button
                    className={`whitepap-download${downloaded.includes(wp.id) ? " downloaded" : ""}`}
                    onClick={() => handleDownload(wp.id)}
                  >
                    {downloaded.includes(wp.id) ? (
                      <>
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Downloaded
                      </>
                    ) : (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13M7 11l5 5 5-5M5 21h14"/></svg>
                        Download PDF
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}