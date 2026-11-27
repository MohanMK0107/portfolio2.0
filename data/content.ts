export const ME = {
<<<<<<< HEAD
  name: "MOHAN M K",
  handle: "mohan_mk",
  role: "Full-Stack Software Developer",
  email: "mohanmkd0107@gmail.com",
  location: "Bengaluru, India",
  resume: "/resume.pdf",

  bio: [
    "I'm a Software Developer who enjoys building end-to-end applications, from designing intuitive user interfaces to developing backend services and managing databases. I work primarily with React, Next.js, Node.js, and Ruby on Rails.",
    
    "Currently, I'm working on business-focused software and mobile applications while exploring system design, data structures and backend engineering. I enjoy solving practical engineering challenges and continuously improving the way I build software."
  ],

  facts: [
    ["Based in", "Bengaluru, India"],
    ["Specialization", "Full-Stack Development"],
    ["Currently exploring", "System Design & DSA"],
    ["Experience", "Professional + Internship"],
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/MohanMK0107",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohanmk0107",
    },
    {
      label: "LeetCode",
      href: "YOUR_LEETCODE_PROFILE_URL",
    },
    {
      label: "Email",
      href: "mailto:mohanmkd0107@gmail.com",
    },
  ],
};


export const SKILLS: Record<string, { name: string; level: number }[]> = {
  frontend: [
    { name: "React.js", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 78 },
    { name: "React Native", level: 75 },
    { name: "HTML & CSS", level: 92 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Vite", level: 85 },
  ],

  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Ruby on Rails", level: 65 },
    { name: "Ruby", level: 60 },
    { name: "REST APIs", level: 88 },
    { name: "Socket.IO", level: 75 },
    { name: "JWT & OAuth", level: 75 },
  ],

  database: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL / SQL", level: 75 },
    { name: "Prisma ORM", level: 75 },
    { name: "Mongoose", level: 85 },
  ],

  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Linux", level: 75 },
    { name: "Docker", level: 50 },
    { name: "Nginx", level: 65 },
    { name: "Postman", level: 85 },
    { name: "Cloudinary", level: 75 },
    { name: "Vercel", level: 85 },
  ],

  learning: [
    { name: "Data Structures & Algorithms", level: 55 },
    { name: "System Design", level: 45 },
    { name: "Java", level: 40 },
    { name: "Python", level: 65 },
  ],
};
export const MARQUEE = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Node.js",
  "Express.js",
  "Ruby on Rails",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Socket.IO",
  "Tailwind CSS",
  "HTML & CSS",
  "Git & GitHub",
  "Linux",
  "REST APIs",
  "Vite",
  "Cloudinary",
];
export const EXPERIENCE = [
  {
    hash: "HEAD -> main",
    branch: "main",
    role: "Software Developer",
    company: "UniteGrid Infocom OPC Pvt. Ltd.",
    date: "Feb 2026 — Present",
    points: [
      "Contributing to the development of a SaaS-based distributor management platform, supporting distribution, inventory and order-management workflows.",
      "Developing and integrating mobile applications for salespersons and sellers to browse products and manage orders.",
      "Working across the application stack using Ruby on Rails, React Native and SQL.",
      "Managing Linux server environments and configuring Nginx for deployment and API accessibility.",
    ],
  },
  {
    hash: "7be04d8",
    branch: "internship",
    role: "Frontend Developer Intern",
    company: "Dyashin",
    date: "Feb 2025 — May 2025",
    points: [
      "Integrated frontend applications with backend REST APIs, handling request/response flows and error states.",
      "Collaborated with backend engineers to debug API issues and improve reliable data exchange.",
    ],
  },
  {
    hash: "4c82a19",
    branch: "python-internship",
    role: "Python / Data Intern",
    company: "Accurate Info Solution",
    date: "Oct 2024 — Nov 2024",
    points: [
      "Developed Python automation scripts to streamline data pipelines and internal workflows.",
      "Implemented modular data utilities and improved debugging, error handling and data-processing practices.",
    ],
  },
];

export const EDUCATION = [
  {
    file: "btech.md",
    degree: "Bachelor of Engineering - Robotics and Automation",
    school: "Rajarajeswari College of Engineering, Bengaluru",
    period: "2021 — 2025",
    note: "CGPA 7.3 / 10",
  },
  {
    file: "puc.md",
    degree: "II PUC - PCMB",
    school: "Vijayabharathi PU College, Bengaluru",
    period: "2018 — 2020",
    note: "84.4%",
  },
];

export const PROJECTS = [
  {
    id: "01",
    name: "GetStyled",
    kind: "E-commerce platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    problem:
      "Small fashion brands need a fast storefront with real checkout, without paying for heavy platforms.",
    built:
      "A full online store: product search and filters, persistent cart and wishlist, Stripe checkout with webhooks, order tracking, and an admin dashboard to manage inventory and orders.",
    highlights: [
      "Redis caching keeps catalog pages fast",
      "Webhook-confirmed orders so payments never get lost",
      "Role-based admin access",
    ],
  },
  {
    id: "02",
    name: "JobPilot",
    kind: "Job application tracker",
    stack: ["React", "Express", "MongoDB", "dnd-kit"],
    problem:
      "Job hunting turns into chaos — dozens of applications, follow-ups and interview notes scattered everywhere.",
    built:
      "A kanban-style tracker where applications move from Wishlist to Offer by drag and drop, with notes, contacts, reminders and a funnel analytics view.",
    highlights: [
      "Email reminders for follow-ups via cron jobs",
      "Status history for every application",
      "Analytics: where do applications drop off?",
    ],
  },
  {
    id: "03",
    name: "Shrinkly",
    kind: "URL shortener",
    stack: ["Node.js", "Redis", "PostgreSQL", "Docker"],
    problem:
      "Links are long and untrackable; redirects must be near-instant even under heavy traffic.",
    built:
      "A shortener using Base62 codes, custom aliases and expiry, with click analytics for device, location and referrer.",
    highlights: [
      "Hot links served from Redis in sub-millisecond time",
      "Rate limiting to prevent abuse",
      "Analytics processed asynchronously",
    ],
  },
  {
    id: "04",
    name: "SPACE",
    kind: "Social media app",
    stack: ["Next.js", "Socket.IO", "MongoDB", "Cloudinary"],
    problem:
      "Social apps feel dead without real-time interaction and a smooth, endless feed.",
    built:
      "A social platform with profiles, posts, follows, likes and comments, image uploads, real-time chat and live notifications.",
    highlights: [
      "Infinite-scroll feed with cursor pagination",
      "Real-time events over WebSockets",
      "Media offloaded to a CDN",
    ],
  },
=======
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
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
];
