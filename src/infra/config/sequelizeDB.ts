import { Sequelize } from 'sequelize';
import tipoProdutoSequelizeModel from '../repository/sequelizeModels/typeProductSequelizeModel.js';
import sequelize from './sequelizeConnect.js';

interface DbModels {
  sequelize: Sequelize;
  TipoProduto: typeof tipoProdutoSequelizeModel;
}

const db: DbModels = {
  sequelize, // Instância do Sequelize
  TipoProduto: tipoProdutoSequelizeModel, // Model do TipoProduto
};

export default db;
