const express = require('express');
const app = express();

const dadosRoutes = require('./api/routes/dadosRoutes');
const cursosRoutes = require('./api/routes/cursosRoutes');
const contatoRoutes = require('./api/routes/contatoRoutes');
const loginRoutes = require('./api/routes/loginRoutes');

app.use(express.json());

app.set('views engine', 'ejs');
app.set('views', './api/views');

app.use('static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));


const port = 3000;

app.use("/dados", dadosRoutes);
app.use("/cursos", cursosRoutes);
app.use("/contato", contatoRoutes);
app.use("/", loginRoutes); 
 
 
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

const conexao = require("./api/config/conexao")

module.exports = app;

