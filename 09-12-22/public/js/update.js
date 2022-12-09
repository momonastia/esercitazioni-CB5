/// Utils

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

/// End utils

const PUT = async (url, body_message) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return await res.json();
};

function createActor(body_message) {
  const url = `http://localhost:3000/attore`;

  return PUT(url, body_message);
}

const create_btn = document.getElementById("create-btn");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("nome");
const surnameEl = document.getElementById("cognome");
const data_nascitaEl = document.getElementById("data_nascita");
const riconoscimentiEl = document.getElementById("riconoscimenti");
const inizio_attivitaEl = document.getElementById("inizio_attivita");
const fine_attivitaEl = document.getElementById("fine_attivita");
const in_attivitaEl = document.getElementById("in_attivita");

const container = document.getElementById("container");
const ResEl = document.querySelector(".cardList");
const mainDivEl = q(".main-div"); // element for appending card

create_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const actor = {
    id: idEl.value,
    nome: nameEl.value,
    cognome: surnameEl.value,
    data_nascita: data_nascitaEl.value,
    riconoscimenti: riconoscimentiEl.value,
    inizio_attivita: inizio_attivitaEl.value,
    fine_attivita: fine_attivitaEl.value,
    in_attivita: in_attivitaEl.value,
  };
  createActor(actor).then((message) => {
    ResEl.textContent = message;
  });
  mainDivEl.textContent = "";
  createCard(
    nameEl.value,
    surnameEl.value,
    data_nascitaEl.value,
    riconoscimentiEl.value,
    inizio_attivitaEl.value,
    fine_attivitaEl.value,
    mainDivEl
  );
});

///----------Funzione create card--------------

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
