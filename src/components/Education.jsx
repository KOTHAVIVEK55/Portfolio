import React from 'react';
import './Education.css';
import ScrollSection from './ScrollSection';

const Education = () => {
  const eduData = [
    {
      degree: "B.Tech CSE (AI&ML)",
      institution: "CMR College of Engineering & Technology",
      score: "GPA 8.69",
      period: "2023 – Present"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      score: "95.5%",
      period: "2021 – 2023"
    },
    {
      degree: "State Board",
      institution: "Little Genius High School",
      score: "GPA 10",
      period: "April 2021"
    }
  ];

  return (
    <section id="education" style={{ width: '100%' }}>
      <ScrollSection direction="left">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {eduData.map((edu, index) => (
            <div className="edu-card glass-card" key={index}>
              <div className="edu-header">
                <h3>{edu.degree}</h3>
                <span className="edu-score">{edu.score}</span>
              </div>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-period">{edu.period}</p>
            </div>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
};

export default Education;
