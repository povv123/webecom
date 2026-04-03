import React from 'react';

/* In D:\E-com\ecom\src\pages\client\Aboutus\history.jsx */
import "../../../styles/history.css";

const History = () => {
  const milestones = [
    {
      type: "Store Evolution",
      year: "2015",
      title: "The First Brick.",
      description: "We opened our flagship location with a focus on community over commerce. A place where high-tech met human touch.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      accent: "text-blue-500"
    },
    {
      type: "Product Innovation",
      year: "2019",
      title: "The Pro Era.",
      description: "Introducing the silicon that changed everything. Performance reached a peak, while the design became thinner than a pencil.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
      accent: "text-purple-500"
    },
    {
      type: "Sustainability",
      year: "2026",
      title: "Carbon Neutral.",
      description: "Every store, every product, every shipment. Our history is now written in green. 100% recycled aluminum, 0% carbon footprint.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      accent: "text-green-500"
    }
  ];

  return (
    <div className="history-container antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="history-hero">
        <div className="reveal-on-scroll">
          <h1 className="history-hero-title">
            A legacy of <br /> <span className="text-gray-400">better.</span>
          </h1>
          <p className="mission-subtext mx-auto">
            Since the beginning, we’ve been designing for the future. 
            Here is how we got here.
          </p>
          <div className="mt-12 animate-bounce-subtle flex justify-center">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE TIMELINE --- */}
      {milestones.map((item, index) => (
        <section key={index} className="timeline-section">
          <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side - Order flips on desktop for Z-pattern */}
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="timeline-img-wrap">
                <img src={item.image} alt={item.title} className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>

            {/* Content Side */}
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
              <div className={`milestone-year-label ${item.accent}`}>
                {item.year} — {item.type}
              </div>
              <h2 className="milestone-title">
                {item.title}
              </h2>
              <p className="milestone-desc mx-auto md:mx-0">
                {item.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* --- BENTO PRODUCT ARCHIVE --- */}
      <section className="archive-section">
        <div className="container-wide">
          <header className="mb-20 text-center md:text-left">
            <h2 className="section-title">The Archive.</h2>
            <p className="text-gray-500 text-xl font-medium">Every breakthrough, year by year.</p>
          </header>

          <div className="grid-container">
            <ArchiveCard year="2016" name="AirPods" icon="🎧" />
            <ArchiveCard year="2020" name="M1 Chip" icon="💾" />
            <ArchiveCard year="2024" name="Vision Pro" icon="🥽" />
            <ArchiveCard year="2026" name="Project Eter" icon="✨" isNew />
            
            {/* Large Bento Card */}
            <div className="md-col-span-2 bento-card flex-row items-center justify-between group">
                <div className="max-w-md">
                    <h3 className="text-3xl font-bold mb-4">And we're just getting started.</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        The next chapter is yours to help us write.
                    </p>
                </div>
                <div className="hidden md:block text-8xl grayscale group-hover:grayscale-0 transition-all duration-700">🚀</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

/* Sub-component for the Grid */
const ArchiveCard = ({ year, name, icon, isNew }) => (
  <div className="bento-card group relative">
    {isNew && <span className="new-badge">New</span>}
    <div className="archive-icon inline-block">{icon}</div>
    <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">
        {year}
    </div>
    <div className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
        {name}
    </div>
  </div>
);

export default History;