// header.js
document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <nav>
      <div class="top-row">
        <img src="images/logo.svg" alt="Logo de l'entreprise" class="logo" />
        <button id="menu-toggle" aria-label="Ouvrir le menu">&#9776;</button>
      </div>

      <ul id="nav-list">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="realisations.html">Réalisations</a></li>
        <li><a href="soumission.html">Soumissions</a></li>
      </ul>
    </nav>
  `;

  document.getElementById("header-container").innerHTML = header;

  // Activation du menu responsive
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-list").classList.toggle("active");
  });
});
