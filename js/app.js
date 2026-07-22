// Main Application Controller

let skillList = [
  { name: "Python & SymPy Engine", percent: 95, icon: "fa-brands fa-python" },
  { name: "FastAPI & REST APIs", percent: 92, icon: "fa-solid fa-bolt" },
  { name: "JavaScript ES6+ & HTML5/CSS3", percent: 90, icon: "fa-brands fa-js" },
  { name: "React & Vite Frontends", percent: 85, icon: "fa-brands fa-react" },
  { name: "Node.js & Express Systems", percent: 88, icon: "fa-brands fa-node-js" },
  { name: "NumPy & SciPy Analytics", percent: 92, icon: "fa-solid fa-chart-line" },
  { name: "Docker & Linux DevOps", percent: 84, icon: "fa-brands fa-docker" },
  { name: "Git & GitHub Version Control", percent: 94, icon: "fa-brands fa-git-alt" }
];

document.addEventListener("DOMContentLoaded", () => {
  initThemePicker();
  init3DTiltCard();
  initProjectFilters();
  initLiveEditorModal();
  renderSkillProgressBars();
  initAddSkillModal();
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

// Render Skill Percentage Progress Bars
function renderSkillProgressBars() {
  const container = document.getElementById("skillsBarsContainer");
  if (!container) return;

  container.innerHTML = skillList.map((s, idx) => `
    <div class="skill-bar-card">
      <div class="skill-bar-info">
        <div class="skill-bar-name">
          <i class="${s.icon || 'fa-solid fa-code'}" style="color: var(--accent-cyan);"></i>
          <span>${s.name}</span>
        </div>
        <div class="skill-bar-percent" id="skillPerc_${idx}">${s.percent}%</div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" id="skillFill_${idx}" style="width: 0%;"></div>
      </div>
    </div>
  `).join("");

  // Animate progress bars after short delay
  setTimeout(() => {
    skillList.forEach((s, idx) => {
      const fill = document.getElementById(`skillFill_${idx}`);
      if (fill) fill.style.width = `${s.percent}%`;
    });
  }, 150);
}

// Add New Skill Modal
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

// Project Category Filters
function initProjectFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.getAttribute("data-filter");
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

// Live Resume Customizer Modal
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
