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
  parent.innerHTML = "";
  parent.appendChild(cardEl);
};

const mainDiv = document.querySelector(".main-div");

/// Tagging buttons
const btnPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");

// Handle Paginated Cards

const LIMIT = 10;
let page = 1;

/**
 * It takes a number, and returns a promise that resolves to a JSON object containing the data for that
 * pokemon
 * @param num - The number of the pokemon you want to fetch.
 */
const getPokemon = (num) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res) => res.json());

const addPokemonCard = (pokemon) =>
  createCard(
    pokemon.name,
    pokemon.id,
    pokemon.types[0].type.name,
    pokemon.sprites.back_default,
    mainDiv
  );

/**
 * It fetches a new page of Pokemon, adds the Pokemon to the page, and then updates the page number
 * @param newPage - The new page number to update to.
 */
const updatePage = (newPage) => {
  /* Checking if the newPage is greater than 0 and less than or equal to the limit. */
  if (newPage > 0 && newPage <= LIMIT) {
    getPokemon(newPage)
      .then(addPokemonCard)
      .then(() => (page = newPage));
  }
};

/**
 *  Async/Await version
 */

// const updatePage = async (newPage) => {
//   if (newPage > 0 && newPage <= LIMIT) {
//     const respose = await fetchPokemon(newPage);
//     getPokemon(respose);
//     page = newPage;
//   }
// };

btnNext.addEventListener("click", () => updatePage(page + 1));
btnPrevious.addEventListener("click", () => updatePage(page - 1));

/* Calling the updatePage function with the argument of 1 to get the first pokemon card */
updatePage(page);

/// ID format with 0

function IDformat(id) {
  if (!id) return null;
  if (id < 10) return `00${id}`;
  else if (id < 100) return `0${id}`;
  return id;
}
