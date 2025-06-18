
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.timeline-item').forEach((el, i) => {
          setTimeout(() => el.classList.add('show'), i * 300);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const target = document.querySelector("#constellation");
  if (target) observer.observe(target);

