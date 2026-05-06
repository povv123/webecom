import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import '../../../styles/services/finaces.css';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const programs = [
  {
    title: "Risk Assessment",
    area: "Market & Credit Risk",
    description:
      "Identify exposure across market, credit, and operational risk with quantitative models tailored to your portfolio.",
  },
  {
    title: "Wealth Management",
    area: "Investment Strategy",
    description:
      "Personalised investment strategies built around your goals, time horizon, and risk appetite.",
  },
  {
    title: "Budgeting",
    area: "Capital Allocation",
    description:
      "Driver-based budgeting frameworks and rolling forecasts that keep capital working where it matters most.",
  },
];

const FinancialAnalysis = () => {
  return (
    <div className="finacc service-sub-container">

      {/* ── Hero ── */}
      <section className="service-hero">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Financial Analysis Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Financial Analysis.{" "}
          <span>Clarity in every number.</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insightful data and expert guidance to drive your financial future—
          from risk to returns.
        </motion.p>
      </section>

      {/* ── Program Cards ── */}
      <section className="program-grid">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            className="program-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3>{p.title}</h3>
            <p>
              <strong style={{ display: "block", marginBottom: "0.4rem", color: "#0056b3", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {p.area}
              </strong>
              {p.description}
            </p>
            <button className="std-link">
              View Analysis&nbsp;›
            </button>
          </motion.div>
        ))}
      </section>

      {/* ── Learn More CTA ── */}
      <section className="learn-more-section" style={{ marginTop: "4rem" }}>
        <motion.div
          className="learn-more-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="learn-more-content">
            <span className="card-eyebrow">Next Steps</span>
            <h2>Get a deeper look.</h2>
            <p>
              Connect with our experts to explore custom integrations and
              scaling strategies built around your business.
            </p>
            <div className="cta-group">
              <Link to="/Services/Bookservice" className="apple-button">
                Book a Service
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default FinancialAnalysis;