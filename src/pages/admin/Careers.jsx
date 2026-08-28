import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/CareersAdmin.css'; 

/* ─────────────────────────────────────────────
   SEED DATA
───────────────────────────────────────────── */
const SEED_JOBS = [
  { id: 'JOB-1042', title: 'Senior React Developer',     department: 'Engineering', location: 'Remote',         type: 'Full-time',  status: 'Open',   applicants: 1, posted: 'Oct 15, 2025' },
  { id: 'JOB-1043', title: 'Digital Marketing Intern',   department: 'Marketing',   location: 'Phnom Penh',    type: 'Internship', status: 'Open',   applicants: 1, posted: 'Oct 18, 2025' },
  { id: 'JOB-1044', title: 'Customer Support Specialist', department: 'Support',     location: 'Siem Reap',     type: 'Full-time',  status: 'Draft',  applicants: 0, posted: '—'            },
  { id: 'JOB-1045', title: 'Warehouse Manager',           department: 'Logistics',   location: 'Sihanoukville', type: 'Full-time',  status: 'Closed', applicants: 0, posted: 'Sep 01, 2025' },
  { id: 'JOB-1046', title: 'Part-time UI Designer',       department: 'Design',      location: 'Remote',         type: 'Part-time',  status: 'Open',   applicants: 0, posted: 'Oct 22, 2025' },
  { id: 'JOB-1047', title: 'AI / Machine Learning Engineer', department: 'Engineering', location: 'Phnom Penh',    type: 'Full-time',  status: 'Open',   applicants: 3, posted: 'May 02, 2026' },
  { id: 'JOB-1048', title: 'Digital Product Manager',        department: 'Operations',  location: 'Remote',         type: 'Full-time',  status: 'Open',   applicants: 2, posted: 'May 05, 2026' },
  { id: 'JOB-1049', title: 'Supply Chain Specialist',        department: 'Logistics',   location: 'Phnom Penh',    type: 'Full-time',  status: 'Open',   applicants: 1, posted: 'May 10, 2026' },
  { id: 'JOB-1050', title: 'E-commerce Ops Intern',          department: 'Operations',  location: 'Phnom Penh',    type: 'Internship', status: 'Open',   applicants: 4, posted: 'May 12, 2026' },
  { id: 'JOB-1051', title: 'Full Stack Engineer',            department: 'Engineering', location: 'Remote',         type: 'Contract',   status: 'Open',   applicants: 0, posted: 'May 14, 2026' },
  { id: 'JOB-1052', title: 'Fintech Financial Analyst',      department: 'Finance',     location: 'Phnom Penh',    type: 'Full-time',  status: 'Draft',  applicants: 0, posted: '—'            },
];

// ── Candidates are defined here, keyed by jobId ──
export const SEED_CANDIDATES = [
  {
    id: 'CAN-9021',
    jobId: 'JOB-1042',
    name: 'Sok Vichea',
    email: 'vichea.sok@example.com',
    phone: '+855 12 888 999',
    location: 'Phnom Penh, Cambodia',
    appliedDate: 'May 12, 2026',
    role: 'Senior React Developer',
    department: 'Engineering',
    type: 'Full-time',
    university: 'RUPP',
    major: 'Computer Science',
    experience: '5+ Years',
    availability: 'Immediate',
    status: 'Shortlisted',
    skills: ['React.js', 'Node.js', 'TypeScript', 'Redux Toolkit', 'Vite'],
    note: 'Strong technical execution. Handled challenging state management optimization tests with clean architectural patterns.',
  },
  {
    id: 'CAN-9022',
    jobId: 'JOB-1043',
    name: 'Chan Eliza',
    email: 'eliza.c@example.com',
    phone: '+855 93 444 555',
    location: 'Battambang, Cambodia',
    appliedDate: 'May 14, 2026',
    role: 'Digital Marketing Intern',
    department: 'Marketing',
    type: 'Internship',
    university: 'FOCUS Center / BIT',
    major: 'Software Engineering',
    experience: 'Academic Only',
    availability: 'Full-time (3 Months)',
    status: 'Under Review',
    skills: ['SEO Management', 'Content Creation', 'Meta Suite', 'Canva'],
    note: 'Highly creative portfolio. Built an interactive platform concept featuring elegant visual assets and glassmorphism layouts.',
  },
];

const EMPTY_JOB    = { title: '', department: '', location: '', type: '', status: 'Draft', description: '', requirements: '' };
const EMPTY_INTERN = { fullName: '', email: '', phone: '', university: '', major: '', department: '', availability: '', message: '' };

const DEPTS        = ['Engineering', 'Marketing', 'Design', 'Support', 'Logistics', 'Operations', 'Finance', 'HR'];
const INTERN_DEPTS = ['Software Engineering', 'E-commerce Operations', 'Digital Marketing', 'Graphic Design', 'Supply Chain & Logistics', 'Finance & Accounting'];
const AVAILABILITIES = ['Full-time (3 Months)', 'Full-time (6 Months)', 'Part-time (Morning)', 'Part-time (Afternoon)'];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function todayLabel() {
  return new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}
function nextId(jobs) {
  if (jobs.length === 0) return 'JOB-1042';
  const max = jobs.reduce((m, j) => Math.max(m, parseInt(j.id.split('-')[1], 10)), 1042);
  return `JOB-${max + 1}`;
}

/* ─────────────────────────────────────────────
   SHARED UI
───────────────────────────────────────────── */
function TypeBadge({ type }) {
  const slug = type.toLowerCase().replace(/[\s()]+/g, '-');
  return <span className={`ca-badge ca-type ca-type--${slug}`}>{type}</span>;
}
function StatusBadge({ status }) {
  return <span className={`ca-badge ca-status ca-status--${status.toLowerCase()}`}>{status}</span>;
}
function StatCard({ label, value, accent }) {
  return (
    <div className="ca-stat-card">
      <span className="ca-stat-label">{label}</span>
      <span className={`ca-stat-value${accent ? ' ca-stat-value--accent' : ''}`}>{value}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   JOB FORM
───────────────────────────────────────────── */
function JobForm({ initial, onSubmit, onCancel, submitLabel }) {
  const [form, setForm] = useState(initial);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.department || !form.location || !form.type) return;
    onSubmit(form);
  };
  return (
    <form className="ca-form" onSubmit={handleSubmit} noValidate>
      <div className="ca-form-section-title">Posting details</div>
      <div className="ca-form-grid">
        <div className="ca-field ca-field--full">
          <label className="ca-label">Job title <span className="ca-req">*</span></label>
          <input className="ca-input" value={form.title} onChange={set('title')} placeholder="e.g. Senior React Developer" required />
        </div>
        <div className="ca-field">
          <label className="ca-label">Department <span className="ca-req">*</span></label>
          <select className="ca-input" value={form.department} onChange={set('department')} required>
            <option value="">Select department…</option>
            {DEPTS.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div className="ca-field">
          <label className="ca-label">Location <span className="ca-req">*</span></label>
          <input className="ca-input" value={form.location} onChange={set('location')} placeholder="Remote / City, Country" required />
        </div>
        <div className="ca-field">
          <label className="ca-label">Employment type <span className="ca-req">*</span></label>
          <select className="ca-input" value={form.type} onChange={set('type')} required>
            <option value="">Select type…</option>
            {['Full-time', 'Part-time', 'Internship', 'Contract'].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="ca-field">
          <label className="ca-label">Status</label>
          <select className="ca-input" value={form.status} onChange={set('status')}>
            {['Draft', 'Open', 'Closed'].map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="ca-field ca-field--full">
          <label className="ca-label">Job description</label>
          <textarea className="ca-input ca-textarea" value={form.description} onChange={set('description')} placeholder="Describe the role, responsibilities…" rows={4} />
        </div>
        <div className="ca-field ca-field--full">
          <label className="ca-label">Requirements</label>
          <textarea className="ca-input ca-textarea" value={form.requirements} onChange={set('requirements')} placeholder="Required skills, qualifications, experience…" rows={3} />
        </div>
      </div>
      <div className="ca-modal-footer">
        <button type="button" className="ca-btn ca-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" className="ca-btn ca-btn--primary">{submitLabel}</button>
      </div>
    </form>
  );
}

/* ─────────────────────────────────────────────
   INTERN FORM
───────────────────────────────────────────── */
function InternForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(EMPTY_INTERN);
  const [file, setFile] = useState(null);
  const fileRef = React.useRef();
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, university, major, department, availability } = form;
    if (!fullName || !email || !phone || !university || !major || !department || !availability) return;
    onSubmit({ ...form, cv: file?.name });
  };
  return (
    <form className="ca-form" onSubmit={handleSubmit} noValidate>
      <div className="ca-form-section-title">Personal information</div>
      <div className="ca-form-grid">
        <div className="ca-field ca-field--full">
          <label className="ca-label">Full name <span className="ca-req">*</span></label>
          <input className="ca-input" value={form.fullName} onChange={set('fullName')} placeholder="Full name (English or Khmer)" required />
        </div>
        <div className="ca-field">
          <label className="ca-label">Email <span className="ca-req">*</span></label>
          <input className="ca-input" type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" required />
        </div>
        <div className="ca-field">
          <label className="ca-label">Phone (Telegram preferred) <span className="ca-req">*</span></label>
          <input className="ca-input" type="tel" value={form.phone} onChange={set('phone')} placeholder="+855 …" required />
        </div>
      </div>
      <div className="ca-form-section-title">Academic background</div>
      <div className="ca-form-grid">
        <div className="ca-field">
          <label className="ca-label">University / school <span className="ca-req">*</span></label>
          <input className="ca-input" value={form.university} onChange={set('university')} placeholder="University name" required />
        </div>
        <div className="ca-field">
          <label className="ca-label">Major / field of study <span className="ca-req">*</span></label>
          <input className="ca-input" value={form.major} onChange={set('major')} placeholder="e.g. Computer Science" required />
        </div>
      </div>
      <div className="ca-form-section-title">Internship preferences</div>
      <div className="ca-form-grid">
        <div className="ca-field">
          <label className="ca-label">Department of interest <span className="ca-req">*</span></label>
          <select className="ca-input" value={form.department} onChange={set('department')} required>
            <option value="">Select department…</option>
            {INTERN_DEPTS.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div className="ca-field">
          <label className="ca-label">Availability <span className="ca-req">*</span></label>
          <select className="ca-input" value={form.availability} onChange={set('availability')} required>
            <option value="">Select…</option>
            {AVAILABILITIES.map((a) => <option key={a}>{a}</option>)}
          </select>
        </div>
        <div className="ca-field ca-field--full">
          <label className="ca-label">What do you hope to learn?</label>
          <textarea className="ca-input ca-textarea" value={form.message} onChange={set('message')} placeholder="Tell us your goals for this internship…" rows={3} />
        </div>
        <div className="ca-field ca-field--full">
          <label className="ca-label">CV / Student ID (PDF only)</label>
          <div className="ca-file-zone" onClick={() => fileRef.current.click()}>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0L8 8m4-4l4 4" />
            </svg>
            <span>{file ? file.name : 'Click to upload PDF'}</span>
          </div>
          <input ref={fileRef} type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
        </div>
      </div>
      <div className="ca-modal-footer">
        <button type="button" className="ca-btn ca-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" className="ca-btn ca-btn--primary">Submit application</button>
      </div>
    </form>
  );
}

/* ─────────────────────────────────────────────
   MODAL
───────────────────────────────────────────── */
function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className="ca-overlay" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ca-modal">
        <div className="ca-modal-header">
          <span className="ca-modal-title">{title}</span>
          <button className="ca-modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="ca-modal-body">{children}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TOAST
───────────────────────────────────────────── */
function Toast({ msg, type, onDone }) {
  React.useEffect(() => {
    if (!msg) return;
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [msg, onDone]);
  if (!msg) return null;
  return (
    <div className={`ca-toast ca-toast--${type}`} role="status">
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {msg}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const CareersAdmin = () => {
  const navigate = useNavigate();
  const [jobs, setJobs]             = useState(SEED_JOBS);
  const [search, setSearch]         = useState('');
  const [tab, setTab]               = useState('all');
  const [modal, setModal]           = useState(null);
  const [toast, setToast]           = useState({ msg: '', type: 'success' });

  const showToast = (msg, type = 'success') => setToast({ msg, type });

  /* derived stats */
  const totalApplicants = jobs.reduce((s, j) => s + j.applicants, 0);
  const activeOpenings  = jobs.filter((j) => j.status === 'Open' && j.type !== 'Internship').length;
  const draftCount      = jobs.filter((j) => j.status === 'Draft').length;
  const internCount     = jobs.filter((j) => j.type === 'Internship' && j.status === 'Open').length;

  /* filtered rows */
  const visible = jobs.filter((j) => {
    const q = search.toLowerCase();
    const matchSearch = !q || j.title.toLowerCase().includes(q) || j.department.toLowerCase().includes(q) || j.location.toLowerCase().includes(q);
    const matchTab =
      tab === 'all' ||
      (tab === 'open'   && j.status === 'Open' && j.type !== 'Internship') ||
      (tab === 'intern' && j.type === 'Internship');
    return matchSearch && matchTab;
  });

  /* handlers */
  const handleCreateJob = (form) => {
    const newJob = { ...form, id: nextId(jobs), applicants: 0, posted: form.status === 'Open' ? todayLabel() : '—' };
    setJobs((prev) => [newJob, ...prev]);
    setModal(null);
    showToast(`"${form.title}" posted as ${newJob.id}`);
  };
  const handleDeleteJob = (jobId) => {
    setJobs((prev) => prev.filter((j) => j.id !== jobId));
    showToast(`Posting ${jobId} removed successfully`);
  };
  const handleInternSubmit = (form) => {
    setJobs((prev) => prev.map((j) => j.type === 'Internship' && j.status === 'Open' ? { ...j, applicants: j.applicants + 1 } : j));
    setModal(null);
    showToast(`Application from ${form.fullName} received!`);
  };

  /* ── Write to localStorage then navigate (mirrors Invoice pattern) ── */
  const handleViewCandidates = (job) => {
    const candidates = SEED_CANDIDATES.filter((c) => c.jobId === job.id);
    localStorage.setItem('printCandidatesData', JSON.stringify({ job, candidates }));
    navigate('/admin/careers/candidates');
  };

  const TABS = [
    { id: 'all',    label: 'All postings' },
    { id: 'open',   label: 'Open jobs'    },
    { id: 'intern', label: 'Internships'  },
  ];

  return (
    <>
      <Toast msg={toast.msg} type={toast.type} onDone={() => setToast({ msg: '', type: 'success' })} />

      <div className="ca-root">

        {/* ── Page header ── */}
        <div className="ca-page-header">
          <div className="ca-page-header__text">
            <h1 className="ca-page-title">Careers &amp; Hiring</h1>
            <p className="ca-page-sub">Manage job postings, internships, and review incoming applications.</p>
          </div>
          <div className="ca-page-header__actions">
            <button className="ca-btn ca-btn--ghost" onClick={() => setModal('intern')}>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
              Intern application
            </button>
            <button className="ca-btn ca-btn--primary" onClick={() => setModal('create')}>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
              Create posting
            </button>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="ca-stats-row">
          <StatCard label="Active openings"    value={activeOpenings} />
          <StatCard label="Total applicants"   value={totalApplicants} accent />
          <StatCard label="Draft postings"     value={draftCount} />
          <StatCard label="Active internships" value={internCount} />
        </div>

        {/* ── Tabs + search ── */}
        <div className="ca-toolbar">
          <div className="ca-tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id} role="tab" aria-selected={tab === t.id}
                className={`ca-tab${tab === t.id ? ' ca-tab--active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="ca-search">
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="search" className="ca-search__input" placeholder="Search postings…"
              value={search} onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* ── Table ── */}
        <div className="ca-table-wrap">
          <table className="ca-table" role="table">
            <thead>
              <tr>
                <th>Job title &amp; dept</th>
                <th>Type &amp; location</th>
                <th>Applicants</th>
                <th>Date posted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr><td colSpan={6} className="ca-empty">No postings match this filter.</td></tr>
              ) : visible.map((job) => (
                <tr key={job.id} className="ca-row">
                  <td>
                    <div className="ca-job-title">{job.title}</div>
                    <div className="ca-job-meta">{job.department} · <span className="ca-job-id">{job.id}</span></div>
                  </td>
                  <td>
                    <TypeBadge type={job.type} />
                    <div className="ca-job-location">{job.location}</div>
                  </td>
                  <td>
                    <span className={`ca-app-count${job.applicants > 0 ? ' ca-app-count--has' : ''}`}>{job.applicants}</span>
                    <span className="ca-app-label"> candidates</span>
                  </td>
                  <td className="ca-date">{job.posted}</td>
                  <td><StatusBadge status={job.status} /></td>
                  <td>
                    <div className="ca-actions">
                      <button className="ca-btn-icon ca-btn-icon--red" onClick={() => handleDeleteJob(job.id)} aria-label={`Delete ${job.title}`}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                      <button
                        className="ca-btn-icon ca-btn-icon--blue"
                        disabled={job.applicants === 0}
                        aria-label={`View candidates for ${job.title}`}
                        onClick={() => handleViewCandidates(job)}
                      >
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/>
                        </svg>
                        Candidates
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* ── Modals ── */}
      <Modal open={modal === 'create'} title="Create job posting" onClose={() => setModal(null)}>
        <JobForm initial={EMPTY_JOB} onSubmit={handleCreateJob} onCancel={() => setModal(null)} submitLabel="Create posting" />
      </Modal>
      <Modal open={modal === 'intern'} title="Internship application" onClose={() => setModal(null)}>
        <InternForm onSubmit={handleInternSubmit} onCancel={() => setModal(null)} />
      </Modal>
    </>
  );
};

export default CareersAdmin;