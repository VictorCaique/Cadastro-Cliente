import usuarioBD from '../utils/db.js';
import seguranca from '../components/segurança.js';

async function selectUsuario(){
    const conn = await usuarioBD.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

async function getUsuarioId(id){
    const conn = await usuarioBD.connect();
    const sql = 'SELECT * FROM usuario WHERE id = ?';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    return rows[0] ? rows.length > 0 : null;
}

async function login(nome, senha){
    const conn = await usuarioBD.connect();
    const sql = 'SELECT * FROM usuario WHERE nome=? and senha=?';
    const values = [nome, seguranca.ocultarsenha(senha)];
    const [rows] = await conn.query(sql, values);
    return rows ? rows.length > 0 : null;
}

async function insertUsuario(usuario){
    const conn = await usuarioBD.connect();
    const sql = 'INSERT INTO usuario (nome, senha) VALUES (?, ?);';
    const values = [usuario.nome, seguranca.ocultarsenha(usuario.senha)];
    return await conn.query(sql, values);
}