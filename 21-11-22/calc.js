"use strict";

function somma(a, b) {
  return a + b;
}

function sottrai(a, b) {
  return a - b;
}

function moltiplica(a, b) {
  return a * b;
}

function dividi(a, b) {
  return a / b;
}

const myArgs = process.argv.slice(2);
let num1 = parseFloat(myArgs[1]);
let num2 = parseFloat(myArgs[2]);

switch (myArgs[0]) {
  case "somma":
    let _somma = somma(num1, num2);
    console.log(_somma);
    break;
  case "sottrai":
    let _sottrai = sottrai(num1, num2);
    console.log(_sottrai);
    break;
  case "moltiplica":
    let _moltiplica = moltiplica(num1, num2);
    console.log(_moltiplica);
    break;
  case "dividi":
    if (num2 == 0) {
      console.log("è proibito dividere per 0!!!!");
    } else {
      let _dividi = dividi(num1, num2);
      console.log(_dividi);
    }
    break;
  default:
    console.log("Operation does not exist");
}
