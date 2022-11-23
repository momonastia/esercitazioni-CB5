"use strict";

// const os = require("os");
//console.log(os.arch());

const http = require("http");
const url = require("url");

var mia_calc = require("./modulo_calc.js");

const server = http.createServer((req, res) => {
  //const my_url = req.url;
  const params = url.parse(req.url, true).query;
  const my_url = url.parse(req.url, true).pathname;

  const calc = (operation) => {
    const primo_num = params.num_1;
    const secondo_num = params.num_2;
    res.write(" Il primo parametro :  " + primo_num);
    res.write(" Il secondo parametro :  " + secondo_num);
    const result = operation(primo_num, secondo_num);
    res.write(" Il risultato : " + result);
  };

  switch (my_url) {
    case "/home":
      res.write("Benvenuto nella mia home");
      break;
    /* case "/calcolatrice":
      res.write("Benvenuto nella pagina della calcolatrice"); */
    case "/sum":
      calc(mia_calc.sum);
      break;
    case "/div":
      calc(mia_calc.div);
      break;
    case "/sub":
      calc(mia_calc.sub);
      break;
    case "/mult":
      calc(mia_calc.mult);
      break;
    default:
      res.write("Errore. Pagina non esiste");
  }

  res.end();
});
server.listen(3000);

///togliamo i primi due parametri non utili al calcolo
/* const myArgs = process.argv.slice(2);

const input_values = MyArgv.slice(1);
switch (MyArgv[0]) {
  case "sum":
    console.log("Somma: " + mia_calc.sum(...input_values));
    break;
  case "sub":
    console.log(
      "Sottrazione: " + mia_calc.sub(input_values[0], input_values[1])
    );
    break;
  case "mult":
    console.log("Multiplicazio: " + mia_calc.mult(...input_values));
    break;
  case "div":
    console.log("Divisione: " + mia_calc.div(input_values[0], input_values[1]));
    break;
  default:
    console.log("Operazione non valida");
}
console.log("Argv: " + MyArgv); */

////

/* if (req.url === "/home") {
    res.write("Benvenuto nella mia home");
  } else if (req.url === "/calcolatrice") {
    res.write("Benvenuto nella pagina della calcolatrice");
  } else {
    res.end("Errore. Pagina non esiste");
  }
  res.end();
});


console.log("Salve mondo"); */
