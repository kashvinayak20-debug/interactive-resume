// Main Application Controller — Full CRUD, Admin Access Control & Scroll Reveal Engine

let isAdmin = false;

// High-Resolution SVG Banners for Technical Subjects & Projects
const SUBJECT_BANNERS = {
  math: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'><defs><linearGradient id='g1' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%2300F0FF'/><stop offset='100%' stop-color='%237000FF'/></linearGradient></defs><rect width='800' height='400' fill='%230B0F1D'/><path d='M 50 350 Q 200 50 400 200 T 750 50' fill='none' stroke='url(%23g1)' stroke-width='6'/><circle cx='400' cy='200' r='12' fill='%2300FF85'/><text x='100' y='120' font-family='sans-serif' font-size='32' font-weight='bold' fill='%23FFFFFF'>f(x) = ∫ (sin x + log x) dx</text><text x='100' y='170' font-family='sans-serif' font-size='22' fill='%2300F0FF'>Matrix Linear Algebra & SymPy Engine</text></svg>",
  portfolio: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'><defs><linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%237000FF'/><stop offset='100%' stop-color='%23FF007A'/></linearGradient></defs><rect width='800' height='400' fill='%23070B18'/><rect x='100' y='80' width='600' height='240' rx='20' fill='%2310172A' stroke='url(%23g2)' stroke-width='4'/><text x='150' y='160' font-family='sans-serif' font-size='34' font-weight='bold' fill='%2300F0FF'>Kashvi.dev Engine</text><text x='150' y='210' font-family='sans-serif' font-size='20' fill='%23CBD5E1'>Interactive Glassmorphic Systems Architecture</text></svg>",
  java: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'><rect width='800' height='400' fill='%230D1322'/><circle cx='400' cy='200' r='120' fill='none' stroke='%2300FF85' stroke-width='4' stroke-dasharray='10,10'/><text x='250' y='190' font-family='sans-serif' font-size='36' font-weight='bold' fill='%23FFB800'>Java Web & SQL</text><text x='230' y='230' font-family='sans-serif' font-size='20' fill='%23FFFFFF'>Pet Adoption & Welfare System</text></svg>",
  algo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23050814'/><path d='M 100 200 L 300 100 L 500 300 L 700 150' fill='none' stroke='%2300F0FF' stroke-width='5'/><circle cx='300' cy='100' r='10' fill='%23FF007A'/><circle cx='500' cy='300' r='10' fill='%237000FF'/><text x='120' y='340' font-family='sans-serif' font-size='26' font-weight='bold' fill='%23FFFFFF'>Algorithms & Data Structures</text></svg>"
};

// --- State Arrays for Full CRUD ---
let skillList = [
  { id: 1, name: "Python 3.13 & SymPy Engine (Currently Working)", percent: 50, icon: "fa-brands fa-python" },
  { id: 2, name: "FastAPI & REST APIs (Currently Working)", percent: 45, icon: "fa-solid fa-bolt" },
  { id: 3, name: "Java & Web Systems (Currently Working)", percent: 42, icon: "fa-brands fa-java" },
  { id: 4, name: "C Programming Language (Currently Working)", percent: 40, icon: "fa-solid fa-code" },
  { id: 5, name: "JavaScript ES6+ & HTML5/CSS3 (Currently Working)", percent: 48, icon: "fa-brands fa-js" },
  { id: 6, name: "React & Vite Frontends (Currently Working)", percent: 38, icon: "fa-brands fa-react" },
  { id: 7, name: "AI / ML & LLM Engineering (Currently Working)", percent: 35, icon: "fa-solid fa-brain" },
  { id: 8, name: "Git & GitHub Version Control (Currently Working)", percent: 50, icon: "fa-brands fa-git-alt" },
  { id: 9, name: "SQL & Relational Databases (Currently Working)", percent: 38, icon: "fa-solid fa-database" }
];

let deployedList = [
  {
    id: 301,
    title: "OmniCalc Pro Suite",
    banner: SUBJECT_BANNERS.math,
    desc: "Production Cloud-Deployed Mathematical Suite combining SymPy, NumPy, and SciPy calculus engines with an interactive 2D function grapher, matrix linear algebra solver, and statistical analyzer.",
    tags: ["Cloud Deployed (Render)", "FastAPI", "SymPy", "NumPy", "Canvas 2D"],
    icon: "fa-calculator",
    codeUrl: "https://github.com/kashvinayak20-debug/omnicalc-pro",
    demoUrl: "https://omnicalc-pro.onrender.com/"
  }
];

let projectList = [
  {
    id: 100,
    title: "Kashvi.dev Portfolio Engine",
    category: "fullstack web",
    banner: SUBJECT_BANNERS.portfolio,
    desc: "Dynamic glassmorphic developer portfolio featuring movable interactive skill widgets, animated mascot avatar, Admin PIN-protected CRUD manager, and embedded CLI terminal.",
    tags: ["HTML5", "Glassmorphism CSS", "ES6+ JavaScript", "Admin Security"],
    icon: "fa-address-card",
    codeUrl: "https://github.com/kashvinayak20-debug/interactive-resume",
    demoUrl: "https://spotty-hornets-grow.loca.lt"
  },
  {
    id: 101,
    title: "OmniCalc Pro",
    category: "fullstack python",
    banner: SUBJECT_BANNERS.math,
    desc: "Advanced Full-Stack Mathematical Suite combining SymPy, NumPy, and SciPy calculus engines with an interactive 2D function grapher, matrix linear algebra solver, and statistical analyzer.",
    tags: ["Python", "FastAPI", "SymPy", "NumPy", "Canvas 2D"],
    icon: "fa-calculator",
    codeUrl: "https://github.com/kashvinayak20-debug/omnicalc-pro",
    demoUrl: "https://omnicalc-pro.onrender.com/"
  },
  {
    id: 102,
    title: "IWT Pet Adoption System",
    category: "web fullstack",
    banner: SUBJECT_BANNERS.java,
    desc: "Full-Stack Pet Adoption & Welfare Management Web System facilitating pet care shelter listings, adoption applications, and user profile workflows.",
    tags: ["Java", "Web Application", "HTML/CSS", "JavaScript", "SQL"],
    icon: "fa-paw",
    codeUrl: "https://github.com/kashvinayak20-debug/iwt-pet-adoption-system"
  },
  {
    id: 103,
    title: "DecodeLabs Tasks Suite",
    category: "python",
    banner: SUBJECT_BANNERS.algo,
    desc: "Algorithmic software engineering solutions, data structure implementations, and automated Python processing tasks.",
    tags: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
    icon: "fa-code-branch",
    codeUrl: "https://github.com/kashvinayak20-debug/decodelabs_tasks"
  }
];

let timelineList = [
  {
    id: 201,
    title: "Full-Stack & AI/ML/LLM Engineer",
    subtitle: "Software & Artificial Intelligence Systems",
    date: "2024 — Present (Currently Working)",
    desc: "Architecting full-stack web applications, RESTful microservices, Large Language Models (LLMs), RAG pipelines, and automated MLOps systems."
  },
  {
    id: 202,
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Silicon University",
    date: "2024 — 2028 (Present)",
    desc: "Specializing in Computer Science, Artificial Intelligence, Data Structures, Algorithms, Systems Architecture, and Software Engineering."
  },
  {
    id: 203,
    title: "Senior Secondary High School (Class XI - XII)",
    subtitle: "Freedom International School",
    date: "2022 — 2024",
    desc: "Completed Senior Secondary Education with focus on Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    id: 204,
    title: "Secondary High School Education (Class I - X)",
    subtitle: "St. Joseph's Girls' High School",
    date: "2010 — 2022",
    desc: "Completed Primary and Secondary High Schooling with Academic Excellence and Computer Fundamentals."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initThemePicker();
  init3DTiltCard();
  initProjectFilters();
  initLiveEditorModal();

  renderSkillProgressBars();
  renderDeployedProjects();
  renderProjects();
  renderTimeline();

  initAddSkillModal();
  initAddDeployedModal();
  initProjectModal();
  initTimelineModal();
  initAdminKeyToggle();
  initEmailModal();

  // Initialize Dynamic Pop-up Scroll Reveal Engine
  initScrollReveal();
});

// High-Attractive IntersectionObserver Pop-Up Scroll Reveal Engine
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.12 });

  const targets = document.querySelectorAll(".section-container, .project-card, .skill-bar-card, .terminal-card, .draggable-playground");
  targets.forEach(el => {
    el.classList.add("reveal-on-scroll");
    observer.observe(el);
  });
}

// Render Deployed Cloud Projects Section with Subject Image Banners & Admin Controls
function renderDeployedProjects() {
  const container = document.getElementById("deployedProjectsContainer");
  if (!container) return;

  container.innerHTML = deployedList.map((p) => `
    <div class="project-card reveal-on-scroll" style="border-color: var(--accent-cyan);">
      ${p.banner ? `<img src="${p.banner}" alt="${p.title}" class="project-banner-img">` : ''}
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--accent-cyan);">${p.title}</h3>
          <i class="fa-solid ${p.icon || 'fa-cloud'}" style="font-size: 1.5rem; color: var(--accent-emerald);"></i>
        </div>
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-top: 0.8rem; line-height: 1.6;">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag-badge" style="color: var(--accent-emerald); border-color: rgba(0, 255, 133, 0.4);">${t}</span>`).join("")}
        </div>
      </div>
      <div>
        <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem;">
          <a href="${p.demoUrl}" target="_blank" class="btn-primary" style="flex: 1; justify-content: center; background: linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan)); color: #000; font-weight: 800;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Cloud Demo
          </a>
          <a href="${p.codeUrl}" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center;">
            <i class="fa-brands fa-github"></i> GitHub Code
          </a>
        </div>
        <div class="crud-actions admin-only">
          <button class="btn-edit" onclick="editDeployedProject(${p.id})"><i class="fa-solid fa-pen"></i> Edit App</button>
          <button class="btn-danger" onclick="deleteDeployedProject(${p.id})"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </div>
    </div>
  `).join("");

  setTimeout(initScrollReveal, 100);
}

function deleteDeployedProject(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  deployedList = deployedList.filter(p => p.id !== id);
  renderDeployedProjects();
}

function editDeployedProject(id) {
  if (!isAdmin) return alert("Only Project Head can perform CRUD operations.");
  const p = deployedList.find(item => item.id === id);
  if (!p) return;

  const newTitle = prompt("Edit Deployed App Title:", p.title);
  if (newTitle !== null && newTitle.trim() !== "") {
    p.title = newTitle.trim();
    const newDesc = prompt("Edit Description:", p.desc);
    if (newDesc !== null) p.desc = newDesc.trim();
    const newDemo = prompt("Edit Live Cloud Demo URL:", p.demoUrl);
    if (newDemo !== null && newDemo.trim() !== "") p.demoUrl = newDemo.trim();
    renderDeployedProjects();
  }
}

function initAddDeployedModal() {
  const modal = document.getElementById("addDeployedModal");
  const openBtn = document.getElementById("openAddDeployedBtn");
  const closeBtn = document.getElementById("closeAddDeployedBtn");
  const saveBtn = document.getElementById("saveAddDeployedBtn");

  if (!modal || !openBtn) return;
  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  saveBtn.addEventListener("click", () => {
    const title = document.getElementById("depTitle").value.trim();
    const desc = document.getElementById("depDesc").value.trim();
    const demoUrl = document.getElementById("depDemoUrl").value.trim();
    const codeUrl = document.getElementById("depCodeUrl").value.trim();
    const tagsRaw = document.getElementById("depTags").value.trim();

    if (title && desc && demoUrl) {
      deployedList.unshift({
        id: Date.now(),
        title: title,
        banner: SUBJECT_BANNERS.math,
        desc: desc,
        tags: tagsRaw ? tagsRaw.split(",").map(t => t.trim()) : ["Cloud Deployed"],
        icon: "fa-cloud",
        demoUrl: demoUrl,
        codeUrl: codeUrl || "https://github.com/kashvinayak20-debug"
      });
      renderDeployedProjects();
      modal.classList.remove("active");
      document.getElementById("depTitle").value = "";
      document.getElementById("depDesc").value = "";
      document.getElementById("depDemoUrl").value = "";
      document.getElementById("depCodeUrl").value = "";
    }
  });
}

// Email Contact Modal & Direct Send Handler
function initEmailModal() {
  const modal = document.getElementById("emailModal");
  const openBtns = document.querySelectorAll(".open-email-btn");
  const closeBtn = document.getElementById("closeEmailBtn");
  const sendGmailBtn = document.getElementById("sendGmailBtn");

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (sendGmailBtn) {
    sendGmailBtn.addEventListener("click", () => {
      const name = document.getElementById("senderName").value.trim() || "Visitor";
      const subject = encodeURIComponent(document.getElementById("emailSubject").value.trim() || "Portfolio Contact Inquiry");
      const message = encodeURIComponent(document.getElementById("emailMsg").value.trim() || `Hi Kashvi,\n\nI visited your portfolio website and would like to connect!`);
      
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kashvinayak20@gmail.com&su=${subject}&body=From:%20${encodeURIComponent(name)}%0A%0A${message}`;
      
      window.open(gmailUrl, "_blank");
      modal.classList.remove("active");
    });
  }
}

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

// 3D Tilt Mascot Card Effect
function init3DTiltCard() {
  const wrapper = document.querySelector(".mascot-wrapper");
  const card = document.querySelector(".mascot-container");
  if (!wrapper || !card) return;

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (y / (rect.height / 2)) * -6;
    const rotY = (x / (rect.width / 2)) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
}


// ==========================================================
// 1. SKILLS CRUD OPERATIONS
// ==========================================================
function renderSkillProgressBars() {
  const container = document.getElementById("skillsBarsContainer");
  if (!container) return;

  container.innerHTML = skillList.map((s) => `
    <div class="skill-bar-card reveal-on-scroll">
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
    initScrollReveal();
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
    const percentVal = parseInt(document.getElementById("newSkillPercent").value) || 45;

    if (nameVal) {
      skillList.unshift({
        id: Date.now(),
        name: nameVal.includes("Currently Working") ? nameVal : `${nameVal} (Currently Working)`,
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
// 2. PROJECTS CRUD OPERATIONS
// ==========================================================
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = projectList.map((p) => `
    <div class="project-card reveal-on-scroll" data-category="${p.category}">
      ${p.banner ? `<img src="${p.banner}" alt="${p.title}" class="project-banner-img">` : ''}
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
          ${p.demoUrl ? `
            <a href="${p.demoUrl}" target="_blank" class="btn-primary" style="flex: 1; justify-content: center; background: linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan)); color: #000; font-weight: 800;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          ` : ''}
          <a href="${p.codeUrl || '#'}" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center;">
            <i class="fa-brands fa-github"></i> GitHub Code
          </a>
        </div>
        <div class="crud-actions admin-only">
          <button class="btn-edit" onclick="editProject(${p.id})"><i class="fa-solid fa-pen"></i> Edit Project</button>
          <button class="btn-danger" onclick="deleteProject(${p.id})"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </div>
    </div>
  `).join("");

  setTimeout(initScrollReveal, 100);
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
    const demoUrl = document.getElementById("projDemoUrl").value.trim();

    if (title && desc) {
      projectList.unshift({
        id: Date.now(),
        title: title,
        category: category,
        banner: SUBJECT_BANNERS.portfolio,
        desc: desc,
        tags: tagsRaw ? tagsRaw.split(",").map(t => t.trim()) : ["Full-Stack"],
        icon: "fa-code",
        codeUrl: codeUrl || "https://github.com/kashvinayak20-debug",
        demoUrl: demoUrl || ""
      });
      renderProjects();
      modal.classList.remove("active");
      document.getElementById("projTitle").value = "";
      document.getElementById("projDesc").value = "";
      document.getElementById("projCodeUrl").value = "";
      document.getElementById("projDemoUrl").value = "";
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
    <div class="project-card reveal-on-scroll">
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

  setTimeout(initScrollReveal, 100);
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
