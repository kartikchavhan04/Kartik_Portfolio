# Kartik Chavhan — Developer Portfolio Website

> **Modern, High-Performance, Animated Developer Portfolio for Kartik Chavhan, Python Full Stack Developer.**

![Portfolio Preview](/public/images/og-preview.png)

## 📌 Project Overview

This repository contains the official personal portfolio website for **Kartik Chavhan**, a Python Full Stack Developer. Engineered to serve as a high-impact digital presence for recruiters, engineering managers, and clients, it showcases verified technical competencies, corporate experience, enterprise projects, academic records, and a downloadable PDF resume.

---

## 🚀 Key Highlights & Architecture

- **Visual Theme:** Premium dark mode aesthetic (`#06090e`) with cyan and emerald accents, glassmorphic card containers, and responsive typography.
- **Micro-Animations:** Fluid entrance transitions, live typing/role switcher, interactive terminal card, and scroll reveals powered by **Framer Motion**.
- **Interactive Resume Modal:** In-browser resume viewer enabling hiring managers to preview verified experience, credentials, and achievements instantly without navigating away.
- **Verified Data:** Strictly verified academic history (**B.Tech CSE with 8.20 CGPA** at Government College of Engineering, Chandrapur), full-time role at **Gavkari Agro Producer Company Limited**, and real project contributions.
- **Direct PDF Resume:** Includes `public/resume.pdf` generated with automated styling and linked to single-click downloads across desktop and mobile.
- **Contact Form & Validation:** Interactive contact form with input validation, copy-to-clipboard email utility, and instant feedback.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React.js (v19) + Vite (v8) |
| **Styling & Design System** | Tailwind CSS (v3.4), Custom Glassmorphic Utilities, Responsive Breakpoints |
| **Motion & Animation** | Motion for React (`framer-motion`) |
| **Icons & Media** | Lucide React + Bespoke Brand SVGs |
| **Document Generation** | PDFKit (Headless automated resume compilation) |
| **Deployment Target** | Static Hosting (Vercel, Netlify, or GitHub Pages) with free SSL |

---

## 📂 Project Structure

```
├── public/
│   ├── images/
│   │   ├── hero-card.jpg
│   │   └── og-preview.png
│   ├── favicon.svg
│   └── resume.pdf                     # Compiled PDF resume
├── scripts/
│   └── generateResume.js              # Script to build PDF resume
├── src/
│   ├── components/
│   │   ├── Footer.jsx                 # Footer with socials & back-to-top
│   │   ├── Icons.jsx                  # Brand SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx                 # Sticky glassmorphic navbar & mobile drawer
│   │   ├── ProjectCard.jsx            # Project card with expandable architecture
│   │   ├── ResumeModal.jsx            # Interactive in-browser resume modal
│   │   ├── SectionHeading.jsx         # Section titles with badges
│   │   ├── SkillCard.jsx              # Categorized tech stacks
│   │   └── SocialLinks.jsx            # Verified social channels & copy-email
│   ├── data/
│   │   ├── education.js               # B.Tech, HSC, SSC verified data
│   │   ├── experience.js              # Gavkari Agro verified corporate role
│   │   ├── profile.js                 # Bio, roles, quick stats
│   │   ├── projects.js                # 5 verified projects data
│   │   └── skills.js                  # 5 technical categories
│   ├── sections/
│   │   ├── About.jsx                  # Summary & engineering pillars
│   │   ├── Contact.jsx                # Contact info & validated form
│   │   ├── Education.jsx              # Academic timeline & highlights
│   │   ├── Experience.jsx             # Work experience & contributions
│   │   ├── Hero.jsx                   # Role switcher, CTA & code terminal
│   │   ├── Projects.jsx               # Filterable projects grid
│   │   └── Skills.jsx                 # Filterable skill cards
│   ├── App.jsx                        # Layout composition & modal state
│   ├── index.css                      # Tailwind directives & luxury styling
│   └── main.jsx                       # React DOM root
├── index.html                         # SEO tags, OpenGraph & Favicon
├── tailwind.config.js                 # Curated color tokens & animations
└── package.json
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- Node.js (v18+ or v24+ recommended)
- npm or yarn

### 2. Clone Repository
```bash
git clone https://github.com/kartikchavhan/Kartik_Protfolio.git
cd Kartik_Protfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. (Optional) Rebuild PDF Resume
```bash
node scripts/generateResume.js
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Production Build
```bash
npm run build
```
The compiled, minified bundle will be in the `dist/` directory, ready for deployment.

---

## 🚢 Free Hosting Deployment Guide

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **Add New Project** and select `Kartik_Protfolio`.
4. Framework Preset: **Vite** (auto-detected).
5. Click **Deploy**. Vercel will build and assign a free HTTPS domain (e.g., `kartik-chavhan.vercel.app`).

### Option 2: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Click **Import from Git** and choose this repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**. Netlify provides an automatic HTTPS subdomain.

### Option 3: Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"homepage": "https://kartikchavhan.github.io/Kartik_Protfolio"` in `package.json`.
3. Add `"deploy": "gh-pages -d dist"` in `package.json` scripts.
4. Run `npm run build && npm run deploy`.

---

## 🛡️ Content Integrity & Compliance

- **No Fabricated Roles:** Only verified employment at Gavkari Agro Producer Company Limited is listed.
- **Accurate Academics:** B.Tech (CGPA 8.20), HSC (75.50%), and SSC (80.00%) match official institution records.
- **Honest Skill Inventory:** Displaying real technologies with demonstrated practical implementation.

---

## 📄 License
Created by Kartik Chavhan &bull; Open for personal developer portfolio reference.
