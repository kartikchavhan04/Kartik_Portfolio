export const resumeProjects = [
  {
    id: "cab-service-provider",
    title: "Cab Service Provider",
    projectType: "Professional Project",
    isPersonal: false,
    period: "Aug 2023 – Nov 2024",
    accent: "from-cyan-500 to-blue-600",
    overview:
      "Developed a cab service backend integrating payment workflows with Mahindra Finance’s loan collection process",
    bullets: [
      {
        title: "Project Overview",
        desc: "Developed a cab service backend integrating payment workflows with Mahindra Finance’s loan collection process",
      },
      {
        title: "Full Stack Development",
        desc: "Developed full-stack features using Angular for the frontend and Python Django for the backend, integrating REST APIs to support cab payment and loan collection workflows",
      },
      {
        title: "Backend Development",
        desc: "Developed and maintained RESTful APIs using Python and Django to handle cab payments, loan collection, business logic, and request validation",
      },
      {
        title: "Database & Frontend Integration",
        desc: "Worked with PostgreSQL database schemas and queries, integrating Django backend services with Angular frontend workflows",
      },
      {
        title: "CI/CD & Third-Party Integration",
        desc: "Used Jenkins and Docker to support automated build and deployment workflows and integrated external financial services for reliable data exchange",
      },
      {
        title: "Performance Optimization",
        desc: "Improved API response time by 30% through database query optimization and caching strategies, if verified by actual measurements",
      },
    ],
    techStack: [
      "Python",
      "Django",
      "Angular",
      "PostgreSQL",
      "Jenkins",
      "Docker",
      "REST APIs",
    ],
  },
  {
    id: "mahanidhi-loan-application",
    title: "Mahanidhi Loan Application",
    projectType: "Professional Project",
    isPersonal: false,
    period: "Nov 2024 – Present",
    accent: "from-emerald-500 to-teal-600",
    overview:
      "Worked on a microservices-based lending application supporting customer onboarding and loan processing across web and mobile platforms",
    bullets: [
      {
        title: "Project Overview",
        desc: "Worked on a microservices-based lending application supporting customer onboarding and loan processing across web and mobile platforms",
      },
      {
        title: "Backend Development",
        desc: "Developed RESTful APIs using Python, Django, and Flask to implement business logic, request validation, and loan processing workflows",
      },
      {
        title: "Microservices Architecture",
        desc: "Worked with independently deployable services to support modular application development, service integration, and scalability",
      },
      {
        title: "Integration & Deployment",
        desc: "Integrated third-party services and supported CI/CD workflows for building and deploying application services",
      },
      {
        title: "Monitoring & Reliability",
        desc: "Contributed to application logging, troubleshooting, and service reliability improvements to support production operations",
      },
    ],
    techStack: [
      "Python",
      "Django",
      "Flask",
      "PostgreSQL",
      "Docker",
      "Microservices",
      "CI/CD",
      "REST APIs",
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
    period: "Educational Project",
    accent: "from-amber-500 to-orange-600",
    overview:
      "A test-preparation and timed exam simulation web application designed to assist rural police candidates with question banks and exam timers.",
    bullets: [
      {
        title: "Project Overview",
        desc: "Created an educational hub offering timed practice tests, syllabus guides, and current affairs for aspiring police exam candidates.",
      },
      {
        title: "Timed Mock Exam Simulator",
        desc: "Developed an interactive timed test engine with automatic scoring, response tracking, and performance analytics.",
      },
      {
        title: "Backend Question Repository",
        desc: "Structured Django backend endpoints and relational schemas to categorize questions across General Knowledge, Reasoning, and Marathi Grammar.",
      },
      {
        title: "Mobile Optimization",
        desc: "Optimized component layouts and payload sizes for fast loading on 4G mobile devices in low-bandwidth rural areas.",
      },
    ],
    techStack: [
      "Python",
      "Django",
      "React.js",
      "PostgreSQL",
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
