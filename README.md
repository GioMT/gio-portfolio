# Giordano "Gio" Tubeo — Neumorphic (Soft UI) Portfolio

A modern, tactile, and highly responsive portfolio built with **React + Vite** and a centralized **Vanilla CSS Neumorphism (Soft UI)** design token system.

---

## 🎨 Design System Highlights
- **Base Color Palette**: `#E0E5EC` Cool Clay surface, `#3D4852` primary text (WCAG AAA compliant 7.5:1), `#6B7280` secondary text (WCAG AA compliant 4.6:1), and `#6C63FF` soft violet interactive accent.
- **Physical Depth**: Dual-opposing RGBA shadows (smooth light source top-left, cool clay shadow bottom-right).
- **Hyper-Rounded Radii**: `32px` cards, `16px` buttons, `12px` or `9999px` inner wells and tags.
- **Micro-Interactions**: Physical press-down on click (`:active`), floating ambient badges, and recessed meter gauges.

---

## 📁 Project Architecture & Clean Organization

```
portfolio/
├── public/
│   └── images/
│       ├── gio-hero-portrait.jpg        # Gio's half-body hero portrait
│       ├── credly-google-ai-badge.png   # Google AI Essentials Credly verified badge
│       ├── cert-google-ai.png           # Google AI Essentials certificate image
│       ├── cert-data-science.jpg        # TaskUs Data Science Preparatory Academy certificate image
│       ├── cert-tech-support.jpg        # Google Technical Support Fundamentals certificate image
│       ├── project-vyse.jpg             # Vyse Financial preview
│       ├── project-sanctropic.jpg       # Sanctropic Resort preview
│       ├── project-ugc.jpg              # AI UGC Marketing preview
│       └── project-chat-ops.jpg         # Chat Ops Tracker preview
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css           # Frosted clay sticky navigation & mobile drawer
│   │   ├── HeroSection.jsx / .css      # Neumorphic dual-card hero (photo pillar + Credly badge)
│   │   ├── IntroSection.jsx / .css      # Biography, concentric depth, and 4 highlight metric cards
│   │   ├── TechStackSection.jsx / .css  # Filterable skill cards with recessed gradient meter bars
│   │   ├── ProjectsSection.jsx / .css   # 16:9 project cards with case study modal triggers
│   │   ├── ProjectModal.jsx / .css      # Interactive full-screen case study modal
│   │   ├── CertificationsSection.jsx / .css # Verified credentials with high-res preview links
│   │   ├── ContactSection.jsx / .css    # Inset form inputs, direct channels & email launcher
│   │   ├── Footer.jsx / .css            # Sculpted footer with smooth scroll-to-top button
│   │   └── SocialIcons.jsx              # Reusable crisp SVG brand icons (GitHub, LinkedIn, etc.)
│   ├── data/
│   │   └── portfolioData.js             # Central store for bio, skills, projects & credentials
│   ├── App.jsx                          # Main app component with active section scroll spy
│   ├── index.css                        # Core Neumorphic design tokens, physics, and typography
│   └── main.jsx                         # React 19 root entry
├── index.html                           # SEO meta tags, Google Fonts (Plus Jakarta Sans & DM Sans)
├── package.json
└── vite.config.js
```

---

## 🖼️ How to Upload Your Certificates & Photo

### 1. Certificate Images
Place your certificate images in `public/images/`:
- `cert-google-ai.jpg` (or `.png`)
- `cert-data-science.jpg` (or `.png`)
- `cert-tech-support.jpg` (or `.png`)

The cards in `CertificationsSection.jsx` will immediately display them with automatic fallback placeholders if an image is missing.

### 2. Half-Body Hero Portrait
Replace `public/images/gio-hero-portrait.jpg` with your own photo at any time.

---

## 🚀 Running the Project Locally

```bash
# 1. Navigate to directory
cd /Users/giotub/.gemini/antigravity-ide/scratch/portfolio

# 2. Start development server
npm run dev

# 3. Production build
npm run build
```

Dev server runs locally at: `http://localhost:5173/`
