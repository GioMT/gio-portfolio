import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Layers,
  Wrench,
  Briefcase, 
  Award, 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'intro', label: 'About', icon: User },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'skills', label: 'Skills', icon: Layers },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`neu-nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container neu-nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="neu-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <div className="neu-logo-badge">G</div>
          <div className="neu-logo-text">Gio<span>MT</span></div>
        </a>

        {/* Desktop Links */}
        <nav className="neu-nav-desktop">
          <ul className="neu-nav-links">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`neu-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="neu-nav-actions">
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="neu-nav-btn"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>

          <button 
            type="button" 
            className="neu-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`neu-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`neu-mobile-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </a>
          );
        })}
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          className="neu-mobile-cta"
        >
          <span>Get In Touch</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </header>
  );
}
