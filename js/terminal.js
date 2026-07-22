// Interactive Developer Command-Line Terminal

document.addEventListener("DOMContentLoaded", () => {
  const termInput = document.getElementById("termInput");
  const termOutput = document.getElementById("termOutput");

  if (!termInput) return;

  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = termInput.value.trim();
      termInput.value = "";
      processCommand(command);
    }
  });

  function processCommand(cmd) {
    const cleanCmd = cmd.toLowerCase();
    let response = "";

    // Echo user input
    appendTerminalLine(`<span style="color: var(--accent-cyan)">visitor@kashvi-dev:~$</span> ${cmd}`);

    switch (cleanCmd) {
      case "help":
        response = `Available Commands:
  • <b style="color: var(--accent-cyan)">skills</b>     : List technical stack and proficiencies
  • <b style="color: var(--accent-cyan)">projects</b>   : View key full-stack software projects
  • <b style="color: var(--accent-cyan)">contact</b>    : Get direct contact & social links
  • <b style="color: var(--accent-cyan)">theme</b>      : Switch theme (usage: theme synthwave | emerald | obsidian | default)
  • <b style="color: var(--accent-cyan)">clear</b>      : Clear terminal screen`;
        break;

      case "skills":
        response = `⚡ Technical Skill Matrix:
  - Languages  : Python, JavaScript (ES6+), HTML5, CSS3, C/C++, SQL
  - Frameworks : FastAPI, Node.js, Express, React, Vite, SymPy, NumPy
  - DevOps/Tools: Git, GitHub, Docker, Uvicorn, Render, Linux CLI`;
        break;

      case "projects":
        response = `🚀 Featured Projects:
  1. <b>OmniCalc Pro</b> — Full-stack mathematical & calculus suite with FastAPI & SymPy.
  2. <b>AetherResume</b> — Dynamic glassmorphic developer portfolio with particle canvas.
  3. <b>DataPulse AI</b> — Real-time analytics dashboard & regression visualizer.`;
        break;

      case "contact":
        response = `📬 Contact Info:
  - Email    : vinayak.kashyap@example.com
  - GitHub   : https://github.com/kashvinayak20-debug
  - LinkedIn : https://linkedin.com/in/vinayak-kashyap`;
        break;

      case "clear":
        termOutput.innerHTML = "";
        return;

      default:
        if (cleanCmd.startsWith("theme ")) {
          const themeName = cleanCmd.split(" ")[1];
          if (["synthwave", "emerald", "obsidian", "default"].includes(themeName)) {
            document.body.className = themeName === "default" ? "" : `theme-${themeName}`;
            response = `Theme changed to: ${themeName}`;
          } else {
            response = `Invalid theme name. Options: synthwave, emerald, obsidian, default`;
          }
        } else if (cleanCmd === "") {
          return;
        } else {
          response = `Command not found: '${cmd}'. Type '<b style="color: var(--accent-cyan)">help</b>' for available commands.`;
        }
    }

    appendTerminalLine(response);
  }

  function appendTerminalLine(text) {
    const div = document.createElement("div");
    div.style.marginBottom = "0.6rem";
    div.innerHTML = text.replace(/\n/g, "<br>");
    termOutput.appendChild(div);
    termOutput.scrollTop = termOutput.scrollHeight;
  }
});
