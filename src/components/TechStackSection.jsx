import React, { useState } from 'react';
import { 
  Wrench, 
  Database, 
  BarChart3, 
  Headset, 
  ShieldAlert, 
  Sparkles, 
  Cpu, 
  Code2, 
  Server 
} from 'lucide-react';
import { skills, skillsCategories } from '../data/portfolioData';
import './TechStackSection.css';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    'database': Database,
    'bar-chart-3': BarChart3,
    'headset': Headset,
    'shield-alert': ShieldAlert,
    'sparkles': Sparkles,
    'cpu': Cpu,
    'code-2': Code2,
    'server': Server,
  };

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="neu-tech-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Tools & Expertise</span>
          </div>
          <h2 className="section-title">Technical Toolbelt</h2>
          <p className="section-subtitle">
            A battle-tested stack refined across high-volume customer systems, SQL data intelligence, automated reporting pipelines, and cutting-edge generative video AI.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tech-filter-tabs">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tech-filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;

            return (
              <div key={index} className="neu-card skill-neu-card">
                <div>
                  <div className="skill-card-top">
                    <div className="skill-icon-well">
                      <IconComponent size={26} />
                    </div>
                    <div className="skill-percentage-pill">
                      {skill.level}
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem' }}>
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                </div>

                <div>
                  {/* Recessed Neumorphic Meter */}
                  <div className="skill-meter-track" style={{ marginBottom: '1.25rem' }}>
                    <div 
                      className="skill-meter-fill"
                      style={{ width: skill.level }}
                      title={`Proficiency: ${skill.level}`}
                    ></div>
                  </div>

                  {/* Tag Pills */}
                  <div className="skill-tags-group">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="skill-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
