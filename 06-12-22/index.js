const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const morgan = require("morgan");

// ---------------- connect to mongodb ------------------
mongoose.connect("mongodb://127.0.0.1:27017/videoteca", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

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

////------Pagina Attori------------
app.get("/page_attori", function (req, res) {
  res.sendFile("attori.html", { root: __dirname + "/src/" });
});

////------Pagina Registi------------
app.get("/directors", function (req, res) {
  res.sendFile("directors.html", { root: __dirname + "/src/" });
});

// ----------- DB tabella attori ----------------
const schema_attore = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});
const modelAttore = mongoose.model("attoris", schema_attore);

// -----------------------------------------------------------

const insertAttore = async (obj) => {
  const user = new modelAttore(obj);
  try {
    return await user.save();
  } catch (error) {
    return error;
  }
};

const deleteAttore = async (id_attore) => {
  try {
    const actor = await modelAttore.deleteOne({ _id: id_attore });
    return actor;
  } catch (error) {
    return error;
  }
};

const searchAttore = async (find_object) => {
  try {
    const actor = await modelAttore.find(find_object);
    return actor;
  } catch (error) {
    return error;
  }
};

///prova tutti attori

const searchAttori = async () => {
  try {
    const actor = await modelAttore.find();
    return actor;
  } catch (error) {
    return error;
  }
};

const updateAttore = async (find_object, update_object) => {
  try {
    const actor = await modelAttore.findOneAndUpdate(
      find_object,
      update_object
    );
    return actor;
  } catch (error) {
    return error;
  }
};

///--------------- GET list attori--------------------------

app.get("/attori", function (req, res) {
  const attori = searchAttori();
  attori.then((actor) => {
    // console.log(actor);
    res.send(actor);
  });
});

////---------------GET Attore (for search)---------------------

app.get("/attore", function (req, res) {
  const name_attore = req.query.name;
  if (name_attore == undefined) {
    res.status(400).send("Parametro name non trovato.");
  }

  const find_object = { nome: name_attore };
  const attore = searchAttore(find_object);
  attore.then((actor) => {
    // console.log(actor);
    res.send(actor);
  });
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
  const attore = deleteAttore(id_da_cancellare);
  attore.then((actor) => {
    console.log(actor);
    res.send(actor);
  });
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

  const insert = insertAttore(nuovo_attore);
  insert.then((actor) => {
    console.log(typeof actor);
    res.status(200).json("Attore creato");
  });
});
///-------------------PUT------------------------------

app.put("/attore", function (req, res) {
  if (req.body.id == undefined) {
    res.status(400).send("Parametro id mancante!");
  }

  find_object = { _id: req.body.id };

  const update_object = {
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

  const attore = updateAttore(find_object, update_object);
  attore.then((actor) => {
    console.log(actor);
    res.send(actor);
  });
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

///--------------- GET list registi--------------------------

app.get("/registi", function (req, res) {
  // -------------lettura dati---------------------
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // -------- filtro i campi ---------------------
  //console.log(attori);
  res.json(registi);
});

////---------------GET REGISTA---------------------

app.get("/name", function (req, res) {
  const name_regista = req.query.name;
  if (name_regista == undefined) {
    res.status(400).send("Parametro name non trovato.");
  }

  const registi = fs.readFileSync("./src/registi.json");
  const registi_json = JSON.parse(registi);

  const m_regista = registi_json.filter((regista) => {
    return regista.nome.toLowerCase() === name_regista.toLowerCase();
  });
  res.json(m_regista[0]);
});
