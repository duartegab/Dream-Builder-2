const conexao = require("../config/conexao")

console.log("Acessando Models das Edições...")


module.exports = {
    getData,
}

function getData(callback) {
    m_sql = 'select * from usuarios';

    conexao.query(m_sql, callback)
}