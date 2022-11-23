import { GET } from "./api.js";
const url = "http://localhost:3000/sum";

/// Form

const form = document.forms.form;
const element = form.elements;

const submitEL = document.querySelector(".button");

submitEL.addEventListener("click", () => GET(url).then((data) => {}));
