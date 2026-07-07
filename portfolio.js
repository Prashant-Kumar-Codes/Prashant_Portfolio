// Nav scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// ── Projects expand / collapse ──────────────
const projectsToggle = document.getElementById('projectsToggle');
const projectsExtra  = document.getElementById('projectsExtra');

projectsToggle.addEventListener('click', () => {
  const isOpen = projectsExtra.classList.toggle('open');
  projectsToggle.classList.toggle('open', isOpen);
  projectsToggle.setAttribute('aria-expanded', isOpen);
  projectsToggle.querySelector('.label').textContent = isOpen
    ? 'Show Less'
    : 'Show All Projects';

  // Trigger reveal on newly exposed cards
  if (isOpen) {
    const extraCards = projectsExtra.querySelectorAll('.reveal-extra');
    extraCards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        });
      }, 120 + i * 100);
    });
  }
});