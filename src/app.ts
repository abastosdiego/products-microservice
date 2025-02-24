import express from "express";
import conectaMongo from "./infra/config/mongoConnect.js";
import routes from "./infra/routes/index.js";

const conexao = await conectaMongo();
conexao.on("error", (error: any) => {
    console.error("erro de conexão", error?.message);
});
conexao.once("open", () => {
    console.log("conexão com sucesso!");
});

const app = express();
routes(app);

export default app;