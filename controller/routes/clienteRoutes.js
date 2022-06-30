import express from 'express'

import usuarioBD from "../../model/repositories/ClienteRepository.js";
import {
  ocultarSenha
} from "../../model/components/segurança.js";

var Router = express.Router();

Router.get('/', async (req, res, next) => {
    try {
        const docs = await usuarioBD.selectCliente();
        res.render("usuario/lista", {
          mensagem: "lista de Usuários",
          docs
        });
      } catch (err) {
        next(err);
      }
})

Router.get('/')

export default Router;