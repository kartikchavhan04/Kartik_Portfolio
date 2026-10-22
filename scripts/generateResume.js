import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'resume.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
  autoFirstPage: true,
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const primary = '#000000';
const darkGrey = '#1e293b';
const lightGrey = '#475569';

const drawRule = () => {
  doc.moveDown(0.3);
  doc.strokeColor('#94a3b8').lineWidth(0.6).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.4);
};

const drawSectionTitle = (title) => {
  doc.fontSize(10.5).font('Helvetica-Bold').fillColor(primary).text(title.toUpperCase());
  drawRule();
};

// --- HEADER ---
const leftX = 40;
const rightX = 350;
const rightWidth = 205;

doc.fontSize(16).font('Helvetica-Bold').fillColor(primary).text('Kartik Chavhan', leftX, doc.y);
const headerY = doc.y - 18;
doc.fontSize(9.5).font('Helvetica').fillColor(primary).text('kartikpchachan2004@gmail.com', rightX, headerY, { align: 'right', width: rightWidth });

doc.fontSize(9.5).font('Helvetica').fillColor(primary).text('linkedin.com/in/kartik-chavhan-5428502a1/', leftX, doc.y + 3);
const phoneY = doc.y - 12;
doc.fontSize(9.5).font('Helvetica').fillColor(primary).text('9322763544', rightX, phoneY, { align: 'right', width: rightWidth });

doc.moveDown(0.8);

// --- PROFESSIONAL SUMMARY ---
drawSectionTitle('Professional Summary');
doc.fontSize(9).font('Helvetica').fillColor(darkGrey).text(
  'Python Full Stack Developer with 3 years of professional experience in web application development, backend engineering, and REST API development. Developed and integrated 30+ REST APIs using Python, Django, Flask, and Django REST Framework. Skilled in frontend development with React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Experienced in SQL, PostgreSQL, MySQL, API integration, request validation, JWT authentication, and role-based access control (RBAC). Familiar with Docker, Kubernetes, Azure DevOps, Jenkins, Git, GitHub, and CI/CD workflows. Focused on maintainable backend services, reliable integrations, and responsive web applications.',
  { lineGap: 2, align: 'justify' }
);
doc.moveDown(0.8);

// --- EXPERIENCE ---
drawSectionTitle('Experience');

// Company & Location
const expY = doc.y;
doc.fontSize(10).font('Helvetica-Bold').fillColor(primary).text('Gavkari Agro Producer Company Limited', leftX, expY);
doc.fontSize(9.5).font('Helvetica').fillColor(primary).text('Pune, Maharashtra', rightX, expY, { align: 'right', width: rightWidth });

// Role & Period
const roleY = doc.y + 1;
doc.fontSize(9).font('Helvetica-Oblique').fillColor(primary).text('Full Stack Developer', leftX, roleY);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('Aug 2023 – Present', rightX, roleY, { align: 'right', width: rightWidth });

doc.moveDown(0.4);

const expBullets = [
  ['REST API Development: ', 'Developed and integrated 30+ REST APIs using Python, Django, Flask, and Django REST Framework to support application workflows, request handling, validation, and backend business logic.'],
  ['Backend Engineering: ', 'Built and maintained backend functionality using Python-based frameworks, connecting application workflows with database operations and external API integrations.'],
  ['Frontend Development: ', 'Developed responsive user interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS, integrating frontend components with backend REST APIs.'],
  ['API Integration and Validation: ', 'Handled API request and response processing, input validation, HTTP error handling, and communication between frontend and backend services.'],
  ['Database Operations: ', 'Worked with MySQL and PostgreSQL for relational data management, SQL queries, table relationships, and application data workflows. Performed database query optimization; exact before-and-after performance measurements are not currently available.'],
  ['Authentication and Authorization: ', 'Worked with JWT authentication and role-based access control (RBAC) to secure API endpoints and support role-specific access.'],
  ['Containerization and Deployment: ', 'Used Docker and worked with Kubernetes, Azure DevOps, and CI/CD workflows to support application containerization and deployment.'],
  ['Version Control and Collaboration: ', 'Used Git and GitHub for source control, branch management, code collaboration, and tracking application changes.'],
];

expBullets.forEach(([lead, body]) => {
  doc.fontSize(8.5).font('Helvetica').fillColor(darkGrey).text('• ', { continued: true });
  doc.font('Helvetica-Bold').fillColor(primary).text(lead, { continued: true });
  doc.font('Helvetica').fillColor(darkGrey).text(body, { lineGap: 1.5 });
  doc.moveDown(0.15);
});

doc.moveDown(0.6);

// --- PROJECTS ---
drawSectionTitle('Projects');

// Project 1
const p1Y = doc.y;
doc.fontSize(10).font('Helvetica-Bold').fillColor(primary).text('Cab Service Provider', leftX, p1Y);
doc.fontSize(9).font('Helvetica-Oblique').fillColor(primary).text('Aug 2023 – Nov 2024', rightX, p1Y, { align: 'right', width: rightWidth });
doc.moveDown(0.3);

const p1Bullets = [
  ['Project Overview: ', 'Developed a cab service backend integrating payment workflows with Mahindra Finance’s loan collection process'],
  ['Full Stack Development: ', 'Developed full-stack features using Angular for the frontend and Python Django for the backend, integrating REST APIs to support cab payment and loan collection workflows'],
  ['Backend Development: ', 'Developed and maintained RESTful APIs using Python and Django to handle cab payments, loan collection, business logic, and request validation'],
  ['Database & Frontend Integration: ', 'Worked with PostgreSQL database schemas and queries, integrating Django backend services with Angular frontend workflows'],
  ['CI/CD & Third-Party Integration: ', 'Used Jenkins and Docker to support automated build and deployment workflows and integrated external financial services for reliable data exchange'],
  ['Performance Optimization: ', 'Improved API response time by 30% through database query optimization and caching strategies, if verified by actual measurements'],
  ['Tech Stack: ', 'Python, Django, Angular, PostgreSQL, Jenkins, Docker, REST APIs'],
];

p1Bullets.forEach(([lead, body]) => {
  doc.fontSize(8.5).font('Helvetica').fillColor(darkGrey).text('• ', { continued: true });
  doc.font('Helvetica-Bold').fillColor(primary).text(lead, { continued: true });
  doc.font('Helvetica').fillColor(darkGrey).text(body, { lineGap: 1.5 });
  doc.moveDown(0.15);
});

doc.moveDown(0.5);

// Project 2
const p2Y = doc.y;
doc.fontSize(10).font('Helvetica-Bold').fillColor(primary).text('Mahanidhi Loan Application', leftX, p2Y);
doc.fontSize(9).font('Helvetica-Oblique').fillColor(primary).text('Nov 2024 – Present', rightX, p2Y, { align: 'right', width: rightWidth });
doc.moveDown(0.3);

const p2Bullets = [
  ['Project Overview: ', 'Worked on a microservices-based lending application supporting customer onboarding and loan processing across web and mobile platforms'],
  ['Backend Development: ', 'Developed RESTful APIs using Python, Django, and Flask to implement business logic, request validation, and loan processing workflows'],
  ['Microservices Architecture: ', 'Worked with independently deployable services to support modular application development, service integration, and scalability'],
  ['Integration & Deployment: ', 'Integrated third-party services and supported CI/CD workflows for building and deploying application services'],
  ['Monitoring & Reliability: ', 'Contributed to application logging, troubleshooting, and service reliability improvements to support production operations'],
  ['Tech Stack: ', 'Python, Django, Flask, PostgreSQL, Docker, Microservices, CI/CD, REST APIs'],
];

p2Bullets.forEach(([lead, body]) => {
  doc.fontSize(8.5).font('Helvetica').fillColor(darkGrey).text('• ', { continued: true });
  doc.font('Helvetica-Bold').fillColor(primary).text(lead, { continued: true });
  doc.font('Helvetica').fillColor(darkGrey).text(body, { lineGap: 1.5 });
  doc.moveDown(0.15);
});

// --- PAGE 2 ---
doc.addPage();

// TECHNICAL SKILLS
drawSectionTitle('Technical Skills');

const skillsList = [
  ['Programming Languages: ', 'Python, JavaScript, SQL'],
  ['Backend Development: ', 'Django, Django REST Framework, Flask, FastAPI, RESTful APIs, API Integration, Microservices'],
  ['Authentication and Security: ', 'JWT Authentication, Role-Based Access Control (RBAC), Request Validation, HTTP Error Handling'],
  ['Frontend Development: ', 'React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, React Router, Axios'],
  ['Databases and ORM: ', 'PostgreSQL, MySQL, MongoDB, SQLAlchemy, Mongoose, Flask-Migrate'],
  ['DevOps and Cloud: ', 'Docker, Kubernetes, Azure Cloud, Azure DevOps, Jenkins, CI/CD Pipelines, Nginx, Traefik'],
  ['Development Tools: ', 'Git, GitHub, Postman, Linux, Visual Studio Code'],
  ['Core Concepts: ', 'Object-Oriented Programming (OOP), Data Structures, Algorithms, Database Design, REST API Design, Microservices Architecture, Multi-Tenancy, System Design'],
  ['AI & LLM: ', 'LLM Fundamentals, Prompt Engineering, RAG Fundamentals, LangChain, Vector Databases, AI Agents'],
];

skillsList.forEach(([lead, body]) => {
  doc.fontSize(9).font('Helvetica').fillColor(darkGrey).text('• ', { continued: true });
  doc.font('Helvetica-Bold').fillColor(primary).text(lead, { continued: true });
  doc.font('Helvetica').fillColor(darkGrey).text(body, { lineGap: 2 });
  doc.moveDown(0.2);
});

doc.moveDown(0.8);

// EDUCATION
drawSectionTitle('Education');

// 1. GCOE Chandrapur
const edu1Y = doc.y;
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primary).text('Government College of Engineering, Chandrapur', leftX, edu1Y);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('Chandrapur, Maharashtra', rightX, edu1Y, { align: 'right', width: rightWidth });
const deg1Y = doc.y + 1;
doc.fontSize(9).font('Helvetica-Oblique').fillColor(darkGrey).text('B.Tech Computer Science & Engineering (CGPA: 8.20)', leftX, deg1Y);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('2022 – 2026', rightX, deg1Y, { align: 'right', width: rightWidth });

doc.moveDown(0.5);

// 2. PN College Pusad
const edu2Y = doc.y;
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primary).text('P.N. College, Pusad', leftX, edu2Y);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('Pusad, Maharashtra', rightX, edu2Y, { align: 'right', width: rightWidth });
const deg2Y = doc.y + 1;
doc.fontSize(9).font('Helvetica-Oblique').fillColor(darkGrey).text('HSC (75.50%)', leftX, deg2Y);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('2021 – 2022', rightX, deg2Y, { align: 'right', width: rightWidth });

doc.moveDown(0.5);

// 3. JSPM Pusad
const edu3Y = doc.y;
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primary).text('J.S.P.M. Mahavidhyalay, Pusad', leftX, edu3Y);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('Pusad, Maharashtra', rightX, edu3Y, { align: 'right', width: rightWidth });
const deg3Y = doc.y + 1;
doc.fontSize(9).font('Helvetica-Oblique').fillColor(darkGrey).text('SSC (80.00%)', leftX, deg3Y);
doc.fontSize(9).font('Helvetica').fillColor(primary).text('2019 – 2020', rightX, deg3Y, { align: 'right', width: rightWidth });

doc.end();

writeStream.on('finish', () => {
  console.log('Resume PDF generated at:', outputPath);
});
