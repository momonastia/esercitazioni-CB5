import GirlImages from "./scriptData.js";

const createCard = (description, imgUrl, parent) => {
  const cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  // title for each card

  const titleEl = document.createElement("h4");
  titleEl.textContent = description;

  //div for img
  const imgDiv = document.createElement("div");
  cardEl.setAttribute("class", "img-div");

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);

  // appending
  cardEl.append(titleEl, imgDiv);
  imgDiv.append(imgEl);
  parent.appendChild(cardEl);
};

///Titolo deals-section
const titleMainDeals = document.createElement("h2");
titleMainDeals.textContent = "Get up to 80% OFF";

const dealsCards = document.createElement("div");
dealsCards.setAttribute("class", "cards-sales");
const SalesSection = document.querySelector(".sales");

SalesSection.append(titleMainDeals, dealsCards);

GirlImages.map((product) =>
  createCard(product.description, product.image, dealsCards)
);

/// Card expansion onclick (not finished)

const card = document.querySelectorAll(".img-div");
card.forEach((card) => {
  card.addEventListener("click", () => card.classList.toggle("img-div-big"));
});

/// Modal window opening

const loginMenuEl = document.querySelector(".login-menu");
const modalEl = document.querySelector(".modal");
loginMenuEl.addEventListener(
  "click",
  () => (modalEl.style = "display: block;")
);

/// Modal window closing
const closModalBtnEl = document.querySelector(".close-modal-btn");
closModalBtnEl.addEventListener(
  "click",
  () => (modalEl.style = "display: none;")
);
