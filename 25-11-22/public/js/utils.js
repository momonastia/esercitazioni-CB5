// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const btnSum = formElement.btnSub;
const risEl = document.querySelector("h3");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};

// EVENTO SOMMA AL CLICK
btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
