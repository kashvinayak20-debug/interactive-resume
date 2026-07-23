// Main Application Controller — Full CRUD, Admin Access Control, 3D Tilt on All Cards & Infinite Scroll Reveal Engine

let isAdmin = false;

// 100% Guaranteed Renderable Inline Vector Illustrations for Technical Subjects & Projects
const INLINE_SVG_BANNERS = {
  math: `<div class="project-banner-box">
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mathGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#00F0FF"/>
          <stop offset="100%" stop-color="#7000FF"/>
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="#0A0E1A"/>
      <path d="M 50 320 Q 200 40 400 200 T 750 80" fill="none" stroke="url(#mathGrad)" stroke-width="6"/>
      <circle cx="400" cy="200" r="14" fill="#00FF85"/>
      <text x="70" y="110" font-family="Outfit, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF">f(x) = ∫ (sin x + log x) dx</text>
      <text x="70" y="160" font-family="Outfit, sans-serif" font-size="22" font-weight="600" fill="#00F0FF">SymPy Calculus & Linear Algebra Engine</text>
    </svg>
  </div>`,
  portfolio: `<div class="project-banner-box">
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="portGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#7000FF"/>
          <stop offset="100%" stop-color="#FF007A"/>
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="#060914"/>
      <rect x="80" y="60" width="640" height="280" rx="20" fill="#0F172A" stroke="url(#portGrad)" stroke-width="4"/>
      <text x="140" y="160" font-family="Outfit, sans-serif" font-size="36" font-weight="900" fill="#00F0FF">Kashvi.dev Engine</text>
      <text x="140" y="210" font-family="Outfit, sans-serif" font-size="22" font-weight="500" fill="#CBD5E1">Interactive Glassmorphic Systems Architecture</text>
    </svg>
  </div>`,
  java: `<div class="project-banner-box">
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="400" fill="#0B101D"/>
      <circle cx="400" cy="200" r="120" fill="none" stroke="#00FF85" stroke-width="4" stroke-dasharray="12,12"/>
      <text x="220" y="190" font-family="Outfit, sans-serif" font-size="38" font-weight="900" fill="#FFB800">Java Web & SQL</text>
      <text x="210" y="235" font-family="Outfit, sans-serif" font-size="22" font-weight="500" fill="#FFFFFF">Pet Adoption & Welfare System</text>
    </svg>
  </div>`,
  algo: `<div class="project-banner-box">
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="400" fill="#050711"/>
      <path d="M 80 220 L 280 90 L 520 310 L 720 140" fill="none" stroke="#00F0FF" stroke-width="5"/>
      <circle cx="280" cy="90" r="12" fill="#FF007A"/>
      <circle cx="520" cy="310" r="12" fill="#7000FF"/>
      <text x="100" y="340" font-family="Outfit, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF">Algorithms & Data Structures</text>
    </svg>
  </div>`,
  tts: `<div class="project-banner-box">
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="400" fill="#0D0714"/>
      <path d="M 80 200 Q 200 60 350 200 T 550 200 T 720 200" fill="none" stroke="#FF007A" stroke-width="6"/>
      <circle cx="350" cy="200" r="14" fill="#00F0FF"/>
      <circle cx="550" cy="200" r="14" fill="#00FF85"/>
      <text x="100" y="110" font-family="Outfit, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF">Neural Text-to-Speech LLM</text>
      <text x="100" y="160" font-family="Outfit, sans-serif" font-size="22" font-weight="600" fill="#FF007A">Speech Synthesis & Audio Generation Model</text>
    </svg>
  </div>`
};

// --- State Arrays for Full CRUD ---
let skillList = [
  { id: 1, name: "Python 3.13 & DSA Logic Optimization", percent: 92, icon: "fa-brands fa-python" },
  { id: 2, name: "Data Structures & Stacks (Valid Parentheses, Rainwater)", percent: 90, icon: "fa-solid fa-code" },
  { id: 3, name: "Web Technologies (HTML5, CSS3, JavaScript ES6+)", percent: 88, icon: "fa-brands fa-js" },
  { id: 4, name: "C & Java Software Development", percent: 85, icon: "fa-brands fa-java" },
  { id: 5, name: "Relational DBMS (MySQL & PostgreSQL)", percent: 84, icon: "fa-solid fa-database" },
  { id: 6, name: "FastAPI & RESTful Web Systems", percent: 82, icon: "fa-solid fa-bolt" },
  { id: 7, name: "AI / ML & Generative AI Systems", percent: 80, icon: "fa-solid fa-brain" },
  { id: 8, name: "Git & GitHub Version Control", percent: 88, icon: "fa-brands fa-git-alt" }
];

let deployedList = [
  {
    id: 300,
    title: "Kashvi.dev Interactive Portfolio Engine",
    bannerSvg: INLINE_SVG_BANNERS.portfolio,
    desc: "Production Cloud-Deployed interactive developer portfolio featuring 3D tilt mascot cards, multi-directional infinite scroll reveal animations, Admin Portal Gmail authentication, and an embedded CLI terminal.",
    tags: ["Cloud Deployed (Vercel)", "HTML5", "Glassmorphism CSS", "ES6+ JavaScript", "Admin Security"],
    icon: "fa-address-card",
    codeUrl: "https://github.com/kashvinayak20-debug/interactive-resume",
    demoUrl: "https://spotty-hornets-grow.loca.lt"
  },
  {
    id: 301,
    title: "OmniCalc Pro Suite",
    bannerSvg: INLINE_SVG_BANNERS.math,
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
    title: "DSA Stack Algorithm Optimization Suite",
    category: "python",
    bannerSvg: INLINE_SVG_BANNERS.algo,
    desc: "Silicon University Internship — Developed complex optimized algorithms using stacks for valid parentheses checking, next/previous greater element, and trapping rainwater problem in Python.",
    tags: ["Python", "DSA", "Stacks", "Algorithm Optimization", "Silicon University"],
    icon: "fa-code-branch",
    codeUrl: "https://github.com/kashvinayak20-debug/decodelabs_tasks"
  },
  {
    id: 101,
    title: "Med-Tech Vital Signals Monitor",
    category: "python",
    bannerSvg: INLINE_SVG_BANNERS.tts,
    desc: "Sparkup Summit (2024) — Proposed an innovative med-tech prototype to develop a smart wearable that monitors vital signals.",
    tags: ["Med-Tech", "Hardware Prototype", "Sensors", "Sparkup Summit"],
    icon: "fa-heart-pulse",
    codeUrl: "https://github.com/kashvinayak20-debug"
  },
  {
    id: 102,
    title: "Multi-Directional Robo Race Vehicle",
    category: "python",
    bannerSvg: INLINE_SVG_BANNERS.math,
    desc: "Robo Race (2024, 2025) — Built an autonomous robot car that can maneuver in all directions and withstand extreme environmental conditions.",
    tags: ["Robotics", "Robo Race", "Hardware", "Automation"],
    icon: "fa-car",
    codeUrl: "https://github.com/kashvinayak20-debug"
  },
  {
    id: 103,
    title: "Text-to-Speech LLM Model",
    category: "python",
    bannerSvg: INLINE_SVG_BANNERS.tts,
    desc: "Deep learning-based Neural Text-to-Speech (TTS) Large Language Model architecture designed for voice generation, speech synthesis, and audio signal processing.",
    tags: ["Python", "AI / ML", "LLMs", "TTS", "Neural Speech"],
    icon: "fa-robot",
    codeUrl: "https://github.com/kashvinayak20-debug/text-to-speech-llm"
  },
  {
    id: 104,
    title: "IWT Pet Adoption System",
    category: "web fullstack",
    bannerSvg: INLINE_SVG_BANNERS.java,
    desc: "Full-Stack Pet Adoption & Welfare Management Web System facilitating pet care shelter listings, adoption applications, and user profile workflows.",
    tags: ["Java", "Web Application", "HTML/CSS", "JavaScript", "SQL"],
    icon: "fa-paw",
    codeUrl: "https://github.com/kashvinayak20-debug/iwt-pet-adoption-system"
  },
  {
    id: 105,
    title: "Kashvi.dev Portfolio Engine",
    category: "fullstack web",
    bannerSvg: INLINE_SVG_BANNERS.portfolio,
    desc: "Dynamic glassmorphic developer portfolio featuring 3D tilt mascot cards, Admin Portal Gmail authentication, and embedded CLI terminal.",
    tags: ["HTML5", "CSS3", "JavaScript", "Admin Security"],
    icon: "fa-address-card",
    codeUrl: "https://github.com/kashvinayak20-debug/interactive-resume",
    demoUrl: "https://spotty-hornets-grow.loca.lt"
  }
];

let timelineList = [
  {
    id: 201,
    title: "Bachelor of Technology in Computer Science & Engineering",
    subtitle: "Silicon University, Bhubaneswar, Odisha — CGPA: 9.53",
    date: "September, 2024 — Present",
    desc: "Achieved academic excellence with CGPA 9.53. Specialized in Data Structures, Algorithms, Software Engineering, Web Systems, and Database Architectures."
  },
  {
    id: 202,
    title: "DSA & Algorithm Engineering Intern",
    subtitle: "Silicon University",
    date: "2024 — Present",
    desc: "Solid foundation in DSA using Python. Developed complex optimized algorithms using stacks (Valid Parentheses, Next/Previous Greater Element, Trapping Rainwater)."
  },
  {
    id: 203,
    title: "Python for Data Science Internship & Certification",
    subtitle: "NPTEL — IIT Madras (Funded by MoE, Govt. of India)",
    date: "2024",
    desc: "Completed online internship course on Python for Data Science conducted by Indian Institute of Technology (IIT) Madras."
  },
  {
    id: 204,
    title: "Sparkup Summit & Robo Race Hackathons",
    subtitle: "Innovation & Robotics Competitions",
    date: "2024 — 2025",
    desc: "Sparkup Summit (2024): Proposed Med-Tech smart wearable vital monitoring prototype. Robo Race (2024, 2025): Built multi-directional robot car."
  },
  {
    id: 205,
    title: "Generative AI Workshop",
    subtitle: "AI for Students by Abhinav Devaguptapu",
    date: "2024",
    desc: "Hands-on workshop on building Generative AI applications, custom models, and LLM application pipelines."
  },
  {
    id: 206,
    title: "Higher Secondary Certification (Class XII)",
    subtitle: "Freedom International School, Cuttack, Odisha — Score: 70.2%",
    date: "April, 2022 — March, 2024",
    desc: "Completed Senior Secondary High School Education with 70.2% score."
  },
  {
    id: 207,
    title: "Senior Secondary Certification (Class X)",
    subtitle: "St. Josephs Girls High School, Cuttack, Odisha — Score: 85.16%",
    date: "April, 2012 — March, 2022",
    desc: "Completed Primary and Secondary High Schooling with 85.16% score."
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
  initAdminAuthSystem();
  initEmailModal();

  // Initialize Infinite Re-Triggering Scroll Reveal Engine & 3D Tilt on All Cards
  initScrollReveal();
  initAllCards3DTilt();
});

// Re-Triggering Scroll Reveal Engine (Pops up EVERY time user scrolls to a card!)
function initScrollReveal() {
  const directions = ["reveal-from-left", "reveal-from-right", "reveal-from-bottom", "reveal-from-top"];
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      } else {
        // Re-triggers pop-up animation every time user scrolls away and back!
        entry.target.classList.remove("revealed");
      }
    });
  }, { threshold: 0.12 });

  const targets = document.querySelectorAll(".section-container, .project-card, .skill-bar-card, .terminal-card, .draggable-playground");
  targets.forEach((el, index) => {
    if (!el.classList.contains("reveal-item")) {
      el.classList.add("reveal-item");
      const dir = directions[index % directions.length];
      el.classList.add(dir);
    }
    observer.observe(el);
  });
}

// 3D Mouse Tilt Motion Engine on ALL Cards & Containers
function initAllCards3DTilt() {
  const cards = document.querySelectorAll(".project-card, .skill-bar-card, .terminal-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = (y / (rect.height / 2)) * -7;
      const rotY = (x / (rect.width / 2)) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });
}

// Render Deployed Cloud Projects Section with 100% Visible SVG Banners & Admin Controls
function renderDeployedProjects() {
  const container = document.getElementById("deployedProjectsContainer");
  if (!container) return;

  container.innerHTML = deployedList.map((p, idx) => `
    <div class="project-card reveal-item ${idx % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}" style="border-color: var(--accent-cyan);">
      ${p.bannerSvg || ''}
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

  setTimeout(() => {
    initScrollReveal();
    initAllCards3DTilt();
  }, 100);
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
        bannerSvg: INLINE_SVG_BANNERS.math,
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

// Admin Authentication Credentials & Password Reset Manager
const DEFAULT_ADMIN_GMAIL = "kashvinayak20@gmail.com";
const DEFAULT_ADMIN_PASS = "admin123";

function getAdminCredentials() {
  let email = localStorage.getItem("admin_gmail");
  let pass = localStorage.getItem("admin_pass");
  if (!email) {
    email = DEFAULT_ADMIN_GMAIL;
    localStorage.setItem("admin_gmail", email);
  }
  if (!pass) {
    pass = DEFAULT_ADMIN_PASS;
    localStorage.setItem("admin_pass", pass);
  }
  return { email, pass };
}

let activeResetCode = "";

function initAdminAuthSystem() {
  const adminBtn = document.getElementById("adminToggleBtn");
  const loginModal = document.getElementById("adminLoginModal");
  const closeLoginBtn = document.getElementById("closeAdminLoginBtn");
  const cancelLoginBtn = document.getElementById("cancelAdminLoginBtn");
  const loginForm = document.getElementById("adminLoginForm");
  const loginAlert = document.getElementById("adminLoginAlert");
  const emailInput = document.getElementById("adminEmailInput");
  const passInput = document.getElementById("adminPasswordInput");
  const togglePassBtn = document.getElementById("toggleAdminPassBtn");
  const openForgotBtn = document.getElementById("openForgotPasswordBtn");

  const forgotModal = document.getElementById("forgotPasswordModal");
  const closeForgotBtn = document.getElementById("closeForgotPasswordBtn");
  const cancelResetBtn = document.getElementById("cancelResetBtn");
  const backToLoginBtn = document.getElementById("backToLoginBtn");
  const sendResetCodeBtn = document.getElementById("sendResetCodeBtn");
  const resetGmailInput = document.getElementById("resetGmailInput");
  const resetStatusAlert = document.getElementById("resetStatusAlert");
  const resetStep1 = document.getElementById("resetStep1");
  const resetStep2 = document.getElementById("resetStep2");
  const displayResetGmail = document.getElementById("displayResetGmail");
  const generatedCodeDisplay = document.getElementById("generatedCodeDisplay");
  const openGmailResetBtn = document.getElementById("openGmailResetBtn");
  const resetCodeInput = document.getElementById("resetCodeInput");
  const newPassInput = document.getElementById("newPasswordInput");
  const confirmPassInput = document.getElementById("confirmPasswordInput");
  const toggleNewPassBtn = document.getElementById("toggleNewPassBtn");
  const saveNewPassBtn = document.getElementById("saveNewPasswordBtn");

  const logoutModal = document.getElementById("adminLogoutModal");
  const closeLogoutBtn = document.getElementById("closeAdminLogoutBtn");
  const cancelLogoutBtn = document.getElementById("cancelLogoutBtn");
  const confirmLogoutBtn = document.getElementById("confirmLogoutBtn");
  const loggedInAdminEmail = document.getElementById("loggedInAdminEmail");

  if (!adminBtn) return;

  adminBtn.addEventListener("click", () => {
    if (isAdmin) {
      showLogoutModal();
    } else {
      showLoginModal();
    }
  });

  function showLogoutModal() {
    const creds = getAdminCredentials();
    if (loggedInAdminEmail) loggedInAdminEmail.textContent = creds.email;
    if (logoutModal) logoutModal.classList.add("active");
  }

  function hideLogoutModal() {
    if (logoutModal) logoutModal.classList.remove("active");
  }

  if (closeLogoutBtn) closeLogoutBtn.addEventListener("click", hideLogoutModal);
  if (cancelLogoutBtn) cancelLogoutBtn.addEventListener("click", hideLogoutModal);

  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener("click", () => {
      isAdmin = false;
      document.body.classList.remove("admin-mode");
      adminBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Admin Portal`;
      hideLogoutModal();
      alert("Logged out successfully! You are now in Visitor View.");
    });
  }

  function showLoginModal() {
    emailInput.value = "";
    passInput.value = "";
    hideAlert(loginAlert);
    if (loginModal) loginModal.classList.add("active");
  }

  function hideLoginModal() {
    if (loginModal) loginModal.classList.remove("active");
  }

  function showForgotModal() {
    hideLoginModal();
    resetGmailInput.value = "";
    resetStep1.style.display = "block";
    resetStep2.style.display = "none";
    hideAlert(resetStatusAlert);
    if (forgotModal) forgotModal.classList.add("active");
  }

  function hideForgotModal() {
    if (forgotModal) forgotModal.classList.remove("active");
  }

  if (closeLoginBtn) closeLoginBtn.addEventListener("click", hideLoginModal);
  if (cancelLoginBtn) cancelLoginBtn.addEventListener("click", hideLoginModal);
  if (openForgotBtn) openForgotBtn.addEventListener("click", showForgotModal);

  if (togglePassBtn) {
    togglePassBtn.addEventListener("click", () => {
      const type = passInput.getAttribute("type") === "password" ? "text" : "password";
      passInput.setAttribute("type", type);
      togglePassBtn.innerHTML = type === "password" ? `<i class="fa-solid fa-eye"></i>` : `<i class="fa-solid fa-eye-slash"></i>`;
    });
  }

  if (toggleNewPassBtn) {
    toggleNewPassBtn.addEventListener("click", () => {
      const type = newPassInput.getAttribute("type") === "password" ? "text" : "password";
      newPassInput.setAttribute("type", type);
      toggleNewPassBtn.innerHTML = type === "password" ? `<i class="fa-solid fa-eye"></i>` : `<i class="fa-solid fa-eye-slash"></i>`;
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredEmail = emailInput.value.trim().toLowerCase();
      const enteredPass = passInput.value;
      const creds = getAdminCredentials();

      if (enteredEmail === creds.email.toLowerCase() && enteredPass === creds.pass) {
        isAdmin = true;
        document.body.classList.add("admin-mode");
        adminBtn.innerHTML = `<i class="fa-solid fa-user-shield" style="color: var(--accent-emerald);"></i> Admin Active`;
        showAlert(loginAlert, "success", `<i class="fa-solid fa-circle-check"></i> Login successful! Unlocking Admin Portal...`);
        setTimeout(() => {
          hideLoginModal();
          alert("Welcome, Admin! Full CRUD controls and profile editor are now enabled.");
        }, 500);
      } else {
        showAlert(loginAlert, "danger", `<i class="fa-solid fa-circle-exclamation"></i> Incorrect Gmail or password. Click "Forgot Password?" to reset.`);
      }
    });
  }

  if (sendResetCodeBtn) {
    sendResetCodeBtn.addEventListener("click", () => {
      const email = resetGmailInput.value.trim();
      if (!email || !email.includes("@")) {
        showAlert(resetStatusAlert, "danger", `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid Gmail address.`);
        return;
      }

      activeResetCode = Math.floor(100000 + Math.random() * 900000).toString();
      displayResetGmail.textContent = email;
      generatedCodeDisplay.textContent = activeResetCode;

      resetStep1.style.display = "none";
      resetStep2.style.display = "block";
      showAlert(resetStatusAlert, "info", `<i class="fa-solid fa-envelope-circle-check"></i> Verification code generated & sent to ${email}!`);
    });
  }

  if (openGmailResetBtn) {
    openGmailResetBtn.addEventListener("click", () => {
      const email = resetGmailInput.value.trim();
      const subject = encodeURIComponent("Admin Password Reset Code");
      const body = encodeURIComponent(`Your Admin Password Reset Code for Kashvi.dev is: ${activeResetCode}`);
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}&body=${body}`, "_blank");
    });
  }

  if (saveNewPassBtn) {
    saveNewPassBtn.addEventListener("click", () => {
      const code = resetCodeInput.value.trim();
      const newPass = newPassInput.value;
      const confirmPass = confirmPassInput.value;

      if (code !== activeResetCode) {
        showAlert(resetStatusAlert, "danger", `<i class="fa-solid fa-circle-xmark"></i> Invalid 6-digit verification code.`);
        return;
      }

      if (!newPass || newPass.length < 4) {
        showAlert(resetStatusAlert, "danger", `<i class="fa-solid fa-triangle-exclamation"></i> Password must be at least 4 characters long.`);
        return;
      }

      if (newPass !== confirmPass) {
        showAlert(resetStatusAlert, "danger", `<i class="fa-solid fa-triangle-exclamation"></i> New passwords do not match.`);
        return;
      }

      const targetEmail = resetGmailInput.value.trim();
      localStorage.setItem("admin_gmail", targetEmail);
      localStorage.setItem("admin_pass", newPass);

      showAlert(resetStatusAlert, "success", `<i class="fa-solid fa-check-double"></i> Password reset successfully! Redirecting to login...`);

      setTimeout(() => {
        hideForgotModal();
        showLoginModal();
        showAlert(loginAlert, "success", `<i class="fa-solid fa-circle-check"></i> Password reset complete. Please log in with your new password.`);
      }, 1200);
    });
  }

  if (closeForgotBtn) closeForgotBtn.addEventListener("click", hideForgotModal);
  if (cancelResetBtn) cancelResetBtn.addEventListener("click", hideForgotModal);
  if (backToLoginBtn) {
    backToLoginBtn.addEventListener("click", () => {
      hideForgotModal();
      showLoginModal();
    });
  }
}

function showAlert(element, type, message) {
  if (!element) return;
  element.className = `auth-alert-box ${type}`;
  element.innerHTML = message;
  element.style.display = "flex";
}

function hideAlert(element) {
  if (!element) return;
  element.style.display = "none";
  element.innerHTML = "";
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

  container.innerHTML = skillList.map((s, idx) => `
    <div class="skill-bar-card reveal-item ${idx % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}">
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
    initAllCards3DTilt();
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

  const dirs = ["reveal-from-left", "reveal-from-bottom", "reveal-from-right", "reveal-from-top"];

  container.innerHTML = projectList.map((p, idx) => `
    <div class="project-card reveal-item ${dirs[idx % dirs.length]}" data-category="${p.category}">
      ${p.bannerSvg || ''}
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

  setTimeout(() => {
    initScrollReveal();
    initAllCards3DTilt();
  }, 100);
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
        bannerSvg: INLINE_SVG_BANNERS.portfolio,
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

  container.innerHTML = timelineList.map((t, idx) => `
    <div class="project-card reveal-item ${idx % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}">
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

  setTimeout(() => {
    initScrollReveal();
    initAllCards3DTilt();
  }, 100);
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
