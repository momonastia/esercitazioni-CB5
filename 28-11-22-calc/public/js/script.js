const formEl = document.forms.calcolatrice.elements;

const param1El = formEl.param1;

const param2El = formEl.param2;

const btnEl = document.querySelectorAll(".btn"); // bottoni

const resEl = document.querySelector(".result"); // risultato

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resEl.textContent = "Risultato : " + data.risultato;
    });
};

// event listener per ogni bottone che esegue l'operazione
for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = param1El.value;
    const par2 = param2El.value;
    const par3 = btnEl[i].classList[1];

    let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`;

    GET(url);
  });
}
