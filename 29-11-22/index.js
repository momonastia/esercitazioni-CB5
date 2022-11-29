const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server in ascolto");
});

// GET actor

app.get("/attore", function (req, res) {
  // Read parameter + control
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Manca il parametro!");
  }
  // Read file
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // Data filter
  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });
  // Control
  if (typeof attr === "undefined") {
    res.status(400).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});

/// GET list actors

app.get("/attori", function (req, res) {
  // -------------lettura dati---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // -------- filtro i campi ---------------------
  //console.log(attori);
  res.json(attori);
});

/// Page for actors

app.get("/pagina_attore", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});
