import React from 'react';
import '../../../styles/solution/education.css'; // Adjust path as needed

const Education = () => {
  const tracks = [
    { 
      title: "Grades 1 to 12", 
      desc: "Interactive digital tools and curriculum hardware designed to support Cambodian students from primary through high school.",
      linkText: "Explore K-12 Solutions"
    },
    { 
      title: "English Programs", 
      desc: "Immersive language learning platforms and digital labs tailored for ESL students, language centers, and international schools.",
      linkText: "Explore English Solutions"
    },
    { 
      title: "University of Law", 
      desc: "Advanced research terminals and secure, high-speed infrastructure trusted by institutions like the Royal University of Law.",
      linkText: "Explore Higher Ed"
    }
  ];

  return (
    <div className="educa">
      <header className="educa-hero">
        <p className="educa-eyebrow">Eter for Education</p>
        <h1>Imagine a world <br/><span>where every student excels.</span></h1>
        <p className="educa-hero-sub">
          Tools built to inspire the thinkers, leaders, and creators of tomorrow across Cambodia.
        </p>
      </header>

      <section className="educa-grid">
        {tracks.map((t, i) => (
          <div key={i} className="educa-card">
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <button className="educa-btn-link">
              {t.linkText} <span className="educa-chevron">&gt;</span>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Education;