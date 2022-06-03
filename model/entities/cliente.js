import Sequelize from "sequelize";
import database from "../services/bdorm";

const Cliente = database.sequelize.define("cliente", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  endereco: {
    type: Sequelize.STRING,
  },
});

export default Cliente;
