import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope as Mail, FaPhone as Phone, FaGithub as Github, FaLinkedin as Linkedin, FaPaperPlane as Send, FaCheckCircle as Success, FaTimesCircle as Error } from 'react-icons/fa';
import ScrollSection from './ScrollSection';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormStatus("success");
        myForm.reset();
      })
      .catch((error) => {
        console.error(error);
        setFormStatus("error");
      });
  };

  return (
    <section id="contact" style={{ width: '100%' }}>
      <ScrollSection direction="center">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="info-items">
              <a href="mailto:kothavivek55@gmail.com" className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <span>kothavivek55@gmail.com</span>
              </a>
              <a href="tel:+918074530982" className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <span>+91-8074530982</span>
              </a>
              <a href="https://github.com/KOTHAVIVEK55" target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon"><Github size={20} /></div>
                <span>github.com/KOTHAVIVEK55</span>
              </a>
              <a href="https://www.linkedin.com/in/vivekkotha/" target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon"><Linkedin size={20} /></div>
                <span>linkedin.com/in/vivekkotha</span>
              </a>
            </div>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className="contact-form glass-card" 
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Hello Vivek..."></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>

            {formStatus === "success" && (
              <div className="form-feedback success">
                <Success size={20} /> Message sent successfully!
              </div>
            )}
            {formStatus === "error" && (
              <div className="form-feedback error">
                <Error size={20} /> Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </ScrollSection>
    </section>
  );
};

export default Contact;
