export const personalInfo = {
  name: "Giordano Tubeo",
  shortName: "Gio",
  role: "Data Analyst & AI Generative Specialist",
  tagline: "A data enthusiast crafting intelligent dashboards, generative AI pipelines, and seamless user experiences.",
  email: "giordanotubeo4152@gmail.com",
  location: "Antipolo City, Philippines",
  socials: {
    linkedin: "https://www.linkedin.com/in/giordano-tubeo-182551228/",
    facebook: "https://www.facebook.com/imyohsenzxc",
    instagram: "https://www.instagram.com/imyohsen",
  },
  credlyBadgeUrl: "https://www.credly.com/badges/8c693224-0a86-4959-90ae-20e57c3b0546",
  heroImage: "/images/gio-hero-portrait.jpg",
};

export const stats = [
  { value: "100%", label: "Chat Quality Rating", sub: "Operational Excellence" },
  { value: "4+", label: "Flagship Systems", sub: "Built & Deployed" },
  { value: "85%+", label: "Fraud Mitigation", sub: "Risk Anomaly Detection" },
  { value: "3+", label: "Industry Credentials", sub: "Google & TaskUs" },
];

export const skillsCategories = [
  { id: "all", label: "All Disciplines" },
  { id: "data", label: "Data & Analytics" },
  { id: "ai", label: "AI & Generative" },
  { id: "web", label: "Web Development" },
  { id: "ops", label: "Operations & Risk" },
];

export const skills = [
  {
    name: "Customer Operations & QA",
    category: "ops",
    desc: "Fintech, E-commerce & Mobile Brand operations with high SLA benchmarks.",
    level: "100%",
    tags: ["Quality Assurance", "SLA Management", "Fintech Support", "E-commerce"],
    icon: "headset",
  },
  {
    name: "Risk & Fraud Investigation",
    category: "ops",
    desc: "Transaction anomaly detection, mitigation workflows, and fraud prevention.",
    level: "88%",
    tags: ["Fraud Investigation", "Risk Mitigation", "Compliance", "Anomaly Detection"],
    icon: "shield-alert",
  },
  {
    name: "SQL & Relational Databases",
    category: "data",
    desc: "Complex data extraction, aggregation, window functions, and query optimization.",
    level: "90%",
    tags: ["PostgreSQL", "MySQL", "Query Optimization", "Data Modeling"],
    icon: "database",
  },
  {
    name: "BI Dashboards & Visualization",
    category: "data",
    desc: "Executive KPI monitors, real-time metrics, Tableau, PowerBI, and Google Sheets.",
    level: "92%",
    tags: ["PowerBI", "Tableau", "Google Sheets", "AppScript", "Data Viz"],
    icon: "bar-chart-3",
  },
  {
    name: "Generative AI & Video Pipelines",
    category: "ai",
    desc: "State-of-the-art AI video generation, prompt engineering, and synthetic media.",
    level: "90%",
    tags: ["Veo 3.1", "Sora", "Nano Banana Pro", "Kling 3.0", "Flow"],
    icon: "sparkles",
  },
  {
    name: "Gemini API & LLM Integrations",
    category: "ai",
    desc: "Multimodal AI prompt crafting, automated categorization, and intelligent copilot workflows.",
    level: "85%",
    tags: ["Gemini API", "Prompt Engineering", "NLP", "Task Automation"],
    icon: "cpu",
  },
  {
    name: "Modern Fullstack UI (Next.js & React)",
    category: "web",
    desc: "Responsive web apps, modular component architectures, and intuitive user experiences.",
    level: "86%",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vanilla CSS"],
    icon: "code-2",
  },
  {
    name: "Backend & Cloud Services (Supabase)",
    category: "web",
    desc: "Database schema design, authentication, serverless functions, and real-time APIs.",
    level: "82%",
    tags: ["Supabase", "REST APIs", "Auth", "Cloud Database"],
    icon: "server",
  },
];

export const projects = [
  {
    id: "vyse-financial",
    title: "Vyse Financial Tracker",
    subtitle: "Modern Personal Finance Dashboard with AI Insights",
    category: "web",
    categoryLabel: "Fullstack & AI",
    image: "/images/project-vyse.jpg",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Gemini API"],
    description: "A modern personal finance dashboard featuring real-time transaction tracking, recurring bill management, loan amortization tracking, and automated AI-powered transaction categorization using the Gemini API.",
    highlights: [
      "Real-time transaction & bank sync tracking with categorized expenditures",
      "Dynamic loan amortization calculator and recurring bill forecast",
      "Integrated Gemini API for automatic smart categorization and spending insights",
      "Supabase backend for secure authentication and real-time database queries"
    ],
    liveUrl: "https://vyse-financial.vercel.app",
    githubUrl: "https://github.com/giotub/personal-finance-tracker",
  },
  {
    id: "sanctropic-resort",
    title: "Sanctropic Resort Management System",
    subtitle: "Scalable Multi-Tenant Booking & Hospitality Ecosystem",
    category: "web",
    categoryLabel: "Web Platform",
    image: "/images/project-sanctropic.jpg",
    tags: ["JavaScript", "System Architecture", "Stripe API", "Booking Engine"],
    description: "A comprehensive hospitality management ecosystem featuring real-time multi-tenant reservations, interactive villa calendar, integrated payment processing, and an administrative dashboard for operational resort control.",
    highlights: [
      "Interactive villa availability calendar with real-time slot locking",
      "Integrated secure payment processing pipeline via Stripe API",
      "Role-based administrative portal for front-desk, housekeeping, and management",
      "Occupancy analytics, Average Daily Rate (ADR) tracking, and revenue forecasting"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/giotub",
  },
  {
    id: "ai-ugc-marketing",
    title: "AI User Generated Content (UGC) Pipeline",
    subtitle: "Next-Gen Generative Video Production for Ad Campaigns",
    category: "ai",
    categoryLabel: "Generative AI",
    image: "/images/project-ugc.jpg",
    tags: ["Veo 3.1", "Flow", "AI Generative", "Sora", "Nano Banana Pro"],
    description: "High-converting AI-powered User-Generated Content (UGC) production workflow for digital marketing, designed for high-performance ad campaigns, product showcases, and viral social media storytelling.",
    highlights: [
      "Automated prompt-to-video workflow leveraging Veo 3.1 and Sora models",
      "Hyper-realistic synthetic actor generation tailored for e-commerce brands",
      "A/B creative testing pipeline generating multi-hook variations in minutes",
      "High ROAS performance metrics across social video advertising channels"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/giotub",
  },
  {
    id: "chat-ops-tracker",
    title: "Chat Operation's Tracker & QA Dashboard",
    subtitle: "Real-Time Quality & Case Escalation Monitor",
    category: "data",
    categoryLabel: "Data Systems",
    image: "/images/project-chat-ops.jpg",
    tags: ["Google Sheets", "SQL", "Data Viz", "AppScript Automation"],
    description: "An operational tracking suite featuring real-time chat quality scoring, case escalation alerts, agent SLA monitoring, and automated sync between Google Sheets and analytical SQL pipelines.",
    highlights: [
      "Automated chat quality assurance scoring algorithm with real-time feedback",
      "SQL query pipeline analyzing agent response time, volume spikes, and churn risk",
      "Custom Google AppScript triggers for automatic daily reporting to leadership",
      "Interactive resolution heatmap pinpointing peak escalation hours"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/giotub",
  },
];

export const certifications = [
  {
    id: "gae",
    title: "Google AI Essentials",
    issuer: "Google (Coursera)",
    year: "2026",
    credentialId: "G3WKKXM0UMJD",
    link: "https://www.credly.com/badges/8c693224-0a86-4959-90ae-20e57c3b0546/public_url",
    badgeImg: "/images/credly-google-ai-badge.png",
    image: "/images/cert-google-ai.png",
    skills: ["Generative AI", "Prompt Engineering", "AI Productivity", "Responsible AI"],
    featured: true,
  },
  {
    id: "dspa",
    title: "Data Science Preparatory Academy",
    issuer: "TaskUs (Academy)",
    year: "2025",
    credentialId: "ContinuousSelfImprovement-TaskUs",
    link: "https://giomt.netlify.app",
    image: "/images/cert-data-science.jpg",
    skills: ["Data Analysis", "SQL", "Statistical Modeling", "Business Intelligence"],
    featured: false,
  },
  {
    id: "tsf",
    title: "Technical Support Fundamentals",
    issuer: "Google (Coursera)",
    year: "2022",
    credentialId: "6SMGPF4J6S69",
    link: "https://coursera.org/verify/6SMGPF4J6S69",
    image: "/images/cert-tech-support.jpg",
    skills: ["Systems Support", "Troubleshooting", "Networking", "Operating Systems"],
    featured: false,
  },
];
