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
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primaryColor = '#0f172a';
const accentColor = '#0284c7';
const darkGrey = '#334155';
const lightGrey = '#64748b';

// Header
doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text('KARTIK CHAVHAN', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica-Bold').fillColor(accentColor).text('PYTHON FULL STACK DEVELOPER', { align: 'center' });
doc.moveDown(0.3);

doc.fontSize(9).font('Helvetica').fillColor(darkGrey).text(
  'Maharashtra, India  |  kartikchavhan.dev@gmail.com  |  linkedin.com/in/kartik-chavhan  |  github.com/kartikchavhan',
  { align: 'center' }
);
doc.moveDown(0.6);

// Helper for horizontal rule
const drawSectionHeader = (title) => {
  doc.moveDown(0.4);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text(title.toUpperCase());
  doc.strokeColor(accentColor).lineWidth(1.2).moveTo(45, doc.y + 2).lineTo(550, doc.y + 2).stroke();
  doc.moveDown(0.5);
};

// Summary
drawSectionHeader('Professional Summary');
doc.fontSize(9.5).font('Helvetica').fillColor(darkGrey).text(
  'Results-driven Python Full Stack Developer with strong expertise in architecting scalable backend web services using Python, Django, Django REST Framework, and FastAPI, alongside responsive, modern frontends with React.js and Angular. Hands-on experience modeling relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases, implementing robust JWT and Role-Based Access Control security, and deploying containerized applications with Docker, Jenkins CI/CD, and Azure DevOps.',
  { lineGap: 2.5 }
);

// Technical Skills
drawSectionHeader('Technical Skills');
const skillsList = [
  ['Backend Frameworks:', 'Python, Django, Django REST Framework, FastAPI, Flask'],
  ['Frontend Technologies:', 'React.js, Angular, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS'],
  ['Databases & Storage:', 'PostgreSQL, MySQL, MongoDB'],
  ['API Architecture & Security:', 'RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC)'],
  ['DevOps & Engineering Tools:', 'Docker, Kubernetes, Jenkins CI/CD, Azure DevOps, Git, GitHub'],
];

skillsList.forEach(([category, list]) => {
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text(category + ' ', { continued: true });
  doc.font('Helvetica').fillColor(darkGrey).text(list);
  doc.moveDown(0.15);
});

// Work Experience
drawSectionHeader('Professional Experience');
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Gavkari Agro Producer Company Limited', { continued: true });
doc.fontSize(9).font('Helvetica-Bold').fillColor(accentColor).text('  — Full Stack Developer', { align: 'left' });
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(lightGrey).text('August 2023 – Present  |  Maharashtra, India');
doc.moveDown(0.3);

const expBullets = [
  'Architected scalable full-stack web applications and high-throughput REST APIs using Django and Django REST Framework.',
  'Engineered secure JWT token-based authentication and Role-Based Access Control (RBAC) across multiple administrative tiers.',
  'Structured relational database schemas in PostgreSQL and MySQL, optimizing ORM queries and indexing for accelerated retrieval.',
  'Developed responsive, intuitive frontend dashboards and data visualization modules in React.js.',
  'Containerized services using Docker and automated CI/CD deployment pipelines with Jenkins, improving deployment velocity.',
];

expBullets.forEach((bullet) => {
  doc.fontSize(8.5).font('Helvetica').fillColor(darkGrey).text('•  ' + bullet, { indent: 10, lineGap: 1.5 });
});

// Selected Projects
drawSectionHeader('Key Technical Projects');

const projectItems = [
  {
    name: 'Cab Service Provider Platform',
    stack: 'Django, Angular, PostgreSQL, Docker, Jenkins, REST APIs',
    desc: 'Automated ride scheduling, dynamic fare calculation, driver allocation, and complete booking lifecycles with containerized Jenkins CI/CD pipelines.',
  },
  {
    name: 'Mahanidhi Loan Application Portal',
    stack: 'Python, Django, MySQL, React.js, Tailwind CSS, JWT Auth',
    desc: 'Digital lending workflow system featuring applicant verification pipelines, interactive EMI calculator, and multi-tier approval hierarchy with RBAC.',
  },
  {
    name: 'Shree Vasantrao Bhumiputr Karmachari Community Portal',
    stack: 'React.js, Python, Django REST Framework, PostgreSQL, Tailwind CSS',
    desc: 'Centralized member directory platform with dynamic filtering, grievance submission desk, and administrative circular broadcasts.',
  },
  {
    name: 'Maharashtra Police Bharti Student Platform',
    stack: 'Python, Django, React.js, PostgreSQL, Tailwind CSS',
    desc: 'Timed online exam simulator with immediate result analytics, subject classification, and low-bandwidth mobile optimization.',
  },
  {
    name: 'Prakash Medical and General Store Management',
    stack: 'Python, Django, MySQL, JavaScript, Tailwind CSS',
    desc: 'Rapid point-of-sale checkout system with automated batch expiry alerts, inventory reorder thresholds, and sales invoice generation.',
  },
];

projectItems.forEach((p) => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text(p.name + '  |  ', { continued: true });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(accentColor).text(p.stack);
  doc.fontSize(8.5).font('Helvetica').fillColor(darkGrey).text('•  ' + p.desc, { indent: 10, lineGap: 1.2 });
  doc.moveDown(0.2);
});

// Education
drawSectionHeader('Education');
const edu = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Government College of Engineering, Chandrapur',
    score: 'CGPA: 8.20 / 10.0',
    year: '2022 – 2026',
  },
  {
    degree: 'Higher Secondary Certificate (HSC - 12th)',
    school: 'P.N. College, Pusad',
    score: 'Percentage: 75.50%',
    year: '2021 – 2022',
  },
  {
    degree: 'Secondary School Certificate (SSC - 10th)',
    school: 'J.S.P.M. Mahavidhyalay, Pusad',
    score: 'Percentage: 80.00%',
    year: '2019 – 2020',
  },
];

edu.forEach((e) => {
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text(e.degree, { continued: true });
  doc.font('Helvetica').fillColor(darkGrey).text(' — ' + e.school + '  (' + e.year + ')', { continued: true });
  doc.font('Helvetica-Bold').fillColor(accentColor).text('  [' + e.score + ']');
  doc.moveDown(0.15);
});

doc.end();

writeStream.on('finish', () => {
  console.log('PDF resume successfully generated at:', outputPath);
});
