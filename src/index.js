require("dotenv").config()
const express = require("express");
const rota = require("./routes/rotas");

const app = express();

app.use(express.json());
app.use(rota)

app.listen(3000);