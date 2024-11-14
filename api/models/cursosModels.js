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
    getAllGrhM,
    getByIdGrhM,
    getAllGrhN,
    getByIdGrhN
}


function getAllAdsM(callback){
    conexao.query("select * from cursos Where nome_curso = 'ADS' And turno_curso = 'manha' ", callback)
}

function getByIdAdsM(codigo, callback){
    conexao.query("select * from cursos Where nome_curso = 'ADS' And turno_curso = 'manha' And idEdicao = " + codigo, callback)
}


function getAllAdsN(callback){
    conexao.query("select * from ads_noite ", callback)
}

function getByIdAdsN(codigo, callback){
    conexao.query("select * from cursos Where nome_curso = 'ADS' And turno_curso = 'noite' And idEdicao = " + codigo, callback)
}


function getAllDsm(callback){
    conexao.query("select * from dsm ", callback)
}

function getByIdDsm(codigo, callback){
    conexao.query("select * from cursos Where nome_curso = 'DSM' And turno_curso = 'manha' And idEdicao = " + codigo, callback)
}


function getAllGe(callback){
    conexao.query("select * from ge ", callback)
}

function getByIdGe(codigo, callback){
    conexao.query("select * from cursos Where nome_curso = 'ADS' And turno_curso = 'manha' And idEdicao = " + codigo, callback)
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


function getAllGrhM(callback){
    conexao.query("select * from grh_manha ", callback)
}

function getByIdGrhM(codigo, callback){
    conexao.query("Select * From grh_manha Where id_grh_manha = " + codigo, callback)
}


function getAllGrhN(callback){
    conexao.query("select * from grh_noite ", callback)
}

function getByIdGrhN(codigo, callback){
    conexao.query("Select * From grh_noite Where id_grh_noite = " + codigo, callback)
}