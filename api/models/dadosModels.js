const conexao = require("../config/conexao")

console.log("Acessando Models das Edições...")


module.exports = {
    getAll,
    getById,
}


function getAll(callback){
    conexao.query("select * from edicao ", callback)
}

function getById(codigo, callback){
    conexao.query("Select * From edicao Where id_edicao= " + codigo, callback)
}