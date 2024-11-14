const conexao = require("../config/conexao")

console.log("Acessando Models Login...")


module.exports = {
    validarPSW,
    salvar,
}


function validarPSW(p_login, p_senha, callback){
    // m_sql = "SELECT * FROM usuarios WHERE usu_apelido = '" + p_login + "' AND usu_password = '" + p_senha +  "' ";
    const m_sql = `SELECT * FROM usuarios WHERE login = "${p_login}" AND senha = "${p_senha}"`;
    console.log("SQL: " + m_sql)
    conexao.query(m_sql, callback)
}

function salvar(p_login, p_senha, callback) {
    const m_sql = `INSERT INTO usuarios (login, senha) VALUES ("${p_login}", "${p_senha}")`;
    console.log("SQL: " + m_sql);
    conexao.query(m_sql, callback);
}