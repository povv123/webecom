import React, { useState } from 'react';
import '../../styles/Admin/Services.css';

const INITIAL_SERVICES = [
  // Healthcare
  {
    id: 'SOL-001',
    name: 'Hospital Management System',
    description:
      'Integrated digital platform for hospital operations, patient records, billing, scheduling, and administration.',
    category: 'Healthcare',
    subcategory: 'Clinical Systems',
    pricingModel: 'Custom Quote',
    basePrice: 'Enterprise Pricing',
    status: 'Active',
  },
  {
    id: 'SOL-002',
    name: 'Patient Data & EHR Integration',
    description:
      'Secure integration of electronic health records and centralized patient information systems.',
    category: 'Healthcare',
    subcategory: 'EHR Integration',
    pricingModel: 'Project Based',
    basePrice: '$12,000+',
    status: 'Active',
  },
  {
    id: 'SOL-003',
    name: 'Medical Equipment Procurement',
    description:
      'Procurement and deployment support for medical devices and healthcare infrastructure.',
    category: 'Healthcare',
    subcategory: 'Medical Procurement',
    pricingModel: 'Custom Quote',
    basePrice: 'Variable',
    status: 'Paused',
  },
  {
    id: 'SOL-004',
    name: 'Healthcare Staff Training',
    description:
      'Training programs for clinical staff, administrators, and healthcare support teams.',
    category: 'Healthcare',
    subcategory: 'Staff Training',
    pricingModel: 'Per Person',
    basePrice: '$399/seat',
    status: 'Draft',
  },

  // Education
  {
    id: 'SOL-005',
    name: 'E-Learning Platform Setup',
    description:
      'Design and deployment of scalable digital learning environments for schools and universities.',
    category: 'Education',
    subcategory: 'E-Learning',
    pricingModel: 'Project Based',
    basePrice: '$8,500+',
    status: 'Active',
  },
  {
    id: 'SOL-006',
    name: 'Campus IT Infrastructure',
    description:
      'Modern networking, server, and smart-campus infrastructure solutions.',
    category: 'Education',
    subcategory: 'IT Infrastructure',
    pricingModel: 'Custom Quote',
    basePrice: 'Enterprise Pricing',
    status: 'Active',
  },
  {
    id: 'SOL-007',
    name: 'Curriculum Development Consulting',
    description:
      'Consulting services for curriculum modernization and academic program design.',
    category: 'Education',
    subcategory: 'Academic Consulting',
    pricingModel: 'Retainer',
    basePrice: '$4,000/mo',
    status: 'Paused',
  },
  {
    id: 'SOL-008',
    name: 'Student Information System',
    description:
      'Centralized student data management platform for academic institutions.',
    category: 'Education',
    subcategory: 'Student Management',
    pricingModel: 'Subscription',
    basePrice: '$699/mo',
    status: 'Active',
  },
  {
    id: 'SOL-009',
    name: 'Teacher & Staff Training Programs',
    description:
      'Professional development workshops and certification programs for educators.',
    category: 'Education',
    subcategory: 'Training Programs',
    pricingModel: 'Per Person',
    basePrice: '$249/seat',
    status: 'Draft',
  },

  // Manufacturing
  {
    id: 'SOL-010',
    name: 'Factory Automation Consulting',
    description:
      'Industrial automation strategy and smart manufacturing implementation.',
    category: 'Manufacturing',
    subcategory: 'Automation',
    pricingModel: 'Consulting',
    basePrice: '$180/hr',
    status: 'Active',
  },
  {
    id: 'SOL-011',
    name: 'Equipment Maintenance & Servicing',
    description:
      'Preventive maintenance and servicing solutions for industrial equipment.',
    category: 'Manufacturing',
    subcategory: 'Equipment Servicing',
    pricingModel: 'Maintenance Contract',
    basePrice: '$2,000/mo',
    status: 'Active',
  },
  {
    id: 'SOL-012',
    name: 'Supply Chain Optimisation',
    description:
      'End-to-end supply chain performance analysis and operational optimization.',
    category: 'Manufacturing',
    subcategory: 'Supply Chain',
    pricingModel: 'Project Based',
    basePrice: '$15,000+',
    status: 'Paused',
  },
  {
    id: 'SOL-013',
    name: 'Quality Control System Integration',
    description:
      'Implementation of automated quality assurance and monitoring systems.',
    category: 'Manufacturing',
    subcategory: 'Quality Control',
    pricingModel: 'Custom Quote',
    basePrice: 'Enterprise Pricing',
    status: 'Draft',
  },
];

const EMPTY_FORM = {
  name: '',
  description: '',
  category: '',
  subcategory: '',
  pricingModel: '',
  basePrice: '',
  status: 'Active',
};

const Solution = () => {
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Add Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [formError, setFormError] = useState('');
  const [nextNum, setNextNum] = useState(14);

  // View Modal
  const [viewTarget, setViewTarget] = useState(null);

  // Delete Modal
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Stats
  const stats = {
    total: services.length,
    active: services.filter((s) => s.status === 'Active').length,
    paused: services.filter((s) => s.status === 'Paused').length,
    draft: services.filter((s) => s.status === 'Draft').length,
  };

  // Filtering
  const filtered = services.filter((s) => {
    const q = search.toLowerCase();

    const matchQ =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.subcategory.toLowerCase().includes(q);

    const matchCat = !catFilter || s.category === catFilter;
    const matchSt = !statusFilter || s.status === statusFilter;

    return matchQ && matchCat && matchSt;
  });

  // Open Add Modal
  const openAdd = () => {
    setForm({
      ...EMPTY_FORM,
      id: `SOL-${String(nextNum).padStart(3, '0')}`,
    });

    setFormError('');
    setModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalOpen(false);
    setForm(EMPTY_FORM);
    setFormError('');
  };

  // Form Change
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save
  const saveService = () => {
    if (
      !form.name ||
      !form.description ||
      !form.category ||
      !form.pricingModel ||
      !form.basePrice
    ) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setServices((prev) => [
      ...prev,
      {
        ...form,
        id: `SOL-${String(nextNum).padStart(3, '0')}`,
      },
    ]);

    setNextNum((n) => n + 1);

    closeModal();
  };

  // Delete
  const confirmDelete = () => {
    setServices((prev) =>
      prev.filter((s) => s.id !== deleteTarget.id)
    );

    setDeleteTarget(null);
  };

  // Print
  const handlePrint = (service) => {
    const printWindow = window.open('', '_blank');

    printWindow.document.write(`
      <html>
        <head>
          <title>Solution — ${service.id}</title>

          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
              padding: 40px;
              color: #111;
            }

            h1 {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 4px;
            }

            .sub {
              font-size: 13px;
              color: #888;
              margin-bottom: 30px;
            }

            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px 32px;
            }

            .field label {
              font-size: 10px;
              font-weight: 700;
              letter-spacing: .08em;
              text-transform: uppercase;
              color: #777;
              display: block;
              margin-bottom: 6px;
            }

            .field span {
              font-size: 14px;
              color: #111;
            }

            .desc {
              margin-top: 30px;
            }

            .desc label {
              font-size: 10px;
              font-weight: 700;
              letter-spacing: .08em;
              text-transform: uppercase;
              color: #777;
              display: block;
              margin-bottom: 8px;
            }

            .desc p {
              font-size: 14px;
              line-height: 1.7;
              color: #111;
            }

            hr {
              border: none;
              border-top: 1px solid #e5e5e5;
              margin: 28px 0;
            }

            @media print {
              body {
                padding: 20px;
              }
            }
          </style>
        </head>

        <body>

          <h1>${service.name}</h1>

          <div class="sub">
            ${service.id} · ${service.status}
          </div>

          <hr />

          <div class="grid">

            <div class="field">
              <label>Industry</label>
              <span>${service.category}</span>
            </div>

            <div class="field">
              <label>Solution Type</label>
              <span>${service.subcategory || '—'}</span>
            </div>

            <div class="field">
              <label>Pricing Model</label>
              <span>${service.pricingModel}</span>
            </div>

            <div class="field">
              <label>Pricing</label>
              <span>${service.basePrice}</span>
            </div>

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

  // Badge Classes
  const statusClass = (s) =>
    (
      {
        Active: 'status-active',
        Paused: 'status-paused',
        Draft: 'status-draft',
      }[s] || ''
    );

  const catClass = (c) =>
    (
      {
        Healthcare: 'cat-healthcare',
        Education: 'cat-education',
        Manufacturing: 'cat-manufacturing',
      }[c] || ''
    );

  return (
    <div className="services-container">

      {/* Header */}
      <div className="services-header">
        <div>
          <h2>Industry Solutions Management</h2>

          <p>
            Manage healthcare, education, and manufacturing
            solution offerings.
          </p>
        </div>

        <button
          className="btn-primary"
          onClick={openAdd}
        >
          + Add New Solution
        </button>
      </div>

      {/* Stats */}
      <div className="stats-row">

        <div className="stat-card">
          <div className="stat-label">Total Solutions</div>
          <div className="stat-val">{stats.total}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Active</div>
          <div className="stat-val stat-active">
            {stats.active}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Paused</div>
          <div className="stat-val stat-paused">
            {stats.paused}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Draft</div>
          <div className="stat-val stat-draft">
            {stats.draft}
          </div>
        </div>

      </div>

      {/* Controls */}
      <div className="controls-row">

        <div className="search-bar">
          <svg
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>

          <input
            type="text"
            placeholder="Search solutions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
        >
          <option value="">All Industries</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Manufacturing</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option>Active</option>
          <option>Paused</option>
          <option>Draft</option>
        </select>

      </div>

      {/* Table */}
      <div className="table-wrapper">

        <table className="services-table">

          <thead>
            <tr>
              <th>Solution Details</th>
              <th>Industry</th>
              <th>Pricing Model</th>
              <th>Pricing</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div className="empty-state">
                    No solutions match your filters.
                  </div>
                </td>
              </tr>
            ) : (
              filtered.map((service) => (
                <tr key={service.id}>

                  <td>
                    <div className="service-name">
                      {service.name}
                    </div>

                    <div className="service-desc">
                      {service.description}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`category-badge ${catClass(
                        service.category
                      )}`}
                    >
                      {service.category}
                    </span>

                    <div className="subcategory-text">
                      {service.subcategory}
                    </div>
                  </td>

                  <td>{service.pricingModel}</td>

                  <td className="base-price">
                    {service.basePrice}
                  </td>

                  <td>
                    <span
                      className={`status-badge ${statusClass(
                        service.status
                      )}`}
                    >
                      {service.status}
                    </span>
                  </td>

                  <td>
                    <div className="actions-cell">

                      <button
                        className="btn-text view"
                        onClick={() =>
                          setViewTarget(service)
                        }
                      >
                        View
                      </button>

                      <button
                        className="btn-text delete"
                        onClick={() =>
                          setDeleteTarget(service)
                        }
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      {/* View Modal */}
      {viewTarget && (
        <div
          className="modal-overlay"
          onClick={() => setViewTarget(null)}
        >
          <div
            className="modal modal-view"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="gene-header">

              <div className="gene-header-top">

                <div>
                  <h2>Solution Details</h2>

                  <p>
                    Read-only overview of the selected
                    industry solution.
                  </p>
                </div>

                <div className="view-header-badges">

                  <span
                    className={`status-badge ${statusClass(
                      viewTarget.status
                    )}`}
                  >
                    {viewTarget.status}
                  </span>

                  <span className="svc-id-badge">
                    {viewTarget.id}
                  </span>

                </div>

              </div>

            </div>

            <div className="gene-form view-form">

              <div className="gene-row">

                <div className="gene-group">
                  <label>Solution Name</label>

                  <input
                    type="text"
                    readOnly
                    value={viewTarget.name}
                  />
                </div>

                <div className="gene-group">
                  <label>Industry</label>

                  <input
                    type="text"
                    readOnly
                    value={viewTarget.category}
                  />
                </div>

              </div>

              <div className="gene-row">

                <div className="gene-group">
                  <label>Solution Type</label>

                  <input
                    type="text"
                    readOnly
                    value={
                      viewTarget.subcategory || '—'
                    }
                  />
                </div>

                <div className="gene-group">
                  <label>Pricing Model</label>

                  <input
                    type="text"
                    readOnly
                    value={viewTarget.pricingModel}
                  />
                </div>

              </div>

              <div className="gene-row">

                <div className="gene-group">
                  <label>Pricing</label>

                  <input
                    type="text"
                    readOnly
                    value={viewTarget.basePrice}
                  />
                </div>

                <div className="gene-group">
                  <label>Status</label>

                  <input
                    type="text"
                    readOnly
                    value={viewTarget.status}
                  />
                </div>

              </div>

              <div className="gene-group">

                <label>Description</label>

                <textarea
                  readOnly
                  rows={4}
                  value={viewTarget.description}
                />

              </div>

              <div className="view-footer">

                <button
                  className="btn-cancel"
                  onClick={() => setViewTarget(null)}
                >
                  Close
                </button>

                <button
                  className="btn-primary"
                  onClick={() =>
                    handlePrint(viewTarget)
                  }
                >
                  🖨 Print
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* Add Modal */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <h3>Add New Solution</h3>

              <button
                className="modal-close"
                onClick={closeModal}
              >
                ✕
              </button>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Solution Name *</label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="e.g. E-Learning Platform Setup"
                />
              </div>

              <div className="form-group">
                <label>Solution ID</label>

                <input
                  value={`SOL-${String(nextNum).padStart(
                    3,
                    '0'
                  )}`}
                  readOnly
                />
              </div>

            </div>

            <div className="form-group">

              <label>Description *</label>

              <textarea
                name="description"
                rows={3}
                value={form.description}
                onChange={handleFormChange}
                placeholder="Brief description..."
              />

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>Industry *</label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                >
                  <option value="" disabled>
                    Select industry
                  </option>

                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Manufacturing</option>
                </select>

              </div>

              <div className="form-group">

                <label>Solution Type</label>

                <input
                  name="subcategory"
                  value={form.subcategory}
                  onChange={handleFormChange}
                  placeholder="e.g. EHR Integration"
                />

              </div>

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>Pricing Model *</label>

                <select
                  name="pricingModel"
                  value={form.pricingModel}
                  onChange={handleFormChange}
                >
                  <option value="" disabled>
                    Select model
                  </option>

                  <option>Custom Quote</option>
                  <option>Project Based</option>
                  <option>Retainer</option>
                  <option>Subscription</option>
                  <option>Per Person</option>
                  <option>Consulting</option>
                  <option>Maintenance Contract</option>
                </select>

              </div>

              <div className="form-group">

                <label>Pricing *</label>

                <input
                  name="basePrice"
                  value={form.basePrice}
                  onChange={handleFormChange}
                  placeholder="e.g. $8,500+"
                />

              </div>

            </div>

            <div className="form-group">

              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleFormChange}
              >
                <option>Active</option>
                <option>Paused</option>
                <option>Draft</option>
              </select>

            </div>

            {formError && (
              <p className="form-error">
                {formError}
              </p>
            )}

            <div className="modal-footer">

              <button
                className="btn-cancel"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="btn-primary"
                onClick={saveService}
              >
                Add Solution
              </button>

            </div>

          </div>

        </div>
      )}

      {/* Delete Confirmation */}
      {deleteTarget && (
        <div
          className="modal-overlay"
          onClick={() => setDeleteTarget(null)}
        >

          <div
            className="confirm-box"
            onClick={(e) => e.stopPropagation()}
          >

            <h3>Delete Solution?</h3>

            <p>
              "{deleteTarget.name}" will be permanently
              removed. This action cannot be undone.
            </p>

            <div className="confirm-actions">

              <button
                className="btn-cancel"
                onClick={() =>
                  setDeleteTarget(null)
                }
              >
                Cancel
              </button>

              <button
                className="btn-danger"
                onClick={confirmDelete}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Solution;