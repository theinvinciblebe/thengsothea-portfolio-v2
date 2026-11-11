# Theng Sothea — Personal Web Developer Portfolio

An ultra-modern, high-performance portfolio website for **Theng Sothea** ([t-sothea-portfolio.vercel.app](https://t-sothea-portfolio.vercel.app/)), crafted with semantic HTML5, modern vanilla CSS, and an interactive vanilla JavaScript engine.

---

## 🌟 Key Features

1. **Cinematic Welcome Overlay (`#welcome-overlay`)**:
   - Angkor Wat silhouette backdrop with ambient cyan lighting and glassmorphism
   - High-resolution avatar of Theng Sothea with animated glow ring
   - Interactive "Enter Portfolio" button with keyboard shortcut support (`Enter` / `Space`)
   - Smooth exit blur transition

2. **Bilingual Support (English & Khmer)**:
   - Instant language switching pill in the sticky navbar (`EN` / `KH`) with flag indicators
   - Khmer typography support powered by Google Font **Kantumruy Pro**
   - Full translation coverage across all navigation links, titles, bios, experience, and footer
   - Preference saved in `localStorage`

3. **Sticky Navigation Bar (`#navbar`)**:
   - Glassmorphic backdrop blur with active ScrollSpy link tracking
   - Animated rainbow text logo: `<Theng Sothea />`
   - Dark & Light mode theme switcher with persistence in `localStorage`
   - Mobile navigation drawer

4. **Hero Section (`#home`)**:
   - Animated typewriter role cycling through Sothea's real-world specializations:
     - *Full Stack Web Developer*
     - *Laravel & PHP Specialist*
     - *React & JavaScript Enthusiast*
     - *UI/UX Minded Creator*
   - Status indicators: "Available for Work", "Full Stack Developer", "SETEC Graduate (2026)"
   - Direct links to LinkedIn, GitHub, Telegram, and Email
   - "View CV" button triggering an interactive PDF modal viewer

5. **About Me (`#about`)**:
   - Profile card with glowing border and hover micro-interaction
   - Authentic biography and background from SETEC Institute (Bachelor of MIS)
   - Core highlights: Location (Phnom Penh, Cambodia), Education, 2+ Years Experience, Core Stack
   - Interactive technology chips

6. **Skills & Technologies (`#skills`)**:
   - Dual-directional infinite marquees featuring Devicon and Font Awesome logos
   - Categorized skill cards with animated progress meters:
     - **Frontend Development**: HTML5 & CSS3 (90%), Tailwind CSS & Bootstrap (85%), JavaScript & jQuery (80%), React.js (75%)
     - **Backend & ERP Development**: Laravel Framework (85%), PHP Core (85%), Odoo ERP & Python / Django (75%), ASP.NET & C# (65%)
     - **Database & DevOps**: PostgreSQL & MySQL (85%), SQLite & MongoDB (75%), Git & GitHub (85%), Linux, CPanel & Hostinger (80%)

7. **Professional Experience Timeline (`#experience`)**:
   - Central glowing timeline track with circular milestone markers:
     - **Full Stack Web Developer** @ Freelance & Personal Projects (2022 - Present)
     - **Bachelor of MIS** @ SETEC Institute, Phnom Penh (2022 - 2026)
     - **High School Baccalaureate (BacII)** @ Hun Sen Steong Trang High School (2016 - 2019)

8. **Featured Projects (`#projects`)**:
   - Category filter tabs (**All Projects**, **Web & Full-Stack**, **Systems & Software**)
   - 6 Project cards with image zoom, tags, live demos, video walkthroughs, and GitHub source links:
     - **Business Cambodia Clone** (HTML5, CSS3, JS) — Live Demo + GitHub
     - **School Management System** (Laravel, PHP, MySQL, Bootstrap, jQuery) — Video Demo + GitHub
     - **CMS Gaming Product** (Laravel, PHP, MySQL, Bootstrap, jQuery) — Live Demo + GitHub
     - **BookStore POS System** (Java, Maven, MySQL) — Video Demo + GitHub
     - **E-Commerce Application** (Python, Django, SQLite, Bootstrap) — Video Demo + GitHub
     - **Depreciation System** (PHP, MySQL, Accounting) — Video Demo + GitHub

9. **Academic Background (`#education`)**:
   - Bachelor of Management Information Systems (MIS) @ SETEC Institute (Graduated: 2026)
   - High School Diploma (BACII) @ Hun Sen Steong Trang High School (Graduated: 2019)

10. **Interactive Community Guestbook (`#guestbook`)**:
    - Visitor message form with real-time posting
    - Pre-loaded feedback from colleagues praising Sothea's Laravel systems and web projects
    - Auto-scrolling ticker with pause on hover and `localStorage` persistence

11. **Direct Contact Section (`#contact`)**:
    - Direct communication channels:
      - Email: `sotheatheng2002@gmail.com`
      - Phone: `+855 867 248 55`
      - Telegram: `https://t.me/sotheatheng2002`
      - LinkedIn: `https://www.linkedin.com/in/theng-sothea-2b0327306/`
    - Functional interactive contact form

12. **Curriculum Vitae Modal Viewer (`#cv-modal`)**:
    - In-browser full document preview of `THENG-SOTHEA_CV.pdf`
    - One-click download button and open-in-new-tab controls

---

## 📁 Project Structure

```text
thengsothea-portfolio-v2/
├── index.html            # Main portfolio with interactive template switcher
├── template-forest.html  # Standalone Edition 1: Forest & Cream (#00371c & #fffbda)
├── template-cyan.html    # Standalone Edition 2: Cyber Cyan (#06b6d4 & #22d3ee)
├── style.css             # Design tokens for dual templates across dark & light themes
├── script.js             # Core controller (templates, i18n EN/KM, theme transitions, filters)
├── Topography.jsx        # React Bits Topography 3D Component source
├── Topography.css        # Topography stylesheet
├── topography.js         # Pure WebGL 2 Topography engine for welcome screen background
├── Lanyard.jsx           # React Bits Lanyard 3D Component source
├── Lanyard.css           # Lanyard stylesheet
├── lanyard.js            # Three.js 3D interactive physics lanyard badge engine
├── lanyard.esm.js        # ES Module adapter
├── assets/               # Portrait, CV PDF, project screenshots, flag SVGs
└── README.md             # Documentation
```

---

## 🚀 Running the Project

You can run this project locally using Python's built-in web server or any static file server:

```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
