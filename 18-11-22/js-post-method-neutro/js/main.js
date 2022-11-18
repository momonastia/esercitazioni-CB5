import { q, GET, POST, uuidv4, createCard, PATCH } from "./utils.js";
const url = "http://localhost:3000/pokemon";

/// Form POST

const form = document.forms.pokemon;
const element = form.elements;

/// Form PATCH

const formEdit = document.forms.editForm;
const elementEdit = formEdit.elements;

/// Form search

const cardList = q(".main-div");
const inputEl = q(".search-form");
let inputValue = "";
let pokemonsList = [];

const ul = q(".pokemonList");

/// Edit pokemon

formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = elementEdit.id.value;

  const data = {
    name: elementEdit.name.value,
    type: elementEdit.type.value,
  };

  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

/// Add pokemon

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/// Select element for card appending (parent parameter)

const mainDiv = q(".main-div");

///Pokemon cards creating

window.onload = GET(url).then((res) => {
  pokemonsList = res;
  res.map((pkm) => createCard(url, pkm.name, pkm.type, mainDiv, pkm?.id));
  console.log(pokemonsList);
});

inputEl.addEventListener("change", (e) => {
  inputValue = "";
  inputValue += e.target.value;
  console.log(inputValue);
  cardList.replaceChildren();
  const filteredByInput = pokemonsList.filter((pkm) =>
    pkm.name.includes(inputValue)
  );
  console.log(filteredByInput);
  filteredByInput.map((pkm) =>
    createCard(url, pkm.name, pkm.type, mainDiv, pkm?.id)
  );
});
