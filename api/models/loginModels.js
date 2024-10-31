const conexao = require("../config/conexao")

console.log("Acessando Models Login...")


module.exports = {
    validarPSW,
}


function validarPSW(login, senha, callback){
    const m_sql = `SELECT * FROM usuarios WHERE login = "${login}" AND senha = "${senha}"`;
    console.log("SQL: " + m_sql)
    conexao.query(m_sql, callback)
}
