document.addEventListener('DOMContentLoaded', () => {
  const animatedCards = document.querySelectorAll(
    '.feature-card, .project-card, .info-card, .contact-card'
  );

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
