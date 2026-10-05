import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import { toolsList, toolsCategories } from '../data/portfolioData';
import { ToolAppIcon } from './ToolIcons';
import './ToolsSection.css';

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = activeCategory === 'all'
    ? toolsList
    : toolsList.filter(item => item.category === activeCategory);

  return (
    <section id="tools" className="neu-tools-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Tools & Platforms</span>
          </div>
          <h2 className="section-title">Technical Toolbelt</h2>
          <p className="section-subtitle">
            Software, database ecosystems, business intelligence suites, and generative AI tools utilized across daily workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="tools-filter-tabs">
          {toolsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tools-filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimal Tools Grid: Just Icon and Name */}
        <div className="tools-minimal-grid">
          {filteredTools.map((tool) => (
            <div 
              key={tool.id} 
              className="neu-card tool-minimal-card"
              title={tool.name}
            >
              <div className="tool-minimal-icon-well">
                <ToolAppIcon type={tool.iconType} size={30} />
              </div>
              <span className="tool-minimal-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
