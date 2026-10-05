import React from 'react';
import {
  ArrowRight,
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
              <span>OPEN FOR DATA ANALYSIS ROLES</span>
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
              <span className="hero-role-pill">Data Analysis</span>
              <span>•</span>
              <span className="hero-role-pill" style={{ color: '#4FD1C5' }}>Customer Service</span>
              <span>•</span>
              <span>Risk & Fraud</span>
            </div>

            {/* Description */}
            <p className="hero-description">
              Google Certified Data Analyst with 3+ years in high-volume Risk and Payments Operations. Expert in querying raw data into actionable insights, building interactive dashboards, and designing next-generation generative AI workflows.
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

            {/* Credly Verified Badge Link */}
            <div style={{ marginTop: '0.5rem' }}>
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

          {/* Right Visual: Sculpted Photo Card with Google AI Badge Floating Above */}
          <div className="hero-visual-wrapper">
            <div className="hero-portrait-stage">
              {/* Photo Card Frame */}
              <div className="hero-photo-card">
                <div className="hero-photo-inner">
                  <img
                    src={personalInfo.heroImage}
                    alt="Giordano Gio Tubeo - Data Analyst and AI Generative Specialist"
                    className="hero-portrait-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22 fill=%22%23161A22%22><circle cx=%22200%22 cy=%22150%22 r=%2270%22 fill=%22%236C63FF%22 opacity=%220.4%22/><path d=%22M80 360 C80 270 140 240 200 240 C260 240 320 270 320 360 Z%22 fill=%22%236C63FF%22 opacity=%220.3%22/><text x=%22200%22 y=%22210%22 text-anchor=%22middle%22 fill=%22%23FFFFFF%22 font-family=%22sans-serif%22 font-weight=%22bold%22 font-size=%2222%22>Giordano Tubeo</text></svg>';
                    }}
                  />
                  <div className="hero-photo-vignette"></div>
                </div>

                {/* Photo card bottom info pill */}
                <div className="hero-card-footer-pill">
                  <span className="pulse-indicator"></span>
                  <span>Antipolo, Rizal • Risk & Data Operations</span>
                </div>

                {/* Floating Google AI Essentials Badge - Overlapping the corner edge in the middle part of the badge */}
                <div className="hero-badge-float-container">
                  <a
                    href={personalInfo.credlyBadgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-floating-badge"
                    title="Click to verify Google AI Essentials on Credly"
                    aria-label="Google AI Essentials Credly Verified Badge"
                  >
                    <img
                      src="/images/credly-google-ai-badge.png"
                      alt="Google AI Essentials Credly Verified Badge"
                      className="hero-floating-badge-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
