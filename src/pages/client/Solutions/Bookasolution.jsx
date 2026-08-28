// src/pages/client/Solutions/BookSolution.jsx
import { useState } from "react";
import '../../../styles/solution/booksolution.css';

// ─── Industry Data ────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Clinical & medical sector solutions",
    count: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="5" y="5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    offerings: [
      "Hospital Management System",
      "Patient Data & EHR Integration",
      "Medical Equipment Procurement",
      "Healthcare Staff Training",
    ],
  },
  {
    id: "education",
    name: "Education",
    tagline: "Schools, universities & learning centers",
    count: 5,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L2 6l7 4 7-4-7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 10l7 4 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    offerings: [
      "E-Learning Platform Setup",
      "Campus IT Infrastructure",
      "Curriculum Development Consulting",
      "Student Information System",
      "Teacher & Staff Training Programs",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Industrial operations & production",
    count: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    offerings: [
      "Factory Automation Consulting",
      "Equipment Maintenance & Servicing",
      "Supply Chain Optimisation",
      "Quality Control System Integration",
    ],
  },
];

const STEPS = ["Industry", "Solution", "Details", "Review"];

const EMPTY_FORM = {
  name: "", organisation: "", email: "", phone: "",
  role: "", size: "", date: "", time: "", notes: "",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M5 15l7 7 13-13" stroke="currentColor" strokeWidth="2.4"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookSolution() {
  const [step,        setStep]        = useState(1);
  const [selectedInd, setSelectedInd] = useState(null);   // index into INDUSTRIES
  const [selectedOff, setSelectedOff] = useState(null);   // index into industry.offerings
  const [form,        setForm]        = useState(EMPTY_FORM);
  const [submitted,   setSubmitted]   = useState(false);
  const [refNum]                      = useState(
    "SOL-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const industry = selectedInd !== null ? INDUSTRIES[selectedInd] : null;

  // ── Handlers ──────────────────────────────────────────────
  function selectIndustry(i) {
    setSelectedInd(i);
    setSelectedOff(null);
    setStep(2);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function step3Valid() {
    return form.name.trim() && form.email.trim() && form.date;
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function reset() {
    setStep(1);
    setSelectedInd(null);
    setSelectedOff(null);
    setForm(EMPTY_FORM);
    setSubmitted(false);
  }

  // ── Success Screen ─────────────────────────────────────────
  if (submitted) {
    return (
      <div className="bs-wrap">
        <div className="bs-success-card">
          <div className="bs-success-icon">
            <SuccessIcon />
          </div>
          <h2 className="bs-success-title">Booking confirmed</h2>
          <p className="bs-success-sub">
            Your solution request has been received. A specialist from our{" "}
            <strong>{industry?.name}</strong> team will contact you within
            1 business day to discuss next steps.
          </p>
          <div className="bs-ref-box">
            Reference: <strong>{refNum}</strong>
          </div>
          <button className="bs-btn bs-btn-primary bs-btn-reset" onClick={reset}>
            Book another solution
          </button>
        </div>
      </div>
    );
  }

  // ── Main Render ────────────────────────────────────────────
  return (
    <div className="bs-wrap">

      {/* ── Progress Stepper ──────────────────────────────── */}
      <div className="bs-progress">
        {STEPS.map((label, i) => {
          const num      = i + 1;
          const isDone   = step > num;
          const isActive = step === num;
          return (
            <div key={label} className="bs-step-group">
              <div className={`bs-step-dot${isDone ? " done" : ""}${isActive ? " active" : ""}`}>
                {isDone ? <CheckIcon /> : num}
              </div>
              <span className={`bs-step-label${isActive ? " active" : ""}`}>{label}</span>
              {i < STEPS.length - 1 && (
                <div className={`bs-step-line${isDone ? " done" : ""}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════════════
          STEP 1 — SELECT INDUSTRY
      ══════════════════════════════════════════════════════ */}
      {step === 1 && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <p className="bs-section-label">Select your industry</p>
            <p style={{ fontSize: 13.5, color: "var(--bs-t2)", marginBottom: 20, marginTop: -8, lineHeight: 1.55 }}>
              We tailor our solutions to the specific needs of your sector.
            </p>
            <div className="bs-cat-grid">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.id}
                  className={`bs-cat-btn bs-cat-${ind.id}${selectedInd === i ? " selected" : ""}`}
                  onClick={() => selectIndustry(i)}
                >
                  <span className="bs-cat-icon">{ind.icon}</span>
                  <span className="bs-cat-name">{ind.name}</span>
                  <span className="bs-cat-count">{ind.tagline}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          STEP 2 — SELECT OFFERING
      ══════════════════════════════════════════════════════ */}
      {step === 2 && industry && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <span className={`bs-badge bs-badge-${industry.id}`}>{industry.name}</span>
            <p className="bs-section-label" style={{ marginTop: "1.1rem" }}>
              Choose a solution
            </p>
            <div className="bs-sub-list">
              {industry.offerings.map((offering, j) => (
                <button
                  key={j}
                  className={`bs-sub-item${selectedOff === j ? " selected" : ""}`}
                  onClick={() => setSelectedOff(j)}
                >
                  <span className={`bs-sub-radio${selectedOff === j ? " on" : ""}`} />
                  <span className="bs-sub-text">{offering}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="bs-btn-row">
            <button className="bs-btn bs-btn-ghost" onClick={() => setStep(1)}>Back</button>
            <button
              className="bs-btn bs-btn-primary"
              disabled={selectedOff === null}
              onClick={() => setStep(3)}
            >
              Continue <ArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          STEP 3 — CONTACT DETAILS
      ══════════════════════════════════════════════════════ */}
      {step === 3 && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <p className="bs-section-label">Your information</p>
            <div className="bs-form-grid">

              {/* Name */}
              <div className="bs-field">
                <label className="bs-label">
                  Full name <span className="bs-req">*</span>
                </label>
                <input
                  className="bs-input"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Jane Smith"
                />
              </div>

              {/* Organisation */}
              <div className="bs-field">
                <label className="bs-label">Organisation</label>
                <input
                  className="bs-input"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleFormChange}
                  placeholder="e.g. City General Hospital"
                />
              </div>

              {/* Email */}
              <div className="bs-field">
                <label className="bs-label">
                  Email <span className="bs-req">*</span>
                </label>
                <input
                  className="bs-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="jane@organisation.com"
                />
              </div>

              {/* Phone */}
              <div className="bs-field">
                <label className="bs-label">Phone</label>
                <input
                  className="bs-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  placeholder="+855 ..."
                />
              </div>

              {/* Role */}
              <div className="bs-field">
                <label className="bs-label">Your role</label>
                <select className="bs-input" name="role" value={form.role} onChange={handleFormChange}>
                  <option value="">Select role</option>
                  <option>Executive / C-Suite</option>
                  <option>Manager / Director</option>
                  <option>IT / Technical Lead</option>
                  <option>Procurement Officer</option>
                  <option>HR / Training Officer</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Organisation size */}
              <div className="bs-field">
                <label className="bs-label">Organisation size</label>
                <select className="bs-input" name="size" value={form.size} onChange={handleFormChange}>
                  <option value="">Select size</option>
                  <option>1–50 employees</option>
                  <option>51–200 employees</option>
                  <option>201–1,000 employees</option>
                  <option>1,000+ employees</option>
                </select>
              </div>

              {/* Preferred date */}
              <div className="bs-field">
                <label className="bs-label">
                  Preferred date <span className="bs-req">*</span>
                </label>
                <input
                  className="bs-input"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleFormChange}
                />
              </div>

              {/* Preferred time */}
              <div className="bs-field">
                <label className="bs-label">Preferred time</label>
                <select className="bs-input" name="time" value={form.time} onChange={handleFormChange}>
                  <option value="">Select a time slot</option>
                  <option>08:00 – 10:00</option>
                  <option>10:00 – 12:00</option>
                  <option>13:00 – 15:00</option>
                  <option>15:00 – 17:00</option>
                </select>
              </div>

              {/* Notes — full width */}
              <div className="bs-field bs-field-full">
                <label className="bs-label">Additional notes</label>
                <textarea
                  className="bs-input bs-textarea"
                  name="notes"
                  value={form.notes}
                  onChange={handleFormChange}
                  placeholder="Describe your needs, scale of deployment, or any specific challenges…"
                />
              </div>

            </div>
          </div>

          <div className="bs-btn-row">
            <button className="bs-btn bs-btn-ghost" onClick={() => setStep(2)}>Back</button>
            <button
              className="bs-btn bs-btn-primary"
              disabled={!step3Valid()}
              onClick={() => setStep(4)}
            >
              Review booking <ArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          STEP 4 — REVIEW & CONFIRM
      ══════════════════════════════════════════════════════ */}
      {step === 4 && industry && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <p className="bs-section-label">Booking summary</p>
            <div className="bs-summary">
              {[
                ["Industry",      industry.name],
                ["Solution",      industry.offerings[selectedOff]],
                ["Name",          form.name],
                ["Organisation",  form.organisation  || "—"],
                ["Email",         form.email],
                ["Phone",         form.phone         || "—"],
                ["Role",          form.role          || "—"],
                ["Org. size",     form.size          || "—"],
                ["Date",          form.date],
                ["Time slot",     form.time          || "—"],
                ["Notes",         form.notes         || "—"],
              ].map(([k, v]) => (
                <div key={k} className="bs-summary-row">
                  <span className="bs-summary-key">{k}</span>
                  <span className="bs-summary-val">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bs-btn-row">
            <button className="bs-btn bs-btn-ghost" onClick={() => setStep(3)}>Edit</button>
            <button className="bs-btn bs-btn-primary" onClick={handleSubmit}>
              Confirm booking
            </button>
          </div>
        </div>
      )}

    </div>
  );
}