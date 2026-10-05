import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import SkillsSection from './components/SkillsSection';
import ToolsSection from './components/ToolsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'intro', 'tools', 'skills', 'projects', 'certifications', 'contact'];

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
        {/* 1. Hero Section (Light Neumorphic Cool Clay with Floating AI Essentials Badge) */}
        <HeroSection />

        {/* 2. Introduction & Work History Frame */}
        <IntroSection />

        {/* 3. Technical Toolbelt / Tools & Platforms (with Official App Brand Icons) */}
        <ToolsSection />

        {/* 4. Core Competencies & Skills (No Percentages) */}
        <SkillsSection />

        {/* 5. Featured Projects Section */}
        <ProjectsSection />

        {/* 6. Certifications Section (In-Page Modal Preview & Verification Link) */}
        <CertificationsSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
