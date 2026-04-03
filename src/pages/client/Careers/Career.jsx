import React, { useState } from 'react';
import "../../../styles/careers/careers.css";

const Careers = () => {
  const [filter, setFilter] = useState('all');

  const jobs = [
    { id: 1, title: 'Product Designer', team: 'Design', location: 'Remote / London', type: 'Full-time' },
    { id: 2, title: 'Frontend Engineer (React)', team: 'Engineering', location: 'San Francisco', type: 'Full-time' },
    { id: 3, title: 'Software Engineering Intern', team: 'Engineering', location: 'Austin, TX', type: 'Internship' },
    { id: 4, title: 'Operations Specialist', team: 'Supply Chain', location: 'Singapore', type: 'Full-time' },
    { id: 5, title: 'UX Research Intern', team: 'Design', location: 'Remote', type: 'Internship' },
    { id: 6, title: 'Hardware Engineer', team: 'Engineering', location: 'Cupertino', type: 'Full-time' },
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(j => j.type.toLowerCase().includes(filter));

  return (
    <div className="apple-about-page antialiased font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="mission-hero bg-white">
        <div className="container-center">
          <h2 className="mission-label">Work at Eter</h2>
          <h1 className="apple-text-gradient">
            Help us build the <br /> 
            <span className="text-gray-400 italic">future of tools.</span>
          </h1>
          <p className="mission-subtext">
            Whether you’re a seasoned expert or a student looking for your first big challenge, 
            there’s a place for you here.
          </p>
        </div>
      </section>

      {/* --- JOB BOARD SECTION --- */}
      <section className="job-board-section py-20 bg-gray-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-6">
            <div>
              <h2 className="section-title text-left mb-2">Open Roles</h2>
              <p className="text-gray-500">Showing {filteredJobs.length} opportunities</p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex gap-4 mt-6 md:mt-0">
              {['all', 'full-time', 'internship'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    filter === t ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="job-grid px-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-row group border-b border-gray-200 py-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white hover:px-4 transition-all duration-300 rounded-xl">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">{job.team}</span>
                  <h3 className="text-2xl font-medium text-black mt-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <p className="text-gray-500 mt-1">{job.location} — {job.type}</p>
                </div>
                <button className="mt-4 md:mt-0 text-sm font-semibold text-black border border-black px-6 py-2 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERNSHIP SPECIFIC CONTENT --- */}
      <section className="internship-info py-20 bg-white">
        <div className="container-center text-center">
          <div className="inline-block p-4 bg-blue-50 rounded-2xl mb-6">
            <span className="text-3xl">🎓</span>
          </div>
          <h2 className="text-4xl font-semibold mb-6">University Programs</h2>
          <p className="mission-subtext mx-auto max-w-2xl">
            Our internship program is designed to give students hands-on experience on 
            shipping products. You won't just be watching; you'll be building.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <h4 className="font-bold">Mentorship</h4>
              <p className="text-gray-500 text-sm mt-2">Paired with a senior lead to guide your growth.</p>
            </div>
            <div className="p-6">
              <h4 className="font-bold">Impact</h4>
              <p className="text-gray-500 text-sm mt-2">Work on features that reach millions of users.</p>
            </div>
            <div className="p-6">
              <h4 className="font-bold">Community</h4>
              <p className="text-gray-500 text-sm mt-2">Events and workshops with fellow interns.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;