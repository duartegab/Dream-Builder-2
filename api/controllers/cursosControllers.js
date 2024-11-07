const cursosModels = require("../models/cursosModels");

module.exports = {
    getAllAdsM,
    getByIdAdsM,
    getAllAdsN,
    getByIdAdsN,
    getAllDsm,
    getByIdDsm,
    getAllGe,
    getByIdGe,
    getAllGpiM,
    getByIdGpiM,
    getAllGpiN,
    getByIdGpiN,
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
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};




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
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};



function getAllDsm(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerCursos
    console.time(lerCursos)
    cursosModels.getAllDsm(function(err,resultado) {
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


function getByIdDsm(req, res) {
    var cod = req.params.id;
    cursosModels.getByIdDsm(cod, function(err, resultado){
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};



function getAllGe(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerCursos
    console.time(lerCursos)
    cursosModels.getAllGe(function(err,resultado) {
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


function getByIdGe(req, res) {
    var cod = req.params.id;
    cursosModels.getByIdGe(cod, function(err, resultado){
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};



function getAllGpiM(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerCursos
    console.time(lerCursos)
    cursosModels.getAllGpiM(function(err,resultado) {
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


function getByIdGpiM(req, res) {
    var cod = req.params.id;
    cursosModels.getByIdGpiM(cod, function(err, resultado){
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};



function getAllGpiN(req, res) {
    console.log("\nController- Iniciando Leitura dos Dados das Edições de Curso na Model..\n")
    var lerCursos
    console.time(lerCursos)
    cursosModels.getAllGpiN(function(err,resultado) {
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


function getByIdGpiN(req, res) {
    var cod = req.params.id;
    cursosModels.getByIdGpiN(cod, function(err, resultado){
        console.log("Cursos Foi Lida...")
        if(err){
            throw err
        }else {
            return res.json(resultado)
        }
    })
};