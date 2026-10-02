import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  ShieldCheck, 
  Send, 
  ExternalLink,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './HeroSection.css';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="neu-hero-section">
      {/* Ambient background glows */}
      <div className="hero-ambient-orb hero-ambient-orb-1"></div>
      <div className="hero-ambient-orb hero-ambient-orb-2"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Text & CTAs */}
          <div className="hero-text-content">
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>OPEN FOR DATA & AI COLLABORATIONS</span>
            </div>

            {/* Main Greeting & Title */}
            <div>
              <p className="hero-title-greeting">Hello, I'm</p>
              <h1 className="hero-title-main">
                Giordano <span className="hero-title-gradient">Tubeo</span>
              </h1>
            </div>

            {/* Role & Core Competencies */}
            <div className="hero-role-badge">
              <span className="hero-role-pill">Data Analyst</span>
              <span>•</span>
              <span className="hero-role-pill" style={{ color: '#4FD1C5' }}>AI Generative Specialist</span>
              <span>•</span>
              <span>Operations & Risk</span>
            </div>

            {/* Description */}
            <p className="hero-description">
              A data enthusiast crafting intelligent analytical dashboards, generative AI media pipelines (Veo 3.1 & Sora), and high-performance automated systems that simplify complex operational workflows.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                onClick={() => scrollTo('projects')} 
                className="hero-btn-primary"
              >
                <span>Featured Projects</span>
                <ArrowRight size={18} />
              </button>

              <button 
                type="button" 
                onClick={() => scrollTo('contact')} 
                className="hero-btn-secondary"
              >
                <Send size={16} />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Credly Verified Badge */}
            <div style={{ marginTop: '0.75rem' }}>
              <a 
                href={personalInfo.credlyBadgeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-credly-badge"
                title="Verify Google AI Essentials on Credly"
              >
                <Award size={20} color="#6C63FF" />
                <div className="credly-text">
                  Google Certified: <span>Google AI Essentials (2026)</span>
                </div>
                <ExternalLink size={14} color="#94A3B8" />
              </a>
            </div>
          </div>

          {/* Right Visual: Dual-Composition Card matching user mockup */}
          <div className="hero-visual-wrapper">
            <div className="hero-dual-card">
              {/* Left Pillar: Half-body photo in deep inset well */}
              <div className="hero-photo-pillar">
                <img 
                  src={personalInfo.heroImage} 
                  alt="Giordano Gio Tubeo - Data Analyst and AI Generative Specialist" 
                  className="hero-pillar-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22 fill=%22%23161A22%22><circle cx=%22200%22 cy=%22150%22 r=%2270%22 fill=%22%236C63FF%22 opacity=%220.4%22/><path d=%22M80 360 C80 270 140 240 200 240 C260 240 320 270 320 360 Z%22 fill=%22%236C63FF%22 opacity=%220.3%22/><text x=%22200%22 y=%22210%22 text-anchor=%22middle%22 fill=%22%23FFFFFF%22 font-family=%22sans-serif%22 font-weight=%22bold%22 font-size=%2222%22>Giordano Tubeo</text></svg>';
                  }}
                />
              </div>

              {/* Right Pane: Clean Credly Badge Overlaid & Rescaled */}
              <div className="hero-badge-overlay-pane">
                <a 
                  href="https://www.credly.com/badges/8c693224-0a86-4959-90ae-20e57c3b0546/public_url"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero-badge-overlay-link animate-float"
                  title="Verify Google AI Essentials on Credly"
                  aria-label="Google AI Essentials Credly Verified Badge"
                >
                  <img 
                    src="/images/credly-google-ai-badge.png" 
                    alt="Google AI Essentials Credly Verified Badge"
                    className="hero-badge-overlay-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
