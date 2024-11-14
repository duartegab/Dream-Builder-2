const contatoModels = require('../models/contatoModels');

module.exports = {
    exibirFormulario,
    salvarFormulario,
};

function exibirFormulario(req, res) {
    res.render('formulario.ejs', { title: 'Seu Formulário' });
}

function salvarFormulario(req, res) {
    const dadosContato = {
        nome: req.body.nome,
        idade: req.body.idade,
        situacao: req.body.situacao,
        curso: req.body.curso,
        feedback: req.body.feedback,
        pagina: req.body.pagina,
        dificuldade: req.body.dificuldade,
        experiencia: req.body.experiencia,
        utilidade: req.body.utilidade,
        recomendacao: req.body.recomendacao
    };

    contatoModels.salvar(dadosContato, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao salvar dados:", erro);
            return res.status(500).send("Erro ao salvar formulário.");
        } else {
        res.render("index.ejs", {
            title: "Login",
            mensagem: "Cadastro realizado com sucesso! Faça login para continuar."
        })};
    });
}

console.log("Usuário cadastrado com sucesso!");





