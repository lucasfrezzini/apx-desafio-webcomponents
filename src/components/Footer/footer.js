function Footer(container) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
  <div class="container footer__container">
    <img src="./src/images/logo.png" alt="Logo">
    <nav class="footer__links">
      <a href="./index.html"><img src="./src/images/home-icon.png" alt="Inicio">Inicio</a>
      <a href="./servicios.html"><img src="./src/images/user-icon.png" alt="Servicios">Servicios</a>
      <a href="./portfolio.html"><img src="./src/images/user-icon.png" alt="Portfolio">Portfolio</a>
      <a href="./contacto.html"><img src="./src/images/contact-icon.png" alt="Contacto">Contacto</a>
    </nav>
    <nav class="footer__socials">
      <a href="https://www.linkedin.com/in/lucasfrezzini" target="_blank"><img src="./src/images/linkedin.png"
          alt="Linkeding link"></a>
      <a href="https://twitter.com/lucasfrezzini" target="_blank"><img src="./src/images/twitter.png"
          alt="Twitter link"></a>
      <a href="https://github.com/lucasfrezzini" target="_blank"><img src="./src/images/github.png"
          alt="Github link"></a>
    </nav>
    <h3>© 2024 - https://apx.school</h3>
  </div>
  `;

  container.appendChild(footer);
}

// Footer(document.body);
