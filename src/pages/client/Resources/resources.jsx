import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/resources.css';

const blogPosts = [
  {
    id: 1,
    colorClass: "blue",
    title: "How AI Is Reshaping Enterprise Workflows in 2025",
    desc: "A deep dive into the tools, frameworks, and organizational shifts that are enabling companies to move faster and smarter than ever before.",
    readTime: "8 min read",
    date: "May 1, 2025",
    category: "AI & Innovation",
  },
  {
    id: 2,
    title: "Zero Trust Security: From Strategy to Execution",
    desc: "Learn how leading enterprises are implementing zero trust architectures to protect distributed workforces and sensitive data.",
    readTime: "6 min read",
    date: "Apr 22, 2025",
    category: "Security",
  },
  {
    id: 3,
    title: "The Real ROI of Employee Productivity Tools",
    desc: "New data shows that the right productivity stack can save each knowledge worker over 4 hours per week. Here's what that looks like.",
    readTime: "5 min read",
    date: "Apr 15, 2025",
    category: "Productivity",
  },
  {
    id: 4,
    title: "Cloud Modernization Without the Chaos",
    desc: "A practical playbook for enterprises migrating legacy systems to the cloud while maintaining uptime, compliance, and team momentum.",
    readTime: "7 min read",
    date: "Apr 8, 2025",
    category: "IT & Cloud",
  },
  {
    id: 5,
    title: "Building for Global Scale: Lessons from 50 Enterprise Deployments",
    desc: "We analyzed 50 global deployments to extract the patterns that separate smooth rollouts from painful ones.",
    readTime: "10 min read",
    date: "Mar 30, 2025",
    category: "Strategy",
  },
];

const caseStudies = [
  {
    id: 1,
    colorClass: "teal",
    company: "FinCore Bank",
    industry: "Financial Services",
    title: "FinCore Reduced IT Costs by 38% With Unified Device Management",
    desc: "With 14,000 employees across 30 countries, FinCore needed a scalable, secure, and seamless device management solution. Here's how they did it.",
    results: ["38% cost reduction", "2× faster onboarding", "99.9% uptime"],
  },
  {
    id: 2,
    colorClass: "purple",
    company: "MedAxis Health",
    industry: "Healthcare",
    title: "MedAxis Modernized Patient Care Coordination Across 80 Clinics",
    desc: "MedAxis deployed a new integrated platform across all facilities, enabling real-time care coordination and eliminating paperwork bottlenecks.",
    results: ["60% less paperwork", "3× faster referrals", "4.8★ staff satisfaction"],
  },
  {
    id: 3,
    colorClass: "orange",
    company: "VectorTech Manufacturing",
    industry: "Manufacturing",
    title: "VectorTech Cut Supply Chain Delays by 42% Using Predictive Analytics",
    desc: "By replacing spreadsheets with AI-driven forecasting tools, VectorTech's supply chain team now anticipates disruptions before they happen.",
    results: ["42% fewer delays", "22% inventory savings", "$8M annual impact"],
  },
];

const whitepapers = [
  {
    id: 1,
    title: "The Total Economic Impact of Modern Device Management",
    desc: "Commissioned research analyzing cost savings, productivity gains, and security improvements across 200 enterprises over 3 years.",
    tags: ["IT", "ROI", "Research"],
    pages: 48,
  },
  {
    id: 2,
    title: "Enterprise AI Readiness: A Framework for 2025 and Beyond",
    desc: "A comprehensive framework to assess your organization's AI readiness across data, talent, infrastructure, and governance dimensions.",
    tags: ["AI", "Strategy", "Framework"],
    pages: 36,
  },
  {
    id: 3,
    title: "Security at Scale: Protecting a Distributed Enterprise Workforce",
    desc: "Best practices, architectural guidance, and real-world benchmarks for securing hybrid and remote enterprise environments.",
    tags: ["Security", "Remote Work", "Best Practices"],
    pages: 52,
  },
  {
    id: 4,
    title: "The Future of Work: Productivity Trends Reshaping the Enterprise",
    desc: "Survey data from 1,200 enterprise leaders on how work is evolving — and which investments are paying off most.",
    tags: ["Productivity", "Future of Work", "Survey"],
    pages: 28,
  },
];

const faqs = [
  {
    q: "How do I get started with enterprise deployment?",
    a: "Getting started is straightforward. Our Enterprise team will work with you to assess your current environment, define your deployment goals, and create a phased rollout plan. Most enterprises are fully deployed within 60–90 days, including training and onboarding.",
  },
  {
    q: "What security certifications and compliance standards are supported?",
    a: "Our platform is certified against SOC 2 Type II, ISO 27001, HIPAA, FedRAMP, and GDPR frameworks. We also support custom compliance configurations for regulated industries such as finance, healthcare, and government.",
  },
  {
    q: "Can resources be customized for different teams or regions?",
    a: "Yes. Our platform supports granular role-based access controls, regional content segmentation, and department-specific resource libraries. Admins can configure visibility rules, language settings, and approval workflows per team.",
  },
  {
    q: "What support is available for enterprise accounts?",
    a: "Enterprise accounts receive dedicated Customer Success management, 24/7 priority support with a 1-hour SLA, quarterly business reviews, and access to our private beta program for early feature access.",
  },
  {
    q: "Is there a trial or pilot program available?",
    a: "Yes. We offer a 30-day enterprise pilot with full feature access for up to 50 users. Pilots include onboarding assistance, a dedicated implementation specialist, and a readout report at the close of the trial period.",
  },
  {
    q: "How is pricing structured for enterprise plans?",
    a: "Enterprise pricing is based on seat count, selected modules, and contract length. Volume discounts apply at 250, 500, and 1,000+ seats. Multi-year agreements include additional benefits and locked-in pricing. Contact our team for a custom quote.",
  },
  {
    q: "Where can I download all available resources?",
    a: "All whitepapers, case studies, and guides are available individually on this page or as a bundled download via your Enterprise portal. Registered users can also receive new resources automatically via our digest newsletter.",
  },
];

// ── SVG ICONS ────────────────────────────────────────────────────
const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v13M7 11l5 5 5-5M5 21h14" />
  </svg>
);

const AIIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const CloudIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);

const AllIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const CATEGORY_ICONS = {
  "All": AllIcon,
  "AI & Innovation": AIIcon,
  "Security": ShieldIcon,
  "Productivity": BoltIcon,
  "IT & Cloud": CloudIcon,
  "Strategy": GlobeIcon,
};

const SECTIONS = [
  { id: "overview",     label: "Overview",     path: "/resources" },
  { id: "blog",         label: "Blogs",        path: "/resources/blog" },
  { id: "case-studies", label: "Case Studies", path: "/resources/case-studies" },
  { id: "whitepapers",  label: "Whitepapers",  path: "/resources/whitepapers" },
  { id: "faqs",         label: "FAQs",         path: "/resources/faqs" },
];

const CATEGORIES = ["All", "AI & Innovation", "Security", "Productivity", "IT & Cloud", "Strategy"];

// ── SUB-COMPONENTS ───────────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`res-faq-item${open ? " open" : ""}`}>
      <button
        className="res-faq-question"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="res-faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="res-faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const timer = setTimeout(() => obs.observe(el), delay);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, [delay]);
  return <div ref={ref} className="res-fade-in">{children}</div>;
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSent(true);
  }, []);

  return (
    <section id="contact" className="res-section res-contact-surface">
      <div className="res-stories-header">
        <h3 className="res-section-title">Contact Portal</h3>
        <h2 className="res-headline">Let's build together.</h2>
        <p className="res-hero-sub" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Ready to discover what is possible? Our enterprise infrastructure specialists respond within one business day.
        </p>
      </div>

      <FadeIn>
        <div className="res-form-container">
          {sent ? (
            <div className="res-success-message">
              <h3>Message delivered successfully.</h3>
              <p>We'll look over your requirements and connect with your team shortly.</p>
            </div>
          ) : (
            <form className="res-form" onSubmit={handleSubmit} noValidate>
              <div className="res-form-grid">
                <div className="res-field">
                  <label htmlFor="cf-name">Full name</label>
                  <input id="cf-name" name="name" type="text" placeholder="Sok Heng" value={form.name} onChange={handleChange} required />
                </div>
                <div className="res-field">
                  <label htmlFor="cf-email">Work email</label>
                  <input id="cf-email" name="email" type="email" placeholder="name@gmail.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="res-field">
                <label htmlFor="cf-company">Company</label>
                <input id="cf-company" name="company" type="text" placeholder="Servial Services" value={form.company} onChange={handleChange} />
              </div>
              <div className="res-field">
                <label htmlFor="cf-message">How can we help?</label>
                <textarea id="cf-message" name="message" rows={4} placeholder="Tell us about your ..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="res-btn-submit">Submit</button>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────
const ResourcesPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = SECTIONS.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const active = offsets.reduce((a, b) =>
        Math.abs(b.top - 120) < Math.abs(a.top - 120) ? b : a
      );
      setActiveSection(active.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPosts = blogPosts.filter(p =>
    (activeFilter === "All" || p.category === activeFilter) &&
    (search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="res">
      {/* Sticky Local Navigation */}
      <nav className="res-local-nav">
        <div className="res-nav-container">
          <span className="res-nav-brand">Eter Resources</span>
          <div className="res-nav-links">
            {SECTIONS.map(s => (
              <Link
                key={s.id}
                to={s.path}
                className={activeSection === s.id ? "active" : ""}
              >
                {s.label}
              </Link>
            ))}
            <Link to="/Contact/inquiry" className="res-btn-nav">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* 1. Overview / Hero Section */}
      <section id="overview" className="res-section res-hero">
        <div className="res-hero-bg" aria-hidden="true">
          <span className="res-blob res-blob-blue" />
          <span className="res-blob res-blob-purple" />
          <span className="res-blob res-blob-teal" />
          <span className="res-blob res-blob-orange" />
        </div>
        <div className="res-hero-content">
          <p className="res-eyebrow">Knowledge Ecosystem</p>
          <h1>Intelligence for the <br /><span>modern enterprise.</span></h1>
          <p className="res-hero-sub">
            Expert analysis, research-backed strategy playbooks, and structural documentation built to scale operational growth.
          </p>
        </div>
      </section>

      {/* 2. Blog Insights Section */}
      <section id="blog" className="res-section res-feature">
        <div className="res-feature-text">
          <h3 className="res-section-title">Blogs</h3>
          <h2 className="res-headline">Stay ahead of the curve.</h2>
          <p className="res-desc">
            Explore deep technical breakdowns and implementation analytics compiled by industry specialists.
          </p>

          {/* Search Field Interface */}
          <div className="res-search-container" style={{ margin: '1.5rem 0' }}>
            <div className="res-search-input-wrapper" style={{ position: 'relative' }}>
              <input
                type="search"
                className="res-search-input"
                placeholder="Search resources..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: '2.5rem', width: '100%', height: '44px', borderRadius: '8px', border: '1px solid var(--border-color, #e5e5e5)' }}
              />
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                <SearchIcon />
              </span>
            </div>
          </div>

          {/* Filter Pill List */}
          <div className="res-filter-pill-box" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {CATEGORIES.map(c => {
              const Icon = CATEGORY_ICONS[c];
              return (
                <button
                  key={c}
                  className={`res-filter-pill ${activeFilter === c ? 'active' : ''}`}
                  onClick={() => setActiveFilter(c)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', border: '1px solid #ccc', cursor: 'pointer' }}
                >
                  {Icon && <Icon />}
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Card */}
        <div className="res-feature-visual res-glass-panel">
          {filteredPosts.length > 0 ? (() => {
            const featured = filteredPosts[0];
            const Icon = CATEGORY_ICONS[featured.category];
            return (
              <div className="res-featured-hero-display" style={{ padding: '1rem', textAlign: 'left' }}>
                <span className="res-eyebrow" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {Icon && <Icon />}
                  Featured Content · {featured.category}
                </span>
                <h3 style={{ margin: '0.5rem 0' }}>{featured.title}</h3>
                <p style={{ fontSize: '13px', opacity: 0.8 }} className="res-desc">{featured.desc}</p>
                <Link
                  to="/resources/blog"
                  className="res-link"
                  style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Read full brief <ChevronIcon />
                </Link>
              </div>
            );
          })() : (
            <span className="res-visual-placeholder">No articles match your parameters</span>
          )}
        </div>
      </section>

      {/* Grid Display for Remaining Posts */}
      {filteredPosts.length > 1 && (
        <section className="res-section res-stories" style={{ paddingTop: 0 }}>
          <div className="res-grid">
            {filteredPosts.slice(1).map(p => {
              const Icon = CATEGORY_ICONS[p.category];
              return (
                <div key={p.id} className="res-card">
                  <h3>{p.title}</h3>
                  <p className="res-metric" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: '4px 0 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {Icon && <Icon />}
                    {p.readTime}
                  </p>
                  <p>{p.desc}</p>
                  <Link to="/resources/blog" className="res-link">
                    Read Article <span className="res-chevron"><ChevronIcon /></span>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. Case Studies Section */}
      <section id="case-studies" className="res-section res-stories">
        <div className="res-stories-header">
          <h3 className="res-section-title">Proven Implementations</h3>
          <h2 className="res-headline">Validated in production.</h2>
        </div>

        <div className="res-grid">
          {caseStudies.map(cs => (
            <div className="res-card" key={cs.id}>
              <h3>{cs.company}</h3>
              <p className="res-metric">{cs.results[0].split(' ')[0]}</p>
              <p><strong>{cs.title}</strong></p>
              <p style={{ marginTop: '8px' }}>{cs.desc}</p>
              <Link to="/resources/casestudies" className="res-link">
                Analyze metrics <span className="res-chevron"><ChevronIcon /></span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Whitepapers Section */}
      <section id="whitepapers" className="res-section res-feature-alt">
        <div className="res-feature-visual res-glass-panel">
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            {whitepapers.slice(0, 2).map(wp => (
              <div key={wp.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', textAlign: 'left' }}>
                <h4 style={{ margin: 0 }}>{wp.title}</h4>
                <p style={{ fontSize: '12px', margin: '4px 0' }}>{wp.pages} Pages technical blueprint</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid breakdown for remaining Whitepapers */}
      <section className="res-section res-stories" style={{ paddingTop: 0 }}>
        <div className="res-grid">
          {whitepapers.map(wp => (
            <div key={wp.id} className="res-card">
              <h3>{wp.title}</h3>
              <p className="res-metric" style={{ fontSize: '16px' }}>{wp.pages} Pages</p>
              <p>{wp.desc}</p>
              <Link
                to="/resources/whitepapers"
                className="res-link"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <DownloadIcon /> Download PDF Documentation
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section id="faqs" className="res-section res-stories">
        <div className="res-stories-header">
          <h3 className="res-section-title">FAQ</h3>
          <h2 className="res-headline">Frequently Asked Questions.</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ResourcesPage;