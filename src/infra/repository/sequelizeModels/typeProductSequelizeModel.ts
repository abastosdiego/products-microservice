import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelizeConnect.js'; // Importa a conexão com o banco

const typeProductSequelizeModel = sequelize.define('TipoProduto', {
  id: {
    type: DataTypes.STRING, // ID como string
    primaryKey: true, // Define como chave primária
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  },
}, {
  tableName: 'tipo_produto' // Nome real da tabela no banco de dados
});

export default typeProductSequelizeModel;
