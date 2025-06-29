
/* Mobile nav toggle */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
