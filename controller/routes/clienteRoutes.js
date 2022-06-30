import express from 'express'

import usuarioBD from "../../model/repositories/ClienteRepository.js";
import {
  ocultarSenha
} from "../../model/components/segurança.js";

var Router = express.Router();



export default Router;