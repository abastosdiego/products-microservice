import express from "express";
import 'reflect-metadata';
import { container } from 'tsyringe';
import conectaMongo from "./infra/config/mongoConnect.js";
import db from "./infra/config/sequelizeDB.js";
import ProductRepositoryMongo from './infra/repository/ProductRepositoryMongo.js';
import routes from "./infra/routes/index.js";

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

//////////////////////////

const syncDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida.');

    await db.sequelize.sync({ alter: true }); // Atualiza o banco conforme os modelos
    console.log('✅ Banco de dados sincronizado.');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
};

syncDatabase();

//////////////////////////

export default app;