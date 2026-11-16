// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle: follows the system preference until the visitor picks one
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  const currentTheme = () =>
    root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// Mobile menu
(function () {
  const btn = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
})();

// Contact form: opens the visitor's email client with a pre-filled message
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const error = document.getElementById('formError');
  if (!form.checkValidity()) {
    error.hidden = false;
    return;
  }
  error.hidden = true;

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent('Portfolio contact — ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = `mailto:thomas.neuville@universite-paris-saclay.fr?subject=${subject}&body=${body}`;
});
