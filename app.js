const express = require('express');
const app = express();

const loginRoutes = require('./api/routes/loginRoutes');
const dadosRoutes = require('./api/routes/dadosRoutes');
// const cursosRoutes = require('./api/routes/cursosRoutes');
// const contatoRoutes = require('./api/routes/contatoRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('views engine', 'ejs');
app.set('views', './api/views');

// configurar diretório estático
app.use('static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

const port = 3010;

app.use("/", loginRoutes); 
app.use("/dados", dadosRoutes);   
// app.use("/cursos", cursosRoutes);
// app.use("/contato", contatoRoutes);
 
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

const conexao = require("./api/config/conexao")

module.exports = app;

