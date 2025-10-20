// Basic dropdown toggle for buttons (click to open/close). Keyboard accessible.
document.querySelectorAll('nav li').forEach(li => {
  const btn = li.querySelector('.nav-btn');
  const panel = li.querySelector('.dropdown');
  if (!btn || !panel) return;

  btn.addEventListener('click', (e) => {
    const isOpen = li.classList.contains('open');
    // close other open dropdowns
    document.querySelectorAll('nav li.open').forEach(o => {
      if (o !== li) {
        o.classList.remove('open');
        const b = o.querySelector('.nav-btn');
        const p = o.querySelector('.dropdown');
        if (b) b.setAttribute('aria-expanded', 'false');
        if (p) p.setAttribute('aria-hidden', 'true');
      }
    });

    if (isOpen) {
      li.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      panel.setAttribute('aria-hidden','true');
    } else {
      li.classList.add('open');
      btn.setAttribute('aria-expanded','true');
      panel.setAttribute('aria-hidden','false');
    }
  });

  // close dropdown if clicking outside
  document.addEventListener('click', (ev) => {
    if (!li.contains(ev.target)) {
      li.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      panel.setAttribute('aria-hidden','true');
    }
  });
});