export const projectCategories = ["All", "Full Stack", "Enterprise", "Web App"];

export const projects = [
  {
    id: "cab-service-provider",
    title: "Cab Service Provider Platform",
    tagline: "Scalable Ride Scheduling & Dispatch Automation",
    category: "Full Stack",
    projectType: "Full Stack Web Application",
    featured: true,
    accent: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.2)",
    shortDescription:
      "A high-availability transit booking and driver management platform designed to automate dispatching, booking calculations, and ride status updates.",
    problemSolved:
      "Manual scheduling and dispatch bottlenecks caused booking delays, misallocated drivers, and lack of real-time visibility for both riders and transport managers.",
    keyFeatures: [
      "Dynamic ride dispatch engine with route-based pricing and fare estimation",
      "Real-time ride lifecycle tracking (Requested, Assigned, In-Transit, Completed)",
      "Secure role-based authentication separating riders, drivers, and fleet administrators",
      "Containerized deployment using Docker with automated Jenkins CI/CD pipelines",
      "Responsive client interface built with modern component architectures",
    ],
    techStack: [
      "Django",
      "Angular",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "REST APIs",
      "JWT",
    ],
    contribution:
      "Engineered backend REST endpoints in Django, structured normalized PostgreSQL tables with optimized indexing, integrated API services with the Angular frontend, and orchestrated automated testing via Jenkins pipelines.",
    githubUrl: "https://github.com/kartikchavhan",
    liveUrl: null, // marked for confirmation or verification
    status: "Completed & Deployed to Staging",
    stats: [
      { label: "Architecture", value: "RESTful + Microservices" },
      { label: "Deployment", value: "Docker + Jenkins" },
    ],
  },
  {
    id: "mahanidhi-loan-application",
    title: "Mahanidhi Loan Application Portal",
    tagline: "End-to-End Digital Lending & Underwriting Platform",
    category: "Enterprise",
    projectType: "Fintech Enterprise Web Portal",
    featured: true,
    accent: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.2)",
    shortDescription:
      "A secure digital loan application and credit approval system with automated EMI calculators, applicant verification pipelines, and administrative underwriting workflows.",
    problemSolved:
      "Traditional physical paper submissions caused lengthy turnaround times, lost documentation, and high administrative overhead for credit evaluation teams.",
    keyFeatures: [
      "Multi-stage digital loan application with applicant document verification",
      "Interactive real-time EMI calculation and loan amortization schedule generation",
      "Multi-tiered underwriting hierarchy with Role-Based Access Control (RBAC)",
      "Applicant portal for tracking real-time verification and sanction status",
      "Comprehensive audit trail for regulatory compliance and record archiving",
    ],
    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "React.js",
      "Tailwind CSS",
      "JWT Auth",
    ],
    contribution:
      "Designed the state-machine workflow for loan lifecycle approvals in Django, implemented REST endpoints with JWT validation, constructed MySQL database schemas with transactional safeguards, and built the applicant dashboard in React.",
    githubUrl: "https://github.com/kartikchavhan",
    liveUrl: null,
    status: "Production Ready",
    stats: [
      { label: "Security", value: "RBAC + JWT Auth" },
      { label: "Database", value: "MySQL ACID Compliant" },
    ],
  },
  {
    id: "community-portal",
    title: "Shree Vasantrao Bhumiputr Karmachari Community",
    tagline: "Centralized Member Directory & Communication Network",
    category: "Web App",
    projectType: "Community Web Application",
    featured: true,
    accent: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.2)",
    shortDescription:
      "A dedicated community platform serving verified employees and members with a centralized directory, announcements, committee profiles, and assistance desk.",
    problemSolved:
      "Community members were scattered across multiple unofficial messaging channels with no verified member records, official announcements, or organized support forums.",
    keyFeatures: [
      "Dynamic searchable member directory with filtering by profession, region, and department",
      "Official administrative portal for broadcasting circulars and community events",
      "Executive committee profiles and institutional leadership directory",
      "Digital grievance and assistance submission system with status tracking",
      "Mobile-optimized responsive design ensuring accessible reading across devices",
    ],
    techStack: [
      "React.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    contribution:
      "Spearheaded full-stack implementation, designed RESTful APIs for member queries, built searchable filter components in React, and styled responsive layouts tailored for mobile accessibility.",
    githubUrl: "https://github.com/kartikchavhan",
    liveUrl: null,
    status: "Active Community Platform",
    stats: [
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Data Store", value: "PostgreSQL" },
    ],
  },
  {
    id: "police-bharti-platform",
    title: "Maharashtra Police Bharti Student Platform",
    tagline: "Exam Preparation & Timed Mock Test Engine",
    category: "Web App",
    projectType: "EdTech Student Platform",
    featured: false,
    accent: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.2)",
    shortDescription:
      "An educational test-preparation hub offering timed mock exams, subject-wise question banks, current affairs updates, and physical examination guidance.",
    problemSolved:
      "Aspiring police exam candidates, especially from rural regions, lacked centralized access to authentic previous exam papers, structured tests, and physical fitness criteria.",
    keyFeatures: [
      "Interactive timed exam simulator with instant result computation and answer explanations",
      "Subject-wise question classification covering General Knowledge, Reasoning, and Marathi Grammar",
      "Daily current affairs feed with notification alerts",
      "Structured physical eligibility and fitness requirements guide",
      "Lightweight, low-bandwidth optimized UI for seamless access on 4G mobile devices",
    ],
    techStack: [
      "Python",
      "Django",
      "React.js",
      "PostgreSQL",
      "Tailwind CSS",
      "RESTful Services",
    ],
    contribution:
      "Developed the backend question repository and scoring algorithm in Django, engineered exam session timers and state handling in React, and optimized mobile asset delivery.",
    githubUrl: "https://github.com/kartikchavhan",
    liveUrl: null,
    status: "Educational Initiative",
    stats: [
      { label: "Simulator", value: "Timed Exam Engine" },
      { label: "Optimization", value: "Low-Bandwidth Mobile" },
    ],
  },
  {
    id: "prakash-medical-store",
    title: "Prakash Medical & General Store Management",
    tagline: "Retail Pharmacy Inventory & Fast-Billing System",
    category: "Enterprise",
    projectType: "Retail Enterprise Software",
    featured: false,
    accent: "from-rose-500 to-red-600",
    glowColor: "rgba(244, 63, 94, 0.2)",
    shortDescription:
      "A fast-paced pharmacy management system handling point-of-sale billing, batch and expiry date tracking, inventory alerts, and sales analytics.",
    problemSolved:
      "Manual stock register entries resulted in expired medicines remaining on shelves, slow checkout queues during rush hours, and lack of daily revenue transparency.",
    keyFeatures: [
      "Rapid point-of-sale billing module with keyboard shortcuts for instant checkout",
      "Automated stock threshold warnings and upcoming batch expiry date alerts",
      "Smart medicine search with generic salt composition alternatives",
      "Daily and monthly sales reports with invoice PDF generation",
      "Supplier ledger and replenishment order management",
    ],
    techStack: [
      "Python",
      "Django",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
    contribution:
      "Designed the relational schema for inventory batches and invoices in MySQL, implemented alert logic for expiring medicine stocks, and created a snappy, keyboard-friendly checkout UI.",
    githubUrl: "https://github.com/kartikchavhan",
    liveUrl: null,
    status: "In Store Deployment",
    stats: [
      { label: "Workflow", value: "Rapid Point-of-Sale" },
      { label: "Alerts", value: "Automated Expiry Tracker" },
    ],
  },
];
