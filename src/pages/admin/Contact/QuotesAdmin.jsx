import React, { useState } from "react";
import { ContactHeader } from "../Contact";
import "../../../styles/Admin/quotesAdmin.css";

// ── Mock Data ──────────────────────────────────────────────
const MOCK_QUOTES = [
  {
    id: "QUO-441F3A",
    firstName: "Sophea",
    lastName: "Nguon",
    email: "sophea.nguon@khmersoft.com",
    phone: "+855 17 234 567",
    company: "KhmerSoft Solutions",
    country: "Cambodia",
    product: "Enterprise Plan",
    seats: 50,
    message: "We need a custom quote for 50 seats with priority support included.",
    date: "14 May 2026",
    status: "Pending",
    budget: "$5,000–$10,000",
  },
  {
    id: "QUO-883C7D",
    firstName: "Vibol",
    lastName: "Chan",
    email: "vibol.chan@mekongdigital.io",
    phone: "+855 96 111 222",
    company: "Mekong Digital",
    country: "Cambodia",
    product: "Pro Plan",
    seats: 12,
    message: "Looking for an annual subscription quote with a non-profit discount.",
    date: "13 May 2026",
    status: "Quoted",
    budget: "$1,000–$3,000",
  },
  {
    id: "QUO-557E9B",
    firstName: "Lyda",
    lastName: "Prak",
    email: "lyda@startuphub.kh",
    phone: "+855 78 456 789",
    company: "StartupHub KH",
    country: "Cambodia",
    product: "Starter Plan",
    seats: 5,
    message: "Early-stage startup — interested in a pilot pricing option.",
    date: "12 May 2026",
    status: "Closed",
    budget: "< $500",
  },
];

const STATUS_COLOR = {
  pending:  { bg: "#FFF3CD", color: "#856404" },
  quoted:   { bg: "#D1ECF1", color: "#0C5460" },
  accepted: { bg: "#D4EDDA", color: "#155724" },
  closed:   { bg: "#E2D9F3", color: "#4B2E83" },
  declined: { bg: "#F8D7DA", color: "#721C24" },
};

export default function QuotesAdmin() {
  const [quotes]                = useState(MOCK_QUOTES);
  const [selected, setSelected]  = useState(null);
  const [search, setSearch]      = useState("");

  const filtered = quotes.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase())
  );

  const cardData = [
    { label: "Total Quote Requests", value: quotes.length,  dotClass: "dot-blue"   },
    { label: "Awaiting Response",    value: 8,              dotClass: "dot-yellow" },
    { label: "Avg. Deal Size",       value: "$4,200",       dotClass: "dot-green"  },
  ];

  return (
    <div className="quo-root">

      {/* Shared header — "Quotes" tab highlighted */}
      <ContactHeader activeLabel="Quotes" />

      <div className="quo-body">

        {/* Top bar */}
        <div className="quo-top-bar">
          <div>
            <p className="quo-top-title">Quote Requests</p>
            <p className="quo-top-sub">Review and respond to pricing and plan enquiries.</p>
          </div>
          <div className="quo-search-wrap">
            <svg className="quo-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="quo-search"
              type="text"
              placeholder="Search quotes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="quo-cards">
          {cardData.map((c) => (
            <div key={c.label} className="quo-card">
              <p className="quo-card-label">
                <span className={`quo-card-dot ${c.dotClass}`} />
                {c.label}
              </p>
              <p className="quo-card-value">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="quo-table-wrap">
          <div className="quo-table-head">
            <h2 className="quo-table-title">Recent Quote Requests</h2>
            <span className="quo-result-count">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <table className="quo-table">
            <thead>
              <tr>
                {["ID", "Requester", "Product", "Organisation", "Budget", "Date", "Status", ""].map((h) => (
                  <th key={h} className="quo-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="quo-td quo-empty">No results found.</td>
                </tr>
              ) : (
                filtered.map((item, i) => {
                  const key = item.status.toLowerCase();
                  const sc  = STATUS_COLOR[key] || { bg: "#eee", color: "#333" };
                  return (
                    <tr key={item.id} className={i % 2 === 0 ? "quo-row-even" : "quo-row-odd"}>
                      <td className="quo-td quo-col-id">{item.id}</td>
                      <td className="quo-td">
                        <span className="quo-sender-name">{item.firstName} {item.lastName}</span>
                        <span className="quo-sender-email">{item.email}</span>
                      </td>
                      <td className="quo-td">
                        <span className="quo-topic-tag">{item.product}</span>
                      </td>
                      <td className="quo-td quo-col-muted">{item.company || "—"}</td>
                      <td className="quo-td quo-col-muted">{item.budget}</td>
                      <td className="quo-td quo-col-muted">{item.date}</td>
                      <td className="quo-td">
                        <span
                          className="quo-badge"
                          style={{ background: sc.bg, color: sc.color }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="quo-td">
                        <button
                          className="quo-view-btn"
                          onClick={() => setSelected(item)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="quo-overlay" onClick={() => setSelected(null)}>
          <div className="quo-modal" onClick={(e) => e.stopPropagation()}>
            <div className="quo-modal-header">
              <h2 className="quo-modal-title">Quote Request Details</h2>
              <button className="quo-close-btn" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="quo-modal-body">
              <div className="quo-modal-grid">
                <div>
                  <p className="quo-modal-label">From</p>
                  <p className="quo-modal-value">{selected.firstName} {selected.lastName}</p>
                  <p className="quo-modal-label">Contact</p>
                  <p className="quo-modal-value">{selected.email}<br />{selected.phone}</p>
                </div>
                <div>
                  <p className="quo-modal-label">Location / Org</p>
                  <p className="quo-modal-value">{selected.company}<br />{selected.country}</p>
                  <p className="quo-modal-label">Reference</p>
                  <p className="quo-modal-value quo-modal-ref">{selected.id}</p>
                </div>
              </div>
              <div className="quo-modal-meta-row">
                <div>
                  <p className="quo-modal-label">Product</p>
                  <p className="quo-modal-value">{selected.product}</p>
                </div>
                <div>
                  <p className="quo-modal-label">Seats</p>
                  <p className="quo-modal-value">{selected.seats}</p>
                </div>
                <div>
                  <p className="quo-modal-label">Budget Range</p>
                  <p className="quo-modal-value">{selected.budget}</p>
                </div>
              </div>
              <div>
                <p className="quo-modal-label">Message</p>
                <p className="quo-modal-message">{selected.message}</p>
              </div>
            </div>
            <div className="quo-modal-footer">
              <button className="quo-btn-secondary" onClick={() => setSelected(null)}>Close</button>
              <button className="quo-btn-primary">Send Quote</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}