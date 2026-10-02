import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  ExternalLink, 
  Eye 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="neu-projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated collection of web applications, AI video generation pipelines, and data operational trackers designed for real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="neu-card project-card">
              <div>
                {/* 16:9 Image Frame */}
                <div 
                  className="project-image-frame" 
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-thumbnail"
                  />
                  <div className="project-category-badge">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info-body" style={{ marginTop: '1.25rem' }}>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="project-tags-list" style={{ marginBottom: '1.25rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Controls */}
                <div className="project-card-actions">
                  <button 
                    type="button" 
                    className="project-btn-details"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={15} />
                  </button>

                  <div className="project-external-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        title="View GitHub repository"
                        aria-label="GitHub repository"
                      >
                        <GithubIcon size={17} />
                      </a>
                    )}

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        title="Open Live Preview"
                        aria-label="Live preview"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
