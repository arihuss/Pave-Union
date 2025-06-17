let slideIndex = 0;
let timeOut = 5000;
let autoOn = true;

function showSlide(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // Masquer tous les slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (dots[i]) dots[i].classList.remove("active");
  }

  // Afficher le slide courant
  slides[slideIndex].style.display = "block";
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Diaporama automatique
function autoSlides() {
  if (autoOn) {
    slideIndex++;
    showSlide(slideIndex);
  }
  setTimeout(autoSlides, timeOut);
}

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  autoSlides();
});
