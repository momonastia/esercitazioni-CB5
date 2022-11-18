import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

/// Non sono riuscita a risolvere. Tutti i modi che ho provato mi aggiungono
/// i risultati della ricerca sucessiva ai risultati della ricerca precedente

///Prova 1

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  productsList.map((product) => createCardEl(product, cardList));
  console.log(productsList);
});

inputEl.addEventListener("change", (e) => {
  inputValue = "";
  inputValue += e.target.value;
  /* console.log(inputValue); */
  cardList.replaceChildren();
  const filteredByInput = productsList.filter((product) =>
    product.title.includes(inputValue)
  );
  filteredByInput.map((product) => createCardEl(product, cardList));
});

///Prova 2

/* inputEl.addEventListener("change", (e) => {
    inputValue = "";
    inputValue += e.target.value;
    /* console.log(inputValue); */
/*  GET(BASE_URL).then((data) => {
      const JustTenProd = data.filter((product) => product.id <= 10);
      const filteredByInput = JustTenProd.filter((product) =>
        product.title.includes(inputValue)
      );
      filteredByInput.map((product) => createCardEl(product, cardList));
    });
  }); */

/// Prova 3 (non c'entra niente))

/* inputEl.oninput = function () {
  let val = this.value.trim();
  /* let items = GETTEST(); */
/*  if (val != "") {
    productsList.forEach(function (elem) {
      if (elem.title.innerText.search(val) == -1) {
        elem.classList.add("hide");
      } else elem.classList.remove("hide");
    });
  }
}; */
