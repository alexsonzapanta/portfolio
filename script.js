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
