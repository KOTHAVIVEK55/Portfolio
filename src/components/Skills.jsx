import React from 'react';
import './Skills.css';
import ScrollSection from './ScrollSection';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript (ES6+)"]
    },
    {
      title: "Frameworks",
      skills: ["Node.js", "Express.js", "React", "EJS", "HTML", "CSS"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Firebase Firestore", "SQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "Postman", "VS Code", "GitHub", "Make (Integromat)"]
    },
    {
      title: "Data Science and Machine Learning",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Classification and Regression Algorithms"]
    }
  ];

  return (
    <section id="skills" style={{ width: '100%' }}>
      <ScrollSection direction="left">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category glass-card" key={index}>
              <h3>{category.title}</h3>
              <div className="pill-container">
                {category.skills.map((skill, idx) => (
                  <span className="skill-pill" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
};

export default Skills;
