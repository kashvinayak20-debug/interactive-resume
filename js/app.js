// Main Application Controller — Full CRUD & Admin Access Control

let isAdmin = false;

// --- State Arrays for Full CRUD ---
let skillList = [
  { id: 1, name: "Python & SymPy Engine", percent: 95, icon: "fa-brands fa-python" },
  { id: 2, name: "FastAPI & REST APIs", percent: 92, icon: "fa-solid fa-bolt" },
  { id: 3, name: "Java & Web Applications", percent: 88, icon: "fa-brands fa-java" },
  { id: 4, name: "JavaScript ES6+ & HTML5/CSS3", percent: 90, icon: "fa-brands fa-js" },
  { id: 5, name: "React & Vite Frontends", percent: 85, icon: "fa-brands fa-react" },
  { id: 6, name: "AI / ML & LLMs (Currently Preparing)", percent: 80, icon: "fa-solid fa-brain" },
  { id: 7, name: "Git & GitHub Version Control", percent: 95, icon: "fa-brands fa-git-alt" },
  { id: 8, name: "SQL & Relational Databases", percent: 86, icon: "fa-solid fa-database" }
];

let projectList = [
  {
    id: 100,
    title: "Kashvi.dev Portfolio Engine",
    category: "fullstack web",
    desc: "Dynamic glassmorphic developer portfolio featuring movable interactive skill widgets, animated mascot avatar, Admin PIN-protected CRUD manager, and embedded CLI terminal.",
    tags: ["HTML5", "Glassmorphism CSS", "ES6+ JavaScript", "Admin Security"],
    icon: "fa-address-card",
    codeUrl: "https://github.com/kashvinayak20-debug/interactive-resume"
  },
  {
    id: 101,
    title: "OmniCalc Pro",
    category: "fullstack python",
    desc: "Advanced Full-Stack Mathematical Suite combining SymPy, NumPy, and SciPy calculus engines with an interactive 2D function grapher, matrix linear algebra solver, and statistical analyzer.",
    tags: ["Python", "FastAPI", "SymPy", "NumPy", "Canvas 2D"],
    icon: "fa-calculator",
    codeUrl: "https://github.com/kashvinayak20-debug/omnicalc-pro"
  },
  {
    id: 102,
    title: "IWT Pet Adoption System",
    category: "web fullstack",
    desc: "Full-Stack Pet Adoption & Welfare Management Web System facilitating pet care shelter listings, adoption applications, and user profile workflows.",
    tags: ["Java", "Web Application", "HTML/CSS", "JavaScript", "SQL"],
    icon: "fa-paw",
    codeUrl: "https://github.com/kashvinayak20-debug/iwt-pet-adoption-system"
  },
  {
    id: 103,
    title: "DecodeLabs Tasks Suite",
    category: "python",
    desc: "Algorithmic software engineering solutions, data structure implementations, and automated Python processing tasks.",
    tags: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
    icon: "fa-code-branch",
    codeUrl: "https://github.com/kashvinayak20-debug/decodelabs_tasks"
  }
];

let timelineList = [
  {
    id: 201,
    title: "Full-Stack Software Engineer",
    subtitle: "Software Systems & Full-Stack Development",
    date: "2023 — Present",
    desc: "Architected full-stack web applications, mathematical computing engines, and system workflows while actively upskilling in AI/ML & LLM engineering."
  },
  {
    id: 202,
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Computer Science & Software Systems",
    date: "Graduated",
    desc: "Specialized in Data Structures, Algorithms, Object-Oriented Programming (Java/Python), Web Technologies, and Database Systems."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initThemePicker();
  init3DTiltCard();
  initProjectFilters();
  initLiveEditorModal();

  renderSkillProgressBars();
  renderProjects();
  renderTimeline();

  initAddSkillModal();
  initProjectModal();
  initTimelineModal();
  initAdminKeyToggle();
});

// Admin Passcode & Mode Toggle (Secret PIN: 1234)
function initAdminKeyToggle() {
  const btn = document.getElementById("adminToggleBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (isAdmin) {
      isAdmin = false;
      document.body.classList.remove("admin-mode");
      btn.innerHTML = `<i class="fa-solid fa-lock"></i> Admin Mode`;
      alert("Admin Mode Locked. You are now in Visitor View.");
    } else {
      const pin = prompt("Enter Project Head Passcode:");
      if (pin === "1234") {
        isAdmin = true;
        document.body.classList.add("admin-mode");
        btn.innerHTML = `<i class="fa-solid fa-lock-open" style="color: var(--accent-emerald);"></i> Admin Active`;
        alert("Admin Mode Unlocked! Full CRUD controls are now enabled.");
      } else if (pin !== null) {
        alert("Incorrect Passcode. Access Denied.");
      }
    }
  });
}


// Theme Switcher
function initThemePicker() {
  const select = document.getElementById("themeSelect");
  if (!select) return;
  select.addEventListener("change", (e) => {
    const val = e.target.value;
    document.body.className = val === "default" ? (isAdmin ? "admin-mode" : "") : `theme-${val} ${isAdmin ? "admin-mode" : ""}`;
  });
}

// 3D Tilt Mascot Card Effect (Smooth Jitter-Free Version)
function init3DTiltCard() {
  const card = document.querySelector(".mascot-container");
  if (!card) return;

  let ticking = false;

  card.addEventListener("mousemove", (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotX = (y / (rect.height / 2)) * -8;
        const rotY = (x / (rect.width / 2)) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        ticking = false;
      });
      ticking = true;
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
}


// ==========================================================
// 1. SKILLS CRUD OPERATIONS (Admin-Only Edit & Delete)
// ==========================================================
function renderSkillProgressBars() {
  const container = document.getElementById("skillsBarsContainer");
  if (!container) return;

  container.innerHTML = skillList.map((s) => `
    <div class="skill-bar-card">
      <div class="skill-bar-info">
        <div class="skill-bar-name">
          <i class="${s.icon || 'fa-solid fa-code'}" style="color: var(--accent-cyan);"></i>
          <span>${s.name}</span>
        </div>
        <div class="skill-bar-percent" id="skillPerc_${s.id}">${s.percent}%</div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" id="skillFill_${s.id}" style="width: 0%;"></div>
      </div>
      <div class="crud-actions admin-only">
        <button class="btn-edit" onclick="editSkill(${s.id})"><i class="fa-solid fa-pen"></i> Edit %</button>
        <button class="btn-danger" onclick="deleteSkill(${s.id})"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");

  setTimeout(() => {
    skillList.forEach((s) => {
      const fill = document.getElementById(`skillFill_${s.id}`);
      if (fill) fill.style.width = `${s.percent}%`;
    });
  }, 150);
}

function deleteSkill(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  skillList = skillList.filter(s => s.id !== id);
  renderSkillProgressBars();
}

function editSkill(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  const item = skillList.find(s => s.id === id);
  if (!item) return;

  const newPerc = prompt(`Edit percentage for "${item.name}" (0 - 100):`, item.percent);
  if (newPerc !== null) {
    const val = parseInt(newPerc);
    if (!isNaN(val)) {
      item.percent = Math.min(100, Math.max(0, val));
      renderSkillProgressBars();
    }
  }
}

function initAddSkillModal() {
  const modal = document.getElementById("addSkillModal");
  const openBtn = document.getElementById("openAddSkillBtn");
  const closeBtn = document.getElementById("closeAddSkillBtn");
  const saveBtn = document.getElementById("saveAddSkillBtn");

  if (!modal || !openBtn) return;
  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  saveBtn.addEventListener("click", () => {
    const nameVal = document.getElementById("newSkillName").value.trim();
    const percentVal = parseInt(document.getElementById("newSkillPercent").value) || 90;

    if (nameVal) {
      skillList.unshift({
        id: Date.now(),
        name: nameVal,
        percent: Math.min(100, Math.max(0, percentVal)),
        icon: "fa-solid fa-star"
      });
      renderSkillProgressBars();
      modal.classList.remove("active");
      document.getElementById("newSkillName").value = "";
    }
  });
}


// ==========================================================
// 2. PROJECTS CRUD OPERATIONS (Direct GitHub Code Links, No Demo)
// ==========================================================
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = projectList.map((p) => `
    <div class="project-card" data-category="${p.category}">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--accent-cyan);">${p.title}</h3>
          <i class="fa-solid ${p.icon || 'fa-rocket'}" style="font-size: 1.5rem; color: var(--accent-purple);"></i>
        </div>
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-top: 0.8rem; line-height: 1.6;">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag-badge">${t}</span>`).join("")}
        </div>
      </div>
      <div>
        <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem;">
          <a href="${p.codeUrl || '#'}" target="_blank" class="btn-primary" style="flex: 1; justify-content: center;">
            <i class="fa-brands fa-github"></i> View GitHub Code
          </a>
        </div>
        <div class="crud-actions admin-only">
          <button class="btn-edit" onclick="editProject(${p.id})"><i class="fa-solid fa-pen"></i> Edit Project</button>
          <button class="btn-danger" onclick="deleteProject(${p.id})"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </div>
    </div>
  `).join("");
}

function deleteProject(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  projectList = projectList.filter(p => p.id !== id);
  renderProjects();
}

function editProject(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  const p = projectList.find(item => item.id === id);
  if (!p) return;

  const newTitle = prompt("Edit Project Title:", p.title);
  if (newTitle !== null && newTitle.trim() !== "") {
    p.title = newTitle.trim();
    const newDesc = prompt("Edit Project Description:", p.desc);
    if (newDesc !== null) p.desc = newDesc.trim();
    renderProjects();
  }
}

function initProjectModal() {
  const modal = document.getElementById("addProjectModal");
  const openBtn = document.getElementById("openAddProjectBtn");
  const closeBtn = document.getElementById("closeAddProjectBtn");
  const saveBtn = document.getElementById("saveAddProjectBtn");

  if (!modal || !openBtn) return;
  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  saveBtn.addEventListener("click", () => {
    const title = document.getElementById("projTitle").value.trim();
    const desc = document.getElementById("projDesc").value.trim();
    const category = document.getElementById("projCategory").value;
    const tagsRaw = document.getElementById("projTags").value.trim();
    const codeUrl = document.getElementById("projCodeUrl").value.trim();

    if (title && desc) {
      projectList.unshift({
        id: Date.now(),
        title: title,
        category: category,
        desc: desc,
        tags: tagsRaw ? tagsRaw.split(",").map(t => t.trim()) : ["Full-Stack"],
        icon: "fa-code",
        codeUrl: codeUrl || "https://github.com/kashvinayak20-debug"
      });
      renderProjects();
      modal.classList.remove("active");
      document.getElementById("projTitle").value = "";
      document.getElementById("projDesc").value = "";
    }
  });
}


// ==========================================================
// 3. TIMELINE & EXPERIENCE CRUD OPERATIONS (Admin-Only Edit & Delete)
// ==========================================================
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  container.innerHTML = timelineList.map((t) => `
    <div class="project-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--accent-cyan);">${t.title}</h3>
        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-sub);">${t.date}</span>
      </div>
      <p style="color: var(--accent-purple); font-weight: 600; font-size: 0.9rem; margin-top: 0.3rem;">${t.subtitle}</p>
      <p style="color: var(--text-sub); font-size: 0.95rem; margin-top: 0.75rem; line-height: 1.6;">${t.desc}</p>
      <div class="crud-actions admin-only">
        <button class="btn-edit" onclick="editTimeline(${t.id})"><i class="fa-solid fa-pen"></i> Edit Entry</button>
        <button class="btn-danger" onclick="deleteTimeline(${t.id})"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");
}

function deleteTimeline(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  timelineList = timelineList.filter(t => t.id !== id);
  renderTimeline();
}

function editTimeline(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  const item = timelineList.find(t => t.id === id);
  if (!item) return;

  const newTitle = prompt("Edit Title / Position:", item.title);
  if (newTitle !== null && newTitle.trim() !== "") {
    item.title = newTitle.trim();
    const newDesc = prompt("Edit Description:", item.desc);
    if (newDesc !== null) item.desc = newDesc.trim();
    renderTimeline();
  }
}

function initTimelineModal() {
  const modal = document.getElementById("addTimelineModal");
  const openBtn = document.getElementById("openAddTimelineBtn");
  const closeBtn = document.getElementById("closeAddTimelineBtn");
  const saveBtn = document.getElementById("saveAddTimelineBtn");

  if (!modal || !openBtn) return;
  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  saveBtn.addEventListener("click", () => {
    const title = document.getElementById("timeTitle").value.trim();
    const subtitle = document.getElementById("timeSubtitle").value.trim();
    const date = document.getElementById("timeDate").value.trim();
    const desc = document.getElementById("timeDesc").value.trim();

    if (title && desc) {
      timelineList.unshift({
        id: Date.now(),
        title: title,
        subtitle: subtitle || "Software Engineering",
        date: date || "Present",
        desc: desc
      });
      renderTimeline();
      modal.classList.remove("active");
      document.getElementById("timeTitle").value = "";
      document.getElementById("timeDesc").value = "";
    }
  });
}


// Filter projects by category
function initProjectFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter");
      const cards = document.querySelectorAll(".project-card");
      cards.forEach(card => {
        const tags = card.getAttribute("data-category") || "";
        if (cat === "all" || tags.includes(cat)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Live Profile Editor Modal
function initLiveEditorModal() {
  const modal = document.getElementById("editorModal");
  const openBtn = document.getElementById("openEditorBtn");
  const closeBtn = document.getElementById("closeEditorBtn");
  const saveBtn = document.getElementById("saveEditorBtn");

  if (!modal || !openBtn) return;
  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  saveBtn.addEventListener("click", () => {
    const nameVal = document.getElementById("editName").value.trim();
    const titleVal = document.getElementById("editTitle").value.trim();
    const bioVal = document.getElementById("editBio").value.trim();

    if (nameVal) {
      document.getElementById("dispName").textContent = nameVal;
      document.getElementById("mascotName").textContent = nameVal;
    }
    if (titleVal) {
      document.getElementById("dispTitle").textContent = titleVal;
      document.getElementById("mascotRole").textContent = titleVal;
    }
    if (bioVal) document.getElementById("dispBio").textContent = bioVal;

    modal.classList.remove("active");
  });
}

function downloadPDF() {
  window.print();
}
