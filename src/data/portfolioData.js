export const personalInfo = {
  name: "Giordano Mariano Tubeo",
  shortName: "Gio",
  role: "Data Enthusiast",
  tagline: "A data enthusiast querying raw data into actionable insights, crafting intelligent dashboards, and building generative AI pipelines.",
  email: "giordanotubeo4152@gmail.com",
  phone: "+639153719253",
  location: "Antipolo, Rizal, Philippines",
  portfolioUrl: "https://giomt.netlify.app",
  socials: {
    linkedin: "https://www.linkedin.com/in/giordano-tubeo-182551228/",
    facebook: "https://www.facebook.com/imyohsenzxc",
    instagram: "https://www.instagram.com/imyohsen",
    github: "https://github.com/giotub",
  },
  credlyBadgeUrl: "https://www.credly.com/badges/8c693224-0a86-4959-90ae-20e57c3b0546",
  heroImage: "/images/gio-hero-portrait.jpg",
};

export const workHistory = [
  {
    id: "taskus-risk-payments",
    company: "TaskUs",
    role: "Risk & Payments Operation Support",
    period: "Jan 2023 – Present",
    location: "Antipolo, Rizal · On-site",
    current: true,
    summary: "High-volume risk & payments operations handled payment inquiries, transaction pattern investigations, real-time KPI dashboards, and quality training.",
    achievements: [
      "Managed a daily average of 50 payment inquiries across multiple channels, maintained a 95% compliance rate for the Initial Response Time SLA of below 90 seconds.",
      "Mitigated fraud risk by investigating moreover 100 account/transaction patterns daily and enforcing policies that disabled an average of 15% of daily high risk accounts.",
      "Created and maintained interactive dashboards, providing auto-generated insights for daily, weekly, and monthly team performance metrics, hastening weekly AHT and case concerns report submission rate by 2 days earlier.",
      "Served as a temporary trainer, developed and led upskill training and conducted Training Needs Analysis which utilized data from quality audits to close 5 skill gaps and reduce weekly quality markdown to 5 and below."
    ],
    tags: ["Risk & Fraud", "Payment Operations", "SQL Dashboards", "Learning Experience Upskilling", "Customer Service"]
  },
  {
    id: "harte-hanks-tech-support",
    company: "Harte Hanks",
    role: "Technical Support Representative",
    period: "Apr 2022 – Sep 2022 · 6 mos",
    location: "Taguig, NCR, Philippines · Hybrid",
    current: false,
    summary: "Provided end-to-end technical diagnostics and warranty resolutions for customer hardware and device issues.",
    achievements: [
      "Troubleshoot customers' devices over the phone based on the issues they are experiencing and provide in or out-of-warranty options to provide a positive after-sales support experience."
    ],
    tags: ["Customer Service", "Technical Support", "Hardware Diagnostics", "Warranty Options", "After-Sales Care"]
  },
  {
    id: "concentrix-csr",
    company: "Concentrix",
    role: "Customer Service Representative",
    period: "Oct 2021 – Jan 2022 · 4 mos",
    location: "Quezon City, NCR, Philippines · On-site",
    current: false,
    summary: "Omnichannel customer support delivering first-contact resolution for product and order management.",
    achievements: [
      "Provided a positive experience by assisting customers via phone and chat with inquiries regarding products, orders, returns, and resolving any related issues they may have."
    ],
    tags: ["Customer Service", "Phone & Chat", "Order Tracking", "Returns Management", "Issue Resolution"]
  },
  {
    id: "alorica-csr",
    company: "Alorica",
    role: "Customer Service Representative",
    period: "May 2021 – Oct 2021 · 6 mos",
    location: "Marikina, NCR, Philippines · On-site",
    current: false,
    summary: "E-commerce customer care addressing product queries, checkout assistance, and payment processing.",
    achievements: [
      "Assisted customers with questions about products, orders, payments and more about our e-commerce product/platform."
    ],
    tags: ["Customer Service", "E-commerce Support", "Payment Queries", "Order Inquiries", "Platform Guidance"]
  },
  {
    id: "gicf-contact-center",
    company: "GICF, Inc.",
    role: "Contact Center Associate",
    period: "Nov 2020 – Feb 2021 · 4 mos",
    location: "Pasig, NCR, Philippines · On-site",
    current: false,
    summary: "Digital customer communications and revenue generation across inbound email and live chat.",
    achievements: [
      "Handled customers' order inquiries via email and chat. Additionally, upsells an average of five eligible products daily to inbound customers to increase the company's sales revenue."
    ],
    tags: ["Customer Service", "Contact Center", "Email & Chat", "Inbound Upselling", "Order Management"]
  }
];

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "ops", label: "Operations & Risk" },
  { id: "data", label: "Data & Analytics" },
  { id: "ai", label: "AI & Automation" },
];

export const coreSkills = [
  {
    id: "risk-fraud",
    name: "Risk & Fraud Investigation",
    category: "ops",
    categoryLabel: "Operations & Risk",
    desc: "Detecting transaction anomalies, investigating suspicious account activity, enforcing policy compliance, and safeguarding financial platforms against fraud exposure.",
    tags: ["Anomaly Detection", "Policy Enforcement", "Account Security", "Pattern Analysis", "Fraud Mitigation"],
    icon: "shield-alert",
    highlight: "Proactive fraud mitigation, risk assessment, and policy enforcement"
  },
  {
    id: "data-analysis",
    name: "Data Analysis & Cleansing",
    category: "data",
    categoryLabel: "Data & Analytics",
    desc: "Extracting actionable insights from raw data, performing exploratory analysis, data wrangling, cleaning anomalies, and defining meaningful performance metrics.",
    tags: ["Data Cleansing", "SQL Queries", "KPI Formulation", "Data Wrangling", "Statistical Insights"],
    icon: "bar-chart-3",
    highlight: "Actionable insights generation, data integrity, and exploratory analysis"
  },
  {
    id: "customer-service",
    name: "Customer Service",
    category: "ops",
    categoryLabel: "Operations & Risk",
    desc: "Delivering professional omnichannel customer support, resolving complex customer inquiries and disputes, and ensuring high-standard service level agreements (SLAs).",
    tags: ["Omnichannel Support", "Customer Care", "Dispute Resolution", "Quality Assurance", "SLA Adherence"],
    icon: "headset",
    highlight: "Omnichannel customer care, dispute resolution, and SLA adherence"
  },
  {
    id: "operational-analysis",
    name: "Learning Experience Upskilling",
    category: "ops",
    categoryLabel: "Operations & Risk",
    desc: "Conducting Training Needs Analysis (TNA) through quality evaluations, designing targeted learning modules, and upskilling teams to elevate operational performance.",
    tags: ["Training Needs Analysis", "Upskill Programs", "Quality Audits", "Continuous Coaching", "Process Optimization"],
    icon: "trending-up",
    highlight: "Training Needs Analysis (TNA), curriculum development, and performance coaching"
  },
  {
    id: "ai-generative",
    name: "AI Generative",
    category: "ai",
    categoryLabel: "AI & Automation",
    desc: "Building multimodal AI workflows, advanced prompt engineering, leveraging large language models (LLMs) for automation, and creating generative media pipelines.",
    tags: ["Prompt Engineering", "Large Language Models", "Multimodal AI", "Workflow Automation", "Generative Media"],
    icon: "sparkles",
    highlight: "LLM workflow integration, prompt engineering, and multimodal synthesis"
  },
  {
    id: "bi-dashboards",
    name: "Interactive BI & Dashboard Architecture",
    category: "data",
    categoryLabel: "Data & Analytics",
    desc: "Architecting intuitive business intelligence dashboards in Power BI and Google Sheets, visualizing KPIs, and automating recurring operational reporting.",
    tags: ["Power BI", "Google Sheets", "Real-Time Tracking", "Automated Insights", "KPI Dashboards"],
    icon: "database",
    highlight: "Automated reporting pipelines, KPI dashboard architecture, and data visualization"
  }
];

export const toolsCategories = [
  { id: "all", label: "All Tools" },
  { id: "bi", label: "Analytics & BI" },
  { id: "database", label: "Databases & Code" },
  { id: "ai", label: "AI & Models" },
  { id: "productivity", label: "Productivity & Media" }
];

export const toolsList = [
  {
    id: "power-bi",
    name: "Power BI",
    category: "bi",
    categoryLabel: "Business Intelligence",
    iconType: "powerbi",
    desc: "Interactive dashboards, DAX calculations, relationship modeling, and executive KPI reports.",
    tags: ["Interactive Dashboards", "DAX Formulas", "Data Modeling"]
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    category: "bi",
    categoryLabel: "Spreadsheets & Automation",
    iconType: "googlesheets",
    desc: "Complex QUERY functions, ARRAYFORMULA, real-time KPI trackers, and AppScript automation.",
    tags: ["Complex Formulas", "Real-Time Tracking", "Automation"]
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "bi",
    categoryLabel: "Spreadsheets & Auditing",
    iconType: "excel",
    desc: "Pivot tables, XLOOKUP, advanced formulas, financial modeling, and operational QA audit tracking.",
    tags: ["Pivot Tables", "XLOOKUP", "Auditing Spreadsheets"]
  },
  {
    id: "sql",
    name: "SQL",
    category: "database",
    categoryLabel: "Relational Querying",
    iconType: "sql",
    desc: "Querying raw databases into actionable insights, complex JOINs, CTEs, subqueries, and window functions.",
    tags: ["Expert Queries", "Window Functions", "CTEs", "Aggregation"]
  },
  {
    id: "python",
    name: "Python",
    category: "database",
    categoryLabel: "Programming & Data",
    iconType: "python",
    desc: "Data cleansing scripts, automation routines, API consumption, and analytical workflows.",
    tags: ["Data Manipulation", "Scripting", "API Integrations"]
  },
  {
    id: "antigravity",
    name: "Antigravity IDE",
    category: "database",
    categoryLabel: "Agentic AI Development",
    iconType: "antigravity",
    desc: "Autonomous agentic coding, workspace orchestration, browser testing, and AI-accelerated system development.",
    tags: ["Agentic IDE", "System Automation", "Fullstack Development"]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "ai",
    categoryLabel: "Conversational AI & Analysis",
    iconType: "chatgpt",
    desc: "Advanced prompting, workflow automation, analytical brainstorming, and automated report synthesis.",
    tags: ["OpenAI", "Prompt Engineering", "Analysis"]
  },
  {
    id: "claude",
    name: "Claude",
    category: "ai",
    categoryLabel: "Advanced Reasoning & LLM",
    iconType: "claude",
    desc: "Complex document analysis, nuanced data reasoning, synthetic report structuring, and code synthesis.",
    tags: ["Anthropic", "Complex Reasoning", "Data Synthesis"]
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "ai",
    categoryLabel: "Multimodal AI & Search",
    iconType: "gemini",
    desc: "Multimodal analytics, cross-referencing information, large context synthesis, and automated data drafting.",
    tags: ["Multimodal AI", "Google AI", "Context Analysis"]
  },
  {
    id: "veo",
    name: "Google Flow",
    category: "ai",
    categoryLabel: "Generative AI Video",
    iconType: "veo",
    desc: "Cutting-edge cinematic AI video synthesis, advanced motion directing, and multimodal prompting.",
    tags: ["Veo 3.1", "Cinematic Prompting", "Motion Control"]
  },
  {
    id: "github",
    name: "GitHub",
    category: "database",
    categoryLabel: "Version Control & CI/CD",
    iconType: "github",
    desc: "Source code repositories, version control branching, collaborative code review, and automated deployments.",
    tags: ["Version Control", "Git Repositories", "Collaboration"]
  },
  {
    id: "google-workspace",
    name: "Google Suite",
    category: "productivity",
    categoryLabel: "Cloud Collaboration",
    iconType: "googleworkspace",
    desc: "Integrated enterprise collaboration across Docs, Drive, Slides, Forms, and automated operational pipelines.",
    tags: ["Docs & Slides", "Drive Pipelines", "Forms Workflow"]
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "productivity",
    categoryLabel: "Cloud Platform",
    iconType: "netlify",
    desc: "Production web platform deployment, SSL security, continuous build pipelines, and custom DNS hosting.",
    tags: ["Web Hosting", "Continuous Deploy", "DNS Management"]
  },
  {
    id: "slack",
    name: "Slack",
    category: "productivity",
    categoryLabel: "Team Collaboration & Ops",
    iconType: "slack",
    desc: "Operational incident channels, asynchronous team collaboration, webhook alerts, and workflow automation.",
    tags: ["Team Messaging", "Incident Ops", "Workflow Automation"]
  },
  {
    id: "discord",
    name: "Discord",
    category: "productivity",
    categoryLabel: "Community & Real-Time Comms",
    iconType: "discord",
    desc: "Community coordination, bot integration, developer discussions, and real-time voice & channel communications.",
    tags: ["Real-Time Comms", "Community Ops", "Bot Integrations"]
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "productivity",
    categoryLabel: "Media & Post-Production",
    iconType: "capcut",
    desc: "Video editing, motion graphics, pacing, audio sync, and digital content delivery.",
    tags: ["Video Editing", "Content Pacing", "Audio Sync"]
  }
];

export const projects = [
  {
    id: "chat-tracker-report",
    title: "Chat Tracker & Report Dashboard",
    subtitle: "Real-Time Quality & KPI Operation Monitor",
    year: "2024",
    category: "data",
    categoryLabel: "Data Systems",
    image: "/images/project-chat-ops.jpg",
    tags: ["SQL", "Google Sheets", "Data Cleansing", "Visualization", "AppScript"],
    description: "Initiated and developed a chat reporting solution by writing complex spreadsheet functions and SQL queries, building a real-time visualization dashboard adopted by the entire operation to track key performance indicators, resulting in a 2-day reduction in weekly report submission time.",
    highlights: [
      "Adopted by the entire operation to track team and agent key performance indicators",
      "Resulted in a 2-day reduction in weekly report submission turnaround time",
      "Complex SQL querying pipeline extracting raw chat volumes and agent handling metrics",
      "Real-time visualization dashboard and auto-generated insights in Google Sheets"
    ],
    liveUrl: "https://giomt.netlify.app",
    githubUrl: "https://github.com/giotub",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Modern Neumorphic Web Application",
    year: "2026",
    category: "web",
    categoryLabel: "Web Platform",
    image: "/images/project-vyse.jpg",
    tags: ["React", "Vite", "JavaScript", "HTML5", "CSS3 Neumorphism", "Antigravity IDE", "GitHub", "Netlify"],
    description: "Created and deployed a personal portfolio website at giomt.netlify.app as a central platform to showcase completed data analysis, AI generated contents, and web development projects.",
    highlights: [
      "Custom tactile neumorphic UI design engineered from physical depth principles",
      "Interactive data filtering, project lightbox modals, and verified credential previews",
      "Continuous deployment pipeline via GitHub repository to Netlify cloud hosting",
      "Responsive across all screen sizes with fluid typography and micro-animations"
    ],
    liveUrl: "https://giomt.netlify.app",
    githubUrl: "https://github.com/giotub",
  },
  {
    id: "ai-ugc-marketing",
    title: "AI UGC Ads",
    subtitle: "Generative Video Production for Ad Campaigns",
    year: "2026",
    category: "ai",
    categoryLabel: "Generative AI",
    image: "/images/project-ugc.jpg",
    tags: ["Veo 3.1", "Flow", "AI Generative", "Omni 1.1", "Nano Banana Pro", "CapCut"],
    description: "High-converting AI-powered User-Generated Content (UGC) production workflow for digital marketing, designed for high-performance ad campaigns, product showcases, and viral social media storytelling.",
    highlights: [
      "Automated prompt-to-video workflow leveraging Veo 3.1 and Omni 1.1 models",
      "Hyper-realistic synthetic actor generation tailored for e-commerce brands",
      "A/B creative testing pipeline generating multi-hook variations in minutes",
      "Post-production polishing with CapCut and audio synchronization"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/giotub",
  }
];

export const certifications = [
  {
    id: "gda",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    year: "2024",
    credentialId: "GDA-COURS-839210",
    verifyUrl: "https://coursera.org/verify/placeholder-google-data-analytics",
    image: "/images/cert-data-science.jpg",
    skills: ["Data Cleansing & Visualization", "SQL", "Python", "R", "Google Suite", "BigQuery & Tableau"],
    featured: true,
  },
  {
    id: "gae",
    title: "Google AI Essentials",
    issuer: "Google (Coursera)",
    year: "2026",
    credentialId: "G3WKKXM0UMJD",
    verifyUrl: "https://coursera.org/verify/specialization/G3WKKXM0UMJD",
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
    verifyUrl: "https://giomt.netlify.app#certifications",
    image: "/images/cert-data-science.jpg",
    skills: ["Data Cleansing", "Analysis & Visualization", "Google Suite", "SQL", "R & PowerBI"],
    featured: false,
  },
  {
    id: "tsf",
    title: "Technical Support Fundamentals",
    issuer: "Google (Coursera)",
    year: "2022",
    credentialId: "6SMGPF4J6S69",
    verifyUrl: "https://coursera.org/verify/6SMGPF4J6S69",
    image: "/images/cert-tech-support.jpg",
    skills: ["Systems Support", "Troubleshooting", "Networking", "Operating Systems"],
    featured: false,
  },
];
