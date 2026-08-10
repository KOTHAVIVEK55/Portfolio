import React from 'react';
import './About.css';
import ScrollSection from './ScrollSection';

const About = () => {
  return (
    <section id="about" style={{ width: '100%' }}>
      <ScrollSection direction="left">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text-container glass-card">
            <p className="about-bio">
              I am a final year student at CMRCET. Engineer who builds both sides of the stack: low-latency backend systems (Node.js, Firestore, cron-based infra) and applied ML pipelines (Scikit-learn, XGBoost) trained on real production data, not toy datasets. Shipped systems handling real-time state sync, secure billing logic, and churn prediction deployed to live users.
            </p>
            <p className="about-bio">
              With a solid foundation in web technologies and predictive analytics, I aim to build high-performance backend systems integrated with intelligent machine learning capabilities. I am currently looking for opportunities where I can contribute to impactful production projects.
            </p>
          </div>
        </div>
      </ScrollSection>
    </section>
  );
};

export default About;
