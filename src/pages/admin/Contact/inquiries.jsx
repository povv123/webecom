import React, { useState } from "react";
import { ContactHeader } from "../Contact";
import "../../../styles/Admin/inquiriesAdmin.css";

// ── Mock Data ──────────────────────────────────────────────
const MOCK_INQUIRIES = [
  {
    id: "INQ-772A1B",
    firstName: "Sok",
    lastName: "Heng",
    email: "sok.heng@gmail.com",
    phone: "+855 12 345 678",
    company: "Angkor Tech",
    country: "Cambodia",
    topic: "Sales & pricing",
    message: "I am interested in a bulk license for our engineering team.",
    date: "12 May 2026",
    status: "New",
  },
  {
    id: "INQ-992B2C",
    firstName: "Dara",
    lastName: "Kim",
    email: "dara.kim@kh.com",
    phone: "+855 10 999 000",
    company: "Phnom Penh Sol",
    country: "Cambodia",
    topic: "Technical support",
    message: "Our API integration is returning a 500 error since last night.",
    date: "11 May 2026",
    status: "In Progress",
  },
];

const STATUS_COLOR = {
  new:           { bg: "#D1ECF1", color: "#0C5460" },
  "in-progress": { bg: "#FFF3CD", color: "#856404" },
  resolved:      { bg: "#D4EDDA", color: "#155724" },
  closed:        { bg: "#E2D9F3", color: "#4B2E83" },
};

export default function InquiriesAdmin() {
  const [inquiries]             = useState(MOCK_INQUIRIES);
  const [selected, setSelected]  = useState(null);
  const [search, setSearch]      = useState("");

  const filtered = inquiries.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.topic.toLowerCase().includes(search.toLowerCase())
  );

  const cardData = [
    { label: "Total Submissions",  value: inquiries.length, dotClass: "dot-blue"   },
    { label: "Pending Response",   value: 14,               dotClass: "dot-yellow" },
    { label: "Avg. Response Time", value: "1.2h",           dotClass: "dot-green"  },
  ];

  return (
    <div className="inq-root">

      {/* Shared header — "Inquiries" tab highlighted */}
      <ContactHeader activeLabel="Inquiries" />

      <div className="inq-body">

        {/* Top bar */}
        <div className="inq-top-bar">
          <div>
            <p className="inq-top-title">Inquiries</p>
            <p className="inq-top-sub">Manage and respond to general customer requests.</p>
          </div>
          <div className="inq-search-wrap">
            <svg className="inq-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="inq-search"
              type="text"
              placeholder="Search inquiries…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="inq-cards">
          {cardData.map((c) => (
            <div key={c.label} className="inq-card">
              <p className="inq-card-label">
                <span className={`inq-card-dot ${c.dotClass}`} />
                {c.label}
              </p>
              <p className="inq-card-value">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="inq-table-wrap">
          <div className="inq-table-head">
            <h2 className="inq-table-title">Recent Inquiries</h2>
            <span className="inq-result-count">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <table className="inq-table">
            <thead>
              <tr>
                {["ID", "Sender", "Topic", "Organisation", "Date", "Status", ""].map((h) => (
                  <th key={h} className="inq-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="inq-td inq-empty">No results found.</td>
                </tr>
              ) : (
                filtered.map((item, i) => {
                  const key = item.status.toLowerCase().replace(" ", "-");
                  const sc  = STATUS_COLOR[key] || { bg: "#eee", color: "#333" };
                  return (
                    <tr key={item.id} className={i % 2 === 0 ? "inq-row-even" : "inq-row-odd"}>
                      <td className="inq-td inq-col-id">{item.id}</td>
                      <td className="inq-td">
                        <span className="inq-sender-name">{item.firstName} {item.lastName}</span>
                        <span className="inq-sender-email">{item.email}</span>
                      </td>
                      <td className="inq-td">
                        <span className="inq-topic-tag">{item.topic}</span>
                      </td>
                      <td className="inq-td inq-col-muted">{item.company || "—"}</td>
                      <td className="inq-td inq-col-muted">{item.date}</td>
                      <td className="inq-td">
                        <span
                          className="inq-badge"
                          style={{ background: sc.bg, color: sc.color }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="inq-td">
                        <button
                          className="inq-view-btn"
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
        <div className="inq-overlay" onClick={() => setSelected(null)}>
          <div className="inq-modal" onClick={(e) => e.stopPropagation()}>
            <div className="inq-modal-header">
              <h2 className="inq-modal-title">Inquiry Details</h2>
              <button className="inq-close-btn" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="inq-modal-body">
              <div className="inq-modal-grid">
                <div>
                  <p className="inq-modal-label">From</p>
                  <p className="inq-modal-value">{selected.firstName} {selected.lastName}</p>
                  <p className="inq-modal-label">Contact</p>
                  <p className="inq-modal-value">{selected.email}<br />{selected.phone}</p>
                </div>
                <div>
                  <p className="inq-modal-label">Location / Org</p>
                  <p className="inq-modal-value">{selected.company}<br />{selected.country}</p>
                  <p className="inq-modal-label">Reference</p>
                  <p className="inq-modal-value inq-modal-ref">{selected.id}</p>
                </div>
              </div>
              <div>
                <p className="inq-modal-label">Message</p>
                <p className="inq-modal-message">{selected.message}</p>
              </div>
            </div>
            <div className="inq-modal-footer">
              <button className="inq-btn-secondary" onClick={() => setSelected(null)}>Close</button>
              <button className="inq-btn-primary">Reply via Email</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}