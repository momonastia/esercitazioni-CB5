/// Utils

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

/// End utils

const POST = async (url, body_message) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return await res.json();
};

function createDirector(body_message) {
  const url = `http://localhost:3000/regista`;

  return POST(url, body_message);
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
  createDirector(actor).then((message) => {
    ResEl.textContent = message;
  });
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

  const deleteEl = c("button");
  deleteEl.textContent = "Delete";
  deleteEl.setAttribute("class", "delete-btn");

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

///-------------Prova lista registi----------------
const urlregisti = "http://localhost:3000/registi";
window.onload = GET(urlregisti).then((res) =>
  res.map((regista) =>
    createCard(
      regista.nome,
      regista.cognome,
      regista.data_nascita,
      regista.riconoscimenti,
      regista.inizio_attivita,
      regista.fine_attivita,
      mainDivEl
    )
  )
);

///-------------Prova delete-----------------
const inputIdEl = document.getElementById("id");
const deleteEl = document.querySelector(".delete-btn");

const _DELETE = async (url, id) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ id: id }),
  });
  return await res.json();
};

function deleteDirector(id) {
  const url = `http://localhost:3000/regista`;
  return _DELETE(url, id);
}

deleteEl.addEventListener("click", (e) => {
  e.preventDefault();
  deleteDirector(inputIdEl.value).then((message) => {
    ResEl.textContent = message;
  });
  location.reload();
});
