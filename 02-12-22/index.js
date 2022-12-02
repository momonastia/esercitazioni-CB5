const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

/// Adding middleware

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.listen(3000, () => {
  console.log("server in ascolto");
});

////------Pagina Delete------------
app.get("/delete", function (req, res) {
  res.sendFile("delete.html", { root: __dirname + "/src/" });
});

////------Pagina Create------------
app.get("/create", function (req, res) {
  res.sendFile("create.html", { root: __dirname + "/src/" });
});

////------Pagina Edit------------
app.get("/update", function (req, res) {
  res.sendFile("update.html", { root: __dirname + "/src/" });
});

////------Pagina Create Director------------
app.get("/createregista", function (req, res) {
  res.sendFile("createregista.html", { root: __dirname + "/src/" });
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
  if (req.body.nome == undefined || req.body.nome.length == 0) {
    res.status(400).send("Nome attore mancante");
  }

  if (req.body.cognome == undefined || req.body.cognome.length == 0) {
    res.status(400).send("Cognome attore mancante");
  }

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

///-------------------PUT------------------------------

app.put("/attore", function (req, res) {
  if (req.body.nome == undefined || req.body.nome.length == 0) {
    res.status(400).send("Nome attore mancante");
  }

  if (req.body.cognome == undefined || req.body.cognome.length == 0) {
    res.status(400).send("Cognome attore mancante");
  }

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

  // Trovare il primo id disponibile
  // trovare la prima posizione disponibile

  // trovare e cancellare l'elemento
  const index = attori.findIndex((attore) => {
    return attore.id === nuovo_attore.id;
  });
  //console.log("indice: "+index);

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);

    //attori[index] = nuovo_attore;
    //console.log(attori);
    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).json("Attore aggiornato");
  } else {
    res.status(200).json("Attore non trovato");
  }
});

///-------------------GET REGISTA------------------------------
app.get("/regista", function (req, res) {
  const id_regista = req.query.id;
  if (id_regista == undefined) {
    res.status(400).send("Parametro id non trovato.");
  }
  const id_regista_numerico = parseInt(id_regista);
  if (isNaN(id_regista_numerico)) {
    res.status(400).send("Parametro inviato non è un numero.");
  }

  const registi = fs.readFileSync("./src/registi.json");
  const registi_json = JSON.parse(registi);
  console.log(registi_json);

  const m_regista = registi_json.filter((regista) => {
    return regista.id === id_regista_numerico;
  });
  res.json(m_regista[0]);
});

///-------------------POST REGISTA------------------------------
app.post("/regista", function (req, res) {
  if (req.body.nome == undefined || req.body.nome.length == 0) {
    res.status(400).send("Nome regista mancante");
  }

  if (req.body.cognome == undefined || req.body.cognome.length == 0) {
    res.status(400).send("Cognome regista mancante");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------
  // trova il primo id
  const arr_map = registi.map((regista) => regista.id);
  const id_max = Math.max(...arr_map);
  nuovo_regista.id = id_max + 1;

  // trova la prima posizione disponibile
  const index = registi.length;
  registi[index] = nuovo_regista;

  /* const index = Number(nuovo_regista.id) - 1;
  registi[index] = nuovo_regista; */
  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json("Regista creato");
});

///-------------------PUT REGISTA------------------------------

app.put("/regista", function (req, res) {
  if (req.body.nome == undefined || req.body.nome.length == 0) {
    res.status(400).send("Nome regista mancante");
  }

  if (req.body.cognome == undefined || req.body.cognome.length == 0) {
    res.status(400).send("Cognome regista mancante");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // Trovare il primo id disponibile
  // trovare la prima posizione disponibile

  // trovare e cancellare l'elemento
  const index = registi.findIndex((regista) => {
    return regista.id === nuovo_regista.id;
  });

  if (index > 0) {
    registi.splice(index, 1, nuovo_regista);

    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).json("Regista aggiornato");
  } else {
    res.status(200).json("Registra non trovato");
  }
});

////------DELETE REGISTA--------------------
app.delete("/regista", function (req, res) {
  // ricevo l'id
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  // -------------lettura dati da file ---------------------
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // verifico che l'elemento esista
  const attr = registi.filter((regista) => {
    return regista.id == id_da_cancellare;
  });

  // se l'elemento esiste lo cancello
  if (attr.length > 0) {
    const array_deleted = registi.filter((regista) => {
      return regista.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
    res.status(200).json("Regista cancellato");
  } else {
    res.status(200).json("Regista da cancellare non trovato");
  }
});

/// GET list registi

app.get("/registi", function (req, res) {
  // -------------lettura dati---------------------
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // -------- filtro i campi ---------------------
  //console.log(attori);
  res.json(registi);
});

/// Page for actors

/* app.get("/pagina_attore", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});
 */
