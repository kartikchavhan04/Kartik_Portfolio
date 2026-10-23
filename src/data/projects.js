export const resumeProjects = [
  {
    id: "ai-career-counselling-platform",
    title: "AI Career Counselling Platform",
    projectType: "Professional Project",
    isPersonal: false,
    period: "Nov 2024 – Present",
    accent: "from-cyan-500 to-blue-600",
    overview:
      "Built an AI-driven career counselling platform that recommends suitable colleges and courses to students by analyzing their exam marks, category, and preferences against historical cutoff data.",
    bullets: [
      {
        title: "Overview",
        desc: "Built an AI-driven career counselling platform that recommends suitable colleges and courses to students by analyzing their exam marks, category, and preferences against historical cutoff data",
      },
      {
        title: "Recommendation Engine",
        desc: "Implemented a rule-based filtering layer over previous years’ cutoff datasets to shortlist eligible colleges by percentile, category, branch, and location, then ranked results by admission probability",
      },
      {
        title: "RAG Pipeline",
        desc: "Designed a retrieval-augmented generation pipeline using LangChain that embeds college prospectuses, cutoff sheets, and admission policies into a vector store, enabling grounded and accurate answers to student queries",
      },
      {
        title: "LLM Integration",
        desc: "Integrated Large Language Models with structured prompts and tool calling to convert raw eligibility results into personalized, human-readable counselling guidance and comparison summaries",
      },
      {
        title: "Conversational Flow",
        desc: "Orchestrated multi-turn counselling conversations with LangGraph, maintaining student context across turns and routing queries between eligibility lookup, document retrieval, and advisory responses",
      },
      {
        title: "Backend",
        desc: "Developed REST APIs with Python Flask to handle student profiles, cutoff queries, and LLM inference requests, with input validation and structured JSON responses for reliable frontend consumption",
      },
      {
        title: "UI",
        desc: "Built a responsive React.js interface with guided input forms, filterable college result tables, and an interactive chat panel for real-time career counselling",
      },
    ],
    techStack: [
      "Python",
      "Flask",
      "LangChain",
      "LangGraph",
      "Large Language Models",
      "RAG",
      "Vector Database",
      "React.js",
      "JavaScript",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: "cab-service-provider-system",
    title: "Cab Service Provider System",
    projectType: "Professional Project",
    isPersonal: false,
    period: "Aug 2023 – Nov 2024",
    accent: "from-emerald-500 to-teal-600",
    overview:
      "Developed a cab booking platform from scratch, handling everything from ride requests and fare computation to real-time tracking and driver-rider coordination.",
    bullets: [
      {
        title: "Overview",
        desc: "Developed a cab booking platform from scratch, handling everything from ride requests and fare computation to real-time tracking and driver-rider coordination",
      },
      {
        title: "Frontend",
        desc: "Assembled a responsive React UI with dynamic booking forms, live ride tracking views, and driver/admin dashboards — all optimized for usability across screen sizes",
      },
      {
        title: "Backend",
        desc: "Designed REST APIs covering ride lifecycle management, dynamic fare calculation, and real-time event handling, with clear separation of concerns across service layers",
      },
      {
        title: "Security",
        desc: "Implemented authentication and authorization flows to control access by role (rider, driver, admin), along with booking state machine logic to prevent invalid transitions",
      },
      {
        title: "Integration",
        desc: "Connected React frontend to Django Backend service with consistent request/response contracts, client-side validation, and error handling to ensure smooth end-to-end data flow",
      },
      {
        title: "Database",
        desc: "Tuned MySQL queries and refined schema design to handle concurrent bookings efficiently and keep read/write operations fast under load",
      },
    ],
    techStack: [
      "React",
      "JavaScript",
      "Python",
      "Django",
      "MySQL",
      "REST APIs",
      "Docker",
      "Git",
    ],
  },
];

export const personalProjects = [
  {
    id: "community-portal",
    title: "Shree Vasantrao Bhumiputr Karmachari Community",
    projectType: "Personal Project",
    isPersonal: true,
    period: "Independent Initiative",
    accent: "from-violet-500 to-purple-600",
    overview:
      "A centralized community platform and member directory with circular broadcasts, executive profiles, and online inquiry assistance.",
    bullets: [
      {
        title: "Project Overview",
        desc: "Engineered a centralized digital network for community employees and members to streamline communications and maintain verified directory records.",
      },
      {
        title: "Full Stack Architecture",
        desc: "Developed RESTful APIs using Python and Django REST Framework, paired with responsive React.js and Tailwind CSS frontend interfaces.",
      },
      {
        title: "Directory & Search",
        desc: "Implemented dynamic search, department filtering, and pagination to quickly locate community member profiles.",
      },
      {
        title: "Administrative Portal",
        desc: "Built administrative controls for publishing official circulars, event updates, and reviewing member inquiries.",
      },
    ],
    techStack: [
      "React.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    id: "police-bharti-platform",
    title: "Maharashtra Police Bharti Student Platform",
    projectType: "Personal Project",
    isPersonal: true,
    period: "Exam Preparation Hub",
    accent: "from-amber-500 to-orange-600",
    overview:
      "A test-preparation and timed exam simulation web application built with Flask and MySQL to assist police exam candidates with question banks and timed mock tests.",
    bullets: [
      {
        title: "Project Overview",
        desc: "Created an educational practice platform offering timed test series, syllabus guides, and GK preparation for aspiring Maharashtra police candidates.",
      },
      {
        title: "Timed Mock Exam Simulator",
        desc: "Developed an interactive timed test engine with automatic scoring, response tracking, and performance analytics.",
      },
      {
        title: "Flask & MySQL Backend",
        desc: "Structured Flask backend REST endpoints and MySQL relational database to categorize questions across General Knowledge, Reasoning, and Marathi Grammar.",
      },
      {
        title: "Mobile Optimization",
        desc: "Optimized responsive UI layouts and lightweight payloads for smooth practice on 4G mobile devices in low-bandwidth rural areas.",
      },
    ],
    techStack: [
      "Python",
      "Flask",
      "MySQL",
      "React.js",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    id: "prakash-medical-store",
    title: "Prakash Medical & General Store Management",
    projectType: "Personal Project",
    isPersonal: true,
    period: "Retail Software Solution",
    accent: "from-rose-500 to-pink-600",
    overview:
      "A point-of-sale billing and pharmacy inventory management system with automated batch expiry tracking and sales reporting.",
    bullets: [
      {
        title: "Project Overview",
        desc: "Built an inventory and retail billing application to eliminate manual ledger entry errors and speed up daily pharmacy counter checkouts.",
      },
      {
        title: "Point-of-Sale (POS) Billing",
        desc: "Constructed a rapid, keyboard-friendly billing interface that computes discounts, generates invoice summaries, and updates stock counts instantly.",
      },
      {
        title: "Batch & Expiry Surveillance",
        desc: "Integrated automated detection of medicine batches nearing expiration date, helping pharmacists prevent expired stock issues.",
      },
      {
        title: "Database Modeling",
        desc: "Designed MySQL relational tables for medicine inventory batches, suppliers, daily sales logs, and financial reconciliations.",
      },
    ],
    techStack: [
      "Python",
      "Django",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
];

// All projects for the portfolio Projects section
export const projects = [...resumeProjects, ...personalProjects];
