import sq from "sequelize";
import database from "../services/bdorm.js";

const Usuario = database.define('usuario', {
  id: {
    type: sq.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: sq.STRING,
    allowNull: false,
  },
  senha: {
    type: sq.STRING,
    allowNull: false,
  },
  tipo: sq.STRING,

});


export default Usuario;