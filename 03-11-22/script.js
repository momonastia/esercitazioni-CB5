import GirlImages from "./scriptData.js";

const createCard = (description, imgUrl, parent) => {
  const cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  // title for each card

  const titleEl = document.createElement("div");
  titleEl.textContent = description;
  titleEl.classList.add("card-title");

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

/// Burger menu

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("active");
});

///Titolo deals-section
const titleMainDeals = document.createElement("div");
titleMainDeals.textContent = "Get up to 80% OFF";
titleMainDeals.classList.add("sales-title");

const dealsCards = document.createElement("div");
dealsCards.setAttribute("class", "cards-sales");
const salesSection = document.querySelector(".sales");

salesSection.append(titleMainDeals, dealsCards);

GirlImages.map((product) =>
  createCard(product.description, product.image, dealsCards)
);

/// Card expansion onclick
/* 
const card = document.querySelectorAll(".img-div");
card.forEach((card) => {
  card.addEventListener("click", () => card.classList.toggle("img-div-big"));
}); */

/// Modal window opening

const loginMenuEl = document.querySelector(".login-menu");
const modalEl = document.querySelector(".modal");
loginMenuEl.addEventListener("click", () => (modalEl.style = "display: flex;"));

/// Modal window closing
const closModalBtnEl = document.querySelector(".close-modal-btn");
closModalBtnEl.addEventListener(
  "click",
  () => (modalEl.style = "display: none;")
);
