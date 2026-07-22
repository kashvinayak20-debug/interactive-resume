// Movable Skill Badges Playground with Touchscreen Mobile & Mouse Drag Support

document.addEventListener("DOMContentLoaded", () => {
  initDraggablePlayground();
});

function initDraggablePlayground() {
  const playground = document.querySelector(".draggable-playground");
  const chips = document.querySelectorAll(".skill-chip-movable");

  if (!playground || !chips.length) return;

  // Position chips inside playground on initial load
  const pRect = playground.getBoundingClientRect();
  chips.forEach((chip, idx) => {
    const randomX = Math.min(pRect.width - 160, Math.max(15, (idx % 3) * 150 + Math.random() * 30 + 15));
    const randomY = Math.min(pRect.height - 60, Math.max(50, Math.floor(idx / 3) * 60 + Math.random() * 15 + 50));
    
    chip.style.left = `${randomX}px`;
    chip.style.top = `${randomY}px`;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Mouse Drag Events for Laptops / Desktops
    chip.addEventListener("mousedown", (e) => {
      isDragging = true;
      const rect = chip.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      chip.style.zIndex = "100";
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const playgroundRect = playground.getBoundingClientRect();
      let newX = e.clientX - playgroundRect.left - offsetX;
      let newY = e.clientY - playgroundRect.top - offsetY;

      // Constrain within playground bounds
      newX = Math.max(5, Math.min(playgroundRect.width - chip.offsetWidth - 5, newX));
      newY = Math.max(5, Math.min(playgroundRect.height - chip.offsetHeight - 5, newY));

      chip.style.left = `${newX}px`;
      chip.style.top = `${newY}px`;
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        chip.style.zIndex = "1";
      }
    });

    // Touchscreen Drag Events for Mobile Phone Browsers (iPhone & Android)
    chip.addEventListener("touchstart", (e) => {
      isDragging = true;
      const touch = e.touches[0];
      const rect = chip.getBoundingClientRect();
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
      chip.style.zIndex = "100";
    }, { passive: false });

    chip.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault(); // Prevents mobile browser from scrolling the web page while dragging
      
      const touch = e.touches[0];
      const playgroundRect = playground.getBoundingClientRect();
      let newX = touch.clientX - playgroundRect.left - offsetX;
      let newY = touch.clientY - playgroundRect.top - offsetY;

      // Constrain within playground bounds
      newX = Math.max(5, Math.min(playgroundRect.width - chip.offsetWidth - 5, newX));
      newY = Math.max(5, Math.min(playgroundRect.height - chip.offsetHeight - 5, newY));

      chip.style.left = `${newX}px`;
      chip.style.top = `${newY}px`;
    }, { passive: false });

    chip.addEventListener("touchend", () => {
      if (isDragging) {
        isDragging = false;
        chip.style.zIndex = "1";
      }
    });
  });
}
