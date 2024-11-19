var mysql = require("mysql2");
var database = "dreambuilder";

var conexao = mysql.createConnection({
    user: 'root',
    password: '13579',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if(err){
        console.log("Erro ao conectar no Mysql...");
        return;
    }
    conexao.query('USE ' + database);
    console.log("\nConexão Estabelecida Com Sucesso");
})

module.exports = conexao;