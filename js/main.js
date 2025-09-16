// init year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme handling: prefer system or saved
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(saved){
    root.setAttribute('data-theme', saved);
  } else if(prefersDark){
    root.setAttribute('data-theme', 'dark');
  }
})();

// toggle button
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  document.getElementById('themeToggle').textContent = next === 'dark' ? '🌙' : '☀️';
});

// contact form
function sendContact(){
  const n = document.getElementById('name').value.trim();
  const e = document.getElementById('email').value.trim();
  const m = document.getElementById('message').value.trim();
  if(!n || !e || !m) return alert('Merci de remplir tous les champs.');
  const subject = encodeURIComponent('Contact portfolio — ' + n);
  const body = encodeURIComponent('Nom: ' + n + '\nEmail: ' + e + '\n\n' + m);
  window.location.href = `mailto:thomas.neuville@universite-paris-saclay.fr?subject=${subject}&body=${body}`;
}

// initial icon
(function(){
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  document.getElementById('themeToggle').textContent = current === 'dark' ? '🌙' : '☀️';
})();
