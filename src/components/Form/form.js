const optionsForm = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // "User-Agent": "insomnia/8.4.5",
  },
  body: {},
};

function Form(container) {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = `
  <form action="/" class="form">
    <div class="form__fieldset">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" placeholder="Tanito" required>
    </div>
    <div class="form__fieldset">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" placeholder="tanito@apx.school" required>
    </div>
    <div class="form__fieldset">
      <label for="mensaje">Mensaje</label>
      <textarea name="mensaje" id="mensaje" placeholder="Soy un mensajito tierno 🧡" required></textarea>
    </div>
    <button type="submit" class="form__submit">Enviar <img src="./src/images/submit-icon.png" alt="Sumbit icon"></button>
    <p class="send-message"></p>
  </form>
  `;

  container.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("#mensaje").value;

    const body = {
      to: email,
      message: mensaje,
    };

    optionsForm.body = JSON.stringify(body);
    console.log(optionsForm);

    fetch("https://apx-api.vercel.app/api/utils/dwf?=&=", optionsForm)
      .then((response) => response.json())
      .then((response) => {
        const sendMessage = document.querySelector(".send-message");
        sendMessage.classList.add("good");
        sendMessage.textContent = "El mensaje se envio correctamente 🧡";
      })
      .catch((err) => {
        const sendMessage = document.querySelector(".send-message");
        sendMessage.classList.add("error");
        sendMessage.textContent =
          "El mensaje no pudo enviarse. Intente nuevamente en unos minutos 📢";
      });
  });
}
