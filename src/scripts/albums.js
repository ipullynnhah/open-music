const createAlbumCard = ({ title, genre, band, price, img }) => {
  return `
  <li>
    <img src="${img}" alt="${title}"/>
    <div class="card-container">
      <h3>${title}</h3>
      <div>
        <p class="band">${band}</p>
        <p class="genre">${genre}</p>
      </div>
  
      <div>
        <p class="price">R$ ${price.replace(".", ",")}</p>
        <button>Comprar</button>
      </div>
    </div>
  </li>
  `;
};

export const renderAlbums = albums => {
  genreUl.innerHTML = albums.reduce(
    (ac, album) => ac + createAlbumCard(album),
    ""
  );
};

const genreUl = document.querySelector(".albums ul");
