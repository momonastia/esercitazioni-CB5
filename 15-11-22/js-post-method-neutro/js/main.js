import { c, q, GET, POST, uuidv4, createCard } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");

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

window.onload = GET(url).then((res) =>
  res.map((pkm) => createCard(pkm.name, pkm.type, mainDiv))
);

/// ID creation
///acesso a penultimo elemeto con slice-1? Non l'ho finito
