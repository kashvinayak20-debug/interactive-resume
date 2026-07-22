// Terminal CLI Logic for AetherResume / Kashvi.dev

document.addEventListener("DOMContentLoaded", () => {
  const termInput = document.getElementById("termInput");
  const termOutput = document.getElementById("termOutput");

  if (!termInput || !termOutput) return;

  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = termInput.value.trim();
      termInput.value = "";
      if (cmd) processCommand(cmd);
    }
  });

  function processCommand(cmd) {
    const cleanCmd = cmd.toLowerCase().trim();
    let response = "";

    // Echo user input
    appendTerminalLine(`<span style="color: var(--accent-cyan)">visitor@kashvi-dev:~$</span> ${cmd}`);

    switch (cleanCmd) {
      case "help":
        response = `Available Terminal Commands:<br>
  - <b style="color: var(--accent-cyan)">skills</b>   : View core technical skills & proficiency<br>
  - <b style="color: var(--accent-cyan)">projects</b> : View featured software & engineering projects<br>
  - <b style="color: var(--accent-cyan)">contact</b>  : Get email, GitHub, and LinkedIn links<br>
  - <b style="color: var(--accent-cyan)">theme</b>    : Switch theme (e.g. 'theme synthwave')<br>
  - <b style="color: var(--accent-cyan)">clear</b>    : Clear terminal screen`;
        break;

      case "skills":
        response = `Core Technical Skills & Upskilling:<br>
  - Python 3.13 / FastAPI / SymPy / NumPy (95%)<br>
  - Java / Web Systems / SQL (88%)<br>
  - JavaScript ES6+ / HTML5 / Glassmorphism CSS (90%)<br>
  - AI / ML & Large Language Models (Actively Upskilling)`;
        break;

      case "projects":
        response = `Featured Software Projects:<br>
  1. <b>Kashvi.dev Portfolio</b> [HTML5 / CSS / JS / Admin Security]<br>
  2. <b>OmniCalc Pro</b> [FastAPI / SymPy / NumPy / Canvas 2D]<br>
  3. <b>IWT Pet Adoption System</b> [Java / Web / SQL]<br>
  4. <b>DecodeLabs Tasks</b> [Python / Algorithms]`;
        break;

      case "contact":
        response = `Contact Links:<br>
  - Email    : <a href="mailto:kashvinayak20@gmail.com" target="_blank" style="color: var(--accent-cyan);">kashvinayak20@gmail.com</a><br>
  - GitHub   : <a href="https://github.com/kashvinayak20-debug" target="_blank" style="color: var(--accent-cyan);">https://github.com/kashvinayak20-debug</a><br>
  - LinkedIn : <a href="https://www.linkedin.com/in/kashvi-nayak-409a70257" target="_blank" style="color: var(--accent-cyan);">https://www.linkedin.com/in/kashvi-nayak-409a70257</a>`;
        break;

      case "theme synthwave":
        document.body.className = "theme-synthwave";
        response = "Theme switched to Synthwave 🌆";
        break;

      case "theme emerald":
        document.body.className = "theme-emerald";
        response = "Theme switched to Emerald Glass 🌿";
        break;

      case "theme obsidian":
        document.body.className = "theme-obsidian";
        response = "Theme switched to Obsidian Dark 🖤";
        break;

      case "clear":
        termOutput.innerHTML = "";
        return;

      default:
        response = `Command not recognized: '${cmd}'. Type '<b style="color: var(--accent-cyan)">help</b>' for available commands.`;
    }

    appendTerminalLine(response);
  }

  function appendTerminalLine(text) {
    const div = document.createElement("div");
    div.style.marginBottom = "0.5rem";
    div.style.lineHeight = "1.5";
    div.innerHTML = text;
    termOutput.appendChild(div);
    termOutput.scrollTop = termOutput.scrollHeight;
  }
});
