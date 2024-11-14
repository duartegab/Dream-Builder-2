const conexao = require("../config/conexao")

console.log("Acessando Models das Edições...")


module.exports = {
    listarEdicoes,
}




function listarEdicoes(callback) {
    m_sql = 'select * from edicao';

    conexao.query(m_sql, callback)
}