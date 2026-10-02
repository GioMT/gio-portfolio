import React from 'react';
import { 
  UserCheck, 
  Layers, 
  ShieldAlert, 
  TrendingUp, 
  Film, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { stats } from '../data/portfolioData';
import './IntroSection.css';

export default function IntroSection() {
  const statIcons = [
    { icon: CheckCircle2, colorClass: '' },
    { icon: Layers, colorClass: 'teal' },
    { icon: ShieldAlert, colorClass: '' },
    { icon: TrendingUp, colorClass: 'teal' },
  ];

  return (
    <section id="intro" className="neu-intro-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">Bridging Analytics & Automation</h2>
          <p className="section-subtitle">
            From high-stakes fraud investigation to production-grade AI video workflows, my focus is turning raw data and machine intelligence into reliable everyday solutions.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="intro-layout-grid">
          {/* Left Story Card */}
          <div className="neu-card intro-story-card">
            <div>
              <div className="intro-story-header">
                <div className="intro-avatar-well">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h3 className="intro-story-name">Giordano Tubeo</h3>
                  <p className="intro-story-role">Data Analyst • AI Automation Engineer</p>
                </div>
              </div>

              <div className="intro-paragraphs" style={{ marginTop: '1.75rem' }}>
                <p>
                  I'm a passionate problem solver based in <strong>Antipolo City, Philippines</strong>. My journey spans the intersection of <strong>Customer Operations</strong>, <strong>Risk & Fraud Mitigation</strong>, and <strong>Business Intelligence</strong>.
                </p>
                <p>
                  Throughout my career supporting global fintech, e-commerce, and telecommunications brands, I observed how manual bottlenecks slow teams down. That ignited my obsession with building <strong>automated dashboards in SQL and Google Sheets</strong>, developing <strong>real-time QA trackers</strong>, and mastering next-generation <strong>Generative AI tools (Gemini API, Veo 3.1, Sora)</strong>.
                </p>
                <p>
                  Today, I blend technical analytical rigor with intuitive product design to deliver platforms that are not only statistically sound, but enjoyable and effortless to use.
                </p>
              </div>
            </div>

            {/* Concentric Depth Physics Badge */}
            <div className="intro-depth-showcase">
              <div className="intro-depth-icon-ring">
                <div className="intro-depth-icon-inner">
                  <Layers size={20} />
                </div>
              </div>
              <div className="intro-depth-text">
                <h4>Tactile Ergonomics & Systems Thinking</h4>
                <p>Crafted with physical depth principles—molded from the same surface, never flat.</p>
              </div>
            </div>
          </div>

          {/* Right Highlights & Metrics */}
          <div className="intro-stats-grid">
            {stats.map((item, idx) => {
              const IconComp = statIcons[idx].icon;
              const isTeal = statIcons[idx].colorClass === 'teal';

              return (
                <div key={idx} className="neu-card intro-stat-card">
                  <div className={`intro-stat-icon-well ${isTeal ? 'teal' : ''}`}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <div className="intro-stat-value">{item.value}</div>
                    <div className="intro-stat-label">{item.label}</div>
                    <div className="intro-stat-sub">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
