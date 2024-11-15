const gerenciadorModels = require("../models/gerenciadorModels");

module.exports = {
    getAll,
};

function getAll(req, res) {
    console.log("Controller Voltar ao Gerenciador...");

    // Aqui você pode adicionar alguma lógica que envolva dados ou erro, como a interação com o banco.
    // Exemplo com chamada ao modelo para obter dados
    gerenciadorModels.getData((erro, resultado) => {
        if (erro) {
            console.error("Erro ao buscar dados:", erro);
            return res.status(500).send("Erro ao carregar os dados.");
        } 
        
        // Caso contrário, redireciona para a página 'index.ejs' com uma mensagem de sucesso
        res.render('index.ejs', {
            title: "Login",
            mensagem: "Cadastro realizado com sucesso! Faça login para continuar."
        });
    });
}
