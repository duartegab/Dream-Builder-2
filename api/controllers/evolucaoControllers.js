const evolucaoModels = require('../models/evolucaoModels');

module.exports = {
    exibirFormulario,
    salvarEvolucao
};

function exibirFormulario(req, res) {
    res.render('index.ejs', { title: 'Sua Evolução' });
}

function salvarEvolucao(req, res) {
    const dadosEvolucao = {
        nome: req.body.nome,
        prova: req.body.prova,
        evolucao: req.body.evolucao,
        semestre: req.body.semestre,
        geral: req.body.geral,
        pesodois: req.body.pesodois,
        redacao: req.body.redacao,
        notacorte: req.body.notacorte
    };

    evolucaoModels.salvar(dadosEvolucao, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao salvar dados:", erro);
            return res.status(500).send("Erro ao salvar evolução.");
        } 
        res.render("index.ejs", {
            title: "Login",
            mensagem: "Cadastro realizado com sucesso! Faça login para continuar."
        });
    });
}

console.log("Usuário cadastrado com sucesso!");




