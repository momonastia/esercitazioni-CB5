const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const BASE_URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=0f216ae3b74f4f01a2bfd429e9a18fe6";

let dishes = [];

const createCard = (title, image, parent) => {
  const cardEl = c("div");
  cardEl.setAttribute("class", "card");
  // title for each card

  //div for img
  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-cont");

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", image);

  const titleEl = c("div");
  titleEl.textContent = title;
  titleEl.setAttribute("class", "card-title");

  // appending
  imgContainer.appendChild(imgEl);
  cardEl.append(titleEl, imgContainer);
  /* parent.innerHTML = ""; */
  parent.appendChild(cardEl);
};

const cardsRecieptsSectionEl = document.querySelector(".cards-reciepts");

GET(BASE_URL).then((data) => {
  dishes = data;
  data.results.map((dish) =>
    createCard(dish.title, dish.image, cardsRecieptsSectionEl)
  );
  console.log(data);
  console.log(data.results[0].title, data.results[0].image);
});
