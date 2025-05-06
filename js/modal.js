document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector('[data-modal="parent-contact-modal"]');
  const trigger = document.querySelector(
    '[data-modal-trigger="parent-contact-modal"]'
  );
  const modalBox = overlay.querySelector(".v--modal-box");
  function openModal() {
    overlay.setAttribute("aria-expanded", "true");
  }
  function closeModal() {
    overlay.setAttribute("aria-expanded", "false");
  }

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".v--modal-box")) {
      closeModal();
    }
  });
});
