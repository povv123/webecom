import React from 'react';
import '../../../styles/services.css';

// --- Import Sub-Category Components ---
// Consulting
import BusinessStrategy from './BusinessStrategy';
import ITConsulting from './ITConsulting';
import FinancialAnalysis from './FinancialAnalysis';
import Taxes from './Taxes';
import LogisticsServices from './LogisticsServices';

// Maintenance
import EquipmentServicing from './EquipmentServicing';
import FacilityManagement from './FacilityManagement';
import SpareParts from './SpareParts';
import InternetProvider from './InternetProvider';

// Training
import TechnicalTraining from './TechnicalTraining';
import CustomerServiceTraining from './CustomerServiceTraining';

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-hero">
        <p className="eyebrow">Services Overview</p>
        <h1>Expertise in every <span>detail.</span></h1>
      </header>

      {/* --- Category 1: Consulting --- */}
      <section className="category-group">
        <div className="category-header">
          <span className="alphabet-id">a.</span>
          <h2>Category 1 – Consulting</h2>
        </div>
        
        <div className="component-line">
          <div className="roman-id">i.</div> <BusinessStrategy />
        </div>
        <div className="component-line">
          <div className="roman-id">ii.</div> <ITConsulting />
        </div>
        <div className="component-line">
          <div className="roman-id">iii.</div> <FinancialAnalysis />
        </div>
        <div className="component-line">
          <div className="roman-id">iv.</div> <Taxes />
        </div>
        <div className="component-line">
          <div className="roman-id">v.</div> <LogisticsServices />
        </div>
      </section>

      <hr className="divider" />

      {/* --- Category 2: Maintenance --- */}
      <section className="category-group">
        <div className="category-header">
          <span className="alphabet-id">b.</span>
          <h2>Category 2 – Maintenance</h2>
        </div>
        
        <div className="component-line">
          <div className="roman-id">i.</div> <EquipmentServicing />
        </div>
        <div className="component-line">
          <div className="roman-id">ii.</div> <FacilityManagement />
        </div>
        <div className="component-line">
          <div className="roman-id">iii.</div> <SpareParts />
        </div>
        <div className="component-line">
          <div className="roman-id">iv.</div> <InternetProvider />
        </div>
      </section>

      <hr className="divider" />

      {/* --- Category 3: Training --- */}
      <section className="category-group">
        <div className="category-header">
          <span className="alphabet-id">c.</span>
          <h2>Category 3 – Training</h2>
        </div>
        
        <div className="component-line">
          <div className="roman-id">i.</div> <TechnicalTraining />
        </div>
        <div className="component-line">
          <div className="roman-id">ii.</div> <CustomerServiceTraining />
        </div>
      </section>

      <footer className="services-footer">
        <h3>Ready to get started?</h3>
        <button className="apple-btn-blue">Contact an Advisor</button>
      </footer>
    </div>
  );
};

export default Services;