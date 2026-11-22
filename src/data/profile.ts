export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  highlights: string[];
  tags: string[];
}

export interface ResearchItem {
  title: string;
  org: string;
  period: string;
  advisor?: string;
  summary: string;
  tags: string[];
}

export interface SelfHostedItem {
  name: string;
  category: string;
  description: string;
  status: "Active" | "Planned";
}

export const PROFILE = {
  name: "Arnav Gupta",
  handle: "arnavgupta",
  headline: "Software Engineer @ Google (Core Search & AIM) · Fractional CTO · Systems Security",
  location: "Bangalore, India",
  statusBadge: "At NeurIPS — Open for 15-min coffee chats",
  bio: "Software Engineer at Google (Core Search & AIM Engineering) and Fractional/Silent CTO focused on shipping production-grade AI systems, core search ranking at scale, high-reliability infrastructure recovery (4-9s SLA), and applied systems security.",
  email: "arnav.gupta.2003@gmail.com",
  // Replace these with your exact URLs before deploying
  socials: {
    linkedin: "https://www.linkedin.com/in/arnavgupta-/",
    github: "https://github.com/arnavgupta2003",
    x: "https://x.com/arnavgupta",
  },
  // Live n8n webhook created via MCP (Handle portfolio contact submission)
  contactWebhookUrl: "https://n8n.bizad.in/webhook/portfolio-contact",
  // Replace with your self-hosted or cloud Cal.com 15-min coffee link
  calComUrl: "https://cal.com/arnavgupta/15min",
  // Optional self-hosted Umami analytics (leave empty until deployed)
  umami: {
    scriptUrl: "",
    websiteId: "",
  },
  kpis: [
    {
      label: "Current Role",
      value: "Google SWE",
      detail: "Core Search & AIM Engineering",
    },
    {
      label: "Infra Reliability",
      value: "4-9s SLA",
      detail: "Deep architecture & pipeline recovery",
    },
    {
      label: "Security Footprint",
      value: "800+ Trained",
      detail: "Cyber consulting & IIT Guwahati CTFs",
    },
    {
      label: "Research Lab",
      value: "IIITD NetSec",
      detail: "Side-channels & VPN traffic analysis",
    },
  ],
  experience: [
    {
      company: "Google",
      role: "Software Engineer (SWE) – Core Search & AIM Engineering",
      period: "2025 – Present",
      location: "Bangalore, India",
      badge: "Full-Time",
      highlights: [
        "Architecting and scaling LLM-powered features and ranking systems inside Google Search pipelines to drive algorithmic relevance at global scale.",
        "Leading end-to-end full-stack feature development, technical optimizations, and scalable AI infrastructure.",
        "SWE Intern (May 2024 – Aug 2024): Improved local categorical rankings for mixed-language queries by closing classifier score gaps and integrating an NLP query classifier into the local web triggering pipeline.",
      ],
      tags: ["LLMs", "Search Ranking", "NLP", "Distributed Systems", "AI Infra"],
    },
    {
      company: "Bizad",
      role: "Silent Chief Technology Officer (CTO)",
      period: "2023 – Present",
      location: "Remote",
      badge: "Leadership",
      highlights: [
        "Formulating stealth-mode product roadmaps, foundational architecture, and scalable infrastructure for rapid deployment and agile market delivery.",
      ],
      tags: ["System Architecture", "Product Strategy", "Cloud Infra"],
    },
    {
      company: "AccioJob",
      role: "Lead Consultant – Cybersecurity",
      period: "Apr 2024 – Dec 2025",
      location: "New Delhi, India",
      badge: "Advisory",
      highlights: [
        "Directed security consulting operations, risk mitigation frameworks, and technical training across 800+ individuals.",
        "Designed production-grade Capture The Flag (CTF) challenges and delivered elite cybersecurity courses for IIT Guwahati professors.",
      ],
      tags: ["Cybersecurity", "CTF Design", "Risk Frameworks", "Training"],
    },
    {
      company: "ScrapUncle",
      role: "Chief Technology Officer (CTO)",
      period: "Mar 2024 – Dec 2024",
      location: "New Delhi, India",
      badge: "Executive",
      highlights: [
        "Re-engineered an unstable, bleeding-edge infrastructure stack to achieve resilient SLA stability.",
        "Eliminated severe architectural and database pipeline bottlenecks causing raw data ingress loss, introducing fault-tolerant recovery loops.",
      ],
      tags: ["Infra Recovery", "Database Pipelines", "Fault Tolerance", "SRE"],
    },
  ] as ExperienceItem[],
  research: [
    {
      title: "Android Side-Channel Malware & Input Reconstruction",
      org: "Networking & Security Lab, IIITD",
      period: "Jun 2023 – 2025",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Investigated kernel-level side-channel vulnerabilities for end-to-end data extraction, fingerprinted kernel behavior, and applied ML models for high-precision keyboard snooping and input reconstruction.",
      tags: ["Android Internals", "Side-Channels", "Applied ML", "Systems Security"],
    },
    {
      title: "VPN Traffic Identification & ISP-Adversary Evasion",
      org: "Networking & Security Lab, IIITD",
      period: "Jun 2023 – 2025",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Evaluated VPN protocol fingerprinting under ISP-level adversary models and engineered novel evasion techniques using packet-size manipulation, SNI poisoning, and MTU tuning.",
      tags: ["Network Security", "VPN Protocols", "Traffic Analysis", "Privacy"],
    },
  ] as ResearchItem[],
  education: {
    institution: "Indraprastha Institute of Information Technology (IIITD)",
    degree: "B.Tech in Computer Science and Applied Mathematics (CSAM)",
    period: "2021 – 2025",
    cgpa: "8.13",
    coursework: [
      "Networks & System Security",
      "Distributed Systems",
      "Parallel Runtimes for Modern Processors",
      "Theory of Computation",
      "Algorithmic Techniques for Robot Planning",
      "Optimization Mathematics",
    ],
  },
  selfHosted: [
    {
      name: "n8n",
      category: "Automation",
      description: "Powers this site's contact webhook, Slack triage, and personal workflow automation.",
      status: "Active",
    },
    {
      name: "Posta",
      category: "Email Infra",
      description: "Self-hosted transactional email delivery API backed by custom domain SMTP.",
      status: "Active",
    },
    {
      name: "Cal.com",
      category: "Scheduling",
      description: "15-minute coffee & NeurIPS meeting scheduler.",
      status: "Planned",
    },
    {
      name: "Umami",
      category: "Analytics",
      description: "Cookie-free, privacy-first page & referrer analytics for this dashboard.",
      status: "Active",
    },
    {
      name: "Immich",
      category: "Photos",
      description: "Private self-hosted photo & video backup with on-prem ML indexing.",
      status: "Active",
    },
    {
      name: "Jellyfin",
      category: "Media",
      description: "Home media server streaming across local devices.",
      status: "Active",
    },
  ] as SelfHostedItem[],
};
