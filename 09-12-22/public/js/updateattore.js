import { c, q, createCard } from "./utils.js";

/// Cerchiamo l'attore e compiliamo i campi

function getActor(nome) {
  const url = `http://localhost:3000/attore?name=${nome}`;
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
  getActor(nameEl.value).then((attore) => {
    // erifico che la richiesta ha tornato il json dei dati
    if (attore[0]._id != undefined) {
      idEl.value = attore[0]._id;
      nameEl.value = attore[0].nome;
      surnameEl.value = attore[0].cognome;
      data_nascitaEl.value = attore[0].data_nascita;
      riconoscimentiEl.value = attore[0].riconoscimenti;
      inizio_attivitaEl.value = attore[0].inizio_attivita;
      fine_attivitaEl.value = attore[0].fine_attivita;
      in_attivitaEl.value = attore[0].in_attivita;
    }
  });
});

/// Modifichiamo

const invia_richiesta_put = async (url, nuovo_attore) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(nuovo_attore),
  });
  return await res.json();
};

function updateActor(nuovo_attore) {
  const url = "http://localhost:3000/attore";
  return invia_richiesta_put(url, nuovo_attore);
}

/// Aggiungiamo l'evento edit sul button

update_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const attore = {
    id: idEl.value,
    nome: nameEl.value,
    cognome: surnameEl.value,
    data_nascita: data_nascitaEl.value,
    riconoscimenti: riconoscimentiEl.value,
    inizio_attivita: inizio_attivitaEl.value,
    fine_attivita: fine_attivitaEl.value,
    in_attivita: in_attivitaEl.value,
  };
  updateActor(attore).then((message) => {
    ResEl.textContent = message;
  });
  location.reload();
});
