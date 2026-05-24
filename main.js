// ===========================
// CUSTOM CURSOR
// ===========================
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

if (cursor && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
}

// ===========================
// SCROLL REVEAL
// ===========================
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => s.style.background = navLinks.classList.contains('open')
      ? 'var(--orange)' : 'var(--cyan)');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => s.style.background = 'var(--cyan)');
    });
  });
}

// ===========================
// HERO FADE-IN (home only)
// ===========================
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  heroContent.style.animation = 'fadeUp 0.8s ease forwards';
}

// ===========================
// PAGE HERO FADE-IN
// ===========================
const pageHero = document.querySelector('.page-hero-content');
if (pageHero) {
  pageHero.style.animation = 'fadeUp 0.8s ease forwards';
}
