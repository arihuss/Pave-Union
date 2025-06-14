fetch("components/header.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#header").innerHTML = html;
  })

  fetch("components/footer.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#footer").innerHTML = html;
  })

  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });