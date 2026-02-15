const container = document.getElementById("anime-container");

async function searchAnime() {
  const query = document.getElementById("search").value;

  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${query}&limit=12`
  );

  const data = await response.json();
  displayAnime(data.data);
}

function displayAnime(animeList) {
  container.innerHTML = "";

  animeList.forEach(anime => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${anime.images.jpg.image_url}">
      <div class="card-content">
        <h3>${anime.title}</h3>
        <p>⭐ ${anime.score || "N/A"}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

searchAnime("naruto");
