import React, { useState } from "react";

// ── Demo Data ──────────────────────────────────────────────
const demoData = [
  { id: "#INQ-1024", type: "Inquiry",   name: "Sok Heng", email: "sok@gmail.com",    status: "Pending",   date: "11 May 2026" },
  { id: "#SUP-2210", type: "Technical", name: "Dara Kim", email: "dara@gmail.com",   status: "Open",      date: "10 May 2026" },
  { id: "#QTE-8821", type: "Quote",     name: "Vannak",   email: "vannak@gmail.com", status: "Completed", date: "09 May 2026" },
  { id: "#RET-7820", type: "Return",    name: "Nita",     email: "nita@gmail.com",   status: "Refunded",  date: "08 May 2026" },
  { id: "#INQ-1031", type: "Inquiry",   name: "Pisey",    email: "pisey@gmail.com",  status: "Pending",   date: "11 May 2026" },
  { id: "#SUP-2218", type: "Technical", name: "Bopha",    email: "bopha@gmail.com",  status: "Open",      date: "07 May 2026" },
];


const STATUS_COLOR = {
  pending:   { bg: "#FFF3CD", color: "#856404" },
  open:      { bg: "#D1ECF1", color: "#0C5460" },
  completed: { bg: "#D4EDDA", color: "#155724" },
  refunded:  { bg: "#E2D9F3", color: "#4B2E83" },
};

const NAV_LINKS = [
  { label: "Overviews",  href: "/admin/Contact"  },
  { label: "Inquiries",  href: "/admin/Contact/inquiries"  },
  { label: "Quotes",     href: "/admin/Contact/quotes"     },
  { label: "Technical",  href: "/admin/Contact/technical"  },
  { label: "Returns",    href: "/admin/Contact/returns"    },
  { label: "Shipping",   href: "/admin/Contact/shipping"   },
];

// Change to e.g. "Inquiries" if you mount this header inside InquiriesAdmin
const ACTIVE_NAV = "";

// ── Styles ─────────────────────────────────────────────────
const styles = {
  root: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    background: "#F4F6FB",
    minHeight: "100vh",
    color: "#1A1D2E",
  },

  // ── Header ──
  header: {
    background: "#fff",
    borderBottom: "1px solid #E5E9F2",
    padding: "0 32px",
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 6px rgba(0,0,0,.06)",
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.3px",
    color: "#1A1D2E",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: 4,
    alignItems: "center",
  },
  navLink: {
    padding: "6px 14px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    color: "#5B6480",
    textDecoration: "none",
    transition: "background .15s, color .15s",
    background: "transparent",
    cursor: "pointer",
    border: "none",
    display: "inline-block",
  },
  navLinkActive: {
    background: "#EEF1FB",
    color: "#2F54EB",
  },

  // ── Page body ──
  body: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "36px 32px",
  },

  // ── Top bar ──
  topBar: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 28,
    flexWrap: "wrap",
    gap: 16,
  },
  topTitle: { fontSize: 26, fontWeight: 700, margin: 0 },
  topSub: { fontSize: 14, color: "#7A82A0", marginTop: 4 },
  search: {
    padding: "10px 16px",
    borderRadius: 10,
    border: "1.5px solid #DDE2F0",
    fontSize: 14,
    outline: "none",
    width: 240,
    background: "#fff",
    color: "#1A1D2E",
    transition: "border .2s",
  },

  // ── Cards ──
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    marginBottom: 32,
  },
  card: {
    background: "#fff",
    borderRadius: 14,
    padding: "22px 24px",
    boxShadow: "0 2px 10px rgba(0,0,0,.05)",
    border: "1px solid #EEF1FB",
  },
  cardLabel: { fontSize: 13, color: "#7A82A0", marginBottom: 8, fontWeight: 500 },
  cardValue: { fontSize: 32, fontWeight: 800, letterSpacing: "-1px", color: "#1A1D2E", margin: 0 },
  cardDot: { width: 10, height: 10, borderRadius: "50%", display: "inline-block", marginRight: 8 },

  // ── Table ──
  tableWrap: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,.05)",
    border: "1px solid #EEF1FB",
    overflow: "hidden",
  },
  tableHead: {
    padding: "20px 24px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #EEF1FB",
  },
  tableTitle: { fontSize: 16, fontWeight: 700, margin: 0 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
  th: {
    textAlign: "left",
    padding: "12px 16px",
    background: "#F8F9FD",
    color: "#7A82A0",
    fontWeight: 600,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: ".6px",
  },
  td: {
    padding: "14px 16px",
    borderBottom: "1px solid #F0F3FA",
    color: "#3A3F5C",
    verticalAlign: "middle",
  },
  badge: {
    padding: "4px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    display: "inline-block",
  },
  viewBtn: {
    padding: "6px 16px",
    borderRadius: 8,
    border: "1.5px solid #DDE2F0",
    background: "#fff",
    color: "#2F54EB",
    fontWeight: 600,
    fontSize: 13,
    cursor: "pointer",
  },

  // ── Type badge ──
  typeTag: {
    padding: "3px 10px",
    borderRadius: 6,
    background: "#EEF1FB",
    color: "#2F54EB",
    fontSize: 12,
    fontWeight: 600,
  },
};

// ── Shared Header Component ────────────────────────────────
// Export this so InquiriesAdmin (and other sub-pages) can reuse it.
export function ContactHeader({ activeLabel = "" }) {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <header style={styles.header}>
      <h1 style={styles.pageTitle}>Contact Management</h1>
      <nav style={styles.nav}>
        {NAV_LINKS.map((link) => {
          const isActive = hoveredNav === link.label || activeLabel === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              style={{
                ...styles.navLink,
                ...(isActive ? styles.navLinkActive : {}),
              }}
              onMouseEnter={() => setHoveredNav(link.label)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

// ── Main Component ─────────────────────────────────────────
const ContactAdmin = () => {
  const [search, setSearch] = useState("");

  const filtered = demoData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  const cardData = [
    { label: "Total Requests",  value: "1,245", dot: "#2F54EB" },
    { label: "Pending",         value: "85",    dot: "#F5A623" },
    { label: "Resolved",        value: "1,050", dot: "#27AE60" },
    { label: "Refund Requests", value: "32",    dot: "#9B59B6" },
  ];

  return (
    <div style={styles.root}>

      {/* Shared header — no active link on the overview page */}
      <ContactHeader activeLabel={ACTIVE_NAV} />

      {/* ── Body ── */}
      <div style={styles.body}>

        {/* Top bar */}
        <div style={styles.topBar}>
          <div>
            <p style={styles.topTitle}>All Requests</p>
            <p style={styles.topSub}>Manage all customer contact forms and requests.</p>
          </div>
          <input
            style={styles.search}
            type="text"
            placeholder="Search by name, email or ID…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => (e.target.style.borderColor = "#2F54EB")}
            onBlur={(e)  => (e.target.style.borderColor = "#DDE2F0")}
          />
        </div>

        {/* Stat cards */}
        <div style={styles.cards}>
          {cardData.map((c) => (
            <div key={c.label} style={styles.card}>
              <p style={styles.cardLabel}>
                <span style={{ ...styles.cardDot, background: c.dot }} />
                {c.label}
              </p>
              <p style={styles.cardValue}>{c.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={styles.tableWrap}>
          <div style={styles.tableHead}>
            <h2 style={styles.tableTitle}>Recent Requests</h2>
            <span style={{ fontSize: 13, color: "#7A82A0" }}>
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                {["ID", "Type", "Customer", "Email", "Status", "Date", "Action"].map((h) => (
                  <th key={h} style={styles.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ ...styles.td, textAlign: "center", color: "#7A82A0", padding: 32 }}>
                    No results found.
                  </td>
                </tr>
              ) : (
                filtered.map((item, i) => {
                  const sc = STATUS_COLOR[item.status.toLowerCase()] || { bg: "#eee", color: "#333" };
                  return (
                    <tr key={item.id} style={{ background: i % 2 === 0 ? "#fff" : "#FAFBFE" }}>
                      <td style={{ ...styles.td, fontWeight: 600, color: "#2F54EB", fontFamily: "monospace" }}>{item.id}</td>
                      <td style={styles.td}>
                        <span style={styles.typeTag}>{item.type}</span>
                      </td>
                      <td style={{ ...styles.td, fontWeight: 600 }}>{item.name}</td>
                      <td style={{ ...styles.td, color: "#7A82A0" }}>{item.email}</td>
                      <td style={styles.td}>
                        <span style={{ ...styles.badge, background: sc.bg, color: sc.color }}>
                          {item.status}
                        </span>
                      </td>
                      <td style={{ ...styles.td, color: "#7A82A0" }}>{item.date}</td>
                      <td style={styles.td}>
                        <button
                          style={styles.viewBtn}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background  = "#EEF1FB";
                            e.currentTarget.style.borderColor = "#2F54EB";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background  = "#fff";
                            e.currentTarget.style.borderColor = "#DDE2F0";
                          }}
                          onClick={() => alert(`Viewing ${item.id}`)}
                        >
                          View
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
    </div>
  );
};

export default ContactAdmin;