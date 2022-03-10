const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

// Faz a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'dbuser',
  password: '1234',
  database: 'agenda'
});

connection.connect();

// Retorna todos os nomes 
app.get('/agenda', function(req, res) {
  connection.query('SELECT * FROM pessoas', function (error, results) {

    if (error) { 
      throw error
    };

    res.send(results.map(item => ({ nome: item.nome, telefone: item.telefone })));
  });
});


// Retorna os nomes selecionados
app.get('/agenda/:nome', function(req, res) {
  let nome = req.params.nome;
  connection.query('SELECT * FROM pessoas WHERE nome LIKE ? ', '%' + [nome] + '%', function (error, results) {
    
    if (error) { 
     throw error
    };
    res.send(results.map(item => ({ nome: item.nome, telefone: item.telefone })));
  });
});

// Insere o contato no banco de dados
app.post('/novo_contato', function(req, res) {
  let post = {
        nome: req.body.Nome,
        telefone: req.body.Telefone
  }     
    let SQL = "INSERT INTO  pessoas SET ?";
    connection.query(SQL, post, function (error, results) {
    if (error) 
      throw error;
    res.send('Contato Salvo ...');
  });
});


// Apaga o contato no banco de dados
//app.delete('/apagar/:nome', function(req, res) {
//   connection.query('DELETE pessoas WHERE nome = ?', [req.params.nome], function (error, results) {

//    if (error) 
//      throw error;
//    res.write('Contato Apagado ...');
//    res.end();
//  });
//});

app.listen(9001, '0.0.0.0', function() {
  console.log('Listening on port 9001');
})