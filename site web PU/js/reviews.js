let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
setInterval(() => {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 5000);
