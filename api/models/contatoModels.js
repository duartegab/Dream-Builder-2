const conexao = require("../config/conexao");

module.exports = {
    salvar
};

function salvar(dados, callback) {
    const query = `
        INSERT INTO formulario (nome, idade, situacao, curso, feedback, pagina, dificuldade, experiencia, utilidade, recomendacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        dados.nome,
        dados.idade,
        dados.situacao,
        dados.curso,
        dados.feedback,
        dados.pagina,
        dados.dificuldade,
        dados.experiencia,
        dados.utilidade,
        dados.recomendacao
    ];
    conexao.query(query, valores, callback);
}
