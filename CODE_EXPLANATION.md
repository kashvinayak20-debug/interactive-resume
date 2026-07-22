# Kashvi.dev Portfolio — Line-by-Line Code Breakdown & Tutorial

This guide provides an exhaustive, line-by-line breakdown of every script, styling engine, and interactive feature in the **Kashvi.dev** developer portfolio codebase.

---

## 📑 Table of Contents
1. [Main Application Controller (`js/app.js`)](#1-main-application-controller-jsappjs)
2. [Particle Canvas Physics Engine (`js/particles.js`)](#2-particle-canvas-physics-engine-jsparticlesjs)
3. [Movable Skill Playground (`js/draggable.js`)](#3-movable-skill-playground-jsdraggablejs)
4. [Developer CLI Terminal (`js/terminal.js`)](#4-developer-cli-terminal-jsterminaljs)
5. [Design System & Theme Engine (`css/styles.css`)](#5-design-system--theme-engine-cssstylescss)

---

## 1. Main Application Controller (`js/app.js`)

### State Initialization & Data Schemas
```javascript
 1: let isAdmin = false;
 2: 
 3: let skillList = [
 4:   { id: 1, name: "Python & SymPy Engine", percent: 95, icon: "fa-brands fa-python" },
 5:   { id: 2, name: "FastAPI & REST APIs", percent: 92, icon: "fa-solid fa-bolt" },
 6:   ...
12: ];
```
- **Line 1**: Declares `isAdmin` boolean state (default `false`). When `false`, all Edit, Delete, and "+ Add" controls are hidden from public visitors.
- **Lines 3–12**: `skillList` array of objects storing technical skills, completion percentages (0–100%), and FontAwesome icon classes.

```javascript
14: let projectList = [
15:   {
16:     id: 100,
17:     title: "Kashvi.dev Portfolio Engine",
18:     category: "fullstack web",
19:     desc: "Dynamic glassmorphic developer portfolio featuring movable interactive skill widgets...",
20:     tags: ["HTML5", "Glassmorphism CSS", "ES6+ JavaScript", "Admin Security"],
21:     icon: "fa-address-card",
22:     codeUrl: "https://github.com/kashvinayak20-debug/interactive-resume"
23:   },
24:   ...
35: ];
```
- **Lines 14–35**: Array of featured project cards containing title, category filter tags, descriptions, technology stack arrays, and verified GitHub repository URLs.

---

### DOM Initialization Lifecycle
```javascript
75: document.addEventListener("DOMContentLoaded", () => {
76:   initThemePicker();
77:   init3DTiltCard();
78:   initProjectFilters();
79:   initLiveEditorModal();
80: 
81:   renderSkillProgressBars();
82:   renderProjects();
83:   renderTimeline();
84: 
85:   initAddSkillModal();
86:   initProjectModal();
87:   initTimelineModal();
88:   initAdminKeyToggle();
89: });
```
- **Lines 75–89**: Waits for the browser HTML parsing to complete, then initializes theme switchers, 3D tilt tracking, CRUD renderers, and the Admin Passcode controller.

---

### Admin Passcode Access Control
```javascript
92: function initAdminKeyToggle() {
93:   const btn = document.getElementById("adminToggleBtn");
94:   if (!btn) return;
95: 
96:   btn.addEventListener("click", () => {
97:     if (isAdmin) {
98:       isAdmin = false;
99:       document.body.classList.remove("admin-mode");
100:      btn.innerHTML = `<i class="fa-solid fa-lock"></i> Admin Mode`;
101:    } else {
102:      const pin = prompt("Enter Project Head Passcode:");
103:      if (pin === "1234") {
104:        isAdmin = true;
105:        document.body.classList.add("admin-mode");
106:        btn.innerHTML = `<i class="fa-solid fa-lock-open" style="color: var(--accent-emerald);"></i> Admin Active`;
107:      }
108:    }
109:  });
110: }
```
- **Lines 92–110**: Listens to clicks on the Admin Mode lock button. Prompts for secret PIN (`1234`). When verified, adds `admin-mode` CSS class to `document.body`, revealing all `.admin-only` CRUD controls live.

---

### Dynamic Projects Rendering & Delete/Edit Operations
```javascript
210: function renderProjects() {
211:   const container = document.getElementById("projectsContainer");
212:   container.innerHTML = projectList.map((p) => `
213:     <div class="project-card" data-category="${p.category}">
214:       <h3>${p.title}</h3>
215:       <p>${p.desc}</p>
216:       <a href="${p.codeUrl}" target="_blank" class="btn-primary">View GitHub Code</a>
217:       <div class="crud-actions admin-only">
218:         <button class="btn-edit" onclick="editProject(${p.id})">Edit Project</button>
219:         <button class="btn-danger" onclick="deleteProject(${p.id})">Delete</button>
220:       </div>
221:     </div>
222:   `).join("");
223: }
```
- **Lines 210–223**: Dynamically generates project cards using ES6 template literals. Connects direct GitHub links and appends Admin-only Edit and Delete action triggers.

```javascript
225: function deleteProject(id) {
226:   if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
227:   projectList = projectList.filter(p => p.id !== id);
228:   renderProjects();
229: }
```
- **Lines 225–229**: Verifies admin authorization before filtering out target project by `id` and re-rendering the DOM.

---

## 2. Particle Canvas Physics Engine (`js/particles.js`)

```javascript
 1: const canvas = document.getElementById("particlesCanvas");
 2: const ctx = canvas.getContext("2d");
 3: let particles = [];
 4: 
 5: class Particle {
 6:   constructor() {
 7:     this.x = Math.random() * canvas.width;
 8:     this.y = Math.random() * canvas.height;
 9:     this.vx = (Math.random() - 0.5) * 1.2;
10:     this.vy = (Math.random() - 0.5) * 1.2;
11:     this.radius = Math.random() * 2 + 1;
12:   }
13:   update() {
14:     this.x += this.vx; this.y += this.vy;
15:     if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
16:     if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
17:   }
18: }
```
- **Lines 1–18**: Initializes an HTML5 Canvas 2D context. Spawns floating particles with random velocity vectors (`vx`, `vy`) and bounce physics on canvas boundaries.

---

## 3. Movable Skill Playground (`js/draggable.js`)

```javascript
 1: function initDraggablePlayground() {
 2:   const chips = document.querySelectorAll(".skill-chip-movable");
 3:   chips.forEach(chip => {
 4:     let isDragging = false, offsetX = 0, offsetY = 0;
 5:     chip.addEventListener("mousedown", (e) => {
 6:       isDragging = true;
 7:       offsetX = e.clientX - chip.getBoundingClientRect().left;
 8:       offsetY = e.clientY - chip.getBoundingClientRect().top;
 9:     });
10:     window.addEventListener("mousemove", (e) => {
11:       if (!isDragging) return;
12:       chip.style.left = `${e.clientX - playgroundRect.left - offsetX}px`;
13:       chip.style.top = `${e.clientY - playgroundRect.top - offsetY}px`;
14:     });
15:     window.addEventListener("mouseup", () => isDragging = false);
16:   });
17: }
```
- **Lines 1–17**: Attaches interactive mouse drag event listeners to skill chips, calculating cursor offset for smooth freeform drag-and-drop repositioning anywhere inside the playground container.
