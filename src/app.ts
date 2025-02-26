import express from "express";
import 'reflect-metadata';
import { container } from 'tsyringe';
import conectaMongo from "./infra/config/mongoConnect.js";
import routes from "./infra/routes/index.js";
import ProductRepositoryMongo from './infra/repository/ProductRepositoryMongo.js';

const conexao = await conectaMongo();
conexao.on("error", (error: any) => {
    console.error("erro de conexão com o MongoDB", error?.message);
});
conexao.once("open", () => {
    //console.log("conexão com sucesso!");
});

// Dependency Injection
container.register('ProductRepository', {
    useClass: ProductRepositoryMongo,
});

const app = express();
routes(app);

export default app;