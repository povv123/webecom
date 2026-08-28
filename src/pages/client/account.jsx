import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/account.css";

// ─── Data ─────────────────────────────────────────────────────────────────────
const COUNTRIES = [
  "Cambodia","United States","United Kingdom","Canada","Australia",
  "Afghanistan","Armenia","Bangladesh","Bhutan","Brunei","China","Cyprus",
  "Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan",
  "Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Maldives",
  "Mongolia","Myanmar","Nepal","Pakistan","Palestine","Philippines","Qatar",
  "Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan",
  "Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan",
  "United Arab Emirates","Uzbekistan","Vietnam",
];
const CARD_TYPES = ["Visa","Mastercard","American Express","Union Pay","Other"];
const MONTHS = ["01","02","03","04","05","06","07","08","09","10","11","12"];
const YEARS  = Array.from({ length: 12 }, (_, i) => String(new Date().getFullYear() + i));

function getInitials(name) {
  return name.trim().split(" ").filter(Boolean).map(p => p[0]).slice(0, 2).join("").toUpperCase() || "U";
}
function genId() { return Math.random().toString(36).slice(2, 9).toUpperCase(); }

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Ico = {
  Edit:   () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 1.5l3 3-6.5 6.5H1.5v-3L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Check:  () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Close:  () => <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Plus:   () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5v10M1.5 6.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Trash:  () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 3.5h10M4.5 3.5V2h4v1.5M5.5 6v4M7.5 6v4M2.5 3.5l.7 8h7.6l.7-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Card:   () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 6h12" stroke="currentColor" strokeWidth="1.3"/><rect x="2.5" y="8" width="2.5" height="1.5" rx=".4" fill="currentColor"/></svg>,
  Pin:    () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5a4 4 0 014 4C11 8.5 7 13 7 13S3 8.5 3 5.5a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.3"/><circle cx="7" cy="5.5" r="1.3" fill="currentColor"/></svg>,
  Lock:   () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="6" width="10" height="7" rx="1.8" stroke="currentColor" strokeWidth="1.3"/><path d="M4 6V4.5a3 3 0 016 0V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="7" cy="9.5" r=".9" fill="currentColor"/></svg>,
  Shield: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5v4C2 11 4.5 13 7 13.5 9.5 13 12 11 12 7.5v-4L7 1z" stroke="currentColor" strokeWidth="1.3"/><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Eye:    () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" stroke="currentColor" strokeWidth="1.3"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>,
  EyeOff: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M5.5 5.6a2 2 0 002.9 2.9M2.5 3.5C1.7 4.5 1 6 1 7c0 0 2.5 4 6 4a7 7 0 002.5-.5M4 2A9 9 0 017 3c3.5 0 6 4 6 4a10 10 0 01-1.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
};

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ show, msg }) {
  return <div className={`acc-toast${show ? " show" : ""}`}>{msg}</div>;
}

// ─── Generic inline edit field ────────────────────────────────────────────────
function EditField({ label, value, hint, onSave, inputEl }) {
  const [editing, setEditing] = useState(false);
  const [draft,   setDraft]   = useState(value);

  const open   = () => { setDraft(value); setEditing(true); };
  const cancel = () => setEditing(false);
  const save   = () => { if (draft !== value) onSave(draft); setEditing(false); };

  return (
    <div className={`acc-row${editing ? " editing" : ""}`}>
      <div className="acc-row-left">
        <span className="acc-lbl">{label}</span>
        {editing ? (
          <div className="acc-edit-block">
            {inputEl
              ? inputEl({ draft, setDraft })
              : (
                <input
                  className="acc-input"
                  value={draft}
                  autoFocus
                  onChange={e => setDraft(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") cancel(); }}
                />
              )
            }
            {hint && <p className="acc-hint">{hint}</p>}
          </div>
        ) : (
          <span className="acc-val">{value || <em className="acc-empty">Not set</em>}</span>
        )}
      </div>
      <div className="acc-row-right">
        {editing ? (
          <div className="acc-btns">
            <button className="acc-btn-x"    onClick={cancel}><Ico.Close /></button>
            <button className="acc-btn-done" onClick={save}><Ico.Check /> Save</button>
          </div>
        ) : (
          <button className="acc-btn-edit" onClick={open}>Edit</button>
        )}
      </div>
    </div>
  );
}

// ─── Payment card row ─────────────────────────────────────────────────────────
function CardRow({ card, onUpdate, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [draft,   setDraft]   = useState({ ...card });

  const save = () => { onUpdate(draft); setEditing(false); };

  return (
    <div className={`acc-row${editing ? " editing" : ""}`}>
      <div className="acc-row-left">
        <div className="acc-badge-row">
          <span className="acc-badge-icon"><Ico.Card /></span>
          <span className="acc-badge-lbl">{card.type} •••• {card.last4}</span>
        </div>
        {editing ? (
          <div className="acc-edit-block">
            <div className="acc-mini-grid">
              <div>
                <label className="acc-mini-lbl">Card type</label>
                <select className="acc-input" value={draft.type}
                  onChange={e => setDraft(p => ({ ...p, type: e.target.value }))}>
                  {CARD_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="acc-mini-lbl">Last 4 digits</label>
                <input className="acc-input" maxLength={4} value={draft.last4}
                  onChange={e => setDraft(p => ({ ...p, last4: e.target.value.replace(/\D/g, "") }))}
                  placeholder="1234" />
              </div>
              <div>
                <label className="acc-mini-lbl">Cardholder name</label>
                <input className="acc-input" value={draft.name}
                  onChange={e => setDraft(p => ({ ...p, name: e.target.value }))}
                  placeholder="Name on card" />
              </div>
              <div>
                <label className="acc-mini-lbl">Expiry</label>
                <div className="acc-expiry-row">
                  <select className="acc-input" value={draft.expMonth}
                    onChange={e => setDraft(p => ({ ...p, expMonth: e.target.value }))}>
                    {MONTHS.map(m => <option key={m}>{m}</option>)}
                  </select>
                  <span className="acc-sep">/</span>
                  <select className="acc-input" value={draft.expYear}
                    onChange={e => setDraft(p => ({ ...p, expYear: e.target.value }))}>
                    {YEARS.map(y => <option key={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <span className="acc-val">{card.name} · Expires {card.expMonth}/{card.expYear}</span>
        )}
      </div>
      <div className="acc-row-right">
        {editing ? (
          <div className="acc-btns">
            <button className="acc-btn-x"      onClick={() => setEditing(false)}><Ico.Close /></button>
            <button className="acc-btn-danger"  onClick={() => { onRemove(card.id); setEditing(false); }}><Ico.Trash /></button>
            <button className="acc-btn-done"    onClick={save}><Ico.Check /> Save</button>
          </div>
        ) : (
          <button className="acc-btn-edit" onClick={() => { setDraft({ ...card }); setEditing(true); }}>Edit</button>
        )}
      </div>
    </div>
  );
}

// ─── Address row ──────────────────────────────────────────────────────────────
function AddressRow({ addr, onUpdate, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [draft,   setDraft]   = useState({ ...addr });

  const chg  = f => e => setDraft(p => ({ ...p, [f]: e.target.value }));
  const save = () => { onUpdate(draft); setEditing(false); };

  return (
    <div className={`acc-row${editing ? " editing" : ""}`}>
      <div className="acc-row-left">
        <div className="acc-badge-row">
          <span className="acc-badge-icon"><Ico.Pin /></span>
          <span className="acc-badge-lbl">{addr.label || "Address"}</span>
        </div>
        {editing ? (
          <div className="acc-edit-block">
            <div className="acc-mini-grid">
              <div className="acc-span2">
                <label className="acc-mini-lbl">Label</label>
                <input className="acc-input" value={draft.label} onChange={chg("label")} placeholder="Home, Work…" />
              </div>
              <div className="acc-span2">
                <label className="acc-mini-lbl">Street address</label>
                <input className="acc-input" value={draft.street} onChange={chg("street")} placeholder="123 Main St" />
              </div>
              <div>
                <label className="acc-mini-lbl">City</label>
                <input className="acc-input" value={draft.city} onChange={chg("city")} placeholder="Phnom Penh" />
              </div>
              <div>
                <label className="acc-mini-lbl">Postal code</label>
                <input className="acc-input" value={draft.zip} onChange={chg("zip")} placeholder="12000" />
              </div>
              <div className="acc-span2">
                <label className="acc-mini-lbl">Country / Region</label>
                <select className="acc-input" value={draft.country} onChange={chg("country")}>
                  {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>
        ) : (
          <span className="acc-val">{addr.street}, {addr.city}, {addr.country}</span>
        )}
      </div>
      <div className="acc-row-right">
        {editing ? (
          <div className="acc-btns">
            <button className="acc-btn-x"      onClick={() => setEditing(false)}><Ico.Close /></button>
            <button className="acc-btn-danger"  onClick={() => { onRemove(addr.id); setEditing(false); }}><Ico.Trash /></button>
            <button className="acc-btn-done"    onClick={save}><Ico.Check /> Save</button>
          </div>
        ) : (
          <button className="acc-btn-edit" onClick={() => { setDraft({ ...addr }); setEditing(true); }}>Edit</button>
        )}
      </div>
    </div>
  );
}

// ─── Password row ─────────────────────────────────────────────────────────────
function PasswordRow({ onSave }) {
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState("");
  const [next,    setNext]    = useState("");
  const [confirm, setConfirm] = useState("");
  const [showCur, setShowCur] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [error,   setError]   = useState("");

  const [saving, setSaving] = useState(false);

  const reset = () => { setCurrent(""); setNext(""); setConfirm(""); setError(""); setEditing(false); };

  const save = async () => {
    if (!current)         { setError("Enter your current password."); return; }
    if (next.length < 8)  { setError("New password must be at least 8 characters."); return; }
    if (next !== confirm)  { setError("Passwords don't match."); return; }

    setSaving(true);
    setError("");
    try {
      await onSave(current, next);
      reset();
    } catch (err) {
      setError(err.message || "Unable to update password.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={`acc-row${editing ? " editing" : ""}`}>
      <div className="acc-row-left">
        <div className="acc-badge-row">
          <span className="acc-badge-icon"><Ico.Lock /></span>
          <span className="acc-badge-lbl">Password</span>
        </div>
        {editing ? (
          <div className="acc-edit-block">
            <div className="acc-pw-stack">
              <div className="acc-pw-field">
                <label>Current password</label>
                <div className="acc-pw-wrap">
                  <input className="acc-input" type={showCur ? "text" : "password"}
                    value={current} autoFocus onChange={e => setCurrent(e.target.value)} placeholder="••••••••" />
                  <button className="acc-pw-eye" onClick={() => setShowCur(p => !p)}>
                    {showCur ? <Ico.EyeOff /> : <Ico.Eye />}
                  </button>
                </div>
              </div>
              <div className="acc-pw-field">
                <label>New password</label>
                <div className="acc-pw-wrap">
                  <input className="acc-input" type={showNew ? "text" : "password"}
                    value={next} onChange={e => setNext(e.target.value)} placeholder="Min. 8 characters" />
                  <button className="acc-pw-eye" onClick={() => setShowNew(p => !p)}>
                    {showNew ? <Ico.EyeOff /> : <Ico.Eye />}
                  </button>
                </div>
              </div>
              <div className="acc-pw-field">
                <label>Confirm new password</label>
                <input className="acc-input" type="password"
                  value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Repeat new password"
                  onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") reset(); }} />
              </div>
              {error && <p className="acc-err">{error}</p>}
            </div>
          </div>
        ) : (
          <span className="acc-val">••••••••</span>
        )}
      </div>
      <div className="acc-row-right">
        {editing ? (
          <div className="acc-btns">
            <button className="acc-btn-x"    onClick={reset} disabled={saving}><Ico.Close /></button>
            <button className="acc-btn-done" onClick={save} disabled={saving}><Ico.Check /> {saving ? 'Saving…' : 'Save'}</button>
          </div>
        ) : (
          <button className="acc-btn-edit" onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}

// ─── 2FA toggle row ───────────────────────────────────────────────────────────
function TwoFARow({ enabled, onToggle }) {
  return (
    <div className="acc-row">
      <div className="acc-row-left">
        <div className="acc-badge-row">
          <span className="acc-badge-icon"><Ico.Shield /></span>
          <span className="acc-badge-lbl">Two-Factor Authentication</span>
        </div>
        <span className="acc-val">
          {enabled ? "Extra security is active on your account." : "Add an extra layer of security."}
        </span>
      </div>
      <div className="acc-row-right">
        <button className={`acc-toggle${enabled ? " on" : ""}`} onClick={onToggle} aria-label="Toggle 2FA">
          <span className="acc-toggle-thumb" />
        </button>
      </div>
    </div>
  );
}

// ─── Add Card form ────────────────────────────────────────────────────────────
const EMPTY_CARD = () => ({ type: "Visa", last4: "", name: "", expMonth: "01", expYear: String(new Date().getFullYear()) });

function AddCardRow({ onAdd, onCancel }) {
  const [draft, setDraft] = useState(EMPTY_CARD());

  const confirm = () => {
    if (!draft.last4 || !draft.name) return;
    onAdd({ ...draft, id: genId() });
  };

  return (
    <div className="acc-row editing">
      <div className="acc-row-left">
        <span className="acc-lbl">New card</span>
        <div className="acc-edit-block">
          <div className="acc-mini-grid">
            <div>
              <label className="acc-mini-lbl">Card type</label>
              <select className="acc-input" value={draft.type}
                onChange={e => setDraft(p => ({ ...p, type: e.target.value }))}>
                {CARD_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="acc-mini-lbl">Last 4 digits</label>
              <input className="acc-input" maxLength={4} autoFocus value={draft.last4}
                onChange={e => setDraft(p => ({ ...p, last4: e.target.value.replace(/\D/g, "") }))}
                placeholder="1234" />
            </div>
            <div>
              <label className="acc-mini-lbl">Cardholder name</label>
              <input className="acc-input" value={draft.name}
                onChange={e => setDraft(p => ({ ...p, name: e.target.value }))}
                placeholder="Name on card" />
            </div>
            <div>
              <label className="acc-mini-lbl">Expiry</label>
              <div className="acc-expiry-row">
                <select className="acc-input" value={draft.expMonth}
                  onChange={e => setDraft(p => ({ ...p, expMonth: e.target.value }))}>
                  {MONTHS.map(m => <option key={m}>{m}</option>)}
                </select>
                <span className="acc-sep">/</span>
                <select className="acc-input" value={draft.expYear}
                  onChange={e => setDraft(p => ({ ...p, expYear: e.target.value }))}>
                  {YEARS.map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="acc-row-right">
        <div className="acc-btns">
          <button className="acc-btn-x"    onClick={onCancel}><Ico.Close /></button>
          <button className="acc-btn-done" onClick={confirm}><Ico.Check /> Add</button>
        </div>
      </div>
    </div>
  );
}

// ─── Add Address form ─────────────────────────────────────────────────────────
const EMPTY_ADDR = () => ({ label: "", street: "", city: "", zip: "", country: "Cambodia" });

function AddAddressRow({ onAdd, onCancel }) {
  const [draft, setDraft] = useState(EMPTY_ADDR());
  const chg = f => e => setDraft(p => ({ ...p, [f]: e.target.value }));

  const confirm = () => {
    if (!draft.street || !draft.city) return;
    onAdd({ ...draft, id: genId(), label: draft.label || "Address" });
  };

  return (
    <div className="acc-row editing">
      <div className="acc-row-left">
        <span className="acc-lbl">New address</span>
        <div className="acc-edit-block">
          <div className="acc-mini-grid">
            <div className="acc-span2">
              <label className="acc-mini-lbl">Label</label>
              <input className="acc-input" autoFocus value={draft.label} onChange={chg("label")} placeholder="Home, Work…" />
            </div>
            <div className="acc-span2">
              <label className="acc-mini-lbl">Street address</label>
              <input className="acc-input" value={draft.street} onChange={chg("street")} placeholder="123 Main St" />
            </div>
            <div>
              <label className="acc-mini-lbl">City</label>
              <input className="acc-input" value={draft.city} onChange={chg("city")} placeholder="Phnom Penh" />
            </div>
            <div>
              <label className="acc-mini-lbl">Postal code</label>
              <input className="acc-input" value={draft.zip} onChange={chg("zip")} placeholder="12000" />
            </div>
            <div className="acc-span2">
              <label className="acc-mini-lbl">Country / Region</label>
              <select className="acc-input" value={draft.country} onChange={chg("country")}>
                {COUNTRIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="acc-row-right">
        <div className="acc-btns">
          <button className="acc-btn-x"    onClick={onCancel}><Ico.Close /></button>
          <button className="acc-btn-done" onClick={confirm}><Ico.Check /> Add</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Account() {
  const { user, updateProfile, changePassword, logout } = useAuth();
  const navigate = useNavigate();

  // Personal, cards, addresses, and 2FA all live on the User document -
  // this component reads them straight from context instead of keeping a
  // local copy, so a successful save always reflects the server's state.
  const profile = user;
  const cards = user.paymentMethods || [];
  const addresses = user.addresses || [];
  const twoFA = user.twoFactorEnabled;

  const [addingCard, setAddingCard] = useState(false);
  const [addingAddr, setAddingAddr] = useState(false);

  // Toast
  const [toast, setToast] = useState({ show: false, msg: "" });
  const notify = useCallback(msg => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 2200);
  }, []);

  const setField = useCallback((field, val) => {
    updateProfile({ [field]: val })
      .then(() => notify("Changes saved"))
      .catch(err => notify(err.message || "Couldn't save changes"));
  }, [updateProfile, notify]);

  const savePaymentMethods = (next, successMsg) => {
    updateProfile({ paymentMethods: next })
      .then(() => notify(successMsg))
      .catch(err => notify(err.message || "Couldn't save changes"));
  };

  const saveAddresses = (next, successMsg) => {
    updateProfile({ addresses: next })
      .then(() => notify(successMsg))
      .catch(err => notify(err.message || "Couldn't save changes"));
  };

  const handleSignOut = () => {
    logout();
    navigate("/signin", { replace: true });
  };

  const fullName = `${profile.firstName} ${profile.lastName}`.trim() || profile.email;
  const initials = getInitials(fullName);

  return (
    <div className="acc-root">
      <Toast show={toast.show} msg={toast.msg} />
      <div className="acc-wrap">

        {/* ── Hero ── */}
        <header className="acc-hero">
          <div className="acc-avatar">{initials}</div>
          <div className="acc-hero-text">
            <h1>{fullName}</h1>
            <p>{profile.email}</p>
            <p className="acc-account-id">ID: {profile.email}</p>
          </div>
        </header>

        {/* ── Personal Information ── */}
        <section className="acc-section">
          <div className="acc-section-head">
            <h2 className="acc-section-title">Personal Information</h2>
          </div>
          <div className="acc-card">
            <EditField label="First name"     value={profile.firstName} onSave={v => setField("firstName", v)} />
            <EditField label="Last name"      value={profile.lastName}  onSave={v => setField("lastName", v)} />
            <div className="acc-row">
              <div className="acc-row-left">
                <span className="acc-lbl">Email address</span>
                <span className="acc-val">{profile.email}</span>
              </div>
              <div className="acc-row-right">
                <span className="acc-hint">Your Account ID</span>
              </div>
            </div>
            <EditField label="Phone number"   value={profile.phone}
              hint="Make sure you enter a phone number you can always access."
              onSave={v => setField("phone", v)}
              inputEl={({ draft, setDraft }) => (
                <input className="acc-input" type="tel" value={draft} autoFocus
                  onChange={e => setDraft(e.target.value)} />
              )} />
            <EditField label="Birthday"       value={profile.birthday}
              onSave={v => setField("birthday", v)}
              inputEl={({ draft, setDraft }) => (
                <input className="acc-input" type="date" value={draft} autoFocus
                  onChange={e => setDraft(e.target.value)} />
              )} />
            <EditField label="Country / Region" value={profile.country}
              onSave={v => setField("country", v)}
              inputEl={({ draft, setDraft }) => (
                <select className="acc-input" value={draft} autoFocus
                  onChange={e => setDraft(e.target.value)}>
                  {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                </select>
              )} />
          </div>
        </section>

        {/* ── Payment Methods ── */}
        <section className="acc-section">
          <div className="acc-section-head">
            <h2 className="acc-section-title">Payment Methods</h2>
            {!addingCard && (
              <button className="acc-add-btn" onClick={() => setAddingCard(true)}>
                <Ico.Plus /> Add card
              </button>
            )}
          </div>
          <div className="acc-card">
            {cards.map(c => (
              <CardRow key={c.id} card={c}
                onUpdate={d => savePaymentMethods(cards.map(x => x.id === d.id ? d : x), "Card updated")}
                onRemove={id => savePaymentMethods(cards.filter(x => x.id !== id), "Card removed")} />
            ))}
            {addingCard && (
              <AddCardRow
                onAdd={card => { savePaymentMethods([...cards, card], "Card added"); setAddingCard(false); }}
                onCancel={() => setAddingCard(false)} />
            )}
            {cards.length === 0 && !addingCard && (
              <div className="acc-empty-row">No saved payment methods</div>
            )}
          </div>
        </section>

        {/* ── Shipping Addresses ── */}
        <section className="acc-section">
          <div className="acc-section-head">
            <h2 className="acc-section-title">Shipping Addresses</h2>
            {!addingAddr && (
              <button className="acc-add-btn" onClick={() => setAddingAddr(true)}>
                <Ico.Plus /> Add address
              </button>
            )}
          </div>
          <div className="acc-card">
            {addresses.map(a => (
              <AddressRow key={a.id} addr={a}
                onUpdate={d => saveAddresses(addresses.map(x => x.id === d.id ? d : x), "Address updated")}
                onRemove={id => saveAddresses(addresses.filter(x => x.id !== id), "Address removed")} />
            ))}
            {addingAddr && (
              <AddAddressRow
                onAdd={addr => { saveAddresses([...addresses, addr], "Address added"); setAddingAddr(false); }}
                onCancel={() => setAddingAddr(false)} />
            )}
            {addresses.length === 0 && !addingAddr && (
              <div className="acc-empty-row">No saved addresses</div>
            )}
          </div>
        </section>

        {/* ── Security ── */}
        <section className="acc-section">
          <div className="acc-section-head">
            <h2 className="acc-section-title">Sign-In &amp; Security</h2>
          </div>
          <div className="acc-card">
            <PasswordRow onSave={(current, next) =>
              changePassword(current, next).then(() => notify("Password updated"))
            } />
            <TwoFARow enabled={twoFA}
              onToggle={() => {
                updateProfile({ twoFactorEnabled: !twoFA })
                  .then(() => notify(twoFA ? "2FA disabled" : "2FA enabled"))
                  .catch(err => notify(err.message || "Couldn't update 2FA"));
              }} />
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="acc-footer">
          <button type="button" onClick={handleSignOut} className="acc-signout">Sign Out</button>
          <p className="acc-footer-note">
            By using this account you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </footer>

      </div>
    </div>
  );
}