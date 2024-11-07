const express = require('express');
const app = express();

// const loginRoutes = require('./api/routes/loginRoutes');
const dadosRoutes = require('./api/routes/dadosRoutes');
const cursosRoutes = require('./api/routes/cursosRoutes');
// const contatoRoutes = require('./api/routes/contatoRoutes');

app.use(express.json());


const port = 3010;

// app.use("/", loginRoutes); 
app.use("/dados", dadosRoutes);   
app.use("/cursos", cursosRoutes);
// app.use("/contato", contatoRoutes);
 
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

const conexao = require("./api/config/conexao")

module.exports = app;

