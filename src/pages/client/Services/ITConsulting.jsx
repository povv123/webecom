import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../../styles/services/it-consulting.css";

const ITConsulting = () => {
  const programs = [
    { title: "Cloud Systems", area: "Architecture & Migration" },
    { title: "Cybersecurity", area: "Protection & Compliance" },
    { title: "Software Dev", area: "Custom Tooling & AI" }
  ];

  return (
    <div className="ITT">

  {/* LEARN MORE / CTA SECTION */}
      <section className="learn-more-section">
        <motion.div 
          className="learn-more-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="learn-more-content">
        
            <h2>Get a deeper look.</h2>
            <p>Connect with our experts to explore custom integrations and scaling strategies.</p>
            <div className="cta-group">
              <Link to="/Services/Bookservice" className="apple-button">Book a Service</Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="service-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="eyebrow">Consulting</p>
          <h1 className="three-line-heading">
            <span className="line-1">IT Consulting.</span>
            <span className="line-2">Technology built for scale.</span>
            <span className="line-3">Future-proof your infrastructure.</span>
          </h1>
        </motion.div>
      </section>

      {/* PROGRAM GRID - THREE LINE CARD FIX */}
      <section className="program-grid">
        {programs.map((p, i) => (
          <motion.div 
            key={i} 
            className="program-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div className="card-content">
              <h3 className="card-line-1">{p.title}</h3>
              <p className="card-line-2">{p.area}</p>
              <div className="card-line-3">
                <button className="apple-link">
                  Learn more <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

    
    </div>
  );
};

export default ITConsulting;