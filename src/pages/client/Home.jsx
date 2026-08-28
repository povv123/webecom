import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

// Images
import iphoneImg from '../../assets/images/hero_iphone_family__fuz5j2v5xx6y_largetall.jpg'; 
import laptopImg from '../../assets/images/Lapjdtc.jpg'; 
import machineryImg from '../../assets/images/dctrjcer.jpg'; 
import officeFurImg from '../../assets/images/airnjksdc.jpg'; 
import itConsultingImg from '../../assets/images/uuufvty.png'; 
import solutionsImg from '../../assets/images/Aboutus.jpg'; 
import careersImg from '../../assets/images/leadership.jpg'; 
import missionImg from '../../assets/images/mission.jpg'; 
import supportImg from '../../assets/images/washknol.jpg'; 

const Home = () => {
  return (
    <div className="home">

      {/* HERO BLOCK */}
      <section className="hero hero-light">
        <div className="hero-text">
          <h1>Mobile Phones</h1>
          <p>Discover the latest in connectivity.</p>
          <div className="cta">
            <Link to="/products/electronics/mobile" className="btn primary">Explore Phones</Link>
            <Link to="/products/electronics/accessories" className="btn outline">Accessories</Link>
          </div>
        </div>
        <img src={iphoneImg} alt="Mobile Phones" className="hero-img" />
      </section>

      {/* LAPTOP */}
      <section className="hero hero-dark">
        <div className="hero-text">
          <h1>Laptops</h1>
          <p>Power for your everyday workflows.</p>
          <div className="cta">
            <Link to="/products/electronics/laptops" className="btn primary">Shop Laptops</Link>
            <Link to="/products" className="btn outline">All Products</Link>
          </div>
        </div>
        <img src={laptopImg} alt="Laptops" className="hero-img" />
      </section>

      {/* MACHINERY */}
      <section className="hero hero-light">
        <div className="hero-text">
          <h1>Industrial Machinery</h1>
          <p>Robust solutions for modern manufacturing.</p>
          <div className="cta">
            <Link to="/products/industrial/machinery" className="btn primary">View Machinery</Link>
            <Link to="/products/industrial/machinetools" className="btn outline">Machine Tools</Link>
          </div>
        </div>
        <img src={machineryImg} alt="Machinery" className="hero-img" />
      </section>

      {/* GRID */}
      <div className="grid">

        <div className="card">
          <h3>Workspace Design</h3>
          <p>Elevate your office setup.</p>
          <Link to="/products/furniture/office" className="btn primary small">Explore</Link>
          <img src={officeFurImg} alt="Workspace Design" />
        </div>

        <div className="card">
          <h3>IT Consulting</h3>
          <p>Expert digital transformation.</p>
          <Link to="/services/consulting/it" className="btn primary small">Learn</Link>
          <img src={itConsultingImg} alt="IT Consulting" />
        </div>

        <div className="card">
          <h3>Enterprise Solutions</h3>
          <p>Healthcare, Manufacturing & Education.</p>
          <Link to="/solutions" className="btn primary small">Explore</Link>
          <img src={solutionsImg} alt="Enterprise Solutions" />
        </div>

        <div className="card">
          <h3>Careers</h3>
          <p>Join our team of innovators.</p>
          <Link to="/careers" className="btn primary small">Apply</Link>
          <img src={careersImg} alt="Careers" />
        </div>

        <div className="card">
          <h3>Service & Support</h3>
          <p>Training & servicing solutions.</p>
          <Link to="/contact/support" className="btn primary small">Support</Link>
          <img src={supportImg} alt="Service and Support" />
        </div>

        <div className="card dark">
          <h3>Our Mission</h3>
          <p>Driving innovation globally.</p>
          <Link to="/about/mission" className="btn primary small">Read</Link>
          <img src={missionImg} alt="Our Mission" />
        </div>

      </div>

    </div>
  );
};

export default Home;