import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2
} from 'lucide-react';
import { LinkedinIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate dispatch with tactile feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Optional mailto link launch
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Gio,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      window.location.href = mailtoLink;
    }, 900);
  };

  return (
    <section id="contact" className="neu-contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Connect</span>
          </div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind, need a customized analytics dashboard, or want to explore generative AI automation? I'd love to hear from you.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left: Contact Channels */}
          <div className="neu-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Contact Channels
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                Feel free to email directly, connect on professional networks, or send a message through the form.
              </p>

              <div className="contact-channels-list" style={{ marginTop: '2rem' }}>
                {/* Email */}
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon-well">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Direct Email</div>
                    <div className="contact-channel-value">{personalInfo.email}</div>
                  </div>
                </a>

                {/* Location */}
                <a 
                  href="https://www.google.com/maps/place/Antipolo,+Rizal,+Philippines/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon-well">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Base Location</div>
                    <div className="contact-channel-value">{personalInfo.location}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon-well">
                    <LinkedinIcon size={22} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Professional Network</div>
                    <div className="contact-channel-value">linkedin.com/in/giordano-tubeo</div>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href={personalInfo.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon-well">
                    <FacebookIcon size={22} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Facebook</div>
                    <div className="contact-channel-value">facebook.com/imyohsenzxc</div>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href={personalInfo.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon-well">
                    <InstagramIcon size={22} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Instagram</div>
                    <div className="contact-channel-value">instagram.com/imyohsen</div>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ color: 'var(--text-subtle)', fontSize: '0.8125rem' }}>
              ✦ Typically responds within 24 hours.
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="neu-card contact-form-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '2rem' }}>
              Fill in your details below and your email client will launch with a pre-formatted message.
            </p>

            {isSubmitted ? (
              <div className="contact-success-alert">
                <CheckCircle2 size={24} />
                <div>
                  <div>Thank you! Your message draft was prepared.</div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-muted)', marginTop: '2px' }}>
                    If your email app didn't open automatically, reach out to {personalInfo.email}.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cName" className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      id="cName" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="neu-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cEmail" className="form-label">Your Email</label>
                    <input 
                      type="email" 
                      id="cEmail" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      required
                      className="neu-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cSubject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="cSubject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Dashboard Collaboration"
                    className="neu-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cMessage" className="form-label">Message</label>
                  <textarea 
                    id="cMessage" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your goals, timelines, or requirements..."
                    required
                    className="neu-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="neu-btn neu-btn-primary contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Preparing Draft...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
