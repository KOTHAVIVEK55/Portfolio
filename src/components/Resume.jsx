import React from 'react';
import './Resume.css';
import { FaFilePdf as PdfIcon, FaDownload as DownloadIcon, FaExternalLinkAlt as ExternalIcon } from 'react-icons/fa';
import ScrollSection from './ScrollSection';

const Resume = () => {
  return (
    <section id="resume" style={{ width: '100%' }}>
      <ScrollSection direction="right">
        <h2 className="section-title">Resume</h2>
        <div className="resume-container">
          <div className="resume-card glass-card">
            <div className="resume-icon-wrapper">
              <PdfIcon className="resume-icon" size={40} />
            </div>
            <div className="resume-content">
              <h3>Vivek Kotha - Resume</h3>
              <p className="resume-subtitle">Backend Developer | AI / ML Enthusiast</p>
              <p className="resume-desc">
                Review my detailed professional experience, academic background, certifications, and technical skills in the official resume document.
              </p>
              <div className="resume-buttons">
                <a href="/assets/fresume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn primary">
                  <ExternalIcon size={16} /> View PDF
                </a>
                <a href="/assets/fresume.pdf" download="Vivek_Kotha_Resume.pdf" className="resume-btn secondary">
                  <DownloadIcon size={16} /> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>
    </section>
  );
};

export default Resume;
