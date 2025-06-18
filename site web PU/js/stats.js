const counters = document.querySelectorAll('.counter');

function animateCounter(counter) {
  let current = 0;
  const target = +counter.getAttribute('data-target');
  const increment = target / 100;

  const update = () => {
    if (current < target) {
      current += increment;
      counter.innerText = Math.floor(current);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      animateCounter(counter);
      observer.unobserve(counter); 
    }
  });
}, {
  threshold: 0.6 
});


counters.forEach(counter => {
  observer.observe(counter);
});
