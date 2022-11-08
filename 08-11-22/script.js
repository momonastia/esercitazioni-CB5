///Create card
const createCard = (name, ID, type, img, parent) => {
  const cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  // title for each card

  const nameEl = document.createElement("h4");
  nameEl.textContent = name;

  const idEl = document.createElement("h3");
  idEl.textContent = ID;

  const typeEl = document.createElement("h2");
  typeEl.textContent = type;

  //div for img
  const imgDiv = document.createElement("div");
  cardEl.setAttribute("class", "img-div");

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", img);

  // appending
  cardEl.append(nameEl, idEl, typeEl, imgDiv);
  imgDiv.append(imgEl);
  parent.appendChild(cardEl);
};

fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((res) =>
    Promise.all(
      res.results.map((pokemon) =>
        fetch(pokemon.url).then((pokemon) => pokemon.json())
      )
    )
  );

/// non funziona, non sono riuscita a chiamare la funzione

/* .then((pokemons) =>
    pokemons.map((pokemons) =>
      createCard(
        pokemons.name,
        pokemons.id,
        pokemons.types[0].type.name,
        pokemons.sprites.back_default,
        mainTitleEl
      )
    )
  );
 */
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
