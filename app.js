const express = require('express');
const mysql = require('mysql2');
const app = express();

// Permitir que o servidor leia dados enviados em requisições POST
app.use(express.urlencoded({ extended: true }));

// Configurar a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '13579',
  database: 'dreambuilder'
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Rota para processar o login
app.post('/login', (req, res) => {
  const { login, senha } = req.body;

  // Verificar se o usuário existe no banco
  const sql = 'SELECT * FROM usuarios WHERE username_usuario = ? AND password_usuario = ?';
  connection.query(sql, [username_usuario, password_usuario], (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao processar login');
    }

    if (results.length > 0) {
      res.send('Login bem-sucedido!');
    } else {
      res.send('Usuário ou senha incorretos');
    }
  });
});

// Rota para registrar novos usuários
app.post('/register', (req, res) => {
  const { login, senha } = req.body;

  // Inserir um novo usuário no banco de dados
  const sql = 'INSERT INTO usuarios (username_usuario, password_usuario) VALUES (?, ?)';
  connection.query(sql, [username_usuario, password_usuario], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao registrar usuário');
    }
    res.send('Usuário registrado com sucesso!');
  });
});

// Iniciar o servidor na porta 3000
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3000');
});