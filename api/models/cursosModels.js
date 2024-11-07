const conexao = require("../config/conexao")

console.log("Acessando Models dos Cursos ...")


module.exports = {
    getAll,
    getById,
}


function getAll(callback){
    conexao.query("select * from ads_manha ", callback)
}

function getById(codigo, callback){
    conexao.query("Select * From ads_manha Where id_ads_manha = " + codigo, callback)
}