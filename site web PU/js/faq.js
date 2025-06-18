document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isActive = button.classList.contains('active');

 
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.classList.remove('show');
    });

   
    if (!isActive) {
      button.classList.add('active');
      answer.classList.add('show');
    }
  });
});
