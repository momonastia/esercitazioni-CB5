const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server in ascolto");
});

////------Pagina Delete------------
app.get("/delete", function (req, res) {
  res.sendFile("delete.html", { root: __dirname + "/src/" });
});

////------Pagina Delete------------
app.get("/create", function (req, res) {
  res.sendFile("create.html", { root: __dirname + "/src/" });
});

////------DELETE--------------------
app.delete("/attore", function (req, res) {
  // ricevo l'id
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // verifico che l'elemento esista
  const attr = attori.filter((attore) => {
    return attore.id == id_da_cancellare;
  });

  // se l'elemento esiste lo cancello
  if (attr.length > 0) {
    const array_deleted = attori.filter((attore) => {
      return attore.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/attori.json", JSON.stringify(array_deleted));
    //console.log(array_deleted);
    //res.json(array_deleted);
    res.status(200).json("Attore cancellato");
  } else {
    res.status(200).json("Attore da cancellare non trovato");
  }
});

///-------------------POST------------------------------

app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Nome attore mancante");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Cognome attore mancante");
  }

  console.log(req.body.nome);

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };
  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  const index = Number(nuovo_attore.id) - 1;
  attori[index] = nuovo_attore;
  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).json("Attore creato");
});
