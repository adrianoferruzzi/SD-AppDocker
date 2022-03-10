<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Docker | Agenda </title>
  <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
</head>
<body>
  <a href="salvar.html"> Adicionar Novo Contato</a>
  <?php
    $result = file_get_contents("http://node-container:9001/agenda");
    $agenda = json_decode($result);
  ?>
  
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($agenda as $contato): ?>
          <tr>
            <td><?php echo $contato->nome; ?></td>
            <td><?php echo $contato->telefone; ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</body>
</html>