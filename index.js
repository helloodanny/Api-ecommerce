const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

app.listen(puerto, () => {
  console.log('Servidor escuchando en http://localhost:' + puerto);
});