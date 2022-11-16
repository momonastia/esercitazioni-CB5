import { DELETE } from "./api.js";

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const createCard = (url, nome, tipo, parent, id) => {
  const cardEl = c("div");
  cardEl.setAttribute("class", "card");
  // title for each card

  const ImgDiv = c("div");
  ImgDiv.setAttribute("class", "img-placeholder");

  const titleEl = c("h3");
  titleEl.textContent = nome;

  //body
  const bodyCardEl = c("div");
  bodyCardEl.textContent = tipo;
  bodyCardEl.setAttribute("class", "body-card");

  cardEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  // appending
  cardEl.append(ImgDiv, titleEl, bodyCardEl);
  /* parent.innerHTML = ""; */
  parent.appendChild(cardEl);
};

export { c, q, GET, POST, uuidv4, createCard };
