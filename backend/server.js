const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 3000;
const morgan = require("morgan");

//connexion à la DB
connectDB();

app
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log(`Le serveur est lancé sur le port ${port}`));
