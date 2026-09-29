import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import SkillsStack from './components/SkillsStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BotanicalBranch from './components/BotanicalBranch';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'clip' }}>
      {/* Dynamic Ambient Background Blobs */}
      <div className="blob-bg blob-1" />
      <div className="blob-bg blob-2" />
      <div className="blob-bg blob-3" />

      {/* Subtle Botanical Leaf & Branch Line-Art Animation */}
      <BotanicalBranch />

      {/* Main Glassmorphic Navigation */}
      <Navbar />

      {/* Content Sections */}
      <main>
        <Hero />
        <About />
        <Qualifications />
        <SkillsStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
