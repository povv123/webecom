import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

// Images
import iphoneImg from '../../assets/images/hero_iphone_family__fuz5j2v5xx6y_largetall.jpg';
import laptopImg from '../../assets/images/Lapjdtc.jpg';
import macbookImg from '../../assets/images/hero_macbook_neo__gnm3snkti4a6_largetall.jpg';
import machineryImg from '../../assets/images/dctrjcer.jpg';
import officeFurImg from '../../assets/images/airnjksdc.jpg';
import itConsultingImg from '../../assets/images/Applemac12.jpg';
import solutionsImg from '../../assets/images/Aboutus.jpg';
import careersImg from '../../assets/images/leadership.jpg';
import missionImg from '../../assets/images/mission.jpg';
import supportImg from '../../assets/images/washknol.jpg';
import historyImg from '../../assets/images/history.jpg';

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const els = homeRef.current.querySelectorAll('.reveal');

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home" ref={homeRef}>

      {/* HERO BLOCK */}
      <section className="hero hero-light">
        <div className="hero-text reveal">
          <h1>Mobile Phones</h1>
          <p>Discover the latest in connectivity.</p>
          <div className="cta">
            <Link to="/products/electronics/mobile" className="btn primary">Explore Phones</Link>
            <Link to="/products/electronics/accessories" className="btn outline">Accessories</Link>
          </div>
        </div>
        <img src={iphoneImg} alt="Mobile Phones" className="hero-img reveal reveal-img" />
      </section>

      {/* LAPTOP */}
      <section className="hero hero-dark">
        <div className="hero-text reveal">
          <h1>Laptops</h1>
          <p>Power for your everyday workflows.</p>
          <div className="cta">
            <Link to="/products/electronics/laptops" className="btn primary">Shop Laptops</Link>
            <Link to="/products" className="btn outline">All Products</Link>
          </div>
        </div>
        <img src={laptopImg} alt="Laptops" className="hero-img reveal reveal-img" />
      </section>

      {/* MACBOOK AIR */}
      <section className="hero hero-light">
        <div className="hero-text reveal">
          <h1>MacBook Air</h1>
          <p>Light. Bright. Ready for anything.</p>
          <div className="cta">
            <Link to="/products/electronics/laptops" className="btn primary">Shop MacBook Air</Link>
            <Link to="/products" className="btn outline">All Products</Link>
          </div>
        </div>
        <img src={macbookImg} alt="MacBook Air" className="hero-img hero-img-wide reveal reveal-img" />
      </section>

      {/* MACHINERY */}
      <section className="hero hero-light">
        <div className="hero-text reveal">
          <h1>Industrial Machinery</h1>
          <p>Robust solutions for modern manufacturing.</p>
          <div className="cta">
            <Link to="/products/industrial/machinery" className="btn primary">View Machinery</Link>
            <Link to="/products/industrial/machinetools" className="btn outline">Machine Tools</Link>
          </div>
        </div>
        <img src={machineryImg} alt="Machinery" className="hero-img reveal reveal-img" />
      </section>

      {/* GRID */}
      <div className="grid">

        <div className="card reveal">
          <h3>Workspace Design</h3>
          <p>Elevate your office setup.</p>
          <Link to="/products/furniture/office" className="btn primary small">Explore</Link>
          <img src={officeFurImg} alt="Workspace Design" />
        </div>

        <div className="card reveal">
          <h3>IT Consulting</h3>
          <p>Expert digital transformation.</p>
          <Link to="/services/consulting/it" className="btn primary small">Learn</Link>
          <img src={itConsultingImg} alt="IT Consulting" />
        </div>

        <div className="card reveal">
          <h3>Enterprise Solutions</h3>
          <p>Healthcare, Manufacturing & Education.</p>
          <Link to="/solutions" className="btn primary small">Explore</Link>
          <img src={solutionsImg} alt="Enterprise Solutions" />
        </div>

        <div className="card reveal">
          <h3>Careers</h3>
          <p>Join our team of innovators.</p>
          <Link to="/careers" className="btn primary small">Apply</Link>
          <img src={careersImg} alt="Careers" />
        </div>

        <div className="card reveal">
          <h3>Service & Support</h3>
          <p>Training & servicing solutions.</p>
          <Link to="/contact/support" className="btn primary small">Support</Link>
          <img src={supportImg} alt="Service and Support" />
        </div>

        <div className="card dark reveal">
          <h3>Our Mission</h3>
          <p>Driving innovation globally.</p>
          <Link to="/about/mission" className="btn primary small">Read</Link>
          <img src={missionImg} alt="Our Mission" />
        </div>

        <div className="card dark reveal">
          <h3>Our Story</h3>
          <p>From a garage to a global brand.</p>
          <Link to="/about/history" className="btn primary small">Discover</Link>
          <img src={historyImg} alt="Our Story" className="mono" />
        </div>

      </div>

    </div>
  );
};

export default Home;