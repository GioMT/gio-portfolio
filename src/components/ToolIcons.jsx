import React from 'react';

/**
 * High-fidelity, authentic brand application icons for Tools & Platforms
 */

// Power BI Official Brand Icon (Three amber/yellow vertical bars)
export function PowerBIIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="16" width="6" height="12" rx="1.5" fill="#E67E22" />
      <rect x="13" y="10" width="6" height="18" rx="1.5" fill="#F39C12" />
      <rect x="22" y="4" width="6" height="24" rx="1.5" fill="#F1C40F" />
      <path d="M4 17.5C4 16.6716 4.67157 16 5.5 16H8.5C9.32843 16 10 16.6716 10 17.5V26.5C10 27.3284 9.32843 28 8.5 28H5.5C4.67157 28 4 27.3284 4 26.5V17.5Z" fill="#D35400" fillOpacity="0.4" />
    </svg>
  );
}

// Tableau Official Brand Icon (Multicolor Cross)
export function TableauIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Blue Cross */}
      <rect x="14.5" y="6" width="3" height="20" rx="0.5" fill="#1F4788" />
      <rect x="6" y="14.5" width="20" height="3" rx="0.5" fill="#1F4788" />
      {/* Top Left Orange */}
      <rect x="9.5" y="9.5" width="2.5" height="4.5" rx="0.4" fill="#E8762D" />
      <rect x="8.5" y="10.5" width="4.5" height="2.5" rx="0.4" fill="#E8762D" />
      {/* Top Right Red */}
      <rect x="20" y="9.5" width="2.5" height="4.5" rx="0.4" fill="#E03A3E" />
      <rect x="19" y="10.5" width="4.5" height="2.5" rx="0.4" fill="#E03A3E" />
      {/* Bottom Left Yellow */}
      <rect x="9.5" y="18" width="2.5" height="4.5" rx="0.4" fill="#F2A900" />
      <rect x="8.5" y="19" width="4.5" height="2.5" rx="0.4" fill="#F2A900" />
      {/* Bottom Right Cyan/Teal */}
      <rect x="20" y="18" width="2.5" height="4.5" rx="0.4" fill="#259B9A" />
      <rect x="19" y="19" width="4.5" height="2.5" rx="0.4" fill="#259B9A" />
      {/* Top Center Light Blue */}
      <rect x="15" y="2" width="2" height="3.5" rx="0.3" fill="#5B87B8" />
      <rect x="14.25" y="2.75" width="3.5" height="2" rx="0.3" fill="#5B87B8" />
      {/* Bottom Center Grey/Blue */}
      <rect x="15" y="26.5" width="2" height="3.5" rx="0.3" fill="#7B8898" />
      <rect x="14.25" y="27.25" width="3.5" height="2" rx="0.3" fill="#7B8898" />
      {/* Left Center Green */}
      <rect x="2" y="15" width="3.5" height="2" rx="0.3" fill="#5C9E31" />
      <rect x="2.75" y="14.25" width="2" height="3.5" rx="0.3" fill="#5C9E31" />
      {/* Right Center Purple */}
      <rect x="26.5" y="15" width="3.5" height="2" rx="0.3" fill="#9C6295" />
      <rect x="27.25" y="14.25" width="2" height="3.5" rx="0.3" fill="#9C6295" />
    </svg>
  );
}

// Google Sheets Official Brand Icon
export function GoogleSheetsIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 3H8C6.89543 3 6 3.89543 6 5V27C6 28.1046 6.89543 29 8 29H24C25.1046 29 26 28.1046 26 27V9L20 3Z" fill="#0F9D58" />
      <path d="M20 3V9H26L20 3Z" fill="#87CEAB" />
      {/* White Grid */}
      <rect x="10" y="14" width="12" height="10" rx="1" fill="#FFFFFF" />
      <path d="M10 17.5H22M10 20.5H22M14.5 14V24" stroke="#0F9D58" strokeWidth="1.2" />
    </svg>
  );
}

// Google Suite / Workspace Official Brand Icon
export function GoogleWorkspaceIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Google 4-Color Geometric "W" / Workspace emblem */}
      <path d="M6 10L10.5 17L13 13L10.5 9L6 10Z" fill="#4285F4" />
      <path d="M26 10L21.5 17L19 13L21.5 9L26 10Z" fill="#EA4335" />
      <path d="M10.5 17L16 25L19 20L13.5 12L10.5 17Z" fill="#0F9D58" />
      <path d="M21.5 17L16 25L13 20L18.5 12L21.5 17Z" fill="#FBBC04" />
      <circle cx="16" cy="11" r="3" fill="#4285F4" />
      <circle cx="23" cy="8" r="2.5" fill="#EA4335" />
      <circle cx="9" cy="8" r="2.5" fill="#34A853" />
      <circle cx="16" cy="24" r="2.5" fill="#FBBC05" />
    </svg>
  );
}

// Microsoft Excel Official Brand Icon
export function MicrosoftExcelIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="4" width="20" height="24" rx="2" fill="#107C41" />
      <rect x="13" y="9" width="11" height="14" fill="#FFFFFF" fillOpacity="0.9" rx="1" />
      <path d="M13 13.5H24M13 18.5H24M18.5 9V23" stroke="#107C41" strokeWidth="1.2" />
      {/* Raised Green Box with "X" */}
      <rect x="4" y="9" width="13" height="14" rx="2" fill="#185ABD" style={{ fill: '#0E5C2F' }} />
      <text x="10.5" y="20" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle">X</text>
    </svg>
  );
}

// SQL / Relational Database Icon
export function SQLIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#1E293B" />
      {/* Database Cylinders */}
      <ellipse cx="16" cy="10" rx="8" ry="3" fill="#38BDF8" />
      <path d="M8 10V16C8 17.6569 11.5817 19 16 19C20.4183 19 24 17.6569 24 16V10" stroke="#38BDF8" strokeWidth="2" />
      <path d="M8 16V22C8 23.6569 11.5817 25 16 25C20.4183 25 24 23.6569 24 22V16" stroke="#38BDF8" strokeWidth="2" />
      <circle cx="21" cy="21" r="3" fill="#10B981" />
    </svg>
  );
}

// Google BigQuery Official Brand Icon
export function BigQueryIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#4285F4" fillOpacity="0.12" stroke="#4285F4" strokeWidth="1.5" />
      {/* BigQuery Magnifier & Data Blocks */}
      <circle cx="15" cy="14" r="6" stroke="#4285F4" strokeWidth="2.2" />
      <line x1="19.5" y1="18.5" x2="25" y2="24" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="12" y="11" width="2" height="5" fill="#34A853" />
      <rect x="15" y="13" width="2" height="3" fill="#FBBC04" />
      <rect x="17" y="10" width="2" height="6" fill="#EA4335" />
    </svg>
  );
}

// Python Official Brand Icon
export function PythonIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.8 4C10.5 4 10.8 6.3 10.8 6.3L10.8 8.7H16V9.5H8.7C8.7 9.5 5 9.1 5 14.5C5 19.9 8.2 19.6 8.2 19.6H10.1V16.8C10.1 16.8 10 13.5 13.4 13.5H18.6C18.6 13.5 21.8 13.6 21.8 10.4V6.3C21.8 6.3 22.3 4 15.8 4ZM13.4 6.1C14 6.1 14.5 6.6 14.5 7.2C14.5 7.8 14 8.3 13.4 8.3C12.8 8.3 12.3 7.8 12.3 7.2C12.3 6.6 12.8 6.1 13.4 6.1Z" fill="#387EB8" />
      <path d="M16.2 28C21.5 28 21.2 25.7 21.2 25.7L21.2 23.3H16V22.5H23.3C23.3 22.5 27 22.9 27 17.5C27 12.1 23.8 12.4 23.8 12.4H21.9V15.2C21.9 15.2 22 18.5 18.6 18.5H13.4C13.4 18.5 10.2 18.4 10.2 21.6V25.7C10.2 25.7 9.7 28 16.2 28ZM18.6 25.9C18 25.9 17.5 25.4 17.5 24.8C17.5 24.2 18 23.7 18.6 23.7C19.2 23.7 19.7 24.2 19.7 24.8C19.7 25.4 19.2 25.9 18.6 25.9Z" fill="#FFE052" />
    </svg>
  );
}

// R Programming Language Brand Icon
export function RIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="16" cy="16" rx="14" ry="11" fill="#276DC3" fillOpacity="0.15" stroke="#276DC3" strokeWidth="2" />
      {/* Grey R Sweep */}
      <path d="M13 10H19C21.5 10 23.5 11.5 23.5 14C23.5 16.5 21.5 18 19 18H15.5V23H13V10Z" fill="#276DC3" />
      <path d="M18.5 16.5L23.5 23H20L15.5 17.5" stroke="#8492A6" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="17.5" cy="14" rx="2" ry="1.5" fill="#FFFFFF" />
    </svg>
  );
}

// GitHub Official Brand Icon
export function GitHubBrandIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#24292E" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 6C10.477 6 6 10.477 6 16C6 20.418 8.865 24.166 12.839 25.489C13.339 25.581 13.522 25.272 13.522 25.008C13.522 24.77 13.513 23.972 13.509 23.136C10.727 23.74 10.141 21.792 10.141 21.792C9.686 20.636 9.03 20.328 9.03 20.328C8.122 19.708 9.099 19.721 9.099 19.721C10.103 19.791 10.631 20.751 10.631 20.751C11.523 22.279 12.97 21.838 13.539 21.583C13.63 20.937 13.888 20.496 14.174 20.246C11.953 19.994 9.617 19.135 9.617 15.309C9.617 14.219 10.007 13.328 10.647 12.63C10.544 12.378 10.201 11.362 10.745 9.996C10.745 9.996 11.583 9.728 13.489 11.018C14.285 10.797 15.132 10.686 15.975 10.682C16.818 10.686 17.665 10.797 18.463 11.018C20.367 9.728 21.203 9.996 21.203 9.996C21.749 11.362 21.406 12.378 21.303 12.63C21.945 13.328 22.331 14.219 22.331 15.309C22.331 19.146 19.99 19.991 17.761 20.238C18.119 20.546 18.438 21.157 18.438 22.091C18.438 23.428 18.426 24.507 18.426 24.836C18.426 25.103 18.605 25.417 19.114 25.318C23.084 24.161 25.945 20.416 25.945 16C25.945 10.477 21.468 6 16 6Z" fill="#FFFFFF" />
    </svg>
  );
}

// Netlify Official Brand Icon
export function NetlifyIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#0E1E25" />
      <path d="M16 6L24.5 14.5L16 23L7.5 14.5L16 6Z" stroke="#00C7B7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 10L21 15L16 20L11 15L16 10Z" fill="#00C7B7" />
    </svg>
  );
}

// CapCut Official Brand Icon
export function CapCutIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#11141A" />
      {/* CapCut dual trapezoids */}
      <path d="M7 11L14 15L7 19V11Z" fill="#FFFFFF" />
      <path d="M25 11L18 15L25 19V11Z" fill="#FFFFFF" />
      <line x1="14" y1="15" x2="18" y2="15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Google Labs / Veo Generative AI Brand Icon
export function GoogleLabsIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#F0F4F8" />
      <path d="M16 6C16 11.5 11.5 16 6 16C11.5 16 16 20.5 16 26C16 20.5 20.5 16 26 16C20.5 16 16 11.5 16 6Z" fill="url(#sparkle-gradient)" />
      <circle cx="23" cy="9" r="2.5" fill="#4FD1C5" />
      <defs>
        <linearGradient id="sparkle-gradient" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C63FF" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#4FD1C5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Google Antigravity IDE Official Icon
export function AntigravityIcon({ size = 32, className = '' }) {
  return (
    <img 
      src="/images/antigravity-icon.png" 
      width={size} 
      height={size} 
      alt="Antigravity IDE" 
      className={className}
      style={{ objectFit: 'contain', display: 'block', borderRadius: '6px' }}
    />
  );
}

// OpenAI ChatGPT Official Brand Icon
export function ChatGPTIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#10A37F" />
      <g transform="translate(4, 4) scale(1)">
        <path 
          d="M20.5 9.2a4.8 4.8 0 0 0-.4-3.9 4.9 4.9 0 0 0-5.2-2.3 4.9 4.9 0 0 0-4.3 2.2 4.8 4.8 0 0 0-3.2 2.3 4.9 4.9 0 0 0 .6 5.7 4.8 4.8 0 0 0 .4 3.9 4.9 4.9 0 0 0 5.2 2.3 4.8 4.8 0 0 0 4.3-2.2 4.8 4.8 0 0 0 3.2-2.3 4.9 4.9 0 0 0-.6-5.7zm-7.2 10.1a3.6 3.6 0 0 1-2.3-.8l.1-.1 3.8-2.2a.6.6 0 0 0 .3-.5v-5.4l1.6.9v4.5a3.6 3.6 0 0 1-3.5 3.6zm-7.7-3.3a3.6 3.6 0 0 1-.4-2.4l.1.1 3.8 2.2a.6.6 0 0 0 .6 0l4.7-2.7v1.9l-3.9 2.2a3.6 3.6 0 0 1-4.9-1.3zm-1.1-6.7a3.6 3.6 0 0 1 1.9-1.6v4.6a.6.6 0 0 0 .3.5l4.7 2.7-1.6.9-3.9-2.2a3.6 3.6 0 0 1-1.4-4.9zm13.3 3.1l-4.7-2.7 1.6-.9 3.9 2.2a3.6 3.6 0 0 1-.5 6.5v-4.6a.6.6 0 0 0-.3-.5zm1.6-2.4l-.1-.1-3.8-2.2a.6.6 0 0 0-.6 0l-4.7 2.7v-1.9l3.9-2.2a3.6 3.6 0 0 1 5.3 3.7zm-9.3-1.9l-1.6-.9v-4.5a3.6 3.6 0 0 1 5.9-2.8l-.1.1-3.8 2.2a.6.6 0 0 0-.3.5l-.1 5.4zm.9-1.9l2.1-1.2 2.1 1.2v2.4l-2.1 1.2-2.1-1.2z" 
          fill="#FFFFFF" 
        />
      </g>
    </svg>
  );
}

// Anthropic Claude Official Brand Icon
export function ClaudeIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#D97757" />
      <g transform="translate(4, 4) scale(1)">
        <path 
          d="M17.41 19.82a.84.84 0 0 1-.77-.52l-2.02-4.88-3.08 4.67a.84.84 0 0 1-.7.38.86.86 0 0 1-.73-.42l-2.73-4.52-2.9 4.31a.84.84 0 0 1-.7.37.86.86 0 0 1-.74-.43.83.83 0 0 1 .05-.86l3.35-4.99-4.85-2.05a.84.84 0 0 1-.49-.78.84.84 0 0 1 .53-.76l5.24-1.92-2.14-5a.83.83 0 0 1 .2-.94.84.84 0 0 1 .95-.12l4.89 2.47L12.56.84A.84.84 0 0 1 13.35.3a.85.85 0 0 1 .75.54l1.67 4.96 4.65-2.45a.85.85 0 0 1 .95.12.83.83 0 0 1 .2.94l-2.22 4.97 5.25 1.95a.84.84 0 0 1 .53.76.84.84 0 0 1-.49.78l-4.93 2.08 3.39 5.05a.84.84 0 0 1 .04.86.86.86 0 0 1-.73.43.84.84 0 0 1-.7-.37l-2.96-4.41-2.69 4.45a.85.85 0 0 1-.74.42z" 
          fill="#FFFFFF" 
        />
      </g>
    </svg>
  );
}

// Google Gemini Official Brand Icon
export function GeminiIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#1B1F2A" />
      <path 
        d="M16 4C16 10.627 10.627 16 4 16C10.627 16 16 21.373 16 28C16 21.373 21.373 16 28 16C21.373 16 16 10.627 16 4Z" 
        fill="url(#gemini-spark-gradient)" 
      />
      <circle cx="23" cy="8" r="2" fill="#4FD1C5" />
      <defs>
        <linearGradient id="gemini-spark-gradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E3" />
          <stop offset="0.45" stopColor="#7976D9" />
          <stop offset="1" stopColor="#9B72CB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Discord Official Brand Icon
export function DiscordIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#5865F2" />
      <path 
        d="M23.4 8.8C21.8 8.1 20.2 7.6 18.5 7.4C18.3 7.8 18.1 8.3 17.9 8.7C16.1 8.4 14.3 8.4 12.5 8.7C12.3 8.3 12.1 7.8 11.9 7.4C10.2 7.6 8.6 8.1 7 8.8C4.5 12.5 3.8 16.1 4.1 19.6C6.1 21.1 8.1 22 10 22.6C10.5 21.9 10.9 21.2 11.3 20.4C10.6 20.1 10 19.8 9.4 19.3C9.6 19.2 9.7 19.1 9.9 18.9C13.8 20.7 18 20.7 21.9 18.9C22.1 19.1 22.2 19.2 22.4 19.3C21.8 19.8 21.2 20.1 20.5 20.4C20.9 21.2 21.3 21.9 21.8 22.6C23.7 22 25.7 21.1 27.7 19.6C28.1 15.5 27 12 23.4 8.8ZM11.6 16.9C10.4 16.9 9.5 15.8 9.5 14.5C9.5 13.2 10.4 12.1 11.6 12.1C12.8 12.1 13.7 13.2 13.7 14.5C13.7 15.8 12.8 16.9 11.6 16.9ZM18.8 16.9C17.6 16.9 16.7 15.8 16.7 14.5C16.7 13.2 17.6 12.1 18.8 12.1C20 12.1 20.9 13.2 20.9 14.5C20.9 15.8 20 16.9 18.8 16.9Z" 
        fill="#FFFFFF" 
      />
    </svg>
  );
}

// Slack Official Brand Icon
export function SlackIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#FFFFFF" />
      <g transform="translate(4, 4) scale(1)">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
      </g>
    </svg>
  );
}

/**
 * Universal Brand App Icon Resolver
 */
export function ToolAppIcon({ type, size = 32, className = '' }) {
  switch (type) {
    case 'powerbi':
      return <PowerBIIcon size={size} className={className} />;
    case 'tableau':
      return <TableauIcon size={size} className={className} />;
    case 'googlesheets':
      return <GoogleSheetsIcon size={size} className={className} />;
    case 'googleworkspace':
      return <GoogleWorkspaceIcon size={size} className={className} />;
    case 'excel':
      return <MicrosoftExcelIcon size={size} className={className} />;
    case 'sql':
      return <SQLIcon size={size} className={className} />;
    case 'python':
      return <PythonIcon size={size} className={className} />;
    case 'r':
      return <RIcon size={size} className={className} />;
    case 'github':
      return <GitHubBrandIcon size={size} className={className} />;
    case 'netlify':
      return <NetlifyIcon size={size} className={className} />;
    case 'antigravity':
      return <AntigravityIcon size={size} className={className} />;
    case 'chatgpt':
      return <ChatGPTIcon size={size} className={className} />;
    case 'claude':
      return <ClaudeIcon size={size} className={className} />;
    case 'gemini':
      return <GeminiIcon size={size} className={className} />;
    case 'discord':
      return <DiscordIcon size={size} className={className} />;
    case 'slack':
      return <SlackIcon size={size} className={className} />;
    case 'capcut':
      return <CapCutIcon size={size} className={className} />;
    case 'googlelabs':
    case 'veo':
      return <GoogleLabsIcon size={size} className={className} />;
    default:
      return <SQLIcon size={size} className={className} />;
  }
}
