const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.j7qk0mt.mongodb.net/test`);

    console.log("Banco de dados mongoDB conectado com sucesso.");
}

main().catch((err) => console.log(err));

module.exports = main;