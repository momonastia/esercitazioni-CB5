const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

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

export { c, q, createCard };
