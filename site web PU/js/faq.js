
  document.querySelectorAll('.faq summary').forEach((q) => {
    q.addEventListener('click', () => {
      document.querySelectorAll('.faq details').forEach(d => {
        if (d !== q.parentElement) d.removeAttribute('open');
      });
    });
  });

