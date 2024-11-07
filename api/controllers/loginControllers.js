// const loginModels = require("../models/loginModels");

// module.exports = {
//     login,
//     validarPSW,
//     create,
// }

// function login(req, res) {
//     console.log("Carregando Página de Login")
//     res.render('index.html', {

//     })
// }

// function validarPSW (req, res) {
//     console.log("\nController Validar Login...")
//     m_usuario = req.body.login;
//     m_senha = req.body.senha;
//     console.log("Usuário: " + m_usuario)
//     console.log("Senha..: " + m_senha)

//     loginModels.validarPSW(m_usuario, m_senha, function(erro, result){
//         if(erro) {
//             throw erro
//         }

//         if(result.login == m_usuario && result.senha == m_senha) {
//             console.log("Dados Válidos!")
        
//         res.render("menu.html");
//       } else {
//             console.log("Dados Inválidos!")
//             res.render("index.html")
//     }
//     })
// }

// function create(req, res) {
//     var dados = req.body;
//     console.log("Adicionando livros: ")
//     console.log(req.body)
//     dados.liv_codigo = 0

//     livrosModels.create(dados, function(err, resultado){
//         if(err){
//             throw err;
//         } else {
//             console.log("\n")
//             res.redirect('/')
//         }
//     })
// }
