const cursosModels = require("../models/cursosModels");

module.exports = {
    getAllAdsM,
    getByIdAdsM,
    getAllAdsN,
    getByIdAdsN
    
}

function getAllAdsM(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerCursos
    console.time(lerCursos)
    cursosModels.getAllAdsM(function(err,resultado) {
        if(err){
            throw err;
        } else {
            console.log("Vou Buscar Edições de Curso na Model...")
            console.log(resultado)
            console.timeEnd(lerCursos)

            return res.json(resultado)
            }
        }
    )
};



function getByIdAdsM(req, res) {
    var cod = req.params.id;
    cursosModels.getByIdAdsM(cod, function(err, resultado){
        // console.log("Dado: ", resultado[0])
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
}




function getAllAdsN(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerCursos
    console.time(lerCursos)
    cursosModels.getAllAdsN(function(err,resultado) {
        if(err){
            throw err;
        } else {
            console.log("Vou Buscar Edições de Curso na Model...")
            console.log(resultado)
            console.timeEnd(lerCursos)

            return res.json(resultado)
            }
        }
    )
};


function getByIdAdsN(req, res) {
    var cod = req.params.id;
    cursosModels.getByIdAdsN(cod, function(err, resultado){
        // console.log("Dado: ", resultado[0])
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
}