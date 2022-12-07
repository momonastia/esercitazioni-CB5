import { c, q, createCard } from "./utils.js";

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

function createActor(body_message) {
  const url = `http://localhost:3000/attore`;

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
  createActor(actor).then((message) => {
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
  location.reload();
});

///-------------Lista attori----------------

const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const urlattori = "http://localhost:3000/attori";
window.onload = GET(urlattori).then((res) =>
  res.map((attore) =>
    createCard(
      attore.nome,
      attore.cognome,
      attore.data_nascita,
      attore.riconoscimenti,
      attore.inizio_attivita,
      attore.fine_attivita,
      mainDivEl
    )
  )
);

///-------------Delete-----------------
const inputIdEl = document.getElementById("id");
const deleteEl = q(".delete-btn");

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

function deleteActor(id) {
  const url = `http://localhost:3000/attore`;
  return _DELETE(url, id);
}

deleteEl.addEventListener("click", (e) => {
  e.preventDefault();
  deleteActor(inputIdEl.value).then((message) => {
    ResEl.textContent = message;
  });
  location.reload();
});
