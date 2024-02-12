const PORT = 5000;
const express = require("express");
const app = express();
const mysql = require("mysql2");
const myConnection = require("express-myconnection");
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "abc123",
  database: "lacasaca",
};

const routes = require("./routes/usersRoutes");

// Middlewares----------------------------------------------

app.use(myConnection(mysql, dbOptions, "single"));

// Rutas----------------------------------------------

app.get("/api", (req, res) => {
  res.send("Bienvenido a la API de La Casaca");
});

app.use("/api", routes);

// Server funcionando----------------------------------------------

app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});
