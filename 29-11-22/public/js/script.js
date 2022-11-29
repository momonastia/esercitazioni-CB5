/* import { c, q, GET } from "./utils.js"; */

const risEl = document.querySelector(".Risultato");
const btnEl = document.querySelectorAll(".btnID"); // bottoni
const btnExitEl = document.querySelector(".btnExit"); // bottone

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const {
        nome,
        cognome,
        data_nascita,
        riconoscimenti,
        inizio_attivita,
        fine_attivita,
      } = data;
      createCard(
        nome,
        cognome,
        data_nascita,
        riconoscimenti,
        inizio_attivita,
        fine_attivita,
        mainDivEl
      );
    });
};

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", (e) => {
    e.preventDefault(); // prevent page autorefresh
    const par = btnEl[i].classList[1]; // take id from HTML (second button class)
    let url = `http://localhost:3000/attore?id=${par}`;
    mainDivEl.textContent = ""; // empting content of appending card element
    GET(url);
  });
}

/// Button chiudi

btnExitEl.addEventListener("click", (e) => {
  mainDivEl.textContent = "";
});

/// Utils

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

/// End utils

// Create cards function

const Baseurl = `http://localhost:3000/attori`;

const mainDivEl = q(".main-div"); // element for appending card

const createCard = (
  nome,
  cognome,
  data_nascita,
  riconoscimenti,
  inizio_attivita,
  fine_attivita,
  parent
) => {
  const cardEl = c("div");
  cardEl.setAttribute("class", "card");

  const firstNameEl = c("h3");
  firstNameEl.textContent = "Nome: " + nome;

  const lastNameEl = c("h3");
  lastNameEl.textContent = "Cognome: " + cognome;

  const birthDateEl = c("p");
  birthDateEl.textContent = "Data nascita: " + data_nascita;

  const riconEl = c("p");
  riconEl.textContent = "Riconoscimenti: " + riconoscimenti;

  const inizioEl = c("p");
  inizioEl.textContent = "Inizio attivita: " + inizio_attivita;

  const fineEl = c("p");
  fineEl.textContent = "Fine attivita: " + fine_attivita;

  // appending
  cardEl.append(
    firstNameEl,
    lastNameEl,
    birthDateEl,
    riconEl,
    inizioEl,
    fineEl
  );
  parent.appendChild(cardEl);
};
