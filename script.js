// Page load fade
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade in sections on scroll
const faders = document.querySelectorAll('.animate-fade');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '🌙';
  } else {
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '☀️';
  }
});

// Toggle blog read more with smooth slide
const toggleButtons = document.querySelectorAll('.toggle-blog');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    card.classList.toggle('active');
    btn.textContent = card.classList.contains('active') ? 'Show Less' : 'Read More';
  });
});
