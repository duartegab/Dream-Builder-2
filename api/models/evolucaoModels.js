const conexao = require("../config/conexao");

module.exports = {
    salvar
};

function salvar(dados, callback) {
    const query = `
        INSERT INTO evolucao (nome, prova, evolucao, semestre, geral, pesodois, redacao, notacorte)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const valores = [
        dados.nome,
        dados.prova,
        dados.evolucao,
        dados.semestre,
        dados.geral,
        dados.pesodois,
        dados.redacao,
        dados.notacorte
    ];
    conexao.query(query, valores, callback);
}
