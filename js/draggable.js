// Movable / Draggable Widgets Module

function initDraggablePlayground() {
  const chips = document.querySelectorAll(".skill-chip-movable");
  const playground = document.querySelector(".draggable-playground");

  if (!playground) return;

  chips.forEach((chip, idx) => {
    // Initial random positions inside playground
    const maxX = playground.clientWidth - 160;
    const maxY = playground.clientHeight - 60;
    const randX = Math.max(20, Math.floor(Math.random() * maxX));
    const randY = Math.max(50, Math.floor(Math.random() * maxY));

    chip.style.left = `${randX}px`;
    chip.style.top = `${randY}px`;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    chip.addEventListener("mousedown", (e) => {
      isDragging = true;
      chip.style.zIndex = 100;
      offsetX = e.clientX - chip.getBoundingClientRect().left;
      offsetY = e.clientY - chip.getBoundingClientRect().top;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const pRect = playground.getBoundingClientRect();
      let newX = e.clientX - pRect.left - offsetX;
      let newY = e.clientY - pRect.top - offsetY;

      // Clamp within boundaries
      newX = Math.max(10, Math.min(newX, playground.clientWidth - chip.clientWidth - 10));
      newY = Math.max(10, Math.min(newY, playground.clientHeight - chip.clientHeight - 10));

      chip.style.left = `${newX}px`;
      chip.style.top = `${newY}px`;
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        chip.style.zIndex = 10;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initDraggablePlayground);
