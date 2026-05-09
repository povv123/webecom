
import '../../../styles/contact/quote.css'; 
import { useState } from "react";

const catalog = {
  "Products": {
    "Electronics": ["Mobile Phones", "Laptops", "Accessories"],
    "Furniture": ["Office Furniture", "Home Furniture", "Spare Parts"],
    "Industrial Equipment": ["Tools", "Machinery"],
  },
  "Services": {
    "Consulting": [
      "Business Strategy",
      "IT Consulting",
      "Financial & Accounting Analysis",
      "Taxation",
      "Logistics Services",
    ],
    "Maintenance": [
      "Equipment Service",
      "Facility Management",
      "Repair & Maintenance",
      "ISP Services",
    ],
    "Training": ["Technical Training", "Customer Service Training"],
  },
  "Solutions / Sectors": {
    "Healthcare": ["Healthcare Solutions"],
    "Education": ["Education Solutions"],
    "Manufacturing": ["Manufacturing Solutions"],
  },
};

const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Manufacturing",
  "Agriculture",
  "Construction",
  "Tourism & Hospitality",
  "Finance & Banking",
  "Retail",
  "Other",
];

const PROVINCES = [
  "Phnom Penh",
  "Siem Reap",
  "Battambang",
  "Kampong Cham",
  "Sihanoukville",
  "Kampot",
  "Kratie",
  "Stung Treng",
  "Ratanakiri",
  "Mondulkiri",
  "Preah Vihear",
  "Oddar Meanchey",
  "Banteay Meanchey",
  "Kampong Speu",
  "Kampong Thom",
  "Kampong Chhnang",
  "Kandal",
  "Takeo",
  "Svay Rieng",
  "Prey Veng",
  "Other Province",
];

const BUDGETS = [
  "Less than $500",
  "$500 – $2,000",
  "$2,000 – $10,000",
  "$10,000 – $50,000",
  "Over $50,000",
  "Prefer not to say",
];

const TIMELINES = [
  "Urgent",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
];

export default function RequestQuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    province: "",
    catalogType: "",
    category: "",
    subcategory: "",
    quantity: "",
    budget: "",
    timeline: "",
    details: "",
    hearAbout: "",
    agree: false,
  });

  const set = (field, val) =>
    setForm((prev) => ({
      ...prev,
      [field]: val,
      ...(field === "catalogType" ? { category: "", subcategory: "" } : {}),
      ...(field === "category" ? { subcategory: "" } : {}),
    }));

  const categories = form.catalogType ? Object.keys(catalog[form.catalogType] || {}) : [];
  const subcategories =
    form.catalogType && form.category
      ? catalog[form.catalogType][form.category] || []
      : [];

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!form.firstName.trim()) e.firstName = "Required";
      if (!form.lastName.trim()) e.lastName = "Required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
      if (!form.company.trim()) e.company = "Required";
    }
    if (step === 2) {
      if (!form.catalogType) e.catalogType = "Please select a type";
      if (!form.category) e.category = "Please select a category";
      if (!form.subcategory) e.subcategory = "Please select a service";
    }
    if (step === 3) {
      if (!form.budget) e.budget = "Please select a budget";
      if (!form.timeline) e.timeline = "Please select a timeline";
      if (!form.details.trim()) e.details = "Please describe your requirements";
      if (!form.agree) e.agree = "You must agree to the terms";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => s + 1); };
  const back = () => { setErrors({}); setStep((s) => s - 1); };
  const submit = (e) => { e.preventDefault(); if (validateStep()) setSubmitted(true); };

  const progress = ((step - 1) / 3) * 100;

  if (submitted) {
    return (
      <div className="rq-wrap">
        <div className="rq-card rq-success">
          <div className="rq-success-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#f5f5f7"/>
              <path d="M14 24l8 8 12-14" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Submitted Successfully</h2>
          <p>Thank you, <strong>{form.firstName} {form.lastName}</strong>! We have received your request. Our team will contact you at <strong>{form.email}</strong> within 1–2 business days.</p>
          <div className="rq-summary">
            <span className="rq-tag">{form.catalogType}</span>
            <span className="rq-tag">{form.category}</span>
            <span className="rq-tag">{form.subcategory}</span>
          </div>
          <button className="rq-btn-outline" onClick={() => {
            setSubmitted(false); setStep(1);
            setForm({ firstName:"",lastName:"",email:"",phone:"",company:"",jobTitle:"",industry:"",province:"",catalogType:"",category:"",subcategory:"",quantity:"",budget:"",timeline:"",details:"",hearAbout:"",agree:false });
          }}>Submit Another Request</button>
        </div>
      </div>
    );
  }

  return (
    <div className="rq-wrap">
      <div className="rq-card">
        <div className="rq-header">
          <div className="rq-badge">Request a Quote</div>
          <h1>Tell us about your needs</h1>
          <p className="rq-sub">Fill out the information below and we will prepare a proposal for you.</p>
        </div>

        <div className="rq-steps">
          {["Contact", "Product/Service", "Requirements"].map((label, i) => (
            <div key={label} className={`rq-step ${step === i + 1 ? "active" : ""} ${step > i + 1 ? "done" : ""}`}>
              <div className="rq-step-dot">
                {step > i + 1 ? (
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span>{label}</span>
            </div>
          ))}
          <div className="rq-progress-bar"><div className="rq-progress-fill" style={{ width: `${progress}%` }} /></div>
        </div>

        <form onSubmit={submit} noValidate>
          {step === 1 && (
            <div className="rq-section">
              <div className="rq-row">
                <div className={`rq-field ${errors.firstName ? "has-error" : ""}`}>
                  <label>First Name <span>*</span></label>
                  <input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Sok" />
                  {errors.firstName && <span className="rq-error">{errors.firstName}</span>}
                </div>
                <div className={`rq-field ${errors.lastName ? "has-error" : ""}`}>
                  <label>Last Name <span>*</span></label>
                  <input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Heng" />
                  {errors.lastName && <span className="rq-error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="rq-row">
                <div className={`rq-field ${errors.email ? "has-error" : ""}`}>
                  <label>Email <span>*</span></label>
                  <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="name@company.com" />
                  {errors.email && <span className="rq-error">{errors.email}</span>}
                </div>
                <div className="rq-field">
                  <label>Phone Number</label>
                  <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+855 XX.." />
                </div>
              </div>
              <div className="rq-row">
                <div className={`rq-field ${errors.company ? "has-error" : ""}`}>
                  <label>Company / Organization <span>*</span></label>
                  <input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="ABC Company" />
                  {errors.company && <span className="rq-error">{errors.company}</span>}
                </div>
                <div className="rq-field">
                  <label>Job Title</label>
                  <input value={form.jobTitle} onChange={(e) => set("jobTitle", e.target.value)} placeholder="Procurement Manager" />
                </div>
              </div>
              <div className="rq-row">
                <div className="rq-field">
                  <label>Industry</label>
                  <select value={form.industry} onChange={(e) => set("industry", e.target.value)}>
                    <option value="">Select industry...</option>
                    {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div className="rq-field">
                  <label>City / Province</label>
                  <select value={form.province} onChange={(e) => set("province", e.target.value)}>
                    <option value="">Select province...</option>
                    {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="rq-section">
              <p className="rq-hint">Select the type of request, then choose the relevant category and service.</p>
              <div className={`rq-field ${errors.catalogType ? "has-error" : ""}`}>
                <label>Type <span>*</span></label>
                <div className="rq-type-grid">
                  {Object.keys(catalog).map((type) => (
                    <button type="button" key={type} className={`rq-type-btn ${form.catalogType === type ? "selected" : ""}`} onClick={() => set("catalogType", type)}>
                      <span className="rq-type-icon">
                        {type === "Products" && <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.5"/></svg>}
                        {type === "Services" && <svg viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                        {type === "Solutions / Sectors" && <svg viewBox="0 0 20 20" fill="none"><path d="M3 10l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 8v8h4v-4h2v4h4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </span>
                      {type}
                    </button>
                  ))}
                </div>
                {errors.catalogType && <span className="rq-error">{errors.catalogType}</span>}
              </div>

              {categories.length > 0 && (
                <div className={`rq-field ${errors.category ? "has-error" : ""}`}>
                  <label>Category <span>*</span></label>
                  <div className="rq-chip-group">
                    {categories.map((cat) => (
                      <button type="button" key={cat} className={`rq-chip ${form.category === cat ? "selected" : ""}`} onClick={() => set("category", cat)}>{cat}</button>
                    ))}
                  </div>
                  {errors.category && <span className="rq-error">{errors.category}</span>}
                </div>
              )}

              {subcategories.length > 0 && (
                <div className={`rq-field ${errors.subcategory ? "has-error" : ""}`}>
                  <label>Service / Subcategory <span>*</span></label>
                  <div className="rq-chip-group">
                    {subcategories.map((sub) => (
                      <button type="button" key={sub} className={`rq-chip ${form.subcategory === sub ? "selected" : ""}`} onClick={() => set("subcategory", sub)}>{sub}</button>
                    ))}
                  </div>
                  {errors.subcategory && <span className="rq-error">{errors.subcategory}</span>}
                </div>
              )}

              <div className="rq-field">
                <label>Quantity / Amount (Approximate)</label>
                <input value={form.quantity} onChange={(e) => set("quantity", e.target.value)} placeholder="e.g. 50 units, 3 licenses, long-term contract..." />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="rq-section">
              <div className="rq-row">
                <div className={`rq-field ${errors.budget ? "has-error" : ""}`}>
                  <label>Estimated Budget <span>*</span></label>
                  <select value={form.budget} onChange={(e) => set("budget", e.target.value)}>
                    <option value="">Select budget...</option>
                    {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.budget && <span className="rq-error">{errors.budget}</span>}
                </div>
                <div className={`rq-field ${errors.timeline ? "has-error" : ""}`}>
                  <label>Expected Timeline <span>*</span></label>
                  <select value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                    <option value="">Select timeline...</option>
                    {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.timeline && <span className="rq-error">{errors.timeline}</span>}
                </div>
              </div>

              <div className={`rq-field ${errors.details ? "has-error" : ""}`}>
                <label>Project Details <span>*</span></label>
                <textarea rows={5} value={form.details} onChange={(e) => set("details", e.target.value)} placeholder="Please describe your specific requirements, challenges, technical specs, or special requests..." />
                {errors.details && <span className="rq-error">{errors.details}</span>}
              </div>

              <div className="rq-field">
                <label>How did you hear about us?</label>
                <input value={form.hearAbout} onChange={(e) => set("hearAbout", e.target.value)} placeholder="Referral, Google, Facebook, Event..." />
              </div>

              <div className={`rq-checkbox-wrap ${errors.agree ? "has-error" : ""}`}>
                <input type="checkbox" id="agree" checked={form.agree} onChange={(e) => set("agree", e.target.checked)} />
                <label htmlFor="agree">I agree to the <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>. I authorize you to contact me.</label>
              </div>
              {errors.agree && <span className="rq-error">{errors.agree}</span>}
            </div>
          )}

          <div className="rq-actions">
            {step > 1 && <button type="button" className="rq-btn-back" onClick={back}>← Back</button>}
            {step < 3 && <button type="button" className="rq-btn-primary" onClick={next}>Continue →</button>}
            {step === 3 && <button type="submit" className="rq-btn-primary">Submit →</button>}
          </div>
        </form>
      </div>
    </div>
  );
}