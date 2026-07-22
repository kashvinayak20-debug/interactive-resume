// Movable Skill Badges Playground with Touchscreen Mobile & Mouse Drag Support

document.addEventListener("DOMContentLoaded", () => {
  initDraggablePlayground();
});

function initDraggablePlayground() {
  const playground = document.querySelector(".draggable-playground");
  const chips = document.querySelectorAll(".skill-chip-movable");

  if (!playground || !chips.length) return;

  // Spread chips around randomly on initial load
  const pRect = playground.getBoundingClientRect();
  chips.forEach((chip, idx) => {
    const randomX = Math.min(pRect.width - 160, Math.max(20, (idx % 3) * 160 + Math.random() * 40 + 20));
    const randomY = Math.min(pRect.height - 70, Math.max(60, Math.floor(idx / 3) * 70 + Math.random() * 20 + 60));
    
    chip.style.left = `${randomX}px`;
    chip.style.top = `${randomY}px`;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Mouse Drag Events
    chip.addEventListener("mousedown", (e) => {
      isDragging = true;
      const rect = chip.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      chip.style.zIndex = "10";
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const playgroundRect = playground.getBoundingClientRect();
      let newX = e.clientX - playgroundRect.left - offsetX;
      let newY = e.clientY - playgroundRect.top - offsetY;

      // Constrain within playground bounds
      newX = Math.max(10, Math.min(playgroundRect.width - chip.offsetWidth - 10, newX));
      newY = Math.max(10, Math.min(playgroundRect.height - chip.offsetHeight - 10, newY));

      chip.style.left = `${newX}px`;
      chip.style.top = `${newY}px`;
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        chip.style.zIndex = "1";
      }
    });

    // Touchscreen Mobile Drag Events (iPhone / Android)
    chip.addEventListener("touchstart", (e) => {
      isDragging = true;
      const touch = e.touches[0];
      const rect = chip.getBoundingClientRect();
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
      chip.style.zIndex = "10";
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const playgroundRect = playground.getBoundingClientRect();
      let newX = touch.clientX - playgroundRect.left - offsetX;
      let newY = touch.clientY - playgroundRect.top - offsetY;

      // Constrain within playground bounds
      newX = Math.max(10, Math.min(playgroundRect.width - chip.offsetWidth - 10, newX));
      newY = Math.max(10, Math.min(playgroundRect.height - chip.offsetHeight - 10, newY));

      chip.style.left = `${newX}px`;
      chip.style.top = `${newY}px`;
    }, { passive: true });

    window.addEventListener("touchend", () => {
      if (isDragging) {
        isDragging = false;
        chip.style.zIndex = "1";
      }
    });
  });
}
