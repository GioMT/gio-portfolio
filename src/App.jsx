import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'intro', 'skills', 'projects', 'certifications', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Sticky Neumorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section (Light Neumorphic Cool Clay) */}
        <HeroSection />

        {/* 2. Introduction Section (Cool Grey Soft UI) */}
        <IntroSection />

        {/* 3. Tools / Tech Stack Section */}
        <TechStackSection />

        {/* 4. Featured Projects Section */}
        <ProjectsSection />

        {/* 5. Certifications Section */}
        <CertificationsSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
