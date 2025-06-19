fetch("components/header.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#header").innerHTML = html;
    
    const links = document.querySelectorAll('#nav-list a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
    document.querySelector("#nav-toggle-container").addEventListener("click", function () {
      const navToggler = document.querySelector("#nav-toggler");
      const navList = document.querySelector("#nav-list");

      // Toggle active class on the button
      navToggler.classList.toggle("active");

      if (navToggler.classList.length != 0) {
        // Open the menu
        navList.style.display = "flex"; // Ensure it becomes visible
        const targetHeight = navList.scrollHeight; // Get the content height
        navList.style.height = "0";
        requestAnimationFrame(() => {
          navList.style.height = `${targetHeight}px`;
        });
        document.getElementById("nav-toggle-container").setAttribute("aria-expanded", "true");
      } else {
        // Close the menu
        const onTransitionEnd = function () {
          // Fix problem occuring when spamming the button
          if (!navToggler.classList.contains("active"))
            navList.style.display = "none";

          navList.removeEventListener("transitionend", onTransitionEnd);
        };

        navList.style.height = "0";
        navList.addEventListener("transitionend", onTransitionEnd);
        document.getElementById("nav-toggle-container").setAttribute("aria-expanded", "false");
      }
    });
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


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6853591fc96da61913b6f4fc/1iu2p899h';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
