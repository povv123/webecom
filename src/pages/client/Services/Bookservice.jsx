import { useState } from "react";
import '../../../styles/services/bookservice.css'; 

const CATEGORIES = [
  {
    id: "consulting",
    name: "Consulting",
    count: 5,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4.5h14M2 9h9M2 13.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    subcategories: [
      "Business strategy",
      "IT consulting",
      "Financial and accounting analysis",
      "Taxes",
      "Logistics services",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    count: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    subcategories: [
      "Equipment servicing",
      "Facility management",
      "Spare parts, repair and maintenance",
      "Internet service provider",
    ],
  },
  {
    id: "training",
    name: "Training",
    count: 2,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L2 6l7 4 7-4-7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 10l7 4 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    subcategories: ["Technical training", "Customer service training"],
  },
];

const STEPS = ["Category", "Service", "Details", "Review"];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 16l7 7 13-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BookService() {
  const [step, setStep] = useState(1);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", date: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [refNum] = useState("SVC-" + Math.random().toString(36).slice(2, 8).toUpperCase());

  const cat = selectedCat !== null ? CATEGORIES[selectedCat] : null;

  function handleCatSelect(i) {
    setSelectedCat(i);
    setSelectedSub(null);
    setStep(2);
  }

  function handleSubSelect(j) {
    setSelectedSub(j);
  }

  function handleFormChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function step3Valid() {
    return form.name.trim() && form.email.trim() && form.date;
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function reset() {
    setStep(1);
    setSelectedCat(null);
    setSelectedSub(null);
    setForm({ name: "", company: "", email: "", phone: "", date: "", time: "", notes: "" });
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="bs-wrap">
        <div className="bs-success-card">
          <div className="bs-success-icon">
            <SuccessIcon />
          </div>
          <h2 className="bs-success-title">Booking confirmed</h2>
          <p className="bs-success-sub">
            Your request has been received. A service coordinator will contact you within 1 business day to confirm the appointment.
          </p>
          <div className="bs-ref-box">
            Reference: <strong>{refNum}</strong>
          </div>
          <button className="bs-btn bs-btn-primary bs-btn-reset" onClick={reset}>
            Book another service
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bs-wrap">
      <div className="bs-progress">
        {STEPS.map((label, i) => {
          const num = i + 1;
          const isDone = step > num;
          const isActive = step === num;
          return (
            <div key={label} className="bs-step-group">
              <div className={`bs-step-dot ${isDone ? "done" : ""} ${isActive ? "active" : ""}`}>
                {isDone ? <CheckIcon /> : num}
              </div>
              <span className={`bs-step-label ${isActive ? "active" : ""}`}>{label}</span>
              {i < STEPS.length - 1 && (
                <div className={`bs-step-line ${isDone ? "done" : ""}`} />
              )}
            </div>
          );
        })}
      </div>

      {step === 1 && (
        <div className="bs-card bs-anim-in">
          <p className="bs-section-label">Select a service category</p>
          <div className="bs-cat-grid">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                className={`bs-cat-btn bs-cat-${c.id} ${selectedCat === i ? "selected" : ""}`}
                onClick={() => handleCatSelect(i)}
              >
                <span className="bs-cat-icon">{c.icon}</span>
                <span className="bs-cat-name">{c.name}</span>
                <span className="bs-cat-count">{c.count} services</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && cat && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <div className={`bs-badge bs-badge-${cat.id}`}>{cat.name}</div>
            <p className="bs-section-label" style={{ marginTop: "1rem" }}>Choose a subcategory</p>
            <div className="bs-sub-list">
              {cat.subcategories.map((s, j) => (
                <button
                  key={j}
                  className={`bs-sub-item ${selectedSub === j ? "selected" : ""}`}
                  onClick={() => handleSubSelect(j)}
                >
                  <span className={`bs-sub-radio ${selectedSub === j ? "on" : ""}`} />
                  <span className="bs-sub-text">{s}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="bs-btn-row">
            <button className="bs-btn bs-btn-ghost" onClick={() => setStep(1)}>Back</button>
            <button className="bs-btn bs-btn-primary" disabled={selectedSub === null} onClick={() => setStep(3)}>
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <p className="bs-section-label">Your information</p>
            <div className="bs-form-grid">
              <div className="bs-field">
                <label className="bs-label">Full name <span className="bs-req">*</span></label>
                <input className="bs-input" name="name" value={form.name} onChange={handleFormChange} placeholder="Jane Smith" />
              </div>
              <div className="bs-field">
                <label className="bs-label">Company</label>
                <input className="bs-input" name="company" value={form.company} onChange={handleFormChange} placeholder="Acme Corp" />
              </div>
              <div className="bs-field">
                <label className="bs-label">Email <span className="bs-req">*</span></label>
                <input className="bs-input" type="email" name="email" value={form.email} onChange={handleFormChange} placeholder="jane@acme.com" />
              </div>
              <div className="bs-field">
                <label className="bs-label">Phone</label>
                <input className="bs-input" type="tel" name="phone" value={form.phone} onChange={handleFormChange} placeholder="+1 555 000 0000" />
              </div>
              <div className="bs-field">
                <label className="bs-label">Preferred date <span className="bs-req">*</span></label>
                <input className="bs-input" type="date" name="date" value={form.date} onChange={handleFormChange} />
              </div>
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
              <div className="bs-field bs-field-full">
                <label className="bs-label">Additional notes</label>
                <textarea className="bs-input bs-textarea" name="notes" value={form.notes} onChange={handleFormChange} placeholder="Describe your needs or any relevant context…" />
              </div>
            </div>
          </div>
          <div className="bs-btn-row">
            <button className="bs-btn bs-btn-ghost" onClick={() => setStep(2)}>Back</button>
            <button className="bs-btn bs-btn-primary" disabled={!step3Valid()} onClick={() => setStep(4)}>
              Review booking
            </button>
          </div>
        </div>
      )}

      {step === 4 && cat && (
        <div className="bs-anim-in">
          <div className="bs-card">
            <p className="bs-section-label">Booking summary</p>
            <div className="bs-summary">
              {[
                ["Category", cat.name],
                ["Service", cat.subcategories[selectedSub]],
                ["Name", form.name],
                ["Company", form.company || "—"],
                ["Email", form.email],
                ["Phone", form.phone || "—"],
                ["Date", form.date],
                ["Time slot", form.time || "—"],
                ["Notes", form.notes || "—"],
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