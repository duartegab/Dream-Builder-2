const conexao = require("../config/conexao")

console.log("Acessando Models das Edições...")


module.exports = {
    getAll,
    getById,
    listarEdicoes,
}


function getAll(callback){
    conexao.query("select * from edicao ", callback)
}

function getById(codigo, callback){
    conexao.query("Select * From edicao Where id_edicao= " + codigo, callback)
}

function listarEdicoes(callback) {
    m_sql = 'select * from edicao';

    conexao.query(m_sql, callback)
}