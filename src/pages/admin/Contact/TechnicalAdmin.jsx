import React, { useState } from "react";
import { ContactHeader } from "../Contact";
import "../../../styles/Admin/technicalAdmin.css";

// ── Mock Data ──────────────────────────────────────────────
const MOCK_TICKETS = [
  {
    id: "TEC-110A4C",
    firstName: "Ratha",
    lastName: "Oum",
    email: "ratha.oum@devhub.kh",
    phone: "+855 11 888 111",
    company: "DevHub KH",
    country: "Cambodia",
    category: "API / Integration",
    severity: "High",
    message: "Webhook events are not being delivered to our endpoint. Status 200 returned but no payload arrives.",
    date: "15 May 2026",
    status: "Open",
    version: "v3.2.1",
  },
  {
    id: "TEC-228B6E",
    firstName: "Chanthy",
    lastName: "Ros",
    email: "chanthy@ppsystems.com",
    phone: "+855 23 456 789",
    company: "PP Systems",
    country: "Cambodia",
    category: "Authentication",
    severity: "Medium",
    message: "SSO via SAML is failing intermittently for a subset of users. Error code: AUTH_SAML_003.",
    date: "14 May 2026",
    status: "In Progress",
    version: "v3.1.8",
  },
  {
    id: "TEC-339D7F",
    firstName: "Bunna",
    lastName: "Hout",
    email: "bunna.hout@logixkh.co",
    phone: "+855 89 321 654",
    company: "LogixKH",
    country: "Cambodia",
    category: "Performance",
    severity: "Low",
    message: "Dashboard load time exceeds 8 seconds on first paint. Only affects users in SEA region.",
    date: "13 May 2026",
    status: "Resolved",
    version: "v3.2.0",
  },
];

const STATUS_COLOR = {
  open:        { bg: "#F8D7DA", color: "#721C24" },
  "in-progress": { bg: "#FFF3CD", color: "#856404" },
  resolved:    { bg: "#D4EDDA", color: "#155724" },
  closed:      { bg: "#E2D9F3", color: "#4B2E83" },
};

const SEVERITY_COLOR = {
  high:   { bg: "#FDE8E8", color: "#C81E1E" },
  medium: { bg: "#FEF3C7", color: "#92400E" },
  low:    { bg: "#ECFDF5", color: "#065F46" },
};

export default function TechnicalAdmin() {
  const [tickets]               = useState(MOCK_TICKETS);
  const [selected, setSelected]  = useState(null);
  const [search, setSearch]      = useState("");

  const filtered = tickets.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase())
  );

  const cardData = [
    { label: "Open Tickets",     value: tickets.filter((t) => t.status === "Open").length, dotClass: "dot-red"    },
    { label: "In Progress",      value: tickets.filter((t) => t.status === "In Progress").length, dotClass: "dot-yellow" },
    { label: "Avg. Resolution",  value: "3.4h",                                            dotClass: "dot-green"  },
  ];

  return (
    <div className="tec-root">

      {/* Shared header — "Technical" tab highlighted */}
      <ContactHeader activeLabel="Technical" />

      <div className="tec-body">

        {/* Top bar */}
        <div className="tec-top-bar">
          <div>
            <p className="tec-top-title">Technical Support</p>
            <p className="tec-top-sub">Track and resolve technical issues reported by customers.</p>
          </div>
          <div className="tec-search-wrap">
            <svg className="tec-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="tec-search"
              type="text"
              placeholder="Search tickets…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="tec-cards">
          {cardData.map((c) => (
            <div key={c.label} className="tec-card">
              <p className="tec-card-label">
                <span className={`tec-card-dot ${c.dotClass}`} />
                {c.label}
              </p>
              <p className="tec-card-value">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="tec-table-wrap">
          <div className="tec-table-head">
            <h2 className="tec-table-title">Support Tickets</h2>
            <span className="tec-result-count">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <table className="tec-table">
            <thead>
              <tr>
                {["Ticket ID", "Reporter", "Category", "Organisation", "Severity", "Date", "Status", ""].map((h) => (
                  <th key={h} className="tec-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="tec-td tec-empty">No results found.</td>
                </tr>
              ) : (
                filtered.map((item, i) => {
                  const stKey  = item.status.toLowerCase().replace(" ", "-");
                  const sevKey = item.severity.toLowerCase();
                  const sc     = STATUS_COLOR[stKey]   || { bg: "#eee", color: "#333" };
                  const sev    = SEVERITY_COLOR[sevKey] || { bg: "#eee", color: "#333" };
                  return (
                    <tr key={item.id} className={i % 2 === 0 ? "tec-row-even" : "tec-row-odd"}>
                      <td className="tec-td tec-col-id">{item.id}</td>
                      <td className="tec-td">
                        <span className="tec-sender-name">{item.firstName} {item.lastName}</span>
                        <span className="tec-sender-email">{item.email}</span>
                      </td>
                      <td className="tec-td">
                        <span className="tec-topic-tag">{item.category}</span>
                      </td>
                      <td className="tec-td tec-col-muted">{item.company || "—"}</td>
                      <td className="tec-td">
                        <span
                          className="tec-badge tec-severity"
                          style={{ background: sev.bg, color: sev.color }}
                        >
                          {item.severity}
                        </span>
                      </td>
                      <td className="tec-td tec-col-muted">{item.date}</td>
                      <td className="tec-td">
                        <span
                          className="tec-badge"
                          style={{ background: sc.bg, color: sc.color }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="tec-td">
                        <button
                          className="tec-view-btn"
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
        <div className="tec-overlay" onClick={() => setSelected(null)}>
          <div className="tec-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tec-modal-header">
              <h2 className="tec-modal-title">Ticket Details</h2>
              <button className="tec-close-btn" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="tec-modal-body">
              <div className="tec-modal-grid">
                <div>
                  <p className="tec-modal-label">Reporter</p>
                  <p className="tec-modal-value">{selected.firstName} {selected.lastName}</p>
                  <p className="tec-modal-label">Contact</p>
                  <p className="tec-modal-value">{selected.email}<br />{selected.phone}</p>
                </div>
                <div>
                  <p className="tec-modal-label">Location / Org</p>
                  <p className="tec-modal-value">{selected.company}<br />{selected.country}</p>
                  <p className="tec-modal-label">Reference</p>
                  <p className="tec-modal-value tec-modal-ref">{selected.id}</p>
                </div>
              </div>
              <div className="tec-modal-meta-row">
                <div>
                  <p className="tec-modal-label">Category</p>
                  <p className="tec-modal-value">{selected.category}</p>
                </div>
                <div>
                  <p className="tec-modal-label">Version</p>
                  <p className="tec-modal-value">{selected.version}</p>
                </div>
                <div>
                  <p className="tec-modal-label">Severity</p>
                  <p className="tec-modal-value">{selected.severity}</p>
                </div>
              </div>
              <div>
                <p className="tec-modal-label">Issue Description</p>
                <p className="tec-modal-message">{selected.message}</p>
              </div>
            </div>
            <div className="tec-modal-footer">
              <button className="tec-btn-secondary" onClick={() => setSelected(null)}>Close</button>
              <button className="tec-btn-primary">Assign &amp; Respond</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}