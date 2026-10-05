import { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-container">
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        <div className="modal-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-image" 
          />
        </div>

        {/* Modal Header */}
        <div className="modal-category">{project.categoryLabel}</div>
        <h2 id="modal-title" className="modal-title">{project.title}</h2>
        <p className="modal-subtitle">{project.subtitle}</p>

        {/* Overview */}
        <h3 className="modal-section-title">Overview & Architecture</h3>
        <p className="modal-description">{project.description}</p>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h3 className="modal-section-title">Key Engineering Highlights</h3>
            <ul className="modal-highlights-list">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="modal-highlight-item">
                  <div className="modal-highlight-bullet">
                    <CheckCircle2 size={12} />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div>
          <h3 className="modal-section-title">Technologies Used</h3>
          <div className="project-tags-list">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neu-btn neu-btn-primary"
            >
              <span>Launch Live Project</span>
              <ExternalLink size={16} />
            </a>
          )}

          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neu-btn"
            >
              <GithubIcon size={16} />
              <span>View Source Code</span>
            </a>
          )}

          <button 
            type="button" 
            onClick={onClose} 
            className="neu-btn" 
            style={{ marginLeft: 'auto' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
