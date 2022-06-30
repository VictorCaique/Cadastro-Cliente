import ProdutoRepository from '../entities/produto.js';
import database from '../services/bdorm.js';

//SETANDO A TABELA
console.log("CRIANDO TABELA AAAAAAAAAAA")
const result = await database.sync({
  force: true
});
console.log(result);

//FUNÇÕES CRUD
export async function selectProduto() {
  return await ProdutoRepository.findAll();
}

export async function getProdutoId(id) {
  return await ProdutoRepository.findByPk(id)
}

export async function insertProduto(produto) {
  return await ProdutoRepository.create(produto);
}

export async function deleteProduto(id) {
  return await ProdutoRepository.destroy({where: {id: id}});
}

export async function updateProduto(produto) {
  return await ProdutoRepository.upsert(produto);
}

var usuarioBanco = {
  deleteProduto,
  getProdutoId,
  insertProduto,
  selectProduto,
  updateProduto,
};

export default usuarioBanco;