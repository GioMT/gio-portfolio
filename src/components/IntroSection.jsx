import React from 'react';
import {
  UserCheck,
  Briefcase,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowDown
} from 'lucide-react';
import { workHistory } from '../data/portfolioData';
import './IntroSection.css';

export default function IntroSection() {
  return (
    <section id="intro" className="neu-intro-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">Background & Work History</h2>
          <p className="section-subtitle">
            Bridging high-volume Risk & Fraud operations, Data Analytics and Customer Service into reliable operational solutions.
          </p>
        </div>

        {/* Single Unified Neumorphic Frame */}
        <div className="neu-card intro-unified-card">
          <div className="intro-unified-grid">
            {/* Left Side: Professional Bio & Introduction */}
            <div className="intro-unified-bio">
              <div className="intro-story-header">
                <div className="intro-avatar-well">
                  <Sparkles size={26} />
                </div>
                <div>
                  <h3 className="intro-story-name">Giordano Mariano Tubeo</h3>
                  <p className="intro-story-role">Data Analysis • Risk & Fraud • Customer Service</p>
                </div>
              </div>

              <div className="intro-paragraphs">
                <p>
                  Google Certified Data Analyst with <strong>3+ years of experience</strong> in high-volume <strong>Risk and Payments Operations</strong>.
                </p>
                <p>
                  Expert in <strong>SQL</strong>, <strong>spreadsheets</strong>, and successfully using data to drive operational efficiency by querying raw data into actionable insights, coherent data visualization and reporting.
                </p>
                <p>
                  Seeking to transition a proven track record of analysis, interactive dashboard development, and measurable results into a dedicated Data Analyst role, augmented with next-generation <strong>Generative AI tools</strong>.
                </p>
              </div>

              {/* Quick Meta Chips */}
              <div className="intro-meta-chips">

                <span className="intro-meta-chip">
                  <span>Communicative</span>
                </span>
                <span className="intro-meta-chip">
                  <span>Detail-oriented</span>
                </span>
                <span className="intro-meta-chip">
                  <span>Analytical</span>
                </span>
                <span className="intro-meta-chip">
                  <span>Resourceful</span>
                </span>
                <span className="intro-meta-chip">
                  <span>Collaborative</span>
                </span>
                <span className="intro-meta-chip">
                  <span>Adaptive</span>
                </span>
                <span className="intro-meta-chip">
                  <span>Proactive</span>
                </span>
              </div>
            </div>

            {/* Subtle Inset Divider */}
            <div className="intro-unified-divider"></div>

            {/* Right Side: Work History & Experience in Scrollable Form */}
            <div className="intro-unified-history">
              <div className="work-history-header">
                <div className="work-history-header-left">
                  <div className="work-history-icon-well">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="work-history-title">Work History & Experience</h3>
                    <p className="work-history-subtitle">
                      Scroll to explore roles & operational initiatives ({workHistory.length} entries)
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Container */}
              <div className="work-history-scroll-container">
                {workHistory.map((job) => (
                  <div key={job.id} className="job-entry-card">
                    <div className="job-entry-top">
                      <div>
                        <div className="job-company-row">
                          <h4 className="job-company">{job.company}</h4>
                          {job.current && (
                            <span className="work-status-badge job-current-badge">
                              <span className="work-status-dot"></span>
                              Active Role
                            </span>
                          )}
                        </div>
                        <div className="job-role">{job.role}</div>
                      </div>
                      <div className="job-meta">
                        <span className="job-meta-pill">
                          <Calendar size={13} />
                          <span>{job.period}</span>
                        </span>
                        <span className="job-meta-pill">
                          <MapPin size={13} />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>

                    <p className="job-summary">{job.summary}</p>

                    {/* Bullet achievements list */}
                    <div className="job-achievements-list">
                      {job.achievements.map((item, idx) => (
                        <div key={idx} className="job-achievement-item">
                          <div className="achievement-bullet-icon">
                            <CheckCircle2 size={15} />
                          </div>
                          <div className="achievement-text">{item}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="job-tags-group">
                      {job.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="job-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="work-history-scroll-hint">
                <ArrowDown size={13} />
                <span>Scroll container to view full history</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
