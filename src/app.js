import express from "express";
import conectaMongo from "./config/mongoConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaMongo();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
conexao.once("open", () => {
    console.log("conexão com sucesso!");
});

const app = express();
routes(app);

export default app;