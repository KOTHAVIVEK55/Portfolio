import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import CodingProfiles from './components/CodingProfiles';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAgents from './components/BackgroundAgents';

function App() {
  return (
    <div className="app">
      <BackgroundAgents />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Resume />
        <CodingProfiles />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
