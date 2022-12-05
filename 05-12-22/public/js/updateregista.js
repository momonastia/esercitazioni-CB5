import { c, q, createCard } from "./utils.js";

/// Cerchiamo il regista e compiliamo i campi

function getDirector(nome) {
  const url = `http://localhost:3000/name?name=${nome}`;
  const GET = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };
  return GET(url);
}

const search_btn = q(".search-btn");
const update_btn = q(".edit-btn");

const nameEl = document.getElementById("nome");
const idEl = document.getElementById("id");
const surnameEl = document.getElementById("cognome");
const data_nascitaEl = document.getElementById("data_nascita");
const riconoscimentiEl = document.getElementById("riconoscimenti");
const inizio_attivitaEl = document.getElementById("inizio_attivita");
const fine_attivitaEl = document.getElementById("fine_attivita");
const in_attivitaEl = document.getElementById("in_attivita");

const container = document.getElementById("container");
const ResEl = q(".cardList");
const mainDivEl = q(".main-div"); // element for appending card

/// Aggiungiamo l'evento "cerca" sul button

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getDirector(nameEl.value).then((regista) => {
    // erifico che la richiesta ha tornato il json dei dati
    if (regista.id != undefined) {
      idEl.value = regista.id;
      nameEl.value = regista.nome;
      surnameEl.value = regista.cognome;
      data_nascitaEl.value = regista.data_nascita;
      riconoscimentiEl.value = regista.riconoscimenti;
      inizio_attivitaEl.value = regista.inizio_attivita;
      fine_attivitaEl.value = regista.fine_attivita;
      in_attivitaEl.value = regista.in_attivita;
    }
  });
});

/// Modifichiamo

const invia_richiesta_put = async (url, nuovo_regista) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(nuovo_regista),
  });
  return await res.json();
};

function updateDirector(nuovo_regista) {
  const url = "http://localhost:3000/regista";
  return invia_richiesta_put(url, nuovo_regista);
}

/// Aggiungiamo l'evento edit sul button

update_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const regista = {
    id: idEl.value,
    nome: nameEl.value,
    cognome: surnameEl.value,
    data_nascita: data_nascitaEl.value,
    riconoscimenti: riconoscimentiEl.value,
    inizio_attivita: inizio_attivitaEl.value,
    fine_attivita: fine_attivitaEl.value,
    in_attivita: in_attivitaEl.value,
  };
  updateDirector(regista).then((message) => {
    ResEl.textContent = message;
  });
  location.reload();
});
