const conexao = require("../config/conexao")

console.log("Acessando Models dos Cursos ...")


module.exports = {
    getAllAdsM,
    getByIdAdsM,
    getAllAdsN,
    getByIdAdsN
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