const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
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
});
