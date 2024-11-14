const dadosModels = require("../models/dadosModels");

module.exports = {
    getAll,
    getById,
    edicoesListar,
}

function getAll(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerDados
    console.time(lerDados)
    dadosModels.getAll(function(err,resultado) {
        if(err){
            throw err;
        } else {
            console.log("Vou Buscar Edições de Curso na Model...")
            console.log(resultado)
            console.timeEnd(lerDados)

            return res.json(resultado)
            }
        }
    )
};



function getById(req, res) {
    var cod = req.params.id;
    dadosModels.getById(cod, function(err, resultado){
        console.log("Edições Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};




function edicoesListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    livrosModels.listarEdicoes(function(erro, resultado){
        console.log("Retorno Model Listar Edicoes...")
        if(erro) {
            throw erro
        } else {
            res.render('frm_listarEdicoes.ejs', {
                obj_edicao: resultado
            })
        }
    })
}