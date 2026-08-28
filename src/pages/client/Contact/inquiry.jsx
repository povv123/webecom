// src/pages/client/Contact/inquiry.jsx
import { useState, useCallback } from "react";
import "../../../styles/contact/inquiry.css";

const TOPICS = [
  "Product information",
  "Sales & pricing",
  "Technical support",
  "Partnership enquiry",
  "Billing & accounts",
  "Media & press",
  "Other",
];

const EMPTY = {
  firstName: "",
  lastName:  "",
  email:     "",
  phone:     "",
  company:   "",
  country:   "",
  topic:     "",
  message:   "",
  consent:   false,
};

export default function Inquiry() {
  const [form,    setForm]    = useState(EMPTY);
  const [errors,  setErrors]  = useState({});
  const [sent,    setSent]    = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setForm(p => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setErrors(p => ({ ...p, [name]: "" }));
  }, []);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!form.email.trim())     e.email     = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.topic)            e.topic     = "Please select a topic";
    if (!form.message.trim())   e.message   = "Required";
    if (!form.consent)          e.consent   = "Please accept to continue";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSent(true);
  };

  const handleReset = () => {
    setForm(EMPTY);
    setErrors({});
    setSent(false);
  };

  if (sent) {
    return (
      <div className="inq-wrap">
        <div className="inq-success">
          <div className="inq-success-ring">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 16l7 7 13-13"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="inq-success-title">Message received.</h2>
          <p className="inq-success-sub">
            Thank you, <strong>{form.firstName}</strong>. A member of our team
            will get back to you at <strong>{form.email}</strong> within
            one business day.
          </p>
          <div className="inq-success-ref">
            Reference&nbsp;&nbsp;
            <strong>{"INQ-" + Math.random().toString(36).slice(2,8).toUpperCase()}</strong>
          </div>
          <button className="inq-btn-ghost" onClick={handleReset}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="inq-wrap">

      <div className="inq-page">

        <aside className="inq-aside">
          <p className="inq-eyebrow">Contact</p>
          <h1 className="inq-title">General<br />Inquiry.</h1>
          <p className="inq-aside-desc">
            Have a question, a business proposal, or just want to say hello?
            Fill in the form and we'll be in touch.
          </p>

          <div className="inq-contact-list">
            <div className="inq-contact-item">
              <span className="inq-contact-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="2"
                    stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M1 5l7 5 7-5"
                    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <div className="inq-contact-label">Email</div>
                <a href="mailto:name@gmail.com" className="inq-contact-val">
                  name@gmail.com
                </a>
              </div>
            </div>

            <div className="inq-contact-item">
              <span className="inq-contact-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 11.3l-2.5-1a1 1 0 00-1.1.3l-1 1.3a10.7 10.7 0 01-5.3-5.3l1.3-1a1 1 0 00.3-1.1L4.7 2a1 1 0 00-1.1-.6L2 1.8A1 1 0 001 2.8C1 9.5 6.5 15 13.2 15a1 1 0 001-.9l.4-1.6a1 1 0 00-.6-1.2z"
                    stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="inq-contact-label">Phone</div>
                <a href="tel:+85523123456" className="inq-contact-val">
                  +855 12X XXX XX
                </a>
              </div>
            </div>

            <div className="inq-contact-item">
              <span className="inq-contact-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="7" r="2.5"
                    stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M8 1a6 6 0 010 12c-2 0-6-3-6-6a6 6 0 016-6z"
                    stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </span>
              <div>
                <div className="inq-contact-label">Location</div>
                <div className="inq-contact-val">Phnom Penh, Cambodia</div>
              </div>
            </div>

            <div className="inq-contact-item">
              <span className="inq-contact-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5"
                    stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M8 4v4l2.5 2.5"
                    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <div className="inq-contact-label">Response time</div>
                <div className="inq-contact-val">Within 1 business day</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="inq-form-col">
          <form className="inq-form" onSubmit={handleSubmit} noValidate>

            <div className="inq-form-section-label">Personal details</div>

            <div className="inq-row">
              <div className={`inq-field${errors.firstName ? " inq-field-error" : ""}${focused === "firstName" ? " inq-field-focused" : ""}`}>
                <label className="inq-label" htmlFor="inq-firstName">
                  First name <span className="inq-req">*</span>
                </label>
                <input
                  id="inq-firstName"
                  className="inq-input"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  onFocus={() => setFocused("firstName")}
                  onBlur={() => setFocused("")}
                  placeholder="Sok"
                  autoComplete="given-name"
                />
                {errors.firstName && (
                  <span className="inq-error-msg">{errors.firstName}</span>
                )}
              </div>

              <div className={`inq-field${errors.lastName ? " inq-field-error" : ""}${focused === "lastName" ? " inq-field-focused" : ""}`}>
                <label className="inq-label" htmlFor="inq-lastName">
                  Last name <span className="inq-req">*</span>
                </label>
                <input
                  id="inq-lastName"
                  className="inq-input"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  onFocus={() => setFocused("lastName")}
                  onBlur={() => setFocused("")}
                  placeholder="Heng"
                  autoComplete="family-name"
                />
                {errors.lastName && (
                  <span className="inq-error-msg">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="inq-row">
              <div className={`inq-field${errors.email ? " inq-field-error" : ""}${focused === "email" ? " inq-field-focused" : ""}`}>
                <label className="inq-label" htmlFor="inq-email">
                  Email address <span className="inq-req">*</span>
                </label>
                <input
                  id="inq-email"
                  className="inq-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  placeholder="name@gmail.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="inq-error-msg">{errors.email}</span>
                )}
              </div>

              <div className={`inq-field${focused === "phone" ? " inq-field-focused" : ""}`}>
                <label className="inq-label" htmlFor="inq-phone">Phone</label>
                <input
                  id="inq-phone"
                  className="inq-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused("")}
                  placeholder="+855 ..."
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="inq-form-section-label" style={{ marginTop: 28 }}>
              Organisation
            </div>

            <div className="inq-row">
              <div className={`inq-field${focused === "company" ? " inq-field-focused" : ""}`}>
                <label className="inq-label" htmlFor="inq-company">Company</label>
                <input
                  id="inq-company"
                  className="inq-input"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused("")}
                  placeholder="ABC Company"
                  autoComplete="organization"
                />
              </div>

              <div className={`inq-field${focused === "country" ? " inq-field-focused" : ""}`}>
                <label className="inq-label" htmlFor="inq-country">Country</label>
                <select
                  id="inq-country"
                  className="inq-input inq-select"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  onFocus={() => setFocused("country")}
                  onBlur={() => setFocused("")}
                >
                  <option value="">Select country</option>
                  <option>Cambodia</option>
                  <option>Vietnam</option>
                  <option>Singapore</option>
                  <option>Malaysia</option>
                  <option>Indonesia</option>
                  <option>Philippines</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="inq-form-section-label" style={{ marginTop: 28 }}>
              Your message
            </div>

            <div className={`inq-field inq-field-full${errors.topic ? " inq-field-error" : ""}${focused === "topic" ? " inq-field-focused" : ""}`}>
              <label className="inq-label" htmlFor="inq-topic">
                Topic <span className="inq-req">*</span>
              </label>
              <select
                id="inq-topic"
                className="inq-input inq-select"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                onFocus={() => setFocused("topic")}
                onBlur={() => setFocused("")}
              >
                <option value="">Select a topic</option>
                {TOPICS.map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.topic && (
                <span className="inq-error-msg">{errors.topic}</span>
              )}
            </div>

            <div className={`inq-field inq-field-full${errors.message ? " inq-field-error" : ""}${focused === "message" ? " inq-field-focused" : ""}`}>
              <label className="inq-label" htmlFor="inq-message">
                Message <span className="inq-req">*</span>
              </label>
              <textarea
                id="inq-message"
                className="inq-input inq-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                placeholder="Tell us how we can help…"
                rows={5}
              />
              {errors.message && (
                <span className="inq-error-msg">{errors.message}</span>
              )}
            </div>

            <div className={`inq-checkbox-wrap${errors.consent ? " inq-field-error" : ""}`}>
              <label className="inq-checkbox-label">
                <input
                  className="inq-checkbox"
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                />
                <span className="inq-checkbox-box" />
                <span className="inq-checkbox-text">
                  I agree to the{" "}
                  <a href="/privacy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted regarding my enquiry.
                </span>
              </label>
              {errors.consent && (
                <span className="inq-error-msg">{errors.consent}</span>
              )}
            </div>

            <div className="inq-form-footer">
              <p className="inq-footer-note">
                Fields marked <span className="inq-req">*</span> are required.
                We never share your information with third parties.
              </p>
              <button type="submit" className="inq-btn-submit">
                Send message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}