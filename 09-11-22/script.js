///Create card
const createCard = (name, ID, type, img, parent) => {
  const cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  cardEl.classList.add(type);
  // title for each card

  const nameEl = document.createElement("h3");
  nameEl.textContent = name;

  const idEl = document.createElement("h4");
  idEl.textContent = "#" + IDformat(ID);
  idEl.setAttribute("class", "id-card");

  const typeEl = document.createElement("h4");
  typeEl.textContent = "Type: " + type;

  //div for img
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "img-div");

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", img);

  // appending
  cardEl.append(imgDiv, idEl, nameEl, typeEl);
  imgDiv.append(imgEl);
  parent.appendChild(cardEl);
};

const mainDiv = document.querySelector(".main-div");

fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((res) =>
    Promise.all(
      res.results.map((pokemon) =>
        fetch(pokemon.url).then((pokemon) => pokemon.json())
      )
    )
  )
  .then((pokemons) =>
    pokemons.map((pokemon) =>
      createCard(
        pokemon.name,
        pokemon.id,
        pokemon.types[0].type.name,
        pokemon.sprites.back_default,
        mainDiv
      )
    )
  );

/// ID format with 0

function IDformat(id) {
  if (!id) return null;
  if (id < 10) return `00${id}`;
  else if (id < 100) return `0${id}`;
  return id;
}

/// Single element

/* .then((pokemons) =>
    console.log(
      pokemons[0].name,
      pokemons[0].id,
      pokemons[0].types[0].type.name,
      pokemons[0].sprites.back_default
    )
  ); */

/// MAP

/* .then((pokemons) =>
    pokemons.map((pokemons) =>
      console.log(
        pokemons.name,
        pokemons.id,
        pokemons.types[0].type.name,
        pokemons.sprites.back_default
      )
    )
  ); */
