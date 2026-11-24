export const ME = {
  name: "Your Name",
  handle: "yourname",
  role: "Full-Stack Developer",
  email: "you@example.com",
  location: "India",
  resume: "/resume.pdf", // replace public/resume.pdf with your real resume (keep the name)
  bio: [
    "I turn coffee into clean, scalable code. I enjoy building products end to end — from the database schema to the last pixel of the UI.",
    "Replace this with your own story: what you build, what you're learning, and what you want to build next.",
  ],
  facts: [["Based in", "India"], ["Focus", "Web & Backend"], ["Coffee/day", "3 cups"], ["Status", "Open to work"]],
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
    { label: "LeetCode", href: "https://leetcode.com/your-handle" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
};

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  frontend: [{ name: "React", level: 92 }, { name: "Next.js", level: 88 }, { name: "TypeScript", level: 90 }, { name: "Tailwind CSS", level: 85 }, { name: "HTML & CSS", level: 94 }],
  backend: [{ name: "Node.js", level: 90 }, { name: "Express", level: 88 }, { name: "REST & GraphQL", level: 82 }, { name: "Auth (JWT/OAuth)", level: 80 }, { name: "Socket.IO", level: 75 }],
  database: [{ name: "PostgreSQL", level: 84 }, { name: "MongoDB", level: 88 }, { name: "Redis", level: 78 }, { name: "Prisma", level: 82 }],
  devops: [{ name: "Git & GitHub", level: 93 }, { name: "Docker", level: 76 }, { name: "AWS", level: 68 }, { name: "CI/CD", level: 72 }],
  learning: [{ name: "System Design", level: 60 }, { name: "Rust", level: 35 }, { name: "Kubernetes", level: 40 }],
};

export const MARQUEE = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GraphQL", "Tailwind", "Git"];

export const EXPERIENCE = [
  { hash: "a3f9c21", branch: "HEAD -> main", role: "Software Engineer", company: "Company Name", date: "2024 — Present", points: ["Shipped features used by thousands of daily users.", "Cut API response time by 40% with caching and query tuning.", "Led code reviews and mentored two interns."] },
  { hash: "7be04d8", branch: "internship", role: "Software Developer Intern", company: "Another Company", date: "2023 — 2024", points: ["Built REST APIs with Node.js and PostgreSQL.", "Created a reusable React component library."] },
];

export const EDUCATION = [
  { file: "btech.md", degree: "B.Tech in Computer Science", school: "Your University", period: "2020 — 2024", note: "CGPA 8.5 / 10" },
  { file: "school.md", degree: "Senior Secondary (XII)", school: "Your School", period: "2018 — 2020", note: "92%" },
];

export const PROJECTS = [
  { id: "01", name: "GetStyled", kind: "E-commerce platform", stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    problem: "Small fashion brands need a fast storefront with real checkout, without paying for heavy platforms.",
    built: "A full online store: product search and filters, persistent cart and wishlist, Stripe checkout with webhooks, order tracking, and an admin dashboard to manage inventory and orders.",
    highlights: ["Redis caching keeps catalog pages fast", "Webhook-confirmed orders so payments never get lost", "Role-based admin access"] },
  { id: "02", name: "JobPilot", kind: "Job application tracker", stack: ["React", "Express", "MongoDB", "dnd-kit"],
    problem: "Job hunting turns into chaos — dozens of applications, follow-ups and interview notes scattered everywhere.",
    built: "A kanban-style tracker where applications move from Wishlist to Offer by drag and drop, with notes, contacts, reminders and a funnel analytics view.",
    highlights: ["Email reminders for follow-ups via cron jobs", "Status history for every application", "Analytics: where do applications drop off?"] },
  { id: "03", name: "Shrinkly", kind: "URL shortener", stack: ["Node.js", "Redis", "PostgreSQL", "Docker"],
    problem: "Links are long and untrackable; redirects must be near-instant even under heavy traffic.",
    built: "A shortener using Base62 codes, custom aliases and expiry, with click analytics for device, location and referrer.",
    highlights: ["Hot links served from Redis in sub-millisecond time", "Rate limiting to prevent abuse", "Analytics processed asynchronously"] },
  { id: "04", name: "SPACE", kind: "Social media app", stack: ["Next.js", "Socket.IO", "MongoDB", "Cloudinary"],
    problem: "Social apps feel dead without real-time interaction and a smooth, endless feed.",
    built: "A social platform with profiles, posts, follows, likes and comments, image uploads, real-time chat and live notifications.",
    highlights: ["Infinite-scroll feed with cursor pagination", "Real-time events over WebSockets", "Media offloaded to a CDN"] },
];
