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

let counter = 0;
const Previous = (num) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((res) => res.json())
    .then((res) =>
      createCard(
        res.name,
        res.id,
        res.types[0].type.name,
        res.sprites.back_default,
        mainDiv
      )
    )
    .finally();
};

const Next = (num) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((res) => res.json())
    .then((res) =>
      createCard(
        res.name,
        res.id,
        res.types[0].type.name,
        res.sprites.back_default,
        mainDiv
      )
    );
};

btnNext.addEventListener("click", () => FetchPockemonCard(counter++));
btnPrevious.addEventListener("click", () => FetchPockemonCard(counter--));

/// ID format with 0

function IDformat(id) {
  if (!id) return null;
  if (id < 10) return `00${id}`;
  else if (id < 100) return `0${id}`;
  return id;
}
