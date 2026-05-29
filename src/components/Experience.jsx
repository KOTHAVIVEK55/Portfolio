import React from 'react';
import './Experience.css';
import ScrollSection from './ScrollSection';

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "Evangelion Solutions",
      period: "Jan 2026 – Mar 2026",
      location: "Hyderabad",
      details: [
        "Real-time social app backend with Caller-Host user roles",
        "Cloud Function APIs for call initiation, switching, termination",
        "Firestore real-time updates for call states, user availability, session tracking"
      ]
    },
    {
      role: "Backend Intern Trainee",
      company: "SyntecxHub",
      period: "Dec 2025 – Jan 2026",
      location: "Hyderabad",
      details: [
        "Backend automation with scheduled cron jobs",
        "Stale user deletion, session cleanup, log archiving, daily summaries",
        "Health-check services for server and database monitoring"
      ]
    }
  ];

  return (
    <section id="experience" style={{ width: '100%' }}>
      <ScrollSection direction="right">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
                <ul className="exp-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
};

export default Experience;
