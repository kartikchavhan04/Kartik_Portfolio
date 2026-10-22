const resumeSummary =
  "Python Full Stack Developer with 3 years of professional experience in web application development, backend engineering, and REST API development. Developed and integrated 30+ REST APIs using Python, Django, Flask, and Django REST Framework. Skilled in frontend development with React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Experienced in SQL, PostgreSQL, MySQL, API integration, request validation, JWT authentication, and role-based access control (RBAC). Familiar with Docker, Kubernetes, Azure DevOps, Jenkins, Git, GitHub, and CI/CD workflows. Focused on maintainable backend services, reliable integrations, and responsive web applications.";

export const profileData = {
  name: "Kartik Chavhan",
  title: "Python Full Stack Developer",
  email: "kartikpchachan2004@gmail.com",
  phone: "9322763544",
  linkedin: "https://www.linkedin.com/in/kartik-chavhan-5428502a1/",
  github: "https://github.com/kartikchavhan04",
  githubUsername: "kartikchavhan04",
  avatar: "/images/kartik-chavhan.jpg",
  location: "Pune, Maharashtra",
  resumeUrl: "/resume.pdf",
  roles: [
    "Python Full Stack Developer",
    "Backend & REST API Engineer",
    "Django & Flask Developer",
    "React.js Frontend Engineer",
  ],
  summary: resumeSummary,
  // Backward compatibility aliases to prevent any browser cache mismatch
  aboutParagraphs: [resumeSummary],
  shortBio: resumeSummary,
  quickHighlights: [
    { title: "Backend Development", desc: "Django, Flask, FastAPI, RESTful APIs, Microservices" },
    { title: "Frontend Development", desc: "React.js, Next.js, JavaScript, Tailwind CSS" },
    { title: "Authentication & Security", desc: "JWT Authentication, RBAC, Request Validation" },
    { title: "DevOps & Cloud", desc: "Docker, Kubernetes, Azure, Jenkins, CI/CD" },
  ],
  stats: [
    { label: "Experience", value: "3 Years", detail: "Professional Web Dev" },
    { label: "REST APIs", value: "30+", detail: "Developed & Integrated" },
    { label: "B.Tech CGPA", value: "8.20", detail: "GCOE Chandrapur" },
    { label: "Core Stacks", value: "Python / React", detail: "Full Stack Ecosystem" },
  ],
};
