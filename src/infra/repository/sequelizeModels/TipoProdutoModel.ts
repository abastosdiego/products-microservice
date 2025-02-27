import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelizeConnect.js'; // Importa a conexão com o banco

const tipoProdutoSequelizeModel = sequelize.define('TipoProduto', {
  id: {
    type: DataTypes.STRING, // ID como string
    primaryKey: true, // Define como chave primária
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  },
});

export default tipoProdutoSequelizeModel;
