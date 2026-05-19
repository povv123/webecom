import React, { useState } from "react";
import { ContactHeader } from "../Contact";
import "../../../styles/Admin/returnsAdmin.css";

// ── Mock Data ──────────────────────────────────────────────
const MOCK_RETURNS = [
  {
    id: "RET-301A2F",
    firstName: "Maly",
    lastName: "Sok",
    email: "maly.sok@inbox.kh",
    phone: "+855 12 111 222",
    company: "Maly Retail Co.",
    country: "Cambodia",
    orderId: "ORD-88821",
    item: "Laptop ASUS VivoBook 15",
    reason: "Defective product",
    message: "The screen flickers constantly after first boot. Requesting a full refund.",
    date: "15 May 2026",
    status: "Pending",
    refundAmount: "$749.00",
  },
  {
    id: "RET-402B7C",
    firstName: "Piseth",
    lastName: "Ean",
    email: "piseth.ean@khmerbiz.com",
    phone: "+855 96 333 444",
    company: "KhmerBiz Ltd.",
    country: "Cambodia",
    orderId: "ORD-77654",
    item: "Ergonomic Office Chair",
    reason: "Wrong item received",
    message: "We ordered the black variant but received grey. Need exchange or refund.",
    date: "14 May 2026",
    status: "Approved",
    refundAmount: "$220.00",
  },
  {
    id: "RET-503C9D",
    firstName: "Sreyla",
    lastName: "Noun",
    email: "sreyla@freshstart.kh",
    phone: "+855 78 555 666",
    company: "FreshStart KH",
    country: "Cambodia",
    orderId: "ORD-66543",
    item: "iPhone 15 Pro Case",
    reason: "Changed mind",
    message: "No longer need this item. Product is unopened and in original packaging.",
    date: "13 May 2026",
    status: "Rejected",
    refundAmount: "$18.00",
  },
  {
    id: "RET-604D1E",
    firstName: "Daro",
    lastName: "Keo",
    email: "daro.keo@techvision.io",
    phone: "+855 23 777 888",
    company: "TechVision IO",
    country: "Cambodia",
    orderId: "ORD-55412",
    item: "Mechanical Keyboard — TKL",
    reason: "Damaged in shipping",
    message: "Item arrived with a cracked case. Photos attached to original email.",
    date: "12 May 2026",
    status: "Refunded",
    refundAmount: "$115.00",
  },
];

const STATUS_COLOR = {
  pending:  { bg: "#FFF3CD", color: "#856404" },
  approved: { bg: "#D1ECF1", color: "#0C5460" },
  refunded: { bg: "#D4EDDA", color: "#155724" },
  rejected: { bg: "#F8D7DA", color: "#721C24" },
  closed:   { bg: "#E2D9F3", color: "#4B2E83" },
};

const REASON_ICONS = {
  "Defective product":     "⚠️",
  "Wrong item received":   "📦",
  "Changed mind":          "↩️",
  "Damaged in shipping":   "🚚",
};

export default function ReturnsAdmin() {
  const [returns]               = useState(MOCK_RETURNS);
  const [selected, setSelected]  = useState(null);
  const [search, setSearch]      = useState("");

  const filtered = returns.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.orderId.toLowerCase().includes(search.toLowerCase()) ||
      item.reason.toLowerCase().includes(search.toLowerCase())
  );

  const totalRefunds = returns
    .filter((r) => r.status === "Refunded")
    .reduce((sum, r) => sum + parseFloat(r.refundAmount.replace("$", "")), 0)
    .toFixed(2);

  const cardData = [
    { label: "Total Return Requests", value: returns.length,                                              dotClass: "dot-blue"   },
    { label: "Awaiting Review",       value: returns.filter((r) => r.status === "Pending").length,        dotClass: "dot-yellow" },
    { label: "Refunds Issued",        value: `$${totalRefunds}`,                                          dotClass: "dot-green"  },
  ];

  return (
    <div className="ret-root">

      <ContactHeader activeLabel="Returns" />

      <div className="ret-body">

        {/* Top bar */}
        <div className="ret-top-bar">
          <div>
            <p className="ret-top-title">Returns & Refunds</p>
            <p className="ret-top-sub">Review customer return requests and manage refund approvals.</p>
          </div>
          <div className="ret-search-wrap">
            <svg className="ret-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="ret-search"
              type="text"
              placeholder="Search returns…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="ret-cards">
          {cardData.map((c) => (
            <div key={c.label} className="ret-card">
              <p className="ret-card-label">
                <span className={`ret-card-dot ${c.dotClass}`} />
                {c.label}
              </p>
              <p className="ret-card-value">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="ret-table-wrap">
          <div className="ret-table-head">
            <h2 className="ret-table-title">Return Requests</h2>
            <span className="ret-result-count">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <table className="ret-table">
            <thead>
              <tr>
                {["Return ID", "Customer", "Order", "Item", "Reason", "Refund", "Date", "Status", ""].map((h) => (
                  <th key={h} className="ret-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="ret-td ret-empty">No results found.</td>
                </tr>
              ) : (
                filtered.map((item, i) => {
                  const key = item.status.toLowerCase();
                  const sc  = STATUS_COLOR[key] || { bg: "#eee", color: "#333" };
                  return (
                    <tr key={item.id} className={i % 2 === 0 ? "ret-row-even" : "ret-row-odd"}>
                      <td className="ret-td ret-col-id">{item.id}</td>
                      <td className="ret-td">
                        <span className="ret-sender-name">{item.firstName} {item.lastName}</span>
                        <span className="ret-sender-email">{item.email}</span>
                      </td>
                      <td className="ret-td ret-col-muted ret-col-order">{item.orderId}</td>
                      <td className="ret-td ret-col-item">{item.item}</td>
                      <td className="ret-td">
                        <span className="ret-topic-tag">
                          {REASON_ICONS[item.reason] || "📋"} {item.reason}
                        </span>
                      </td>
                      <td className="ret-td ret-col-amount">{item.refundAmount}</td>
                      <td className="ret-td ret-col-muted">{item.date}</td>
                      <td className="ret-td">
                        <span className="ret-badge" style={{ background: sc.bg, color: sc.color }}>
                          {item.status}
                        </span>
                      </td>
                      <td className="ret-td">
                        <button className="ret-view-btn" onClick={() => setSelected(item)}>
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
        <div className="ret-overlay" onClick={() => setSelected(null)}>
          <div className="ret-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ret-modal-header">
              <h2 className="ret-modal-title">Return Request Details</h2>
              <button className="ret-close-btn" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="ret-modal-body">
              <div className="ret-modal-grid">
                <div>
                  <p className="ret-modal-label">Customer</p>
                  <p className="ret-modal-value">{selected.firstName} {selected.lastName}</p>
                  <p className="ret-modal-label">Contact</p>
                  <p className="ret-modal-value">{selected.email}<br />{selected.phone}</p>
                </div>
                <div>
                  <p className="ret-modal-label">Location / Org</p>
                  <p className="ret-modal-value">{selected.company}<br />{selected.country}</p>
                  <p className="ret-modal-label">Reference</p>
                  <p className="ret-modal-value ret-modal-ref">{selected.id}</p>
                </div>
              </div>
              <div className="ret-modal-meta-row">
                <div>
                  <p className="ret-modal-label">Order ID</p>
                  <p className="ret-modal-value">{selected.orderId}</p>
                </div>
                <div>
                  <p className="ret-modal-label">Refund Amount</p>
                  <p className="ret-modal-value ret-modal-amount">{selected.refundAmount}</p>
                </div>
                <div>
                  <p className="ret-modal-label">Reason</p>
                  <p className="ret-modal-value">{selected.reason}</p>
                </div>
              </div>
              <div>
                <p className="ret-modal-label">Item</p>
                <p className="ret-modal-value">{selected.item}</p>
              </div>
              <div>
                <p className="ret-modal-label">Customer Message</p>
                <p className="ret-modal-message">{selected.message}</p>
              </div>
            </div>
            <div className="ret-modal-footer">
              <button className="ret-btn-secondary" onClick={() => setSelected(null)}>Close</button>
              <button className="ret-btn-danger">Reject</button>
              <button className="ret-btn-primary">Approve Refund</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}