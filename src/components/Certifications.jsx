import React from 'react';
import './Certifications.css';
import { FaAward as Award, FaFileContract as FileCheck } from 'react-icons/fa';
import ScrollSection from './ScrollSection';

const Certifications = () => {
  const certifications = [
    {
      title: "Evangelion Intern Completion (Backend Intern)",
      issuer: "Evangelion Solutions",
      link: "/assets/Final intern complete.pdf"
    },
    {
      title: "Letter of Recommendation",
      issuer: "Evangelion Solutions",
      link: "/assets/lor.pdf"
    },
    {
      title: "SyntecxHub Backend Trainee Completion",
      issuer: "SyntecxHub",
      link: "/assets/syntecxhub(completion).pdf"
    },
    {
      title: "Advanced AI Certificate",
      issuer: "Hexart.in",
      link: "/assets/hexart.advanced.pdf"
    },
    {
      title: "Cisco JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      link: "/assets/cisco_badge_js.pdf"
    }
  ];

  return (
    <section id="certifications" style={{ width: '100%' }}>
      <ScrollSection direction="right">
        <h2 className="section-title">Certifications & Awards</h2>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card glass-card" key={index}>
              <div className="cert-icon-wrapper">
                <Award className="cert-icon" />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <div className="cert-action">
                <FileCheck size={20} />
              </div>
            </a>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
};

export default Certifications;
