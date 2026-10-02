import React from 'react';
import { 
  Award, 
  ExternalLink, 
  FileCheck,
  CheckCircle2,
  Image as ImageIcon 
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import './CertificationsSection.css';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="neu-certs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Growth</h2>
          <p className="section-subtitle">
            Continuous industry upskilling verified by Google and TaskUs Academy in AI fundamentals, data science methodologies, and IT systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="neu-card cert-card">
              <div>
                {/* Certificate Image Frame / Clickable to preview high-res */}
                <a 
                  href={cert.image}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-image-frame"
                  title="Click to view full certificate"
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
                    <div className="cert-placeholder-title">Certificate Image Placeholder</div>
                    <div className="cert-placeholder-hint">
                      Ready for upload ({cert.image})
                    </div>
                  </div>
                </a>

                <div className="cert-top">
                  <div className="cert-icon-well">
                    <Award size={22} />
                  </div>
                  <div className="cert-year-pill">{cert.year}</div>
                </div>

                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  
                  <div className="cert-skills-group">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-footer-link"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
