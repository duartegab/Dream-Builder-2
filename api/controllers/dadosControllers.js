const dadosModels = require("../models/dadosModels");

module.exports = {
    edicoesListar,
    adsListar,
    dsmListar,
    geListar,
    gpiListar,
    grhListar,
    getAll,
}



function edicoesListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.listarEdicoes(function(erro, resultado){
        console.log("Retorno Model Listar Edicoes...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosedicoes.ejs', {
                obj_edicao: resultado
            })
        }
    })
}

function adsListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.listarAds(function(erro, resultado){
        console.log("Retorno Model Listar Ads...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosads.ejs', {
                obj_cursos: resultado
            })
        }
    })
}

function dsmListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.listarDsm(function(erro, resultado){
        console.log("Retorno Model Listar Dsm...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosdsm.ejs', {
                obj_cursos: resultado
            })
        }
    })
}

function geListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.listarGe(function(erro, resultado){
        console.log("Retorno Model Listar Ge...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosge.ejs', {
                obj_cursos: resultado
            })
        }
    })
}

function gpiListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.listarGpi(function(erro, resultado){
        console.log("Retorno Model Listar Gpi...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosgpi.ejs', {
                obj_cursos: resultado
            })
        }
    })
}

function grhListar(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.listarGrh(function(erro, resultado){
        console.log("Retorno Model Listar Grh...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosgrh.ejs', {
                obj_cursos: resultado
            })
        }
    })
}



function getAll(req, res) {
    console.log("Controller Listar Ediçoes...")
    dadosModels.getAll(function(erro, resultado){
        console.log("Retorno Model Listar Edicoes...")
        if(erro) {
            throw erro
        } else {
            res.render('dadosedicoes.ejs', {
                obj_edicao: resultado
            })
        }
    })
}