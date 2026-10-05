import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  X, 
  FileCheck, 
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import './CertificationsSection.css';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="neu-certs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Growth</h2>
          <p className="section-subtitle">
            Formal industry qualifications certified by Google, Coursera, and TaskUs Academy. Click any certificate to preview high-resolution credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="neu-card cert-card">
              <div className="cert-card-main">
                {/* Certificate Image Frame - Clickable to open in-page preview modal */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="cert-image-frame"
                  title="Click to preview certificate"
                  aria-label={`Preview certificate for ${cert.title}`}
                >
                  {cert.image && (
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} certificate`} 
                      className="cert-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const placeholder = e.target.parentElement.querySelector('.cert-placeholder');
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                  )}
                  <div 
                    className="cert-placeholder"
                    style={{ display: cert.image ? 'none' : 'flex' }}
                  >
                    <div className="cert-placeholder-icon-well">
                      <FileCheck size={22} />
                    </div>
                    <div className="cert-placeholder-title">Certificate Image</div>
                    <div className="cert-placeholder-hint">Click to inspect credential</div>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="cert-preview-hover-overlay">
                    <span className="cert-preview-pill">
                      <Eye size={15} />
                      <span>Preview Certificate</span>
                    </span>
                  </div>
                </button>

                {/* Card Meta & Header */}
                <div className="cert-top">
                  <div className="cert-icon-well">
                    <Award size={22} />
                  </div>
                  <div className="cert-year-pill">
                    <Calendar size={12} />
                    <span>{cert.year}</span>
                  </div>
                </div>

                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">
                    <ShieldCheck size={14} className="issuer-check" />
                    <span>{cert.issuer}</span>
                  </div>
                  
                  {cert.credentialId && (
                    <div className="cert-id-tag">
                      ID: <span>{cert.credentialId}</span>
                    </div>
                  )}

                  <div className="cert-skills-group">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Direct Platform Verification Link */}
              <div className="cert-actions-group">
                <a 
                  href={cert.verifyUrl || cert.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-action-btn cert-verify-link-btn"
                  title="Redirect to platform for credential verification"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-Page Certificate Preview Lightbox Modal */}
      {selectedCert && (
        <div 
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview Modal"
        >
          <div 
            className="cert-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="cert-modal-header">
              <div className="cert-modal-header-info">
                <div className="cert-modal-icon-well">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="cert-modal-title">{selectedCert.title}</h3>
                  <p className="cert-modal-subtitle">
                    Issued by {selectedCert.issuer} • {selectedCert.year}
                  </p>
                </div>
              </div>

              <button 
                type="button" 
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Photo Display Frame */}
            <div className="cert-modal-image-stage">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.title} high resolution certificate`}
                className="cert-modal-img"
              />
            </div>

            {/* Modal Footer with Verification Link */}
            <div className="cert-modal-footer">
              <div className="cert-modal-meta">
                {selectedCert.credentialId && (
                  <span className="cert-modal-id-pill">
                    Credential ID: <strong>{selectedCert.credentialId}</strong>
                  </span>
                )}
              </div>

              <div className="cert-modal-buttons">
                <a 
                  href={selectedCert.verifyUrl || selectedCert.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-modal-verify-btn"
                  title="Verify certificate on platform"
                >
                  <span>Verify on Platform</span>
                  <ExternalLink size={16} />
                </a>

                <button 
                  type="button" 
                  className="cert-modal-done-btn"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
