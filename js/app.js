// Main Application Controller — Full CRUD Operations

// --- State Arrays for Full CRUD ---
let skillList = [
  { id: 1, name: "LLMs & RAG Architecture", percent: 95, icon: "fa-solid fa-brain" },
  { id: 2, name: "MLOps & Model Deployment", percent: 92, icon: "fa-solid fa-diagram-project" },
  { id: 3, name: "PyTorch & Transformers", percent: 94, icon: "fa-solid fa-microchip" },
  { id: 4, name: "LangChain & Vector Databases", percent: 90, icon: "fa-solid fa-database" },
  { id: 5, name: "Python 3.13 & SymPy Engine", percent: 96, icon: "fa-brands fa-python" },
  { id: 6, name: "FastAPI & High-Speed APIs", percent: 93, icon: "fa-solid fa-bolt" },
  { id: 7, name: "JavaScript ES6+ & Web UI", percent: 90, icon: "fa-brands fa-js" },
  { id: 8, name: "Docker & Kubernetes DevOps", percent: 88, icon: "fa-brands fa-docker" },
  { id: 9, name: "Git & GitHub Version Control", percent: 95, icon: "fa-brands fa-git-alt" }
];

let projectList = [
  {
    id: 100,
    title: "AetherLLM RAG Suite",
    category: "python web",
    desc: "Enterprise Retrieval-Augmented Generation (RAG) pipeline powered by LangChain, Vector Databases (Chroma/Qdrant), and fine-tuned Open-Source LLMs for real-time document intelligence.",
    tags: ["LLMs", "RAG", "LangChain", "VectorDB", "FastAPI"],
    icon: "fa-brain",
    codeUrl: "https://github.com/kashvinayak20-debug",
    demoUrl: "#"
  },
  {
    id: 101,
    title: "MLOps AutoScale Pipeline",
    category: "python",
    desc: "Automated MLOps continuous training & deployment pipeline with MLflow experiment tracking, model drift monitoring, and Dockerized FastAPI microservices.",
    tags: ["MLOps", "MLflow", "Docker", "PyTorch", "CI/CD"],
    icon: "fa-diagram-project",
    codeUrl: "https://github.com/kashvinayak20-debug",
    demoUrl: "#"
  },
  {
    id: 102,
    title: "OmniCalc Pro",
    category: "fullstack python",
    desc: "Advanced Full-Stack Mathematical Suite combining SymPy, NumPy, and SciPy calculus engines with an interactive 2D function grapher, matrix linear algebra solver, and statistical analyzer.",
    tags: ["FastAPI", "SymPy", "NumPy", "Canvas 2D"],
    icon: "fa-calculator",
    codeUrl: "https://github.com/kashvinayak20-debug/omnicalc-pro",
    demoUrl: "https://salty-views-teach.loca.lt"
  },
  {
    id: 103,
    title: "AetherResume",
    category: "fullstack web",
    desc: "Dynamic glassmorphic developer portfolio featuring movable interactive skill widgets, animated mascot avatar, live CRUD manager, and embedded CLI terminal.",
    tags: ["HTML5", "Glassmorphism CSS", "ES6+ JavaScript"],
    icon: "fa-address-card",
    codeUrl: "https://github.com/kashvinayak20-debug",
    demoUrl: "#hero"
  }
];

let timelineList = [
  {
    id: 201,
    title: "AI / ML Engineer & System Architect",
    subtitle: "LLMs, MLOps & High-Performance AI Systems",
    date: "2023 — Present",
    desc: "Designed and deployed generative AI microservices, RAG architectures, and automated MLOps pipelines using PyTorch, LangChain, FastAPI, and Docker."
  },
  {
    id: 202,
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Machine Learning & Distributed Systems",
    date: "Graduated",
    desc: "Specialized in Artificial Intelligence, Neural Networks, Machine Learning, Data Structures, Algorithms, Linear Algebra, and System Architecture."
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
});


// Theme Switcher
function initThemePicker() {
  const select = document.getElementById("themeSelect");
  if (!select) return;
  select.addEventListener("change", (e) => {
    const val = e.target.value;
    document.body.className = val === "default" ? "" : `theme-${val}`;
  });
}

// 3D Tilt Mascot Card Effect
function init3DTiltCard() {
  const card = document.querySelector(".mascot-container");
  if (!card) return;
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (y / (rect.height / 2)) * -10;
    const rotY = (x / (rect.width / 2)) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}


// ==========================================================
// 1. SKILLS CRUD OPERATIONS
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
      <div class="crud-actions">
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
  skillList = skillList.filter(s => s.id !== id);
  renderSkillProgressBars();
}

function editSkill(id) {
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
        icon: "fa-solid fa-brain"
      });
      renderSkillProgressBars();
      modal.classList.remove("active");
      document.getElementById("newSkillName").value = "";
    }
  });
}


// ==========================================================
// 2. PROJECTS CRUD OPERATIONS
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
          <a href="${p.codeUrl || '#'}" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center;">
            <i class="fa-brands fa-github"></i> Code
          </a>
          <a href="${p.demoUrl || '#'}" target="_blank" class="btn-primary" style="flex: 1; justify-content: center;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
          </a>
        </div>
        <div class="crud-actions">
          <button class="btn-edit" onclick="editProject(${p.id})"><i class="fa-solid fa-pen"></i> Edit Project</button>
          <button class="btn-danger" onclick="deleteProject(${p.id})"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </div>
    </div>
  `).join("");
}

function deleteProject(id) {
  projectList = projectList.filter(p => p.id !== id);
  renderProjects();
}

function editProject(id) {
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
    const demoUrl = document.getElementById("projDemoUrl").value.trim();

    if (title && desc) {
      projectList.unshift({
        id: Date.now(),
        title: title,
        category: category,
        desc: desc,
        tags: tagsRaw ? tagsRaw.split(",").map(t => t.trim()) : ["AI / ML"],
        icon: "fa-brain",
        codeUrl: codeUrl || "#",
        demoUrl: demoUrl || "#"
      });
      renderProjects();
      modal.classList.remove("active");
      document.getElementById("projTitle").value = "";
      document.getElementById("projDesc").value = "";
    }
  });
}


// ==========================================================
// 3. TIMELINE & EXPERIENCE CRUD OPERATIONS
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
      <div class="crud-actions">
        <button class="btn-edit" onclick="editTimeline(${t.id})"><i class="fa-solid fa-pen"></i> Edit Entry</button>
        <button class="btn-danger" onclick="deleteTimeline(${t.id})"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");
}

function deleteTimeline(id) {
  timelineList = timelineList.filter(t => t.id !== id);
  renderTimeline();
}

function editTimeline(id) {
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
        subtitle: subtitle || "AI / ML Systems",
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
