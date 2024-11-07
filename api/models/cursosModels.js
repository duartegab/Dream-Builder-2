const conexao = require("../config/conexao")

console.log("Acessando Models dos Cursos ...")


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


function getAllAdsM(callback){
    conexao.query("select * from ads_manha ", callback)
}

function getByIdAdsM(codigo, callback){
    conexao.query("Select * From ads_manha Where id_ads_manha = " + codigo, callback)
}


function getAllAdsN(callback){
    conexao.query("select * from ads_noite ", callback)
}

function getByIdAdsN(codigo, callback){
    conexao.query("Select * From ads_noite Where id_ads_noite = " + codigo, callback)
}


function getAllDsm(callback){
    conexao.query("select * from dsm ", callback)
}

function getByIdDsm(codigo, callback){
    conexao.query("Select * From dsm Where id_dsm = " + codigo, callback)
}


function getAllGe(callback){
    conexao.query("select * from ge ", callback)
}

function getByIdGe(codigo, callback){
    conexao.query("Select * From ge Where id_ge = " + codigo, callback)
}


function getAllGpiM(callback){
    conexao.query("select * from gpi_manha ", callback)
}

function getByIdGpiM(codigo, callback){
    conexao.query("Select * From gpi_manha Where id_gpi_manha = " + codigo, callback)
}


function getAllGpiN(callback){
    conexao.query("select * from gpi_noite ", callback)
}

function getByIdGpiN(codigo, callback){
    conexao.query("Select * From gpi_noite Where id_gpi_noite = " + codigo, callback)
}