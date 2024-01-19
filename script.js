// hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});




// count animation at reason section
const counters = [
  { id: 'count-satu', target: 3000, duration: 150 },
  { id: 'count-dua', target: 2500, duration: 150 },
  { id: 'count-tiga', target: 500, duration: 150 }
];

function animateCountUp(target, duration, counterElement) {
  const increment = target / duration;
  let current = 0;

  function updateCounter() {
    if (current <= target) {
      counterElement.textContent = Math.round(current) + "+";
      current += increment;
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.textContent = target + "+";
    }
  }

  updateCounter();
}

function handleScroll() {
  counters.forEach(counterInfo => {
    const counterElement = document.getElementById(counterInfo.id);
    const counterPosition = counterElement.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (counterPosition < screenHeight && !counterElement.dataset.animated) {
      animateCountUp(counterInfo.target, counterInfo.duration, counterElement);

      counterElement.style.animation = 'count-up 3s ease-out forwards';
      counterElement.dataset.animated = true;
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
