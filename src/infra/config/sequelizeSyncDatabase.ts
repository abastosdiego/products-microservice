import db from "./sequelizeDB.js";

export const sequelizeSyncDatabase = async () => {
    try {
      await db.sequelize.authenticate();
      console.log('✅ ### Conexão com o banco de dados estabelecida. ###');
  
      await db.sequelize.sync({ alter: true }); // Atualiza o banco conforme os modelos
      console.log('✅ ### Banco de dados sincronizado. ###');
    } catch (error) {
      console.error('❌ ### Erro ao conectar ao banco: ###', error);
    }
};