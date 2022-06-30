import express from 'express'

import usuarioBD from "../../model/repositories/ClienteRepository.js";
import {
  ocultarSenha
} from "../../model/components/segurança.js";

var Router = express.Router();

Router.get('/', async (req, res, next) => {
    try {
        const docs = await usuarioBD.selectCliente();
        res.render("cliente/index", {
          mensagem: "",
          docs
        });
      } catch (err) {
        next(err);
      }
})

Router.get('/cadastro', async (req, res) => {
  if (req.query.fail) {
    res.render("cliente/CadastroCliente", {
      mensagem: "Cadastro"
    });
  } else {
    res.render("cliente/CadastroCliente", {
      mensagem: null
    });
  }
})



Router.post('/cadastro/save', async (req, res) => {
  try {
    await usuarioBD.insertCliente({
      nome: req.body.nome,
      idade: req.body.idade,
      cpf: req.body.cpf,
      endereco: req.body.endereco,
    });
    const docs = await usuarioBD.selectCliente();
    res.render("cliente/index", {
      mensagem: "Lista de Clientes",
      docs
    });
  } catch (error) {
    console.log(error);
    res.render("cliente/index", {
      title: "Cadastrado",
      mensagem: "Erro no Cadastro",
    });
  }
})

export default Router;