import React, { useState, useRef } from 'react';
import '../../styles/Admin/ResourcesAdmin.css';

/* ── CONSTANTS ────────────────────────────────────────────────── */
const BLOG_CATS  = ['AI & Innovation', 'Security', 'Productivity', 'IT & Cloud', 'Strategy'];
const CASE_INDS  = ['Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Retail'];
const PAPER_CATS = ['Research', 'Framework', 'Best Practices', 'Survey'];
const FAQ_CATS   = ['Getting Started', 'Security & Compliance', 'Platform', 'Support', 'Pricing'];

const TABS = [
  { id: 'overview', label: 'Overview'     },
  { id: 'blogs',    label: 'Blog'         },
  { id: 'cases',    label: 'Case Studies' },
  { id: 'papers',   label: 'Whitepapers'  },
  { id: 'faqs',     label: 'FAQs'         },
];

/* ── SEED DATA ────────────────────────────────────────────────── */
const INITIAL_BLOGS = [
  { id: 1, title: 'How AI Is Reshaping Enterprise Workflows in 2025', desc: 'A deep dive into the tools, frameworks, and organizational shifts enabling companies to move faster and smarter.', readTime: '8 min read', date: 'May 1, 2025', category: 'AI & Innovation' },
  { id: 2, title: 'Zero Trust Security: From Strategy to Execution', desc: 'Learn how leading enterprises are implementing zero trust architectures to protect distributed workforces.', readTime: '6 min read', date: 'Apr 22, 2025', category: 'Security' },
  { id: 3, title: 'The Real ROI of Employee Productivity Tools', desc: 'New data shows that the right productivity stack can save each knowledge worker over 4 hours per week.', readTime: '5 min read', date: 'Apr 15, 2025', category: 'Productivity' },
  { id: 4, title: 'Cloud Modernization Without the Chaos', desc: 'A practical playbook for enterprises migrating legacy systems to the cloud while maintaining uptime.', readTime: '7 min read', date: 'Apr 8, 2025', category: 'IT & Cloud' },
  { id: 5, title: 'Building for Global Scale: Lessons from 50 Enterprise Deployments', desc: 'We analyzed 50 global deployments to extract the patterns that separate smooth rollouts from painful ones.', readTime: '10 min read', date: 'Mar 30, 2025', category: 'Strategy' },
  { id: 6, title: 'The Quiet Power of Async-First Organizations', desc: 'Teams that default to asynchronous communication ship faster, burn out less, and retain employees longer.', readTime: '4 min read', date: 'Mar 18, 2025', category: 'Productivity' },
  { id: 7, title: 'Why Most AI Pilots Fail — And How to Fix That', desc: 'Only 15% of enterprise AI pilots make it to production. We break down the structural mistakes.', readTime: '9 min read', date: 'Mar 5, 2025', category: 'AI & Innovation' },
  { id: 8, title: 'Infrastructure as Code: A Maturity Model', desc: 'From manual provisioning to fully automated environments — where does your organization sit?', readTime: '6 min read', date: 'Feb 20, 2025', category: 'IT & Cloud' },
];

const INITIAL_CASES = [
  { id: 1, company: 'FinCore Bank', industry: 'Financial Services', employees: '14,000', countries: 30, title: 'FinCore Reduced IT Costs by 38% With Unified Device Management', desc: 'With 14,000 employees across 30 countries, FinCore needed a scalable, secure device management solution.', challenge: 'Legacy device management systems created security gaps and onboarding delays.', solution: 'Deployed a unified endpoint management platform with zero-touch provisioning.', results: ['38% cost reduction', '2× faster onboarding', '99.9% uptime', 'Zero incidents in 12 months'], color: '#1a1a1a' },
  { id: 2, company: 'MedAxis Health', industry: 'Healthcare', employees: '6,200', countries: 1, title: 'MedAxis Modernized Patient Care Coordination Across 80 Clinics', desc: 'MedAxis deployed a new integrated platform across all facilities enabling real-time care coordination.', challenge: 'Paper-based referral systems caused 3–5 day delays in specialist referrals.', solution: 'Integrated patient data platform with real-time referral workflows.', results: ['60% less paperwork', '3× faster referrals', '4.8★ staff satisfaction', '18% fewer readmissions'], color: '#444' },
  { id: 3, company: 'VectorTech Manufacturing', industry: 'Manufacturing', employees: '3,800', countries: 8, title: 'VectorTech Cut Supply Chain Delays by 42% Using Predictive Analytics', desc: 'By replacing spreadsheets with AI-driven forecasting, VectorTech now anticipates disruptions before they happen.', challenge: 'Manual spreadsheet-based supply chain tracking led to reactive decisions.', solution: 'Implemented AI-powered predictive analytics integrated with existing ERP systems.', results: ['42% fewer delays', '22% inventory savings', '$8M annual impact', '15% faster negotiations'], color: '#777' },
];

const INITIAL_PAPERS = [
  { id: 1, title: 'The Total Economic Impact of Modern Device Management', desc: 'Commissioned research analyzing cost savings, productivity gains, and security improvements across 200 enterprises.', tags: ['IT', 'ROI', 'Research'], pages: 48, year: 2025, category: 'Research', audience: 'IT Leaders, CFOs', abstract: 'This study quantifies the financial and operational benefits organizations realize when modernizing device management infrastructure.', pdfName: null },
  { id: 2, title: 'Enterprise AI Readiness: A Framework for 2025 and Beyond', desc: "A comprehensive framework to assess your organization's AI readiness across data, talent, infrastructure, and governance.", tags: ['AI', 'Strategy', 'Framework'], pages: 36, year: 2025, category: 'Framework', audience: 'C-Suite, Strategy Teams', abstract: 'Organizations increasingly invest in AI capabilities without a clear readiness baseline. This framework defines five maturity stages.', pdfName: null },
  { id: 3, title: 'Security at Scale: Protecting a Distributed Enterprise Workforce', desc: 'Best practices, architectural guidance, and real-world benchmarks for securing hybrid and remote enterprise environments.', tags: ['Security', 'Remote Work'], pages: 52, year: 2024, category: 'Best Practices', audience: 'CISOs, Security Teams', abstract: 'The shift to distributed work has expanded the enterprise attack surface dramatically.', pdfName: null },
  { id: 4, title: 'The Future of Work: Productivity Trends Reshaping the Enterprise', desc: 'Survey data from 1,200 enterprise leaders on how work is evolving and which investments are paying off most.', tags: ['Productivity', 'Future of Work', 'Survey'], pages: 28, year: 2024, category: 'Survey', audience: 'HR, Operations, Leadership', abstract: 'Drawing on 1,200 enterprise leaders across 18 countries, this report identifies investments delivering the strongest returns.', pdfName: null },
];

const INITIAL_FAQS = [
  { id: 1, category: 'Getting Started', q: 'How do I get started with enterprise deployment?', a: 'Getting started is straightforward. Our Enterprise team will work with you to assess your current environment, define deployment goals, and create a phased rollout plan. Most enterprises are fully deployed within 60–90 days.' },
  { id: 2, category: 'Security & Compliance', q: 'What security certifications and compliance standards are supported?', a: 'Our platform is certified against SOC 2 Type II, ISO 27001, HIPAA, FedRAMP, and GDPR frameworks.' },
  { id: 3, category: 'Platform', q: 'Can resources be customized for different teams or regions?', a: 'Yes. Our platform supports granular role-based access controls, regional content segmentation, and department-specific resource libraries.' },
  { id: 4, category: 'Support', q: 'What support is available for enterprise accounts?', a: 'Enterprise accounts receive dedicated Customer Success management, 24/7 priority support with a 1-hour SLA, quarterly business reviews, and access to our private beta program.' },
  { id: 5, category: 'Getting Started', q: 'Is there a trial or pilot program available?', a: 'Yes. We offer a 30-day enterprise pilot with full feature access for up to 50 users.' },
  { id: 6, category: 'Pricing', q: 'How is pricing structured for enterprise plans?', a: 'Enterprise pricing is based on seat count, selected modules, and contract length. Volume discounts apply at 250, 500, and 1,000+ seats.' },
  { id: 7, category: 'Security & Compliance', q: 'How is data stored and who has access?', a: 'Data is stored in SOC 2 certified data centres with AES-256 encryption at rest and TLS 1.3 in transit.' },
  { id: 8, category: 'Support', q: 'What is the average time to resolve a support ticket?', a: 'Enterprise accounts have a guaranteed 1-hour first response SLA. Median resolution time for P1 issues is under 4 hours.' },
  { id: 9, category: 'Pricing', q: 'Are there discounts for non-profit or educational institutions?', a: 'Yes. We offer reduced pricing for verified non-profit organisations and academic institutions. Discounts range from 20–40%.' },
  { id: 10, category: 'Platform', q: 'Where can I download all available resources?', a: 'All whitepapers, case studies, and guides are available individually on this page or as a bundled download via your Enterprise portal.' },
];

/* ── COLOUR MAPS ──────────────────────────────────────────────── */
const BLOG_CAT_COLORS = {
  'AI & Innovation': { bg: '#e6f1fb', color: '#0c447c', border: '#b5d4f4' },
  'Security':        { bg: '#faeeda', color: '#633806', border: '#fac775' },
  'Productivity':    { bg: '#eaf3de', color: '#27500a', border: '#c0dd97' },
  'IT & Cloud':      { bg: '#e1f5ee', color: '#085041', border: '#9fe1cb' },
  'Strategy':        { bg: '#eeedfe', color: '#3c3489', border: '#cecbf6' },
};
const INDUSTRY_COLORS = {
  'Financial Services': { bg: '#e6f1fb', color: '#0c447c', border: '#b5d4f4' },
  'Healthcare':         { bg: '#e1f5ee', color: '#085041', border: '#9fe1cb' },
  'Manufacturing':      { bg: '#faeeda', color: '#633806', border: '#fac775' },
  'Technology':         { bg: '#eeedfe', color: '#3c3489', border: '#cecbf6' },
  'Retail':             { bg: '#eaf3de', color: '#27500a', border: '#c0dd97' },
};
const PAPER_CAT_COLORS = {
  'Research':       { bg: '#e6f1fb', color: '#0c447c', border: '#b5d4f4' },
  'Framework':      { bg: '#eeedfe', color: '#3c3489', border: '#cecbf6' },
  'Best Practices': { bg: '#eaf3de', color: '#27500a', border: '#c0dd97' },
  'Survey':         { bg: '#faeeda', color: '#633806', border: '#fac775' },
};
const FAQ_CAT_COLORS = {
  'Getting Started':       { bg: '#e1f5ee', color: '#085041', border: '#9fe1cb' },
  'Security & Compliance': { bg: '#faeeda', color: '#633806', border: '#fac775' },
  'Platform':              { bg: '#eeedfe', color: '#3c3489', border: '#cecbf6' },
  'Support':               { bg: '#e6f1fb', color: '#0c447c', border: '#b5d4f4' },
  'Pricing':               { bg: '#eaf3de', color: '#27500a', border: '#c0dd97' },
};

/* ── ICONS ────────────────────────────────────────────────────── */
const ICON_PATHS = {
  grid:   <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  blog:   <><rect x="3" y="3" width="18" height="4" rx="1"/><rect x="3" y="10" width="11" height="2" rx="1"/><rect x="3" y="15" width="14" height="2" rx="1"/></>,
  case:   <><path d="M16 4H18a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></>,
  paper:  <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></>,
  faq:    <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5"/></>,
  plus:   <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
  edit:   <><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
  trash:  <><polyline points="3,6 5,6 21,6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></>,
  close:  <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
  check:  <><polyline points="20,6 9,17 4,12"/></>,
  save:   <><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17,21 17,13 7,13"/><polyline points="7,3 7,8 15,8"/></>,
  search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
  layers: <><polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/></>,
  pdf:    <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><text x="6" y="18" fontSize="6" fill="currentColor" stroke="none" fontWeight="700">PDF</text></>,
  upload: <><polyline points="16,16 12,12 8,16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></>,
};

const Icon = ({ name, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {ICON_PATHS[name]}
  </svg>
);

/* ── SHARED UI PRIMITIVES ─────────────────────────────────────── */
const ColorBadge = ({ label, colorMap }) => {
  const c = colorMap?.[label] || { bg: '#f2f2f0', color: '#555', border: '#e8e8e8' };
  return (
    <span className="ra-cbadge" style={{ background: c.bg, color: c.color, borderColor: c.border }}>
      {label}
    </span>
  );
};

const Badge = ({ label }) => <span className="ra-badge">{label}</span>;

const Toast = ({ msg }) => (
  <div className="ra-toast">
    <Icon name="check" size={14} /> {msg}
  </div>
);

const Confirm = ({ message, onConfirm, onCancel }) => (
  <div className="ra-confirm-overlay" onClick={onCancel}>
    <div className="ra-confirm-box" onClick={e => e.stopPropagation()}>
      <p className="ra-confirm-box__title">Confirm delete</p>
      <p className="ra-confirm-box__msg">{message}</p>
      <div className="ra-confirm-box__actions">
        <button className="btn-ghost" onClick={onCancel}>Cancel</button>
        <button className="btn-primary btn-danger" onClick={onConfirm}>Delete</button>
      </div>
    </div>
  </div>
);

const Field = ({ label, children, full }) => (
  <div className={`ra-field${full ? ' ra-form-full' : ''}`}>
    <label className="ra-field__label">{label}</label>
    {children}
  </div>
);

const FormPanel = ({ title, onClose, onSave, onCancel, children }) => (
  <div className="ra-form-panel">
    <div className="ra-fp__header">
      <span className="ra-fp__title">{title}</span>
      <button className="btn-icon" onClick={onClose}><Icon name="close" size={14} /></button>
    </div>
    {children}
    <div className="ra-fp__footer">
      <button className="btn-ghost" onClick={onCancel}>Cancel</button>
      <button className="btn-primary" onClick={onSave}>
        <Icon name="save" size={13} /> Save
      </button>
    </div>
  </div>
);

const SearchInput = ({ value, onChange, placeholder }) => (
  <div className="ra-search-wrap">
    <span className="ra-search-wrap__icon"><Icon name="search" size={14} /></span>
    <input value={value} onChange={onChange} placeholder={placeholder || 'Search…'} />
  </div>
);

const DataTable = ({ heads, rows, empty }) => (
  <div className="ra-table-wrap">
    <table className="ra-table">
      <thead><tr>{heads.map(h => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows}</tbody>
    </table>
    {empty && rows.length === 0 && <div className="ra-table__empty">{empty}</div>}
  </div>
);

function PdfUploadField({ pdfName, onFile, onClear }) {
  const ref = useRef();
  const hasPdf = !!pdfName;
  return (
    <div>
      <input ref={ref} type="file" accept="application/pdf" style={{ display: 'none' }}
        onChange={e => { if (e.target.files[0]) onFile(e.target.files[0]); e.target.value = ''; }} />
      <div className={`ra-pdf-upload${hasPdf ? ' ra-pdf-upload--has' : ''}`}
        onClick={() => !hasPdf && ref.current.click()}>
        <span className="ra-pdf-upload__icon">
          {hasPdf ? <Icon name="pdf" size={20} /> : <Icon name="upload" size={20} />}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="ra-pdf-upload__text">{hasPdf ? pdfName : 'Click to upload PDF'}</div>
          <div className="ra-pdf-upload__hint">{hasPdf ? 'PDF attached' : 'PDF files only · Max 50 MB'}</div>
        </div>
        {hasPdf && (
          <button className="ra-pdf-clear" onClick={e => { e.stopPropagation(); onClear(); }} title="Remove PDF">✕</button>
        )}
      </div>
    </div>
  );
}

/* ── BLOG ─────────────────────────────────────────────────────── */
function BlogForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial });
  const ch = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  return (
    <FormPanel title={form.id ? 'Edit Article' : 'New Article'} onClose={onCancel} onSave={() => onSave(form)} onCancel={onCancel}>
      <div className="ra-form-grid">
        <Field label="Title" full><input name="title" value={form.title} onChange={ch} className="ra-input" placeholder="Article title" /></Field>
        <Field label="Description" full><textarea name="desc" value={form.desc} onChange={ch} rows={3} className="ra-input" /></Field>
        <Field label="Category">
          <select name="category" value={form.category} onChange={ch} className="ra-input">
            {BLOG_CATS.map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Read Time"><input name="readTime" value={form.readTime} onChange={ch} className="ra-input" placeholder="5 min read" /></Field>
        <Field label="Date"><input name="date" value={form.date} onChange={ch} className="ra-input" /></Field>
      </div>
    </FormPanel>
  );
}

function BlogSection({ onToast }) {
  const [posts, setPosts]     = useState(INITIAL_BLOGS);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding]   = useState(false);
  const [search, setSearch]   = useState('');
  const [delId, setDelId]     = useState(null);

  const blank = { title: '', desc: '', readTime: '5 min read', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), category: BLOG_CATS[0] };

  const filtered = posts.filter(p =>
    !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  const save = data => {
    if (adding) setPosts(prev => [...prev, { ...data, id: Date.now() }]);
    else setPosts(prev => prev.map(p => p.id === data.id ? data : p));
    onToast(adding ? 'Article added' : 'Article saved');
    setEditing(null); setAdding(false);
  };

  return (
    <div>
      {delId && <Confirm message="This article will be permanently deleted." onConfirm={() => { setPosts(prev => prev.filter(p => p.id !== delId)); setDelId(null); onToast('Article deleted'); }} onCancel={() => setDelId(null)} />}
      <div className="ra-toolbar">
        <SearchInput value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles…" />
        <button className="btn-primary" onClick={() => { setAdding(true); setEditing(blank); }}><Icon name="plus" size={14} /> New Article</button>
      </div>
      {(editing || adding) && <BlogForm initial={editing} onSave={save} onCancel={() => { setEditing(null); setAdding(false); }} />}
      <DataTable
        heads={['Title', 'Category', 'Date', 'Read Time', '']}
        empty="No articles found."
        rows={filtered.map(p => (
          <tr key={p.id}>
            <td className="td-bold td-clamp">{p.title}</td>
            <td><ColorBadge label={p.category} colorMap={BLOG_CAT_COLORS} /></td>
            <td className="td-muted">{p.date}</td>
            <td className="td-muted">{p.readTime}</td>
            <td>
              <div style={{ display: 'flex', gap: 2 }}>
                <button className="btn-icon" onClick={() => { setEditing(p); setAdding(false); }}><Icon name="edit" size={14} /></button>
                <button className="btn-icon btn-icon--red" onClick={() => setDelId(p.id)}><Icon name="trash" size={14} /></button>
              </div>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}

/* ── CASE STUDIES ─────────────────────────────────────────────── */
function CaseForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial, results: [...(initial.results || ['', '', '', ''])] });
  const ch  = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const chR = (i, v) => setForm(f => { const r = [...f.results]; r[i] = v; return { ...f, results: r }; });
  return (
    <FormPanel title={form.id ? 'Edit Case Study' : 'New Case Study'} onClose={onCancel} onSave={() => onSave(form)} onCancel={onCancel}>
      <div className="ra-form-grid">
        <Field label="Company"><input name="company" value={form.company} onChange={ch} className="ra-input" /></Field>
        <Field label="Industry">
          <select name="industry" value={form.industry} onChange={ch} className="ra-input">
            {CASE_INDS.map(i => <option key={i}>{i}</option>)}
          </select>
        </Field>
        <Field label="Employees"><input name="employees" value={form.employees} onChange={ch} className="ra-input" /></Field>
        <Field label="Countries"><input name="countries" type="number" value={form.countries} onChange={ch} className="ra-input" /></Field>
        <Field label="Title" full><input name="title" value={form.title} onChange={ch} className="ra-input" /></Field>
        <Field label="Description" full><textarea name="desc" value={form.desc} onChange={ch} rows={2} className="ra-input" /></Field>
        <Field label="Challenge" full><textarea name="challenge" value={form.challenge} onChange={ch} rows={2} className="ra-input" /></Field>
        <Field label="Solution" full><textarea name="solution" value={form.solution} onChange={ch} rows={2} className="ra-input" /></Field>
        <Field label="Accent Color">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="color" name="color" value={form.color} onChange={ch} style={{ width: 36, height: 34, borderRadius: 7, border: '1px solid #ddd', cursor: 'pointer', padding: 2 }} />
            <input name="color" value={form.color} onChange={ch} className="ra-input" style={{ flex: 1 }} />
          </div>
        </Field>
        <Field label="Results" full>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {form.results.map((r, i) => <input key={i} value={r} onChange={e => chR(i, e.target.value)} placeholder={`Result ${i + 1}`} className="ra-input" />)}
          </div>
        </Field>
      </div>
    </FormPanel>
  );
}

function CasesSection({ onToast }) {
  const [cases, setCases]     = useState(INITIAL_CASES);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding]   = useState(false);
  const [delId, setDelId]     = useState(null);
  const blank = { company: '', industry: CASE_INDS[0], employees: '', countries: 1, title: '', desc: '', challenge: '', solution: '', results: ['', '', '', ''], color: '#1a1a1a' };
  const save = data => {
    if (adding) setCases(prev => [...prev, { ...data, id: Date.now() }]);
    else setCases(prev => prev.map(c => c.id === data.id ? data : c));
    onToast(adding ? 'Case study added' : 'Case study saved');
    setEditing(null); setAdding(false);
  };
  return (
    <div>
      {delId && <Confirm message="This case study will be permanently deleted." onConfirm={() => { setCases(prev => prev.filter(c => c.id !== delId)); setDelId(null); onToast('Case study deleted'); }} onCancel={() => setDelId(null)} />}
      <div className="ra-toolbar">
        <span className="ra-section-count">{cases.length} case studies</span>
        <button className="btn-primary" onClick={() => { setAdding(true); setEditing(blank); }}><Icon name="plus" size={14} /> New Case Study</button>
      </div>
      {(editing || adding) && <CaseForm initial={editing} onSave={save} onCancel={() => { setEditing(null); setAdding(false); }} />}
      <div className="ra-case-grid">
        {cases.map(cs => (
          <div key={cs.id} className="ra-case-card">
            <div className="ra-case-card__bar" style={{ background: cs.color }} />
            <div className="ra-case-card__body">
              <div className="ra-case-card__header">
                <div>
                  <div className="ra-case-card__industry">{cs.industry}</div>
                  <div className="ra-case-card__company">{cs.company}</div>
                  <div className="ra-case-card__meta">{cs.employees} employees · {cs.countries} {cs.countries === 1 ? 'country' : 'countries'}</div>
                </div>
                <div style={{ display: 'flex', gap: 2 }}>
                  <button className="btn-icon" onClick={() => { setEditing(cs); setAdding(false); }}><Icon name="edit" size={14} /></button>
                  <button className="btn-icon btn-icon--red" onClick={() => setDelId(cs.id)}><Icon name="trash" size={14} /></button>
                </div>
              </div>
              <p className="ra-case-card__title">{cs.title}</p>
              <div className="ra-case-card__results">
                {cs.results.filter(Boolean).slice(0, 4).map((r, i) => (
                  <span key={i} className={`ra-result-tag ${i % 2 === 0 ? 'ra-result-tag--blue' : 'ra-result-tag--green'}`}>{r}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── WHITEPAPERS ──────────────────────────────────────────────── */
function PaperForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial, tags: Array.isArray(initial.tags) ? initial.tags.join(', ') : '', pdfName: initial.pdfName || null });
  const ch = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSave = () => onSave({ ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), pages: Number(form.pages), year: Number(form.year) });
  return (
    <FormPanel title={form.id ? 'Edit Whitepaper' : 'New Whitepaper'} onClose={onCancel} onSave={handleSave} onCancel={onCancel}>
      <div className="ra-form-grid">
        <Field label="Title" full><input name="title" value={form.title} onChange={ch} className="ra-input" /></Field>
        <Field label="Description" full><textarea name="desc" value={form.desc} onChange={ch} rows={2} className="ra-input" /></Field>
        <Field label="Abstract" full><textarea name="abstract" value={form.abstract} onChange={ch} rows={3} className="ra-input" /></Field>
        <Field label="Category">
          <select name="category" value={form.category} onChange={ch} className="ra-input">
            {PAPER_CATS.map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Audience"><input name="audience" value={form.audience} onChange={ch} className="ra-input" /></Field>
        <Field label="Year"><input name="year" type="number" value={form.year} onChange={ch} className="ra-input" /></Field>
        <Field label="Pages"><input name="pages" type="number" value={form.pages} onChange={ch} className="ra-input" /></Field>
        <Field label="Tags (comma-separated)" full><input name="tags" value={form.tags} onChange={ch} className="ra-input" placeholder="AI, Strategy, Research" /></Field>
        <Field label="PDF File" full>
          <PdfUploadField pdfName={form.pdfName} onFile={f => setForm(prev => ({ ...prev, pdfName: f.name, pdfFile: f }))} onClear={() => setForm(prev => ({ ...prev, pdfName: null, pdfFile: null }))} />
        </Field>
      </div>
    </FormPanel>
  );
}

function PapersSection({ onToast }) {
  const [papers, setPapers]   = useState(INITIAL_PAPERS);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding]   = useState(false);
  const [delId, setDelId]     = useState(null);
  const blank = { title: '', desc: '', abstract: '', audience: '', tags: [], pages: 1, year: 2025, category: PAPER_CATS[0], pdfName: null };
  const save = data => {
    if (adding) setPapers(prev => [...prev, { ...data, id: Date.now() }]);
    else setPapers(prev => prev.map(p => p.id === data.id ? data : p));
    onToast(adding ? 'Whitepaper added' : 'Whitepaper saved');
    setEditing(null); setAdding(false);
  };
  return (
    <div>
      {delId && <Confirm message="This whitepaper will be permanently deleted." onConfirm={() => { setPapers(prev => prev.filter(p => p.id !== delId)); setDelId(null); onToast('Whitepaper deleted'); }} onCancel={() => setDelId(null)} />}
      <div className="ra-toolbar">
        <span className="ra-section-count">{papers.length} whitepapers</span>
        <button className="btn-primary" onClick={() => { setAdding(true); setEditing(blank); }}><Icon name="plus" size={14} /> New Whitepaper</button>
      </div>
      {(editing || adding) && <PaperForm initial={editing} onSave={save} onCancel={() => { setEditing(null); setAdding(false); }} />}
      <DataTable
        heads={['Title', 'Category', 'Year', 'Pages', 'Tags', 'PDF', '']}
        empty="No whitepapers."
        rows={papers.map(wp => (
          <tr key={wp.id}>
            <td className="td-bold td-clamp">{wp.title}</td>
            <td><ColorBadge label={wp.category} colorMap={PAPER_CAT_COLORS} /></td>
            <td className="td-muted">{wp.year}</td>
            <td className="td-muted">{wp.pages}p</td>
            <td><div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>{wp.tags.slice(0, 2).map(t => <Badge key={t} label={t} />)}</div></td>
            <td>
              {wp.pdfName
                ? <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#27500a', fontSize: 12, fontWeight: 500 }}><Icon name="pdf" size={13} /> {wp.pdfName.length > 18 ? wp.pdfName.slice(0, 18) + '…' : wp.pdfName}</span>
                : <span className="td-muted" style={{ fontSize: 12 }}>—</span>}
            </td>
            <td>
              <div style={{ display: 'flex', gap: 2 }}>
                <button className="btn-icon" onClick={() => { setEditing(wp); setAdding(false); }}><Icon name="edit" size={14} /></button>
                <button className="btn-icon btn-icon--red" onClick={() => setDelId(wp.id)}><Icon name="trash" size={14} /></button>
              </div>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}

/* ── FAQS ─────────────────────────────────────────────────────── */
function FaqForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial });
  const ch = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  return (
    <FormPanel title={form.id ? 'Edit FAQ' : 'New FAQ'} onClose={onCancel} onSave={() => onSave(form)} onCancel={onCancel}>
      <div className="ra-form-grid">
        <Field label="Category">
          <select name="category" value={form.category} onChange={ch} className="ra-input">
            {FAQ_CATS.map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <div />
        <Field label="Question" full><input name="q" value={form.q} onChange={ch} className="ra-input" placeholder="What is…?" /></Field>
        <Field label="Answer" full><textarea name="a" value={form.a} onChange={ch} rows={4} className="ra-input" /></Field>
      </div>
    </FormPanel>
  );
}

function FaqsSection({ onToast }) {
  const [faqs, setFaqs]       = useState(INITIAL_FAQS);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding]   = useState(false);
  const [filter, setFilter]   = useState('All');
  const [delId, setDelId]     = useState(null);
  const blank = { category: FAQ_CATS[0], q: '', a: '' };
  const save = data => {
    if (adding) setFaqs(prev => [...prev, { ...data, id: Date.now() }]);
    else setFaqs(prev => prev.map(f => f.id === data.id ? data : f));
    onToast(adding ? 'FAQ added' : 'FAQ saved');
    setEditing(null); setAdding(false);
  };
  const filtered = faqs.filter(f => filter === 'All' || f.category === filter);
  return (
    <div>
      {delId && <Confirm message="This FAQ will be permanently deleted." onConfirm={() => { setFaqs(prev => prev.filter(f => f.id !== delId)); setDelId(null); onToast('FAQ deleted'); }} onCancel={() => setDelId(null)} />}
      <div className="ra-faq-filters">
        <div className="ra-faq-pills">
          {['All', ...FAQ_CATS].map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`ra-faq-pill${filter === c ? ' ra-faq-pill--active' : ''}`}>{c}</button>
          ))}
        </div>
        <button className="btn-primary" onClick={() => { setAdding(true); setEditing(blank); }}><Icon name="plus" size={14} /> New FAQ</button>
      </div>
      {(editing || adding) && <FaqForm initial={editing} onSave={save} onCancel={() => { setEditing(null); setAdding(false); }} />}
      <div className="ra-faq-list">
        {filtered.length === 0
          ? <div className="ra-faq-empty">No FAQs in this category.</div>
          : filtered.map(f => (
            <div key={f.id} className="ra-faq-item">
              <div className="ra-faq-item__body">
                <div className="ra-faq-item__cat"><ColorBadge label={f.category} colorMap={FAQ_CAT_COLORS} /></div>
                <p className="ra-faq-item__q">{f.q}</p>
                <p className="ra-faq-item__a">{f.a}</p>
              </div>
              <div className="ra-faq-item__actions">
                <button className="btn-icon" onClick={() => { setEditing(f); setAdding(false); }}><Icon name="edit" size={14} /></button>
                <button className="btn-icon btn-icon--red" onClick={() => setDelId(f.id)}><Icon name="trash" size={14} /></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

/* ── OVERVIEW ─────────────────────────────────────────────────── */
function OverviewSection({ onNavigate, counts }) {
  const stats = [
    { label: 'Blog Articles', count: counts.blogs,  icon: 'blog',  tab: 'blogs'  },
    { label: 'Case Studies',  count: counts.cases,  icon: 'case',  tab: 'cases'  },
    { label: 'Whitepapers',   count: counts.papers, icon: 'paper', tab: 'papers' },
    { label: 'FAQs',          count: counts.faqs,   icon: 'faq',   tab: 'faqs'   },
  ];
  return (
    <div>
      <div className="ra-stat-grid">
        {stats.map(s => (
          <button key={s.tab} className="ra-stat-card" onClick={() => onNavigate(s.tab)}>
            <div className="ra-stat-icon"><Icon name={s.icon} size={18} /></div>
            <div>
              <div className="ra-stat-count">{s.count}</div>
              <div className="ra-stat-label">{s.label}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="ra-ov-card">
        <div className="ra-ov-card__header">
          <span className="ra-ov-card__title"><Icon name="blog" size={16} /> Recent Blog Articles</span>
          <button className="btn-link" onClick={() => onNavigate('blogs')}>View all →</button>
        </div>
        <DataTable heads={['Title', 'Category', 'Date']} empty=""
          rows={INITIAL_BLOGS.slice(0, 4).map(p => (
            <tr key={p.id}>
              <td className="td-bold td-clamp" style={{ maxWidth: 380 }}>{p.title}</td>
              <td><ColorBadge label={p.category} colorMap={BLOG_CAT_COLORS} /></td>
              <td className="td-muted">{p.date}</td>
            </tr>
          ))}
        />
      </div>
      <div className="ra-ov-card">
        <div className="ra-ov-card__header">
          <span className="ra-ov-card__title"><Icon name="case" size={16} /> Case Studies</span>
          <button className="btn-link" onClick={() => onNavigate('cases')}>View all →</button>
        </div>
        <DataTable heads={['Company', 'Industry', 'Employees', 'Top Result']} empty=""
          rows={INITIAL_CASES.map(cs => (
            <tr key={cs.id}>
              <td className="td-bold">{cs.company}</td>
              <td><ColorBadge label={cs.industry} colorMap={INDUSTRY_COLORS} /></td>
              <td className="td-muted">{cs.employees}</td>
              <td className="td-muted">{cs.results[0]}</td>
            </tr>
          ))}
        />
      </div>
      <div className="ra-two-col">
        <div className="ra-ov-card" style={{ marginBottom: 0 }}>
          <div className="ra-ov-card__header">
            <span className="ra-ov-card__title"><Icon name="paper" size={16} /> Whitepapers</span>
            <button className="btn-link" onClick={() => onNavigate('papers')}>View all →</button>
          </div>
          {INITIAL_PAPERS.map(wp => (
            <div key={wp.id} className="ra-ilist-row">
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="ra-ilist-title">{wp.title}</div>
                <div className="ra-ilist-meta">{wp.pages}p · {wp.year}</div>
              </div>
              <ColorBadge label={wp.category} colorMap={PAPER_CAT_COLORS} />
            </div>
          ))}
        </div>
        <div className="ra-ov-card" style={{ marginBottom: 0 }}>
          <div className="ra-ov-card__header">
            <span className="ra-ov-card__title"><Icon name="faq" size={16} /> FAQs</span>
            <button className="btn-link" onClick={() => onNavigate('faqs')}>View all →</button>
          </div>
          {INITIAL_FAQS.slice(0, 5).map(f => (
            <div key={f.id} className="ra-ilist-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 5 }}>
              <ColorBadge label={f.category} colorMap={FAQ_CAT_COLORS} />
              <div style={{ fontSize: 13.5, fontWeight: 500, color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>{f.q}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── ROOT ─────────────────────────────────────────────────────── */
export default function ResourcesAdmin() {
  const [tab, setTab]     = useState('overview');
  const [toast, setToast] = useState('');

  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(''), 2600);
  };

  const counts = {
    blogs:  INITIAL_BLOGS.length,
    cases:  INITIAL_CASES.length,
    papers: INITIAL_PAPERS.length,
    faqs:   INITIAL_FAQS.length,
  };

  return (
    <div className="ra-root">
      {/* Header — white, no sticky */}
      <header className="ra-header">
        <div className="ra-brand">
          <div className="ra-logo"><Icon name="layers" size={15} /></div>
          <span className="ra-title">Resources Admin</span>
        </div>
        <nav className="ra-tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`ra-tab ra-tab--${tab === t.id ? 'active' : 'inactive'}`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="ra-content">
        {tab === 'overview' && <OverviewSection onNavigate={setTab} counts={counts} />}
        {tab === 'blogs'    && <BlogSection    onToast={showToast} />}
        {tab === 'cases'    && <CasesSection   onToast={showToast} />}
        {tab === 'papers'   && <PapersSection  onToast={showToast} />}
        {tab === 'faqs'     && <FaqsSection    onToast={showToast} />}
      </main>

      {toast && <Toast msg={toast} />}
    </div>
  );
}