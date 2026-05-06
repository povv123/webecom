import React, { useState } from 'react';
import '../../styles/Admin/Services.css';

const INITIAL_SERVICES = [
  { id: 'SRV-001', name: 'Business Strategy Consulting', description: 'Comprehensive market analysis and growth planning.', category: 'Consulting', subcategory: 'Business strategy', pricingModel: 'Retainer', basePrice: '$5,000/mo', status: 'Active' },
  { id: 'SRV-002', name: 'IT Infrastructure Audit', description: 'Security and performance review of current IT systems.', category: 'Consulting', subcategory: 'IT consulting', pricingModel: 'Fixed Rate', basePrice: '$2,500', status: 'Active' },
  { id: 'SRV-003', name: 'Heavy Equipment Servicing', description: 'On-site repair and preventative maintenance for machinery.', category: 'Maintenance', subcategory: 'Equipment servicing', pricingModel: 'Hourly', basePrice: '$150/hr', status: 'Active' },
  { id: 'SRV-004', name: 'Corporate Facility Management', description: 'Full-service building and grounds maintenance.', category: 'Maintenance', subcategory: 'Facility Management', pricingModel: 'Retainer', basePrice: 'Custom Quote', status: 'Paused' },
  { id: 'SRV-005', name: 'Onboarding & Customer Service Training', description: '2-day intensive workshop for new support agents.', category: 'Training', subcategory: 'Customer service training', pricingModel: 'Per Person', basePrice: '$499/seat', status: 'Draft' },
];

const EMPTY_FORM = {
  name: '', description: '', category: '', subcategory: '',
  pricingModel: '', basePrice: '', status: 'Active',
};

const Services = () => {
  const [services, setServices]         = useState(INITIAL_SERVICES);
  const [search, setSearch]             = useState('');
  const [catFilter, setCatFilter]       = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // ── Add modal ──
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm]           = useState(EMPTY_FORM);
  const [formError, setFormError] = useState('');
  const [nextNum, setNextNum]     = useState(6);

  // ── View modal ──
  const [viewTarget, setViewTarget] = useState(null);

  // ── Delete confirm ──
  const [deleteTarget, setDeleteTarget] = useState(null);

  // ── Stats ──────────────────────────────────────────────────
  const stats = {
    total:  services.length,
    active: services.filter(s => s.status === 'Active').length,
    paused: services.filter(s => s.status === 'Paused').length,
    draft:  services.filter(s => s.status === 'Draft').length,
  };

  // ── Filtering ───────────────────────────────────────────────
  const filtered = services.filter(s => {
    const q = search.toLowerCase();
    const matchQ   = !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.subcategory.toLowerCase().includes(q);
    const matchCat = !catFilter    || s.category === catFilter;
    const matchSt  = !statusFilter || s.status   === statusFilter;
    return matchQ && matchCat && matchSt;
  });

  // ── Add helpers ─────────────────────────────────────────────
  const openAdd = () => {
    setForm({ ...EMPTY_FORM, id: `SRV-${String(nextNum).padStart(3, '0')}` });
    setFormError('');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setForm(EMPTY_FORM);
    setFormError('');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const saveService = () => {
    if (!form.name || !form.description || !form.category || !form.pricingModel || !form.basePrice) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setServices(prev => [...prev, { ...form, id: `SRV-${String(nextNum).padStart(3, '0')}` }]);
    setNextNum(n => n + 1);
    closeModal();
  };

  // ── Delete helpers ──────────────────────────────────────────
  const confirmDelete = () => {
    setServices(prev => prev.filter(s => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  // ── Print helper ────────────────────────────────────────────
  const handlePrint = (service) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Service — ${service.id}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif; padding: 40px; color: #111; }
            h1   { font-size: 20px; font-weight: 600; margin-bottom: 4px; }
            .sub { font-size: 13px; color: #888; margin-bottom: 32px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 32px; }
            .field label { font-size: 10px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #888; display: block; margin-bottom: 4px; }
            .field span  { font-size: 14px; color: #111; }
            .desc { margin-top: 24px; }
            .desc label { font-size: 10px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #888; display: block; margin-bottom: 6px; }
            .desc p { font-size: 14px; color: #111; line-height: 1.6; }
            hr { border: none; border-top: 1px solid #e5e5e5; margin: 28px 0; }
            @media print { body { padding: 20px; } }
          </style>
        </head>
        <body>
          <h1>${service.name}</h1>
          <div class="sub">${service.id} &nbsp;·&nbsp; ${service.status}</div>
          <hr />
          <div class="grid">
            <div class="field"><label>Category</label><span>${service.category}</span></div>
            <div class="field"><label>Subcategory</label><span>${service.subcategory || '—'}</span></div>
            <div class="field"><label>Pricing Model</label><span>${service.pricingModel}</span></div>
            <div class="field"><label>Base Rate</label><span>${service.basePrice}</span></div>
          </div>
          <div class="desc">
            <label>Description</label>
            <p>${service.description}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  // ── Badge helpers ───────────────────────────────────────────
  const statusClass = (s) => ({ Active: 'status-active', Paused: 'status-paused', Draft: 'status-draft' }[s] || '');
  const catClass    = (c) => ({ Consulting: 'cat-consulting', Maintenance: 'cat-maintenance', Training: 'cat-training' }[c] || '');

  return (
    <div className="services-container">

      {/* ── Page Header ── */}
      <div className="services-header">
        <div>
          <h2>Services Management</h2>
          <p>Configure your service offerings, categories, and pricing models.</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>+ Add New Service</button>
      </div>

      {/* ── Stats Row ── */}
      <div className="stats-row">
        <div className="stat-card"><div className="stat-label">Total Services</div><div className="stat-val">{stats.total}</div></div>
        <div className="stat-card"><div className="stat-label">Active</div><div className="stat-val stat-active">{stats.active}</div></div>
        <div className="stat-card"><div className="stat-label">Paused</div><div className="stat-val stat-paused">{stats.paused}</div></div>
        <div className="stat-card"><div className="stat-label">Draft</div><div className="stat-val stat-draft">{stats.draft}</div></div>
      </div>

      {/* ── Controls ── */}
      <div className="controls-row">
        <div className="search-bar">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select value={catFilter} onChange={e => setCatFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option>Consulting</option>
          <option>Maintenance</option>
          <option>Training</option>
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          <option>Active</option>
          <option>Paused</option>
          <option>Draft</option>
        </select>
      </div>

      {/* ── Table ── */}
      <div className="table-wrapper">
        <table className="services-table">
          <thead>
            <tr>
              <th>Service Details</th>
              <th>Category</th>
              <th>Pricing Model</th>
              <th>Base Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6}><div className="empty-state">No services match your filters.</div></td>
              </tr>
            ) : (
              filtered.map(service => (
                <tr key={service.id}>
                  <td>
                    <div className="service-name">{service.name}</div>
                    <div className="service-desc">{service.description}</div>
                  </td>
                  <td>
                    <span className={`category-badge ${catClass(service.category)}`}>{service.category}</span>
                    <div className="subcategory-text">{service.subcategory}</div>
                  </td>
                  <td>{service.pricingModel}</td>
                  <td className="base-price">{service.basePrice}</td>
                  <td>
                    <span className={`status-badge ${statusClass(service.status)}`}>{service.status}</span>
                  </td>
                  <td>
                    <div className="actions-cell">
                      <button className="btn-text view"   onClick={() => setViewTarget(service)}>View</button>
                      <button className="btn-text delete" onClick={() => setDeleteTarget(service)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── View Modal ── */}
      {viewTarget && (
        <div className="modal-overlay" onClick={() => setViewTarget(null)}>
          <div className="modal modal-view" onClick={e => e.stopPropagation()}>

            <div className="gene-header">
              <div className="gene-header-top">
                <div>
                  <h2>Service Details</h2>
                  <p>Read-only overview of the selected service record.</p>
                </div>
                <div className="view-header-badges">
                  <span className={`status-badge ${statusClass(viewTarget.status)}`}>{viewTarget.status}</span>
                  <span className="svc-id-badge">{viewTarget.id}</span>
                </div>
              </div>
            </div>

            <div className="gene-form view-form">

              <div className="gene-row">
                <div className="gene-group">
                  <label>Service Name</label>
                  <input type="text" readOnly value={viewTarget.name} />
                </div>
                <div className="gene-group">
                  <label>Category</label>
                  <input type="text" readOnly value={viewTarget.category} />
                </div>
              </div>

              <div className="gene-row">
                <div className="gene-group">
                  <label>Subcategory</label>
                  <input type="text" readOnly value={viewTarget.subcategory || '—'} />
                </div>
                <div className="gene-group">
                  <label>Pricing Model</label>
                  <input type="text" readOnly value={viewTarget.pricingModel} />
                </div>
              </div>

              <div className="gene-row">
                <div className="gene-group">
                  <label>Base Rate</label>
                  <input type="text" readOnly value={viewTarget.basePrice} />
                </div>
                <div className="gene-group">
                  <label>Status</label>
                  <input type="text" readOnly value={viewTarget.status} />
                </div>
              </div>

              <div className="gene-group">
                <label>Description / Service Scope</label>
                <textarea readOnly rows={4} value={viewTarget.description} />
              </div>

              <div className="view-footer">
                <button className="btn-cancel" onClick={() => setViewTarget(null)}>Close</button>
                <button className="btn-primary" onClick={() => handlePrint(viewTarget)}>
                  🖨 Print
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Add Modal ── */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Service</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Service Name *</label>
                <input name="name" value={form.name} onChange={handleFormChange} placeholder="e.g. IT Infrastructure Audit" />
              </div>
              <div className="form-group">
                <label>Service ID</label>
                <input value={`SRV-${String(nextNum).padStart(3, '0')}`} readOnly />
              </div>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea name="description" rows={3} value={form.description} onChange={handleFormChange} placeholder="Brief description of the service..." />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category *</label>
                <select name="category" value={form.category} onChange={handleFormChange}>
                  <option value="" disabled>Select category</option>
                  <option>Consulting</option>
                  <option>Maintenance</option>
                  <option>Training</option>
                </select>
              </div>
              <div className="form-group">
                <label>Subcategory</label>
                <input name="subcategory" value={form.subcategory} onChange={handleFormChange} placeholder="e.g. IT consulting" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Pricing Model *</label>
                <select name="pricingModel" value={form.pricingModel} onChange={handleFormChange}>
                  <option value="" disabled>Select model</option>
                  <option>Retainer</option>
                  <option>Fixed Rate</option>
                  <option>Hourly</option>
                  <option>Per Person</option>
                  <option>Custom Quote</option>
                </select>
              </div>
              <div className="form-group">
                <label>Base Rate *</label>
                <input name="basePrice" value={form.basePrice} onChange={handleFormChange} placeholder="e.g. $150/hr" />
              </div>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleFormChange}>
                <option>Active</option>
                <option>Paused</option>
                <option>Draft</option>
              </select>
            </div>

            {formError && <p className="form-error">{formError}</p>}

            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeModal}>Cancel</button>
              <button className="btn-primary" onClick={saveService}>Add Service</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation ── */}
      {deleteTarget && (
        <div className="modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="confirm-box" onClick={e => e.stopPropagation()}>
            <h3>Delete Service?</h3>
            <p>"{deleteTarget.name}" will be permanently removed. This action cannot be undone.</p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button className="btn-danger" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Services;