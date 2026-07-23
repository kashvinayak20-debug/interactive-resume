# 📘 Kashvi.dev Interactive Portfolio & Resume — Complete Codebase & Line-by-Line Explanation Guide

Welcome to the complete code explanation guide for **Kashvi.dev Interactive Portfolio & Resume Engine**. This document provides an exhaustive, line-by-line and section-by-section breakdown of every HTML structure, CSS styling rule, and JavaScript logic file in your repository.

---

## 📂 Project Structure Overview

```
interactive-resume/
├── index.html           # Main Semantic HTML5 Webpage Structure & Modals
├── css/
│   └── styles.css       # Complete Design System, Glassmorphism, Animations & Print CSS
├── js/
│   ├── app.js           # Core Application Logic, Admin Auth, State Persistence, PDF Generator
│   ├── particles.js     # Animated Cyberpunk Particle Background Canvas Engine
│   ├── draggable.js     # Touch & Pointer Interactive Skill Chips Playground
│   └── terminal.js      # Interactive Developer Command Line Interface (CLI) Engine
└── CODE_EXPLANATION.md  # Detailed Line-by-Line Architectural Guide
```

---

## 📄 1. `index.html` — Webpage Layout & Component Breakdown

### Head Section (Lines 1 — 43)
- **Lines 1-6**: Declares `<!DOCTYPE html>` HTML5 standard with `<html lang="en">` and UTF-8 encoding.
- **Lines 8-37**: SEO & Social Metadata tags. Includes Google Search Console Verification ID (`googled4ef04c392d898fc`), meta description, keywords, OpenGraph card meta tags for LinkedIn/Twitter previews, and JSON-LD structured schema markup (`Person` schema for Kashvi Nayak).
- **Lines 40-42**: Imports FontAwesome v6.5.1 icons CDN for clean UI icons and links to `css/styles.css`.

### Visual FX & Background Canvas (Lines 44 — 54)
- **Line 47**: `<canvas id="particlesCanvas"></canvas>` — Renders the dynamic moving network node particle background driven by `js/particles.js`.
- **Line 50**: `<div class="cursor-glow"></div>` — Ambient glow circle following mouse movements.
- **Lines 53-54**: Glassmorphic ambient color blobs (`blob-1`, `blob-2`) generating cyan/purple background gradients.

### Sticky Navigation Header (Lines 57 — 94)
- **Lines 58-61**: Brand Logo (`Kashvi.dev`) with a pulsating cyan dot.
- **Lines 63-71**: Navigation links (`#hero`, `#deployed`, `#skills-section`, `#projects`, `#certificates`, `#timeline`, `#terminal`) enabling smooth-scrolling page navigation.
- **Lines 73-93**: Header Controls:
  - Theme picker dropdown (`#themeSelect`) for switching between Cyberpunk Dark, Synthwave, Emerald, and Obsidian.
  - Admin Portal toggle button (`#adminToggleBtn`).
  - Profile Editor trigger (`#openEditorBtn`, visible in admin mode).
  - Download PDF Resume button (`onclick="downloadPDF()"`).

### Hero Section & Developer Mascot (Lines 100 — 179)
- **Lines 101-125**: Headline, executive bio (`#dispBio`), location badge (`Bhubaneswar, Odisha`), education badge (`B.Tech Computer Science`), and language badge (`English, Hindi & Odia`).
- **Lines 127-130**: Quick action call-to-action buttons linking to Cloud Apps and GitHub Projects.
- **Lines 134-178**: Interactive 3D Developer Mascot Widget. Renders an animated SVG avatar card with floating tech badges (`<FullStack/>`, `AI / ML`) and direct contact buttons.

### Page Content Sections (Lines 183 — 317)
- **Lines 183-193**: `#deployed` — Grid container (`#deployedProjectsContainer`) rendering live cloud applications.
- **Lines 197-207**: `#skills-section` — Container (`#skillsBarsContainer`) rendering technical skill progress bars with percentage values.
- **Lines 211-233**: `#skills` — Movable Skill Playground canvas (`.draggable-playground`) containing draggable skill chips (`.skill-chip-movable`).
- **Lines 237-255**: `#projects` — Category filters (All, Full-Stack, Python, Web) and Grid container (`#projectsContainer`) for GitHub repository cards.
- **Lines 259-269**: `#certificates` — Verified credentials grid (`#certificatesContainer`) showing 8 engineering & internship certificates.
- **Lines 273-283**: `#timeline` — Vertical experience timeline (`#timelineContainer`) prioritizing active working roles and academic credentials.
- **Lines 287-315**: `#terminal` — Interactive CLI terminal card (`.terminal-card`) with output log screen (`#termOutput`) and command prompt input (`#termInput`).

### Admin Dialog Modals (Lines 320 — 737)
- Modals for adding/editing Skills (`#addSkillModal`), Projects (`#addProjectModal`), Deployed Apps (`#addDeployedModal`), Timeline Entries (`#addTimelineModal`), Certificates (`#addCertModal`), Profile Bio Editor (`#editModal`), Admin Login (`#loginModal`), and Forgot Password (`#forgotPasswordModal`).

---

## 🎨 2. `css/styles.css` — Design System & Print CSS Explanation

### CSS Custom Variables & Design System (Lines 1 — 35)
- Defines design tokens for background colors (`--bg-primary`, `--bg-secondary`), glassmorphism borders (`--border-glass`, `--border-glow`), cyan/purple accents, typography fonts (`Inter`, `Fira Code`), and smooth transition timings (`0.3s ease`).

### Theme Variations (Lines 36 — 75)
- Class-based theme overrides:
  - `body.theme-synthwave`: Warm neon pink/purple palette.
  - `body.theme-emerald`: Deep forest glass green palette.
  - `body.theme-obsidian`: Ultra-dark jet-black aesthetic.

### Layout & Animations (Lines 76 — 350)
- **Glassmorphism**: Backdrop blur filters (`backdrop-filter: blur(16px)`) applied to `.project-card`, `.modal-card`, and header navigation.
- **3D Tilt Preservation**: `transform-style: preserve-3d` and `will-change: transform` prevent border vibration or text jittering during hover.
- **Scroll Reveal Animations**: Classes `.reveal-item`, `.reveal-from-left`, `.reveal-from-right`, `.reveal-from-top`, `.reveal-from-bottom` control CSS entrance transitions.

### Executive PDF Print CSS (Lines 625 — 745)
- `@media print`: Hides interactive webpage UI elements (`header`, background particle canvas, buttons, modals) and reveals `#printableResumeArea`.
- `@page { size: A4 portrait; margin: 1.2cm; }`: Formats printed PDF pages into standard A4 document layout with clean typography and custom section dividers.

---

## ⚡ 3. `js/app.js` — Core JavaScript Engine Line-by-Line Explanation

### Data State Arrays (Lines 1 — 316)
- **`skillList`**: Holds technical skill objects with `id`, `name`, `percent`, `icon`.
- **`deployedList`**: Stores cloud-deployed live applications with `demoUrl`, `codeUrl`, `tags`, `desc`.
- **`projectList`**: Stores GitHub repositories and software engineering projects with tags and category filters.
- **`certificateList`**: Array of 8 verified certificates (DRDO, LLM Python, DecodeLabs, IIT Madras, Generative AI, NIRMAN 5.0, NIRMAN 4.0, SparkUp Summit).
- **`timelineList`**: Array of career experience and education entries ordered with active roles at top and B.Tech entry directly above Class XI – XII.

### Initialization & Event Listeners (Lines 318 — 345)
- Listens for `DOMContentLoaded` to load saved state (`loadStateFromLocalStorage()`), initialize theme pickers, 3D tilt effects, project filters, CRUD modals, and render all UI components.

### 60fps Scroll Reveal Engine (Lines 347 — 370)
```javascript
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Prevents layout oscillation / card vibration
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
```
- Uses `IntersectionObserver` to trigger scroll entrance animations. Calling `observer.unobserve(entry.target)` locks revealed cards in place and prevents flickering during slow scrolling.

### Admin Authentication & Password Reset (Lines 550 — 750)
- **Default Credentials**: `kashvinayak20-debug` / `kashvinayak20@gmail.com` (password `admin123`).
- **Forgot Password Dispatch**:
  - `fetch("https://formsubmit.co/ajax/" + email, ...)` sends a real 6-digit verification code to `kashvinayak20@gmail.com` in the background.
  - Verification code is hidden from the UI to protect security.
  - User enters the 6-digit code received in their Gmail inbox to update their password.

### Rendering Components (Lines 880 — 1280)
- **`renderProjects()`**: Renders project cards with category filters, live demo links, and GitHub code buttons.
- **`renderCertificates()`**: Renders all 8 verified credentials in a responsive grid layout.
- **`renderTimeline()`**: Sorts items so `Currently Working` roles appear at the top, followed by certifications, B.Tech CSE, and school entries in Roman numerals (`Class XI – XII`, `Class I – X`).

### State Persistence & PDF Generator (Lines 1298 — 1545)
- **`saveStateToLocalStorage()`**: Saves skills, projects, deployed apps, certificates, timeline, and bio profile into `localStorage` so changes persist across page refreshes.
- **`generatePrintableResumeHTML()`**: Populates `#printableResumeArea` with structured executive resume sections (Bio, Skills, Languages, Experience, Certifications, Deployed Projects with `[DEPLOYED]` indicators).
- **`downloadPDF()`**: Invokes `generatePrintableResumeHTML()` and triggers `window.print()` for instant A4 PDF resume generation.

---

## 💻 4. `js/particles.js` — Particle Background Animation Engine

- **Canvas Context Initialization**: Obtains 2D rendering context of `#particlesCanvas` and dynamically resizes on window resize events.
- **Particle Objects**: Spawns 70 network nodes moving at random velocities.
- **Connecting Lines**: Calculates distance between particles using Pythagorean theorem (`dx*dx + dy*dy`). Draws connecting lines when distance is less than 120px, creating a glowing neural network effect.

---

## 🖐️ 5. `js/draggable.js` — Interactive Drag & Drop Skill Chips

- **Pointer & Touch Listeners**: Attaches `mousedown`, `mousemove`, `mouseup`, `touchstart`, `touchmove`, `touchend` event listeners to `.skill-chip-movable` elements.
- **Position Tracking**: Computes relative offsets `e.clientX - initialX` and updates `element.style.left` / `element.style.top` in real-time, allowing free movement across the playground.

---

## 💻 6. `js/terminal.js` — Interactive Developer CLI Terminal Engine

- **Command Processor**: Processes input commands (`help`, `skills`, `projects`, `contact`, `theme`, `clear`).
- **Terminal Output**: Appends command responses to `#termOutput` and automatically scrolls down to the latest line.

---

## 💡 Summary
This codebase is engineered to be **modular**, **performant (60fps)**, **fully persistent (`localStorage`)**, **SEO-optimized**, and **production-ready**. You can modify data arrays in `js/app.js` or use the built-in Admin Portal directly on your live website!
