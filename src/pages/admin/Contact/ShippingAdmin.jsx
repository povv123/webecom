import React, { useState } from "react";
import { ContactHeader } from "../Contact";
import "../../../styles/Admin/shippingAdmin.css";

// ── Mock Data ──────────────────────────────────────────────
const MOCK_SHIPMENTS = [
  {
    id: "SHP-101A3B",
    firstName: "Kosal",
    lastName: "Vann",
    email: "kosal.vann@urbanmart.kh",
    phone: "+855 12 100 200",
    company: "UrbanMart KH",
    country: "Cambodia",
    orderId: "ORD-99321",
    destination: "Phnom Penh, Cambodia",
    carrier: "DHL Express",
    tracking: "1Z999AA10123456784",
    method: "Express (2-day)",
    message: "Please ensure delivery before 5 PM. Gate code is #4412.",
    date: "15 May 2026",
    status: "In Transit",
    estimatedDelivery: "17 May 2026",
  },
  {
    id: "SHP-202B4C",
    firstName: "Nita",
    lastName: "Sam",
    email: "nita.sam@greenleaf.com.kh",
    phone: "+855 77 200 300",
    company: "GreenLeaf Co.",
    country: "Cambodia",
    orderId: "ORD-88732",
    destination: "Siem Reap, Cambodia",
    carrier: "Kerry Express",
    tracking: "KE20260514789",
    method: "Standard (5-7 day)",
    message: "Leave at reception if no one answers.",
    date: "14 May 2026",
    status: "Delivered",
    estimatedDelivery: "14 May 2026",
  },
  {
    id: "SHP-303C5D",
    firstName: "Borin",
    lastName: "Lim",
    email: "borin.lim@deltasupply.io",
    phone: "+855 89 300 400",
    company: "Delta Supply IO",
    country: "Cambodia",
    orderId: "ORD-77543",
    destination: "Battambang, Cambodia",
    carrier: "J&T Express",
    tracking: "JT2026051499012",
    method: "Economy (7-10 day)",
    message: "Fragile items — handle with care.",
    date: "13 May 2026",
    status: "Pending",
    estimatedDelivery: "23 May 2026",
  },
  {
    id: "SHP-404D6E",
    firstName: "Chanlen",
    lastName: "Phal",
    email: "chanlen@nexuslogistics.kh",
    phone: "+855 23 400 500",
    company: "Nexus Logistics",
    country: "Cambodia",
    orderId: "ORD-66234",
    destination: "Kampot, Cambodia",
    carrier: "Ninja Van",
    tracking: "NV20260511567",
    method: "Express (2-day)",
    message: "Customer requested SMS notification on arrival.",
    date: "12 May 2026",
    status: "Failed Delivery",
    estimatedDelivery: "13 May 2026",
  },
];

const STATUS_COLOR = {
  pending:          { bg: "#FFF3CD", color: "#856404" },
  "in-transit":     { bg: "#D1ECF1", color: "#0C5460" },
  delivered:        { bg: "#D4EDDA", color: "#155724" },
  "failed-delivery":{ bg: "#F8D7DA", color: "#721C24" },
  cancelled:        { bg: "#E2D9F3", color: "#4B2E83" },
};

const CARRIER_COLORS = {
  "DHL Express":  { bg: "#FFF3E0", color: "#E65100" },
  "Kerry Express":{ bg: "#E8F5E9", color: "#2E7D32" },
  "J&T Express":  { bg: "#FCE4EC", color: "#880E4F" },
  "Ninja Van":    { bg: "#E3F2FD", color: "#0D47A1" },
};

export default function ShippingAdmin() {
  const [shipments]             = useState(MOCK_SHIPMENTS);
  const [selected, setSelected]  = useState(null);
  const [search, setSearch]      = useState("");

  const filtered = shipments.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.orderId.toLowerCase().includes(search.toLowerCase()) ||
      item.tracking.toLowerCase().includes(search.toLowerCase()) ||
      item.carrier.toLowerCase().includes(search.toLowerCase())
  );

  const cardData = [
    { label: "Total Shipments",   value: shipments.length,                                                         dotClass: "dot-blue"   },
    { label: "In Transit",        value: shipments.filter((s) => s.status === "In Transit").length,                dotClass: "dot-yellow" },
    { label: "Delivered",         value: shipments.filter((s) => s.status === "Delivered").length,                 dotClass: "dot-green"  },
  ];

  return (
    <div className="shp-root">

      <ContactHeader activeLabel="Shipping" />

      <div className="shp-body">

        {/* Top bar */}
        <div className="shp-top-bar">
          <div>
            <p className="shp-top-title">Shipping & Tracking</p>
            <p className="shp-top-sub">Monitor shipment statuses and manage delivery enquiries.</p>
          </div>
          <div className="shp-search-wrap">
            <svg className="shp-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="shp-search"
              type="text"
              placeholder="Search shipments…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="shp-cards">
          {cardData.map((c) => (
            <div key={c.label} className="shp-card">
              <p className="shp-card-label">
                <span className={`shp-card-dot ${c.dotClass}`} />
                {c.label}
              </p>
              <p className="shp-card-value">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="shp-table-wrap">
          <div className="shp-table-head">
            <h2 className="shp-table-title">Shipment Records</h2>
            <span className="shp-result-count">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <table className="shp-table">
            <thead>
              <tr>
                {["Shipment ID", "Customer", "Order", "Carrier", "Method", "Destination", "Est. Delivery", "Status", ""].map((h) => (
                  <th key={h} className="shp-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="shp-td shp-empty">No results found.</td>
                </tr>
              ) : (
                filtered.map((item, i) => {
                  const stKey  = item.status.toLowerCase().replace(/ /g, "-");
                  const sc     = STATUS_COLOR[stKey] || { bg: "#eee", color: "#333" };
                  const cc     = CARRIER_COLORS[item.carrier] || { bg: "#f3f4f6", color: "#374151" };
                  return (
                    <tr key={item.id} className={i % 2 === 0 ? "shp-row-even" : "shp-row-odd"}>
                      <td className="shp-td shp-col-id">{item.id}</td>
                      <td className="shp-td">
                        <span className="shp-sender-name">{item.firstName} {item.lastName}</span>
                        <span className="shp-sender-email">{item.email}</span>
                      </td>
                      <td className="shp-td shp-col-muted shp-col-mono">{item.orderId}</td>
                      <td className="shp-td">
                        <span className="shp-carrier-tag" style={{ background: cc.bg, color: cc.color }}>
                          {item.carrier}
                        </span>
                      </td>
                      <td className="shp-td shp-col-muted">{item.method}</td>
                      <td className="shp-td shp-col-muted">{item.destination}</td>
                      <td className="shp-td shp-col-muted">{item.estimatedDelivery}</td>
                      <td className="shp-td">
                        <span className="shp-badge" style={{ background: sc.bg, color: sc.color }}>
                          {item.status}
                        </span>
                      </td>
                      <td className="shp-td">
                        <button className="shp-view-btn" onClick={() => setSelected(item)}>
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
        <div className="shp-overlay" onClick={() => setSelected(null)}>
          <div className="shp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="shp-modal-header">
              <h2 className="shp-modal-title">Shipment Details</h2>
              <button className="shp-close-btn" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="shp-modal-body">
              <div className="shp-modal-grid">
                <div>
                  <p className="shp-modal-label">Customer</p>
                  <p className="shp-modal-value">{selected.firstName} {selected.lastName}</p>
                  <p className="shp-modal-label">Contact</p>
                  <p className="shp-modal-value">{selected.email}<br />{selected.phone}</p>
                </div>
                <div>
                  <p className="shp-modal-label">Organisation</p>
                  <p className="shp-modal-value">{selected.company}<br />{selected.country}</p>
                  <p className="shp-modal-label">Reference</p>
                  <p className="shp-modal-value shp-modal-ref">{selected.id}</p>
                </div>
              </div>
              <div className="shp-modal-meta-row">
                <div>
                  <p className="shp-modal-label">Order ID</p>
                  <p className="shp-modal-value">{selected.orderId}</p>
                </div>
                <div>
                  <p className="shp-modal-label">Carrier</p>
                  <p className="shp-modal-value">{selected.carrier}</p>
                </div>
                <div>
                  <p className="shp-modal-label">Method</p>
                  <p className="shp-modal-value">{selected.method}</p>
                </div>
              </div>
              <div className="shp-modal-meta-row">
                <div>
                  <p className="shp-modal-label">Destination</p>
                  <p className="shp-modal-value">{selected.destination}</p>
                </div>
                <div>
                  <p className="shp-modal-label">Est. Delivery</p>
                  <p className="shp-modal-value">{selected.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="shp-modal-label">Tracking No.</p>
                  <p className="shp-modal-value shp-modal-tracking">{selected.tracking}</p>
                </div>
              </div>
              <div>
                <p className="shp-modal-label">Customer Note</p>
                <p className="shp-modal-message">{selected.message}</p>
              </div>
            </div>
            <div className="shp-modal-footer">
              <button className="shp-btn-secondary" onClick={() => setSelected(null)}>Close</button>
              <button className="shp-btn-primary">Track Shipment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}