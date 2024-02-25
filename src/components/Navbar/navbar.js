navbarToogleMenu = () => {
  const navbarMenu = document.querySelector(".navbar__menu");
  navbarMenu.classList.toggle("navbar__menu--off");
};

function Navbar(container) {
  const navbarEl = document.createElement("header");
  navbarEl.classList.add("navbar");
  navbarEl.innerHTML = `
  <div class="container navbar__container">
    <img src="./src/images/logo.png" alt="Logo">
    <button class="navbar__open"><img src="./src/images/menu-icon.png" alt="Menu button"></button>
    <nav class="navbar__menu navbar__menu--off">
      <a href="./index.html">Inicio</a>
      <a href="./portfolio.html">Portfolio</a>
      <a href="./servicios.html">Servicios</a>
      <a href="./contacto.html">Contacto</a>
      <button class="navbar__close"><img src="./src/images/close.png" alt="Close Menu"></button>
    </nav>
  </div>
  `;

  container.appendChild(navbarEl);

  const navbarOpenButton = document.querySelector(".navbar__open");
  const navbarCloseButton = document.querySelector(".navbar__close");

  navbarOpenButton.addEventListener("click", navbarToogleMenu);
  navbarCloseButton.addEventListener("click", navbarToogleMenu);
}
