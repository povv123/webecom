import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Services = () => {
  const serviceCategories = [
    {
      id: "",
      title: "Consulting",
      subtitle: "Strategic guidance for a digital-first enterprise.",
      icon: "💡",
      items: [
        { name: "Business Strategy", path: "/services/consulting/strategy" },
        { name: "IT Consulting", path: "/services/consulting/it" },
        { name: "Financial Analysis", path: "/services/consulting/financial" },
        { name: "Taxes", path: "/services/consulting/taxes" },
        { name: "Logistics Services", path: "/services/consulting/logistics" },
      ]
    },
    {
      id: "",
      title: "Maintenance",
      subtitle: "Reliability and support, engineered to last.",
      icon: "🛠️",
      items: [
        { name: "Equipment Servicing", path: "/services/maintenance/equipment" },
        { name: "Facility Management", path: "/services/maintenance/facility" },
        { name: "Spare Parts & Repair", path: "/services/maintenance/repair" },
        { name: "Internet Provider", path: "/services/maintenance/isp" },
      ]
    },
    {
      id: "",
      title: "Training",
      subtitle: "Upskill your workforce with industrial expertise.",
      icon: "🎓",
      items: [
        { name: "Technical Training", path: "/services/training/technical" },
        { name: "Customer Service Training", path: "/services/training/customer-service" },
      ]
    }
  ];

  return (
    <div className="services-root">
      
      {/* SECTION 1: DARK ENTERTAINMENT HERO */}
      <section className="hero-dark">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-container"
        >
        

          <h1 className="hero-title">
            Meet the A-list of <br />
            <span className="hero-title-accent">industrial services.</span>
          </h1>
          
          <p className="hero-desc">
            Award-winning strategy. Binge-worthy efficiency. Your favorite operations 
            mastered in Spatial Data. The best solutions live here — only on Eter.
          </p>
        </motion.div>
      </section>

  

      {/* SECTION 3: STORE STYLE GRID */}
      <main className="grid-section">
        <div className="services-grid">
          {serviceCategories.map((cat) => (
            <motion.div 
              key={cat.id}
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <div className="card-header">
                <div className="card-icon-box">{cat.icon}</div>
              
                <h2 className="card-title">{cat.title}</h2>
                <p className="card-subtitle">{cat.subtitle}</p>
              </div>

              <div className="card-list">
                {cat.items.map((item, i) => (
                  <Link to={item.path} key={item.path} className="list-item-link group">
                    <div className="list-item-content">
                      
                      <span className="list-name">{item.name}</span>
                    </div>
                    <span className="list-chevron">
                      <svg width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

   
    </div>
  );
};

export default Services;