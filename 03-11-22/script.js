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
titleMainDeals.textContent = "Get Up to 80% OFF";

const dealsCards = document.createElement("div");
dealsCards.setAttribute("class", "cards-sales");
const SalesSection = document.querySelector(".sales");

SalesSection.append(titleMainDeals, dealsCards);

GirlImages.map((product) =>
  createCard(product.description, product.image, dealsCards)
);

///Non funziona, non ho avuto tempo di finire ↓
/* 
GirlImages.forEach((imgDiv) => {
  imgDiv.addEventListener("click", () =>
    imgDiv.classList.toggle("img-div-big")
  );
}); */
