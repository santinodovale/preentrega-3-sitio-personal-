document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('site-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', 'true');
      themeToggle.querySelector('.theme-toggle__icon').textContent = '☀️';
      themeToggle.querySelector('.theme-toggle__text').textContent = 'Claro';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.toggle('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('site-theme', nextTheme);

      if (nextTheme === 'dark') {
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.querySelector('.theme-toggle__icon').textContent = '☀️';
        themeToggle.querySelector('.theme-toggle__text').textContent = 'Claro';
      } else {
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.querySelector('.theme-toggle__icon').textContent = '🌙';
        themeToggle.querySelector('.theme-toggle__text').textContent = 'Oscuro';
      }
    });
  }

  const animatedCards = Array.from(document.querySelectorAll(
    '.project-card, .contact-card'
  ));

  animatedCards.forEach((card, index) => {
    card.classList.add('reveal-card');
    card.style.transitionDelay = String(Math.min(index * 80, 480)) + 'ms';
  });

  const cards = Array.from(document.querySelectorAll('.reveal-card'));

  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => card.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => observer.observe(card));
});
