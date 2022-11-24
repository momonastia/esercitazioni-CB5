/* function func_somma() {
  const fai_somma = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/somma?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);
    //alert(res);
    return await res.json();
  };
  let result = fai_somma();
  alert(result);
} */

function func_sottrazione() {
  const fai_sottrazione = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/sottrazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);
    //alert(res);
    return await res.json();
  };
  let result = fai_sottrazione();
}
function func_moltiplicazione() {
  const fai_moltiplicazione = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);
    //alert(res);
    return await res.json();
  };
  let result = fai_moltiplicazione();
}
function func_divisione() {
  const fai_divisione = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/divisione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);
    //alert(res);
    return await res.json();
  };
  let result = fai_divisione();
}

/* const e = require("express"); */

const formElement = document.forms.formEl.elements;
//console.log(formElement);

const resEl = document.querySelector("h2");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (resEl.textContent = `Risultato: ${data}`));
};

const btnSum = formElement.btnCalc_sum;

btnSum.addEventListener("click", () => {
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
