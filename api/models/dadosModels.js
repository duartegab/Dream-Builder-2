const conexao = require("../config/conexao")

console.log("Acessando Models das Edições...")


module.exports = {
    listarEdicoes,
    listarAds,
    listarDsm,
    listarGe,
    listarGpi,
    listarGrh
}




function listarEdicoes(callback) {
    m_sql = 'select * from edicao';

    conexao.query(m_sql, callback)
}

function listarAds(callback) {
    m_sql = 'select * from cursos Where nome_curso = "ADS"';

    conexao.query(m_sql, callback)
}

function listarDsm(callback) {
    m_sql = 'select * from cursos Where nome_curso = "DSM"';

    conexao.query(m_sql, callback)
}

function listarGe(callback) {
    m_sql = 'select * from cursos Where nome_curso = "GE"';

    conexao.query(m_sql, callback)
}

function listarGpi(callback) {
    m_sql = 'select * from cursos Where nome_curso = "GPI"';

    conexao.query(m_sql, callback)
}

function listarGrh(callback) {
    m_sql = 'select * from cursos Where nome_curso = "GRH"';

    conexao.query(m_sql, callback)
}