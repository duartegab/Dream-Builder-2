const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '13579',
  database: 'dreambuilder'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

app.post('/login', (req, res) => {
  const { login, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE login = ? AND senha = ?';
  connection.query(sql, [login, senha], (err, results) => {
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

app.post('/register', (req, res) => {
  const { login, senha } = req.body;

  const sql = 'INSERT INTO usuarios (senha, login) VALUES (?, ?)';
  connection.query(sql, [senha, login], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao registrar usuário');
    }
    res.send('Usuário registrado com sucesso!');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});