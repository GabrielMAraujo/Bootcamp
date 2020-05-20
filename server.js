const express = require("express");
const dotenv = require("dotenv");

//Carregar variáveis de ambiente
dotenv.config({ path: "./config/config.env" });

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App listening on port ${process.env.PORT} and running on ${process.env.NODE_ENV} mode`);
});
