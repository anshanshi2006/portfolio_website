// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (front-end only — no backend wired up)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = "Thanks! This form isn't wired to a server yet — email me directly for now.";
  form.reset();
});
