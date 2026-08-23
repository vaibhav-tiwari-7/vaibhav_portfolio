// ─────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Edit everything here — nothing else in the codebase needs to change
// when you update your info, add a project, or swap a link.
// ─────────────────────────────────────────────────────────────

export const intro = {
  lines: [
  "while (!success) keepBuilding();",
  "Hello, I'm Vaibhav.",
  ":)",
]
};

export const profile = {
  name: "Vaibhav Tiwari",
  role: "Computer Science Undergraduate | Aspiring Software Engineer",
  summary:
    "I'm a curious Computer Science undergraduate who enjoys turning ideas into meaningful software. I thrive in collaborative environments, value learning from the people I work with, and love building solutions that are both practical and impactful.",
  location: "Bengaluru, Karnataka, India",
  experience: "Fresher",
  education: "B.E. in Computer Science",
  email: "mail.vaibhav4work@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/vaibhav-tiwari-7x",
    github: "https://github.com/vaibhav-tiwari-7",
    instagram: "https://www.instagram.com/__vaibhavtiwari/",
  },
  // Replace with your own photo at src/assets/profile.jpg
  photo: "/assets/profile.jpeg",
  resume: "/assets/resume.pdf",
};

export const education = [
  {
    id: "sit",
    institution: "Siddaganga Institute of Technology",
    degree: "B.E. in Computer Science and Engineering",
    duration: "2023 — 2027",
    cgpa: "CGPA: 8.23 / 10", // update with your actual CGPA
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Object-Oriented Programming",
      "Communication",
      "Volunteering",
      "Leadership",
      "Team Management",
    ],
    location: "Tumkur, Karnataka",
    logo: "/assets/l1.png"
  },
  {
    id: "pre-university",
    institution: "Nalanda Academy",
    degree: "Class XII, PCM",
    duration: "2022 — 2023",
    cgpa: "Percentage: 70.3%", // update
    coursework: ["Physics", "Chemistry", "Mathematics","Basketball","Volunteering"],
    location: "Kota, Rajasthan",
    logo: "/assets/l2.png"
  },
   {
    id: "pre-university",
    institution: "Prince EduHub",
    degree: "Class X",
    duration: "2020 — 2021",
    cgpa: "Percentage: 82.83%", // update
    coursework: ["Physics", "Chemistry", "Mathematics","Biology","Music"],
    location: "Sikar, Rajasthan",
    logo: "/assets/l3.png"
  },
];

export const skills = {
 Programming: [
  { name: "C++", level: "Advanced" },
  { name: "C", level: "Advanced" },
  { name: "Python", level: "Familiar" },
  { name: "SQL", level: "Advanced" },
],

  Web: [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "TailwindCSS", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
  ],

  "Cloud & Tools": [
  { name: "Docker", level: "Familiar" },
  { name: "Git", level: "Advanced" },
  { name: "GitHub", level: "Advanced" },
  { name: "GCP", level: "Intermediate" },
  { name: "BigQuery", level: "Intermediate" },
  { name: "Cloud Functions", level: "Intermediate" },
  { name: "VS Code", level: "Advanced" },
],

  "CS Fundamentals": [
    { name: "Data Structures & Algorithms", level: "Intermediate" },
    { name: "DBMS", level: "Advanced" },
    { name: "Operating Systems", level: "Advanced" },
    { name: "OOPs", level: "Advanced" },
  ],
};

export const projects = [
  {
    id: "aapda",
    name: "AAPDA-Disaster Information Extractor from Tweets ",
    tagline: "Cloud-based disaster information extraction system that classifies crisis-related tweets using Natural Language Processing (NLP), Machine Learning, and Google Cloud Platform.",
    description:
      "An intelligent disaster response platform that classifies 77,000+ social media posts into rescue, medical, infrastructure, and emergency categories using TF-IDF and Logistic Regression. Built on Google Cloud with automated analytics and reporting.",
    impact:
      "Achieved 98.5% classification accuracy while automating large-scale disaster intelligence workflows.",
    tech: ["Python", "GCP", "BigQuery", "Cloud Functions", "NLP"],
    image: "/assets/p1.png",
    github: "https://github.com/vaibhav-tiwari-7/AAPDA-Disaster-Information-Extractor-from-Tweets",
    live: "",
  },

  {
  id: "pmo-dashboard",
  name: "Project Management Dashboard",
  tagline: "Agile project & resource tracking system for end-to-end delivery management",
  description:
    "A full-stack Django dashboard for managing project schedules, milestones, deliverables, resource allocation, task management, issue tracking, risk monitoring, and project status reporting with KPI-based visual analytics.",
  impact:
    "Implemented Agile workflow tracking with sprint planning, task prioritization, resource utilization, and milestone completion dashboards.",
  tech: ["Django", "Python", "SQLite", "HTML/CSS"],
  image: "/assets/p2.png",
  github: "",
  live: "",
},

  {
  id: "horizon",
  name: "HORIZON",
  tagline: "Financial SaaS platform for secure multi-bank account integration",
  description:
    "A full-stack fintech platform built with Next.js, TypeScript, Appwrite, Plaid, and Dwolla that enables multi-bank account aggregation, secure authentication, and validated fund transfers through a scalable architecture.",
  impact:
    "Reduced manual financial tracking effort by over 60% with centralized analytics and transaction insights.",
  tech: ["Next.js", "TypeScript", "Appwrite", "Plaid", "Dwolla"],
  image: "/assets/p3.png",
  github: "https://github.com/vaibhav-tiwari-7/HORIZON",
  live: "",
},

 {
  id: "benchmarking",
  name: "AI Agent Benchmarking System",
  tagline: "Standardized framework for evaluating AI agents on data analysis tasks",
  description:
    "A Python-based benchmarking framework that compares CrewAI and LangGraph agents on classification, query analysis, and question-answering tasks using identical prompts and execution conditions.",
  impact:
    "Measured accuracy, latency, cost, and output consistency while storing results in SQLite/CSV for reproducible evaluation.",
  tech: ["Python", "Pandas", "SQLite", "CrewAI", "LangGraph"],
  image: "/assets/p4.png",
  github: "https://github.com/vaibhav-tiwari-7/AI-Agents-Benchmarking-for-Data-Analysis",
  live: "",
},
];

export const certifications = [
  {
    id: "cert-1",
    name: "AWS From Zero to Hero",
    issuer: "Udemy",
    year: "2026",
    image: "/assets/c1.png",
    link: "https://www.udemy.com/certificate/UC-d848c61a-03de-4862-aa21-ba339ffb936c/",
  },
  {
    id: "cert-2",
    name: "Basics of Cloud Computing with AWS, Azure and GCP Tools",
    issuer: "Udemy",
    year: "2026",
    image: "/assets/c2.png",
    link: "https://www.udemy.com/certificate/UC-11e8b3af-cc41-422d-a6f4-20a8463878f4/",
  },
  {
    id: "cert-3",
    name: " Learn Programming and Problem Solving using C++",
    issuer: "CodeChef",
    year: "2025",
    image: "/assets/c3.png",
    link: "https://www.codechef.com/certificates/public/7456062",
  },
  {
    id: "cert-4",
    name: "Nutanix Certified Associate 6",
    issuer: "Nutanix",
    year: "2026",
    image: "/assets/c4.png",
    link: "https://www.credly.com/badges/06eccf01-ded6-4b51-ad11-4c2bc9d4455f/public_url",
  },
    {
    id: "cert-5",
    name: "Generative AI for All",
    issuer: "Infosys",
    year: "2025",
    image: "/assets/c5.png",
    link: "",
  },
   {
    id: "cert-6",
    name: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    year: "2025",
    image: "/assets/c6.png",
    link: "",
  },
];

export const achievements = [
  {
    id: "ach-1",
    title: "IIT Bombay Techfest Ambassador",
    description:
      "Achieved Under AIR 2000 Rank and represented my college as an official Techfest College Ambassador.",
    stat: "AIR 2K",
    icon: "medal",
  },
  {
    id: "ach-2",
    title: "Intercollegiate Theatre Excellence",
    description:
      "Won 1st Prize at SIT, NMIT Bengaluru, and multiple inter-collegiate street play competitions.",
    stat: "1st",
    icon: "theatre",
  },
  {
    id: "ach-3",
    title: "ByteWar Coding Competition",
    description:
      "Awarded Best Performer (1st Year) for outstanding performance in the ByteWar coding competition.",
    stat: "Best",
    icon: "code",
  },
];

export const leadership = [
  {
    id: "lead-1",
    position: "Team Lead",
    organization: "Black Pearl Theatre Club, SIT",
    duration: "2025 — Present",
    responsibilities: [
      "Led a 90-member theatre team across multiple inter-collegiate cultural events.",
      "Coordinated rehearsals, event operations, and team logistics.",
      "Represented SIT at Mood Indigo (IIT Bombay) and other major competitions."
    ],
    impact: "Achieved a Top 4 finish among 75 competing theatre teams.",
  },
{
  id: "lead-2",
  position: "Member",
  organization: "Quizzing Inc Club, SIT",
  duration: "2023 — Present",
  responsibilities: [
    "Organized intra- and inter-college quiz events and club activities.",
    "Represented SIT in quiz competitions at multiple colleges.",
    "Collaborated with the team to conduct competitive quiz sessions."
  ],
  impact: "Contributed to the successful execution of quiz events while actively competing across institutions.",
}
];

export const navLinks = [
  { id: "hero", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];
