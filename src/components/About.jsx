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
              I am a passionate Backend Developer and Data Science/ML enthusiast in my final year of B.Tech based in Hyderabad.
              I specialize in building scalable, real-time backend systems, constructing robust cloud-based APIs, and automating workflows.
              I have a strong expertise in applying Machine Learning algorithms, specifically Classification and Regression models, to solve complex real-world prediction tasks and drive data-driven decision-making.
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
