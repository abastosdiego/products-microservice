import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Troque para 'mysql', 'mariadb', etc. se necessário
    logging: false, // Desativa logs no terminal
  }
);

export default sequelize;