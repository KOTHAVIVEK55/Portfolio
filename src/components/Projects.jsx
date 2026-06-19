import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt as ExternalLink, FaGithub as Github } from 'react-icons/fa';
import ScrollSection from './ScrollSection';

const Projects = () => {
  const projects = [
    {
      title: "AI Student Churn Prediction & Intervention (Using ML Algo)",
      tech: "Python, Machine Learning, Pandas, Scikit-Learn, Flask",
      desc: "An intelligent system that predicts student dropout rates using machine learning models and enables automated intervention strategies to improve retention.",
      github: "https://github.com/KOTHAVIVEK55/Churn-Prediction-Interention",
      live: "https://churn-prediction-intervention-vaat.vercel.app/"
    },
    {
      title: "Zuggled Dating Application",
      tech: "Node.js, Express.js, Firebase Firestore",
      desc: "Real-time social app backend featuring Cloud Function APIs, coin-based billing systems, and role-based access control.",
      github: "https://github.com/KOTHAVIVEK55",
      live: null
    },
    {
      title: "Automated Email Referral & HR Tracker",
      tech: "Make, Gmail, Google Sheets, Telegram Bot",
      desc: "Webhook-triggered automation sending personalized emails with attachments. Includes an HR reply tracker with real-time Telegram notifications at zero cost.",
      github: "https://github.com/KOTHAVIVEK55",
      live: null
    },
    {
      title: "Job Scheduled Tasks Dashboard",
      tech: "Node.js, Express.js, EJS, MongoDB",
      desc: "Internship Final Project: Cron-based automation with health monitoring and a comprehensive dashboard for task tracking.",
      github: "https://github.com/KOTHAVIVEK55",
      live: null
    },
    {
      title: "SmartCopyBot",
      tech: "JavaScript",
      desc: "Utility tool that auto-copies text, links, and images without requiring login, and supports exporting as PDF.",
      github: "https://github.com/KOTHAVIVEK55",
      live: "https://smartcopybot.tiiny.site"
    }
  ];

  return (
    <section id="projects" style={{ width: '100%' }}>
      <ScrollSection direction="right">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.desc}</p>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
};

export default Projects;
