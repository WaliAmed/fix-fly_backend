const createError = require("http-errors");
const http = require("http");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
var path = require("path");
const cors = require("cors");
// This will be our application entry. We'll setup our server here.
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));
app.use(cors()); // To resolve No 'Access-Control-Allow-Origin' header issue.

// Body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Checking the connection with Database
const models = require("./models");

// Check database is connected
models.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    throw new Error(err);
  });

// Sync Database
models.sequelize
  .sync()
  .then(() => console.log("Nice! Database looks cool"))
  .catch((err) => {
    console.log("Shit man! this crap happened with Database Update! ", err);
    throw new Error(err);
  });

// Routes
require("./routes")(app);

// Running server
const port = parseInt(process.env.PORT, 10) || 2000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log("Server is listening on port: ", port));
module.exports = app;
