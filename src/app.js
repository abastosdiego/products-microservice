import express from "express";
import conectaMongo from "./config/mongoConnect.js";
import product from "./models/Product.js";

const conexao = await conectaMongo();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
conexao.once("open", () => {
    console.log("conexão com sucesso!");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello Express");
});

app.get("/products", async (req, res) => {
    const livros = await product.find({});
    res.status(200).send(livros);
});

export default app;