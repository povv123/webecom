import React, { useState } from "react";
import "../../styles/Admin/Aboutus.css";

// ── Initial Data ───────────────────────────────────────────
const initialData = {
  aboutus: {
    heroLabel: "Corporate Philosophy",
    heroQuote: '"We believe we will be Success."',
    heroAuthor: "— Servial CEO Pheakdey",
    heroParagraph1:
      "We are committed to demonstrating that business can and should be a force for good. Achieving that takes innovation, collaboration, and a focus on serving others. It also means leading with our values in the technology we make, the way we make it, and how we treat people and the planet we share.",
    heroParagraph2:
      "We're always working to leave the world better than we found it, and to create powerful tools that empower others to do the same.",
    disclosureTitle: "Eter Values Summary",
    disclosureText:
      "We have a wide range of reports and websites that outline key progress across each of our values and other key topics. We've also mapped our disclosures across metrics outlined by the SASB (ISSB) and TCFD voluntary disclosure frameworks.",
    values: ["Accessibility","Education","Environment","Inclusion & Diversity","Privacy","Racial Equity and Justice","Supply Chain Innovation"],
    reportGroups: [
      { category: "Environment",               reports: ["2026 Environmental Progress Report","Product Environmental Reports","Annual Green Bond Impact Report: FY25 Update"] },
      { category: "Privacy",                   reports: ["Transparency Report","App Store Transparency Report"] },
      { category: "Racial Equity and Justice", reports: ["Racial Equity and Justice Initiative Impact Overview"] },
      { category: "Supply Chain Innovation",   reports: ["People and Environment in our Supply Chain: 2026 Annual Progress Report","Conflict Minerals Report"] },
    ],
    additionalTopics: ["Ethics and Compliance Website","Work at Eter","Life at Eter","Eter Benefits"],
  },

  mission: {
    heroLabel: "The Eter Store Mission",
    heroQuote: '"We believe we will be billionair."',
    heroAuthor: "— Servial CEO Pheakdey",
    heroParagraph1:
      "The Eter Store is more than a place to shop. It is a destination where Cambodia's digital future meets world-class retail design. We are committed to bringing the latest global technology directly to the Kingdom.",
    heroParagraph2:
      "From our flagship experiences to our localized digital platform, we empower Khmer customers to explore, create, and connect through premium technology and unparalleled service.",
    disclosureTitle: "Retail Progress in Cambodia",
    disclosureText:
      "Our mission is driven by transparency and excellence. We provide comprehensive insights into our retail expansion, local supply chain sustainability, and our commitment to authentic products for the Cambodian market.",
    missionCards: ["Authenticity Guaranteed","Khmer Language Support","Next-Day Delivery","Phnom Penh Experience","Data Privacy","Youth Tech Education","Sustainable Packaging"],
    reportGroups: [
      { category: "Customer Experience", reports: ["2026 Cambodia Satisfaction Report","Khmer Shopping UX Case Study","In-Store Service Standards"] },
      { category: "Privacy & Security",  reports: ["Customer Data Protection","Secure Transaction Standards"] },
      { category: "Community Outreach",  reports: ["Impact of Eter Digital Hubs in Cambodia"] },
      { category: "Talent",              reports: ["Khmer Specialist Training Progress","Retail Career Development FY26"] },
    ],
  },

  history: {
    heroLabel: "Our Journey",
    heroQuote: '"Innovation is not just about the future; it is built on the foundation of our past."',
    heroAuthor: "— Eter Founders",
    heroParagraph1:
      "From our humble beginnings to becoming a cornerstone of Cambodia's digital revolution, Eter's journey is defined by relentless innovation and a commitment to our community.",
    heroParagraph2:
      "Explore the milestones that shaped our vision, the challenges we overcame, and the breakthroughs that continue to drive us forward as the Kingdom's premier technology destination.",
    milestones: [
      { year: "2018", title: "The Foundation",    description: "Eter was founded in Phnom Penh with a singular vision to democratize access to premium global technology for the Cambodian market.",                    image: "/images/history-2018.jpg" },
      { year: "2021", title: "Digital Expansion", description: "Launched our localized e-commerce platform, overcoming pandemic challenges to bring next-day delivery to all provinces.",                             image: "/images/history-2021.jpg" },
      { year: "2024", title: "The Flagship Era",  description: "Opened our state-of-the-art flagship store and community tech hub in the heart of the capital, redefining retail in Southeast Asia.", image: "/images/history-2024.jpg" },
    ],
    archiveGroups: [
      { category: "Decade in Review",    reports: ["2018-2020 Growth Report","The Pandemic Pivot (2021)","Post-Pandemic Expansion"] },
      { category: "Product Evolution",   reports: ["Eter Store v1.0 to v4.0","Evolution of our Supply Chain","Tech Hub Blueprints"] },
      { category: "Community Impact",    reports: ["First 100 Scholarships","Tech Literacy Programs (2019-2023)","Green Store Initiatives"] },
      { category: "Media & Recognition", reports: ["Tech Startup of the Year (2020)","Cambodia Digital Award (2023)","CEO Interviews Archive"] },
    ],
  },

  leadership: {
    heroLabel: "Corporate Responsibility",
    heroQuote: '"Leadership is about vision, responsibility, and inspiring people to achieve more."',
    heroAuthor: "— Eter Executive Board",
    heroParagraph1:
      "We believe that business can be a force for good. Eter's leadership team is dedicated to building a digital ecosystem in Cambodia that values integrity, transparency, and relentless innovation.",
    heroParagraph2:
      "By combining regional expertise with global standards, we ensure that every decision we make empowers our customers, communities, and the Khmer tech ecosystem.",
    executives: [
      { name: "Pheakdey", title: "Chief Executive Officer", description: "Leads company strategy and long-term innovation for the Eter ecosystem.",   image: "/images/ceo.jpg" },
      { name: "Sopheak",  title: "Chief Operating Officer", description: "Oversees regional operations, retail execution, and logistics efficiency.", image: "/images/coo.jpg" },
      { name: "Vannak",   title: "Chief Financial Officer", description: "Manages financial growth, sustainability, and investor relations.",         image: "/images/cfo.jpg" },
    ],
    governanceGroups: [
      { category: "Board of Directors", reports: ["Board Committees","Director Biographies","Contact the Board"] },
      { category: "Policies",           reports: ["Human Rights Policy","Anti-Corruption Policy","Conflict Minerals Statement"] },
      { category: "Regulatory",         reports: ["SEC Filings","Tax Transparency Report","Quarterly Results"] },
      { category: "Digital Trust",      reports: ["Cybersecurity Governance","AI Ethics Framework","Privacy Standards"] },
    ],
  },
};

const TABS = [
  { key: "aboutus",    label: "About Us" },
  { key: "mission",    label: "Mission" },
  { key: "history",    label: "History" },
  { key: "leadership", label: "Leadership" },
];

// ── Focused input / textarea wrappers ───────────────────────
function FocusInput({ onChange, className, ...props }) {
  return (
    <input
      {...props}
      className={`au-input${className ? ` ${className}` : ""}`}
      onChange={onChange}
    />
  );
}

function FocusTextarea({ onChange, className, ...props }) {
  return (
    <textarea
      {...props}
      className={`au-textarea${className ? ` ${className}` : ""}`}
      onChange={onChange}
    />
  );
}

// ── Field wrapper ────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div className="au-field-wrap">
      <label className="au-label">{label}</label>
      {children}
    </div>
  );
}

// ── List editor (for values, cards, topics, reports) ─────────
function ListEditor({ items, onChange, addLabel = "Item" }) {
  const [draft, setDraft] = useState("");
  const add    = () => { if (!draft.trim()) return; onChange([...items, draft.trim()]); setDraft(""); };
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const edit   = (i, v) => onChange(items.map((it, idx) => (idx === i ? v : it)));
  return (
    <div>
      <div className="au-tag-row">
        {items.map((item, i) => (
          <div key={i} className="au-tag-item">
            <input
              className="au-tag-input"
              value={item}
              onChange={(e) => edit(i, e.target.value)}
            />
            <button className="au-tag-del" onClick={() => remove(i)}>✕</button>
          </div>
        ))}
      </div>
      <div className="au-add-row">
        <input
          className="au-add-input"
          value={draft}
          placeholder={`New ${addLabel.toLowerCase()}…`}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button className="au-btn-sm-blue" onClick={add}>
          + {addLabel}
        </button>
      </div>
    </div>
  );
}

// ── Report / archive / governance groups ─────────────────────
function ReportGroupsEditor({ groups, onChange }) {
  const updateGroup = (gi, key, val) =>
    onChange(groups.map((g, i) => (i === gi ? { ...g, [key]: val } : g)));
  const addGroup    = () => onChange([...groups, { category: "New Category", reports: [] }]);
  const removeGroup = (gi) => onChange(groups.filter((_, i) => i !== gi));

  return (
    <div>
      {groups.map((group, gi) => (
        <div key={gi} className="au-group-card">
          <div className="au-group-header">
            <input
              className="au-group-cat-input"
              value={group.category}
              onChange={(e) => updateGroup(gi, "category", e.target.value)}
            />
            <button className="au-btn-danger" onClick={() => removeGroup(gi)}>Remove Group</button>
          </div>
          <ListEditor
            items={group.reports}
            onChange={(v) => updateGroup(gi, "reports", v)}
            addLabel="Report"
          />
        </div>
      ))}
      <button className="au-btn-ghost" onClick={addGroup}>
        + Add Report Group
      </button>
    </div>
  );
}

// ── Hero section editor (shared) ─────────────────────────────
function HeroEditor({ data, onChange }) {
  return (
    <div className="au-section-card">
      <p className="au-section-head">Hero Section</p>
      <div className="au-grid-2">
        <Field label="Label">
          <FocusInput value={data.heroLabel} onChange={(e) => onChange("heroLabel", e.target.value)} />
        </Field>
        <Field label="Author / Attribution">
          <FocusInput value={data.heroAuthor} onChange={(e) => onChange("heroAuthor", e.target.value)} />
        </Field>
      </div>
      <Field label="Quote">
        <FocusTextarea rows={2} value={data.heroQuote} onChange={(e) => onChange("heroQuote", e.target.value)} />
      </Field>
      <Field label="Paragraph 1">
        <FocusTextarea rows={3} value={data.heroParagraph1} onChange={(e) => onChange("heroParagraph1", e.target.value)} />
      </Field>
      <Field label="Paragraph 2">
        <FocusTextarea rows={3} value={data.heroParagraph2} onChange={(e) => onChange("heroParagraph2", e.target.value)} />
      </Field>
    </div>
  );
}

// ── Individual page editors ───────────────────────────────────
function AboutUsEditor({ data, onChange }) {
  return (
    <>
      <HeroEditor data={data} onChange={onChange} />
      <div className="au-section-card">
        <p className="au-section-head">Disclosure Section</p>
        <Field label="Title"><FocusInput value={data.disclosureTitle} onChange={(e) => onChange("disclosureTitle", e.target.value)} /></Field>
        <Field label="Body Text"><FocusTextarea rows={3} value={data.disclosureText} onChange={(e) => onChange("disclosureText", e.target.value)} /></Field>
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Value Cards</p>
        <ListEditor items={data.values} onChange={(v) => onChange("values", v)} addLabel="Value" />
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Report Groups</p>
        <ReportGroupsEditor groups={data.reportGroups} onChange={(v) => onChange("reportGroups", v)} />
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Additional Topics</p>
        <ListEditor items={data.additionalTopics} onChange={(v) => onChange("additionalTopics", v)} addLabel="Topic" />
      </div>
    </>
  );
}

function MissionEditor({ data, onChange }) {
  return (
    <>
      <HeroEditor data={data} onChange={onChange} />
      <div className="au-section-card">
        <p className="au-section-head">Retail Progress / Disclosure</p>
        <Field label="Title"><FocusInput value={data.disclosureTitle} onChange={(e) => onChange("disclosureTitle", e.target.value)} /></Field>
        <Field label="Body Text"><FocusTextarea rows={3} value={data.disclosureText} onChange={(e) => onChange("disclosureText", e.target.value)} /></Field>
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Mission Cards</p>
        <ListEditor items={data.missionCards} onChange={(v) => onChange("missionCards", v)} addLabel="Card" />
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Report Groups</p>
        <ReportGroupsEditor groups={data.reportGroups} onChange={(v) => onChange("reportGroups", v)} />
      </div>
    </>
  );
}

function MilestoneEditor({ milestones, onChange }) {
  const update = (i, k, v) => onChange(milestones.map((m, idx) => idx === i ? { ...m, [k]: v } : m));
  const add    = () => onChange([...milestones, { year: "2025", title: "New Milestone", description: "", image: "" }]);
  const remove = (i) => onChange(milestones.filter((_, idx) => idx !== i));
  return (
    <div>
      {milestones.map((m, i) => (
        <div key={i} className="au-milestone-card">
          <div className="au-milestone-header">
            <span className="au-year-badge">{m.year}</span>
            <button className="au-btn-danger" onClick={() => remove(i)}>Remove</button>
          </div>
          <div className="au-grid-2">
            <Field label="Year"><FocusInput value={m.year}  onChange={(e) => update(i, "year",  e.target.value)} /></Field>
            <Field label="Title"><FocusInput value={m.title} onChange={(e) => update(i, "title", e.target.value)} /></Field>
          </div>
          <Field label="Description"><FocusTextarea rows={2} value={m.description} onChange={(e) => update(i, "description", e.target.value)} /></Field>
          <Field label="Image Path"><FocusInput value={m.image} onChange={(e) => update(i, "image", e.target.value)} placeholder="/images/history-YYYY.jpg" /></Field>
        </div>
      ))}
      <button className="au-btn-ghost" onClick={add}>+ Add Milestone</button>
    </div>
  );
}

function HistoryEditor({ data, onChange }) {
  return (
    <>
      <HeroEditor data={data} onChange={onChange} />
      <div className="au-section-card">
        <p className="au-section-head">Key Milestones</p>
        <MilestoneEditor milestones={data.milestones} onChange={(v) => onChange("milestones", v)} />
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Historical Archives</p>
        <ReportGroupsEditor groups={data.archiveGroups} onChange={(v) => onChange("archiveGroups", v)} />
      </div>
    </>
  );
}

function ExecutiveEditor({ executives, onChange }) {
  const update = (i, k, v) => onChange(executives.map((ex, idx) => idx === i ? { ...ex, [k]: v } : ex));
  const add    = () => onChange([...executives, { name: "New Executive", title: "Title", description: "", image: "" }]);
  const remove = (i) => onChange(executives.filter((_, idx) => idx !== i));
  return (
    <div>
      {executives.map((ex, i) => (
        <div key={i} className="au-milestone-card">
          <div className="au-milestone-header">
            <span className="au-year-badge">{ex.name}</span>
            <button className="au-btn-danger" onClick={() => remove(i)}>Remove</button>
          </div>
          <div className="au-grid-2">
            <Field label="Full Name"><FocusInput value={ex.name}  onChange={(e) => update(i, "name",  e.target.value)} /></Field>
            <Field label="Role / Title"><FocusInput value={ex.title} onChange={(e) => update(i, "title", e.target.value)} /></Field>
          </div>
          <Field label="Bio"><FocusTextarea rows={2} value={ex.description} onChange={(e) => update(i, "description", e.target.value)} /></Field>
          <Field label="Image Path"><FocusInput value={ex.image} onChange={(e) => update(i, "image", e.target.value)} placeholder="/images/ceo.jpg" /></Field>
        </div>
      ))}
      <button className="au-btn-ghost" onClick={add}>+ Add Executive</button>
    </div>
  );
}

function LeadershipEditor({ data, onChange }) {
  return (
    <>
      <HeroEditor data={data} onChange={onChange} />
      <div className="au-section-card">
        <p className="au-section-head">Executive Officers</p>
        <ExecutiveEditor executives={data.executives} onChange={(v) => onChange("executives", v)} />
      </div>
      <div className="au-section-card">
        <p className="au-section-head">Corporate Governance Groups</p>
        <ReportGroupsEditor groups={data.governanceGroups} onChange={(v) => onChange("governanceGroups", v)} />
      </div>
    </>
  );
}

// ── Toast ─────────────────────────────────────────────────────
function Toast({ message, type, onClose }) {
  return (
    <div className={`au-toast ${type}`}>
      <span>{message}</span>
      <button className="au-toast-close" onClick={onClose}>✕</button>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────
const AboutusAdmin = () => {
  const [activeTab, setActiveTab] = useState("aboutus");
  const [data, setData]           = useState(initialData);
  const [saved, setSaved]         = useState({ aboutus: true, mission: true, history: true, leadership: true });
  const [toast, setToast]         = useState(null);

  const updatePage = (page, key, val) => {
    setData((prev) => ({ ...prev, [page]: { ...prev[page], [key]: val } }));
    setSaved((prev) => ({ ...prev, [page]: false }));
  };

  const savePage = (page) => {
    setSaved((prev) => ({ ...prev, [page]: true }));
    const label = TABS.find((t) => t.key === page)?.label;
    setToast({ message: `${label} saved successfully!`, type: "success" });
    setTimeout(() => setToast(null), 3000);
  };

  const discardPage = (page) => {
    setData((prev) => ({ ...prev, [page]: initialData[page] }));
    setSaved((prev) => ({ ...prev, [page]: true }));
    setToast({ message: "Changes discarded.", type: "warning" });
    setTimeout(() => setToast(null), 2500);
  };

  const unsavedPages = TABS.filter((t) => !saved[t.key]);
  const isSaved = saved[activeTab];

  return (
    <div className="au-root">
      <div className="au-body">

        {/* Top bar */}
        <div className="au-top-bar">
          <div>
            <p className="au-top-title">About Us Management</p>
            <p className="au-top-sub">Edit content for all About Us sub-pages.</p>
          </div>
          {unsavedPages.length > 0 && (
            <span className="au-unsaved-chip lg">
              ⚠ {unsavedPages.length} unsaved: {unsavedPages.map((t) => t.label).join(", ")}
            </span>
          )}
        </div>

        {/* Tab switcher */}
        <div className="au-tab-bar">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`au-tab${activeTab === tab.key ? " active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {!saved[tab.key] && <span className="au-tab-dot" title="Unsaved changes" />}
            </button>
          ))}
        </div>

        {/* Save toolbar */}
        <div className="au-toolbar">
          <div className="au-toolbar-left">
            <p className="au-toolbar-title">{TABS.find((t) => t.key === activeTab)?.label}</p>
            {!isSaved && <span className="au-unsaved-chip">Unsaved changes</span>}
          </div>
          <div className="au-toolbar-actions">
            <button
              className="au-btn-ghost"
              disabled={isSaved}
              onClick={() => discardPage(activeTab)}
            >
              Discard
            </button>
            <button
              className="au-btn-primary"
              disabled={isSaved}
              onClick={() => savePage(activeTab)}
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Editors */}
        {activeTab === "aboutus"    && <AboutUsEditor    data={data.aboutus}    onChange={(k, v) => updatePage("aboutus",    k, v)} />}
        {activeTab === "mission"    && <MissionEditor    data={data.mission}    onChange={(k, v) => updatePage("mission",    k, v)} />}
        {activeTab === "history"    && <HistoryEditor    data={data.history}    onChange={(k, v) => updatePage("history",    k, v)} />}
        {activeTab === "leadership" && <LeadershipEditor data={data.leadership} onChange={(k, v) => updatePage("leadership", k, v)} />}

      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default AboutusAdmin;