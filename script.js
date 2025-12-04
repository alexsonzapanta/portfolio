// Reveal animations
const sections = document.querySelectorAll(".animate-slide-up, .animate-fade");

function reveal() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("active");
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Parallax effect for hero
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});

// Smooth scroll navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
