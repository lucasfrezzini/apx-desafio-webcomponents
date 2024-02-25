function Bio(container, allData) {
  const { bio } = allData;
  const sectionBio = document.createElement("section");
  sectionBio.classList.add("bio");
  sectionBio.innerHTML = `
  <div class="container bio__container">
    <img src="${bio.srcIMG2}" alt="Bio picture">
    <div class="bio__content">
      <h2>¡Hola! Soy ${bio.developer} 👨‍🎤</h2>
      <p>${bio.bio}</p>
    </div>
    </div>
  `;

  container.appendChild(sectionBio);
}

// Bio(document.body);
