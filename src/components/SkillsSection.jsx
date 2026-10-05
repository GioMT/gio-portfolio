import React, { useState } from 'react';
import { 
  ShieldAlert, 
  BarChart3, 
  Headset, 
  TrendingUp, 
  Sparkles, 
  Database, 
  Code2,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { coreSkills, skillsCategories } from '../data/portfolioData';
import './SkillsSection.css';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    'shield-alert': ShieldAlert,
    'bar-chart-3': BarChart3,
    'headset': Headset,
    'trending-up': TrendingUp,
    'sparkles': Sparkles,
    'database': Database,
    'code-2': Code2,
  };

  const filteredSkills = activeCategory === 'all'
    ? coreSkills
    : coreSkills.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="neu-skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Professional Skills & Expertise</h2>
          <p className="section-subtitle">
            Strategic operational capabilities refined across high-volume payments, proactive fraud detection, actionable data querying, and generative automation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skills-filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - No percentages or progress bars */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;

            return (
              <div key={skill.id} className="neu-card skill-feature-card">
                <div className="skill-card-content">
                  {/* Top: Icon Well and Category Badge */}
                  <div className="skill-card-header">
                    <div className="skill-icon-well">
                      <IconComponent size={24} />
                    </div>
                    <span className="skill-category-badge">
                      {skill.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="skill-body">
                    <h3 className="skill-title">{skill.name}</h3>
                    <p className="skill-description">{skill.desc}</p>
                  </div>

                  {/* Key Operational Highlight */}
                  {skill.highlight && (
                    <div className="skill-highlight-callout">
                      <CheckCircle2 size={15} className="highlight-icon" />
                      <span>{skill.highlight}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Domain Tag Pills */}
                <div className="skill-tags-wrapper">
                  {skill.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="skill-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
