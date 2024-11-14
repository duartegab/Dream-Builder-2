const loginModels = require("../models/loginModels");

module.exports = {
    login,
    validarPSW,
    cadastrar,
    salvar,
}

function login(req, res) {
    console.log("Carregando Página de Login")
    res.render('login.ejs', {
        title: "Login",
        mensagem: "Insira o Login e a Senha do Usuário"
    })
}

function validarPSW (req, res) {
    console.log("\nController Validar Login...")
    const m_usuario = req.body.login;
    const m_senha = req.body.senha;
    console.log("Usuário: " + m_usuario)
    console.log("Senha..: " + m_senha)

    loginModels.validarPSW(m_usuario, m_senha, function(erro, result){
        if(erro) {
            throw erro
        }

        if(result.length > 0) {
            console.log("Dados Válidos!")
        
        res.render("index.ejs", {
            title: "Menu PI"
        });
      } else {
            console.log("Dados Inválidos!")
            res.render("login.ejs", {
                title: "Login",
                mensagem: "Dados Inválidos"
            })
    }
    })

};

function cadastrar(req, res) {
    console.log("Carregando Página de Cadastro")
    res.render('cadastrar.ejs', {
        title: "Cadastro",
        mensagem: "Preencha os campos para criar uma conta"
    });
}

function salvar(req, res) {
    console.log("Salvando novo usuário...");

    const m_usuario = req.body.login;
    const m_senha = req.body.senha;

    loginModels.salvar(m_usuario, m_senha, function(erro, result) {
        if (erro) {
            throw erro;
        }
        
        console.log("Usuário cadastrado com sucesso!");
        res.render("login.ejs", {
            title: "Login",
            mensagem: "Cadastro realizado com sucesso! Faça login para continuar."
        });
    });
}
