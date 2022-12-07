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

/////----------ENDPOINTS--------------------

////-----------Pagina Attori------------
app.get("/page_attori", function (req, res) {
  res.sendFile("attori.html", { root: __dirname + "/src/" });
});

////-----------Pagina Registi------------
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

// ----------- DB tabella registi ----------------
const schema_regista = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});
const modelRegista = mongoose.model("registis", schema_regista);

// -----------------per attori-------------------------------

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

/// tutti attori

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

////------------per registi-------------------

const insertRegista = async (obj) => {
  const user = new modelRegista(obj);
  try {
    return await user.save();
  } catch (error) {
    return error;
  }
};

const searchRegisti = async () => {
  /// tutti registi
  try {
    const actor = await modelRegista.find();
    return actor;
  } catch (error) {
    return error;
  }
};

const deleteRegista = async (id_regista) => {
  try {
    const regista = await modelRegista.deleteOne({ _id: id_regista });
    return regista;
  } catch (error) {
    return error;
  }
};

const searchRegista = async (find_object) => {
  try {
    const regista = await modelRegista.find(find_object);
    return regista;
  } catch (error) {
    return error;
  }
};

const updateRegista = async (find_object, update_object) => {
  try {
    const regista = await modelRegista.findOneAndUpdate(
      find_object,
      update_object
    );
    return regista;
  } catch (error) {
    return error;
  }
};

////---------------ROUTES ATTORI----------------------------------

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
    res.send(actor);
  });
});

////--------------------DELETE--------------------

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

////---------------ROUTES REGISTI----------------------------------

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
  const insert = insertRegista(nuovo_regista);
  insert.then((regista) => {
    console.log(typeof regista);
    res.status(200).json("Regista creato");
  });
});

///-------------------PUT REGISTA------------------------------

app.put("/regista", function (req, res) {
  if (req.body.id == undefined) {
    res.status(400).send("Parametro id mancante!");
  }

  find_object = { _id: req.body.id };

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
  const regista = updateRegista(find_object, nuovo_regista);
  attore.then((regista) => {
    console.log(regista);
    res.send(regista);
  });
});

////-----------------DELETE REGISTA--------------------

app.delete("/regista", function (req, res) {
  // ricevo l'id
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;
  const regista = deleteRegista(id_da_cancellare);
  attore.then((regista) => {
    console.log(regista);
    res.send(regista);
  });
});

///--------------- GET list registi--------------------------

app.get("/registi", function (req, res) {
  const registi = searchRegisti();
  registi.then((regista) => {
    res.send(regista);
  });
});

////---------------GET REGISTA (name search)---------------------

app.get("/name", function (req, res) {
  const name_regista = req.query.name;
  if (name_regista == undefined) {
    res.status(400).send("Parametro name non trovato.");
  }

  const find_object = { nome: name_regista };
  const regista = searchRegista(find_object);
  regista.then((regista) => {
    res.send(regista);
  });
});
