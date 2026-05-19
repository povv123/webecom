import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Adjust the relative path based on where this component is located
import '../../../styles/Admin/Candidates.css'; 

/* ─────────────────────────────────────────────
   SEED DATA
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function statusLabel(status) {
  // Black-on-white with a simple border — no colours needed
  return status;
}

/* ── Inline SVG icons ── */
const IconMail = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
  </svg>
);
const IconPhone = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.22 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const IconPin = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const IconPrint = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"/>
  </svg>
);

/* ─────────────────────────────────────────────
   CV PAPER  — one per candidate
───────────────────────────────────────────── */
function CandidateCV({ candidate }) {
  const initials = candidate.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className="cvp-paper">

      {/* ══ HEADER BAND ══ */}
      <header className="cvp-header">
        <div className="cvp-header-left">
          <div className="cvp-avatar">{initials}</div>
          <div>
            <h1 className="cvp-name">{candidate.name}</h1>
            <p className="cvp-role">{candidate.role}</p>
            <code className="cvp-cid">{candidate.id}</code>
          </div>
        </div>
        <div className="cvp-header-right">
          <div className="cvp-status-box">{statusLabel(candidate.status)}</div>
        </div>
      </header>

      {/* ══ BODY: sidebar + main ══ */}
      <div className="cvp-body">

        {/* ── Left sidebar ── */}
        <aside className="cvp-sidebar">

          <section className="cvp-sb-section">
            <div className="cvp-sb-label">Contact</div>
            <div className="cvp-info"><IconMail /><span>{candidate.email}</span></div>
            <div className="cvp-info"><IconPhone /><span>{candidate.phone}</span></div>
            <div className="cvp-info"><IconPin /><span>{candidate.location}</span></div>
            <div className="cvp-info"><IconCalendar /><span>Applied {candidate.appliedDate}</span></div>
          </section>

          <div className="cvp-sb-rule" />

          <section className="cvp-sb-section">
            <div className="cvp-sb-label">Education</div>
            <div className="cvp-kv">
              <span className="cvp-k">University</span>
              <span className="cvp-v">{candidate.university}</span>
            </div>
            <div className="cvp-kv">
              <span className="cvp-k">Major</span>
              <span className="cvp-v">{candidate.major}</span>
            </div>
          </section>

          <div className="cvp-sb-rule" />

          <section className="cvp-sb-section">
            <div className="cvp-sb-label">Application</div>
            <div className="cvp-kv">
              <span className="cvp-k">Department</span>
              <span className="cvp-v">{candidate.department}</span>
            </div>
            <div className="cvp-kv">
              <span className="cvp-k">Type</span>
              <span className="cvp-v">{candidate.type}</span>
            </div>
            <div className="cvp-kv">
              <span className="cvp-k">Experience</span>
              <span className="cvp-v">{candidate.experience}</span>
            </div>
            <div className="cvp-kv">
              <span className="cvp-k">Availability</span>
              <span className="cvp-v">{candidate.availability}</span>
            </div>
          </section>

        </aside>

        {/* ── Main content ── */}
        <main className="cvp-main">

          <section className="cvp-section">
            <div className="cvp-section-head">Skills &amp; Technologies</div>
            <div className="cvp-skills">
              {candidate.skills.map(s => (
                <span key={s} className="cvp-skill">{s}</span>
              ))}
            </div>
          </section>

          <section className="cvp-section">
            <div className="cvp-section-head">Reviewer Notes</div>
            <div className="cvp-note">
              <p className="cvp-note-text">{candidate.note}</p>
            </div>
          </section>

          <div className="cvp-main-spacer" />

          <footer className="cvp-footer">
            <span>Candidate Profile · Confidential</span>
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </footer>

        </main>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Candidates = () => {
  const { state } = useLocation();
  const navigate  = useNavigate();
  const job       = state?.job;

  const candidates = SEED_CANDIDATES.filter(
    c => !job || c.jobId === job.id
  );

  return (
    <>
      {/* Screen-only toolbar */}
      <div className="cvp-chrome no-print">
        <button className="cvp-back" onClick={() => navigate(-1)}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Careers
        </button>
        <button className="cvp-print-btn" onClick={() => window.print()}>
          <IconPrint />
          Print CV
        </button>
      </div>

      {/* Paper stack */}
      <div className="cvp-stack">
        {candidates.length === 0
          ? <p className="cvp-empty">No candidates found for this posting.</p>
          : candidates.map(c => <CandidateCV key={c.id} candidate={c} />)
        }
      </div>
    </>
  );
};

export default Candidates;