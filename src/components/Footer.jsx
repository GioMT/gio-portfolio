import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Coffee } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="neu-footer">
      <div className="container footer-content">
        <div className="footer-logo-text">
          GIORDANO <span>TUBEO</span>
        </div>

        <p className="footer-crafted">
          Crafted with{' '}
          <Heart size={16} className="footer-icon-heart" fill="#EF4444" />
          {' '}and lots of{' '}
          <Coffee size={16} className="footer-icon-coffee" />
          {' '}in Antipolo City, Philippines.
        </p>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Giordano Tubeo. Neumorphic (Soft UI) Experience. All rights reserved.
        </p>
      </div>

      {/* Floating Scroll to Top */}
      <button 
        type="button" 
        onClick={scrollToTop} 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
